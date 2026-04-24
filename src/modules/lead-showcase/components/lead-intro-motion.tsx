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

const block = {
	hidden: { opacity: 0, y: 18 },
	visible: {
		opacity: 1,
		y: 0,
		transition: weightedChildTween,
	},
};

export function LeadIntroMotion({ lead }: Props) {
	const reduceMotion: boolean | null = useReducedMotion();
	if (reduceMotion) {
		return (
			<div className="max-w-3xl">
				<p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">{lead.eyebrow}</p>
				<h2 id="lead-heading" className="mt-4 font-serif text-4xl tracking-tight text-pearl sm:text-5xl">
					{lead.title}
				</h2>
				<p className="mt-6 text-lg leading-relaxed text-mist">{lead.body}</p>
			</div>
		);
	}
	return (
		<motion.div className="max-w-3xl" variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-12% 0px' }}>
			<motion.p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent" variants={block}>
				{lead.eyebrow}
			</motion.p>
			<motion.h2 id="lead-heading" className="mt-4 font-serif text-4xl tracking-tight text-pearl sm:text-5xl" variants={block}>
				{lead.title}
			</motion.h2>
			<motion.p className="mt-6 text-lg leading-relaxed text-mist" variants={block}>
				{lead.body}
			</motion.p>
		</motion.div>
	);
}
