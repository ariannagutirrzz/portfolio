import { motion, useReducedMotion } from 'framer-motion';

import type { UiMessages } from '../../i18n/schemas/ui-messages';
import { weightedChildTween, weightedStagger } from '../../motion/constants/weighted-motion';

type Props = {
	readonly lead: UiMessages['lead'];
};

const container = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: weightedStagger,
	},
};

const panel = {
	hidden: { opacity: 0, y: 22 },
	visible: {
		opacity: 1,
		y: 0,
		transition: weightedChildTween,
	},
};

export function LeadDecisionRowMotion({ lead }: Props) {
	const reduceMotion: boolean | null = useReducedMotion();
	if (reduceMotion) {
		return (
			<div className="mt-16 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
				<div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-transparent p-8">
					<h3 className="font-serif text-2xl text-pearl">{lead.decisionTitle}</h3>
					<p className="mt-4 text-sm leading-relaxed text-mist">{lead.decisionBody}</p>
				</div>
				<blockquote className="border-l-2 border-accent/70 pl-8 text-lg font-light italic leading-relaxed text-pearl/90">
					{lead.quote}
					<cite className="mt-4 block text-sm font-medium not-italic tracking-wide text-mist">{lead.quoteCite}</cite>
				</blockquote>
			</div>
		);
	}
	return (
		<motion.div
			className="mt-16 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start"
			variants={container}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, margin: '-8% 0px' }}
		>
			<motion.div
				className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-transparent p-8"
				variants={panel}
			>
				<h3 className="font-serif text-2xl text-pearl">{lead.decisionTitle}</h3>
				<p className="mt-4 text-sm leading-relaxed text-mist">{lead.decisionBody}</p>
			</motion.div>
			<motion.blockquote
				className="border-l-2 border-accent/70 pl-8 text-lg font-light italic leading-relaxed text-pearl/90"
				variants={panel}
			>
				{lead.quote}
				<cite className="mt-4 block text-sm font-medium not-italic tracking-wide text-mist">{lead.quoteCite}</cite>
			</motion.blockquote>
		</motion.div>
	);
}
