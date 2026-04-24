import { motion, useReducedMotion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState, type KeyboardEvent } from 'react';

import type { UiMessages } from '../../i18n/schemas/ui-messages';
import type { ProjectCardPayload } from '../schemas/project-card-payload';
import { ProjectBentoCardMotion } from './project-bento-card-motion';

const GAP_PX: number = 16;
const easeSoft: readonly [number, number, number, number] = [0.22, 1, 0.36, 1];

type Props = {
	readonly projects: ProjectCardPayload[];
	readonly projectsCopy: UiMessages['projects'];
};

function buildDotAria(template: string, index: number, total: number): string {
	return template.replace('{index}', String(index + 1)).replace('{total}', String(total));
}

type LayoutMetrics = {
	readonly slideWidth: number;
	readonly gap: number;
	readonly trackWidth: number;
	readonly translateX: number;
};

function computeLayout(containerWidth: number, count: number, activeIndex: number): LayoutMetrics | null {
	if (containerWidth <= 0 || count <= 0) {
		return null;
	}
	if (count === 1) {
		return {
			slideWidth: containerWidth,
			gap: 0,
			trackWidth: containerWidth,
			translateX: 0,
		};
	}
	const gap: number = GAP_PX;
	let slideWidth: number;
	if (count === 2) {
		slideWidth = (containerWidth - gap) / 2;
	} else {
		slideWidth = (containerWidth - gap * 2) / 3;
	}
	const trackWidth: number = count * slideWidth + (count - 1) * gap;
	const slideCenter: number = activeIndex * (slideWidth + gap) + slideWidth / 2;
	let translateX: number = containerWidth / 2 - slideCenter;
	const minTranslate: number = containerWidth - trackWidth;
	const maxTranslate: number = 0;
	translateX = Math.max(minTranslate, Math.min(maxTranslate, translateX));
	return { slideWidth, gap, trackWidth, translateX };
}

type TripleSlide = {
	readonly project: ProjectCardPayload;
	readonly key: string;
	readonly logicalIndex: number;
};

function buildTripleSlides(projects: ProjectCardPayload[]): TripleSlide[] {
	const out: TripleSlide[] = [];
	for (let copy = 0; copy < 3; copy += 1) {
		for (let i = 0; i < projects.length; i += 1) {
			const project: ProjectCardPayload = projects[i]!;
			out.push({
				project,
				key: `${project.id}--${copy}`,
				logicalIndex: i,
			});
		}
	}
	return out;
}

