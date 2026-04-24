import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDownRight, Sparkles } from 'lucide-react';

import type { UiMessages } from '../../i18n/schemas/ui-messages';
import { weightedChildTween, weightedStagger } from '../../motion/constants/weighted-motion';
import { HeroKineticHeadline } from './hero-kinetic-headline';

type Props = {
	readonly hero: UiMessages['hero'];
};

const container = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: { delayChildren: weightedStagger.delayChildren, staggerChildren: 0.09 },
	},
};

const block = {
	hidden: { opacity: 0, y: 18 },
	visible: {
		opacity: 1,
		y: 0,
		transition: weightedChildTween,
	},
};

export function HeroLeftStackMotion({ hero }: Props) {
	const reduceMotion: boolean | null = useReducedMotion();
	if (reduceMotion) {
		return (
			<div className="max-w-3xl space-y-8">
				<p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs font-medium uppercase tracking-[0.22em] text-mist">
					<Sparkles className="size-3.5 text-accent" aria-hidden="true" />
					{hero.roleBadge}
				</p>
				<div id="hero-heading">
					<HeroKineticHeadline hero={hero} />
				</div>
				<p className="max-w-xl text-lg leading-relaxed text-mist">{hero.tagline}</p>
				<div className="flex flex-wrap items-center gap-4">
					<a
						href="#contact"
						className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-void transition hover:bg-pearl"
					>
						{hero.primaryCta}
						<ArrowDownRight
							className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5"
							aria-hidden="true"
						/>
					</a>
					<a
						href="#work"
						className="text-sm font-medium text-pearl/90 underline-offset-8 transition hover:text-accent hover:underline"
					>
						{hero.secondaryCta}
					</a>
				</div>
			</div>
		);
	}
	return (
		<motion.div className="max-w-3xl space-y-8" variants={container} initial="hidden" animate="visible">
			<motion.p
				className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs font-medium uppercase tracking-[0.22em] text-mist"
				variants={block}
			>
				<Sparkles className="size-3.5 text-accent" aria-hidden="true" />
				{hero.roleBadge}
			</motion.p>
			<div id="hero-heading">
				<HeroKineticHeadline hero={hero} />
			</div>
			<motion.p className="max-w-xl text-lg leading-relaxed text-mist" variants={block}>
				{hero.tagline}
			</motion.p>
			<motion.div className="flex flex-wrap items-center gap-4" variants={block}>
				<a
					href="#contact"
					className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-void transition hover:bg-pearl"
				>
					{hero.primaryCta}
					<ArrowDownRight
						className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5"
						aria-hidden="true"
					/>
				</a>
				<a
					href="#work"
					className="text-sm font-medium text-pearl/90 underline-offset-8 transition hover:text-accent hover:underline"
				>
					{hero.secondaryCta}
				</a>
			</motion.div>
		</motion.div>
	);
}
