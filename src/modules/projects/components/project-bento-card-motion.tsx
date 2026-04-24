import { motion, useReducedMotion } from 'framer-motion';
import { ExternalLink, GitBranch } from 'lucide-react';

import type { UiMessages } from '../../i18n/schemas/ui-messages';
import { weightedChildTween } from '../../motion/constants/weighted-motion';
import type { ProjectCardPayload } from '../schemas/project-card-payload';

type Props = {
	readonly project: ProjectCardPayload;
	readonly index: number;
	readonly cardLabels: UiMessages['projects']['card'];
	/** `rail`: fixed-width horizontal strip; `bento`: grid spans from content. */
	readonly layout?: 'bento' | 'rail';
	/** When true, skip scroll-driven entry motion (e.g. featured carousel). */
	readonly staticEntrance?: boolean;
};

const spanClass: Record<ProjectCardPayload['bentoSpan'], string> = {
	narrow: '',
	wide: 'md:col-span-2',
	hero: 'md:col-span-2',
};

export function ProjectBentoCardMotion({ project, index, cardLabels, layout = 'bento', staticEntrance = false }: Props) {
	const reduceMotion: boolean | null = useReducedMotion();
	const isRail: boolean = layout === 'rail';
	const hasCover: boolean = typeof project.coverImage === 'string' && project.coverImage.trim().length > 0;
	const baseClass: string = [
		'group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 p-6 transition duration-300 hover:-translate-y-1 hover:border-accent/45 hover:shadow-[0_12px_40px_rgba(77,140,238,0.2)]',
		hasCover ? 'bg-void/50' : 'bg-gradient-to-br from-white/[0.07] to-transparent',
		isRail ? 'h-full min-h-[22rem]' : spanClass[project.bentoSpan],
	].join(' ');
	const innerShellClass: string = hasCover ? 'relative z-10' : '';
	if (reduceMotion) {
		return (
			<article className={baseClass}>
				{hasCover ? <ProjectCardCover imageUrl={project.coverImage!} /> : null}
				<div className={innerShellClass}>
					<ProjectCardInner cardLabels={cardLabels} hasCover={hasCover} isRail={isRail} project={project} />
				</div>
			</article>
		);
	}
	if (staticEntrance) {
		return (
			<motion.article className={baseClass} initial={false}>
				{hasCover ? <ProjectCardCover imageUrl={project.coverImage!} /> : null}
				<div className={innerShellClass}>
					<ProjectCardInner cardLabels={cardLabels} hasCover={hasCover} isRail={isRail} project={project} />
				</div>
			</motion.article>
		);
	}
	return (
		<motion.article
			className={baseClass}
			initial={{ opacity: 0, y: 22 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: '-5% 0px' }}
			transition={{ ...weightedChildTween, delay: index * 0.06 }}
		>
			{hasCover ? <ProjectCardCover imageUrl={project.coverImage!} /> : null}
			<div className={innerShellClass}>
				<ProjectCardInner cardLabels={cardLabels} hasCover={hasCover} isRail={isRail} project={project} />
			</div>
		</motion.article>
	);
}

type CoverProps = {
	readonly imageUrl: string;
};

function ProjectCardCover({ imageUrl }: CoverProps) {
	return (
		<div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
			<div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${imageUrl})` }} />
			<div className="absolute inset-0 bg-gradient-to-t from-void via-void/90 to-void/55" />
		</div>
	);
}

type InnerProps = {
	readonly project: ProjectCardPayload;
	readonly cardLabels: UiMessages['projects']['card'];
	readonly isRail: boolean;
	readonly hasCover: boolean;
};

function ProjectCardInner({ project, cardLabels, isRail, hasCover }: InnerProps) {
	const stackClass: string = isRail ? 'flex min-h-0 flex-1 flex-col' : '';
	return (
		<div className={stackClass}>
			<div className="flex items-start justify-between gap-4">
				<div>
					<p className="text-xs font-semibold uppercase tracking-[0.2em] text-mist">{project.year}</p>
					<h3 className="mt-2 font-serif text-2xl tracking-tight text-pearl">{project.title}</h3>
				</div>
				<div className="flex shrink-0 gap-2 opacity-0 transition group-hover:opacity-100">
					{project.repository ? (
						<a
							href={project.repository}
							className="rounded-lg border border-white/15 p-2 text-mist transition hover:border-accent/50 hover:text-accent"
							target="_blank"
							rel="noreferrer noopener"
							aria-label={`${cardLabels.repoAria} ${project.title}`}
						>
							<GitBranch className="size-4" aria-hidden="true" />
						</a>
					) : null}
					{project.link ? (
						<a
							href={project.link}
							className="rounded-lg border border-white/15 p-2 text-mist transition hover:border-accent/50 hover:text-accent"
							target="_blank"
							rel="noreferrer noopener"
							aria-label={`${cardLabels.liveAria} ${project.title}`}
						>
							<ExternalLink className="size-4" aria-hidden="true" />
						</a>
					) : null}
				</div>
			</div>
			<p className="mt-4 text-sm leading-relaxed text-mist">{project.summary}</p>
			<div className="mt-6 space-y-4 text-sm leading-relaxed">
				<div>
					<p className="text-xs font-semibold uppercase tracking-wider text-accent/90">{cardLabels.problemSolved}</p>
					<p className="mt-1 text-pearl/90">{project.problemSolved}</p>
				</div>
				<div>
					<p className="text-xs font-semibold uppercase tracking-wider text-accent/90">{cardLabels.architecture}</p>
					<p className="mt-1 text-pearl/90">{project.architectureUsed}</p>
				</div>
			</div>
			<ul
				className={isRail ? 'mt-auto flex flex-wrap gap-2 pt-1' : 'mt-6 flex flex-wrap gap-2'}
				aria-label={cardLabels.techStackAria}
			>
				{project.techStack.map((tech: string, techIndex: number) => (
					<li
						key={`${project.id}-tech-${techIndex}`}
						className={`rounded-full border px-3 py-1 text-xs font-medium text-pearl/85 ${
							hasCover
								? 'border-white/15 bg-black/40 backdrop-blur-sm'
								: 'border-white/10 bg-white/[0.04]'
						}`}
					>
						{tech}
					</li>
				))}
			</ul>
		</div>
	);
}