export function ProjectsFeaturedCarousel({ projects, projectsCopy }: Props) {
	const reduceMotion: boolean | null = useReducedMotion();
	const n: number = projects.length;
	const tripleSlides: TripleSlide[] = useMemo(() => buildTripleSlides(projects), [projects]);
	const projectIdsKey: string = projects.map((p: ProjectCardPayload) => p.id).join('|');
	const [slideIndex, setSlideIndex] = useState<number>(n);
	const skipNextTrackTransitionRef = useRef<boolean>(false);
	const containerRef = useRef<HTMLDivElement>(null);
	const [layout, setLayout] = useState<LayoutMetrics | null>(null);
	const activeRealIndex: number = n > 0 ? ((slideIndex - n) % n + n) % n : 0;
	const goTo = useCallback(
		(realIndex: number): void => {
			if (n <= 0) {
				return;
			}
			const normalized: number = ((realIndex % n) + n) % n;
			setSlideIndex(normalized + n);
		},
		[n],
	);
	const goPrev = useCallback((): void => {
		if (n <= 1) {
			return;
		}
		setSlideIndex((i: number) => {
			if (i <= n - 1) {
				return i;
			}
			return i - 1;
		});
	}, [n]);
	const goNext = useCallback((): void => {
		if (n <= 1) {
			return;
		}
		setSlideIndex((i: number) => {
			if (i >= 2 * n) {
				return i;
			}
			return i + 1;
		});
	}, [n]);
	const recalcLayout = useCallback((): void => {
		const el: HTMLDivElement | null = containerRef.current;
		if (!el) {
			return;
		}
		const w: number = el.clientWidth;
		const extendedCount: number = n * 3;
		const next: LayoutMetrics | null = computeLayout(w, extendedCount, slideIndex);
		setLayout(next);
	}, [slideIndex, n]);
	useLayoutEffect(() => {
		recalcLayout();
	}, [recalcLayout, projectIdsKey]);
	useLayoutEffect(() => {
		if (n <= 1) {
			return;
		}
		setSlideIndex(n);
	}, [projectIdsKey, n]);
	useLayoutEffect(() => {
		skipNextTrackTransitionRef.current = false;
	}, [slideIndex]);
	const onTrackAnimationComplete = useCallback((): void => {
		if (n <= 1) {
			return;
		}
		setSlideIndex((current: number) => {
			if (current === 2 * n) {
				skipNextTrackTransitionRef.current = true;
				return n;
			}
			if (current === n - 1) {
				skipNextTrackTransitionRef.current = true;
				return 2 * n - 1;
			}
			return current;
		});
	}, [n]);
	useEffect(() => {
		const el: HTMLDivElement | null = containerRef.current;
		if (!el) {
			return;
		}
		const ro: ResizeObserver = new ResizeObserver(() => {
			recalcLayout();
		});
		ro.observe(el);
		return () => {
			ro.disconnect();
		};
	}, [recalcLayout]);
	const onKeyDown = useCallback(
		(e: KeyboardEvent<HTMLDivElement>): void => {
			if (e.key === 'ArrowLeft') {
				e.preventDefault();
				goPrev();
			}
			if (e.key === 'ArrowRight') {
				e.preventDefault();
				goNext();
			}
		},
		[goPrev, goNext],
	);
	if (projects.length === 0) {
		return null;
	}
	const count: number = projects.length;
	const showControls: boolean = count > 1;
	if (count === 1) {
		const only: ProjectCardPayload = projects[0]!;
		return (
			<div
				className="relative mt-16 w-full px-2 sm:px-4 lg:px-6"
				aria-label={projectsCopy.projectRailAria}
				role="region"
				tabIndex={0}
			>
				<div className="mx-auto max-w-3xl px-2">
					<ProjectBentoCardMotion
						cardLabels={projectsCopy.card}
						index={0}
						layout="rail"
						project={only}
						staticEntrance
					/>
				</div>
			</div>
		);
	}
	const slideW: number = layout?.slideWidth ?? 0;
	const gap: number = layout?.gap ?? GAP_PX;
	const trackW: number = layout?.trackWidth ?? 0;
	const x: number = layout?.translateX ?? 0;
	const useInstantTrack: boolean = skipNextTrackTransitionRef.current;
	const trackTransition = useInstantTrack
		? { duration: 0 }
		: reduceMotion
			? { duration: 0.15 }
			: { duration: 0.58, ease: easeSoft };
	const cardTransition = reduceMotion ? { duration: 0.15 } : { duration: 0.58, ease: easeSoft };
	const carouselNavButtonClass: string =
		'relative z-20 inline-flex size-11 shrink-0 cursor-pointer touch-manipulation items-center justify-center rounded-full border border-white/15 bg-white/6 text-pearl transition duration-300 ease-out hover:border-accent/50 hover:bg-accent/15';
	return (
		<div
			className="relative mt-16 w-full px-2 sm:px-4 lg:px-6"
			aria-label={projectsCopy.projectRailAria}
			aria-roledescription="carousel"
			onKeyDown={onKeyDown}
			role="region"
			tabIndex={0}
		>
			<div className="relative isolate flex w-full items-center gap-2 sm:gap-3 lg:gap-4">
				{showControls ? (
					<button
						type="button"
						className={carouselNavButtonClass}
						aria-label={projectsCopy.carouselPrevAria}
						onClick={goPrev}
					>
						<ChevronLeft className="size-6" aria-hidden="true" />
					</button>
				) : null}
				<div ref={containerRef} className="relative z-0 min-w-0 flex-1 overflow-x-hidden overflow-y-visible py-6">
					<motion.div
						className="flex flex-row flex-nowrap items-stretch will-change-transform"
						style={{ width: trackW > 0 ? `${trackW}px` : undefined, gap: `${gap}px` }}
						animate={{ x }}
						initial={false}
						transition={trackTransition}
						onAnimationComplete={onTrackAnimationComplete}
					>
						{tripleSlides.map((slide: TripleSlide, index: number) => {
							const isActive: boolean = index === slideIndex;
							return (
								<motion.div
									key={slide.key}
									aria-hidden={!isActive}
									className="shrink-0 origin-top"
									style={{ width: slideW > 0 ? `${slideW}px` : undefined }}
									animate={
										reduceMotion
											? { scale: 1, opacity: 1 }
											: { scale: isActive ? 1.04 : 0.94, opacity: isActive ? 1 : 0.72 }
									}
									initial={false}
									transition={cardTransition}
								>
									<ProjectBentoCardMotion
										cardLabels={projectsCopy.card}
										index={slide.logicalIndex}
										layout="rail"
										project={slide.project}
										staticEntrance
									/>
								</motion.div>
							);
						})}
					</motion.div>
				</div>
				{showControls ? (
					<button
						type="button"
						className={carouselNavButtonClass}
						aria-label={projectsCopy.carouselNextAria}
						onClick={goNext}
					>
						<ChevronRight className="size-6" aria-hidden="true" />
					</button>
				) : null}
			</div>
			{showControls ? (
				<div className="mt-5 flex justify-center gap-2">
					{projects.map((project: ProjectCardPayload, index: number) => (
						<button
							key={`dot-${project.id}`}
							type="button"
							aria-current={index === activeRealIndex ? 'true' : undefined}
							aria-label={buildDotAria(projectsCopy.carouselGoToAria, index, count)}
							className={`size-2.5 cursor-pointer rounded-full transition duration-300 ease-out ${
								index === activeRealIndex
									? 'scale-110 bg-accent shadow-[0_0_12px_rgba(77,140,238,0.55)]'
									: 'bg-white/20 hover:bg-white/40'
							}`}
							onClick={() => {
								goTo(index);
							}}
						/>
					))}
				</div>
			) : null}
		</div>
	);
}
