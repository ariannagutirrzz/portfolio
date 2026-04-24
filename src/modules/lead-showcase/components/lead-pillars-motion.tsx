import { motion, useReducedMotion } from 'framer-motion';
import { Boxes, Compass, Users } from 'lucide-react';

import type { PillarCopy } from '../../i18n/schemas/ui-messages';
import { weightedChildTween, weightedStagger } from '../../motion/constants/weighted-motion';

type Props = {
	readonly pillars: readonly PillarCopy[];
};

const icons = [Compass, Boxes, Users] as const;

const list = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: { delayChildren: weightedStagger.delayChildren, staggerChildren: 0.12 },
	},
};

const card = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: weightedChildTween,
	},
};

export function LeadPillarsMotion({ pillars }: Props) {
	const reduceMotion: boolean | null = useReducedMotion();
	if (reduceMotion) {
		return (
			<ul className="grid gap-6 md:grid-cols-3">
				{pillars.map((pillar: PillarCopy, index: number) => {
					const Icon = icons[index] ?? Compass;
					return (
						<li key={pillar.title} className="glass-panel rounded-2xl p-6">
							<Icon className="size-5 text-accent" aria-hidden="true" />
							<h3 className="mt-4 font-serif text-xl text-pearl">{pillar.title}</h3>
							<p className="mt-2 text-sm leading-relaxed text-mist">{pillar.body}</p>
						</li>
					);
				})}
			</ul>
		);
	}
	return (
		<motion.ul
			className="grid gap-6 md:grid-cols-3"
			variants={list}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, margin: '-10% 0px' }}
		>
			{pillars.map((pillar: PillarCopy, index: number) => {
				const Icon = icons[index] ?? Compass;
				return (
					<motion.li key={pillar.title} className="glass-panel rounded-2xl p-6" variants={card}>
						<Icon className="size-5 text-accent" aria-hidden="true" />
						<h3 className="mt-4 font-serif text-xl text-pearl">{pillar.title}</h3>
						<p className="mt-2 text-sm leading-relaxed text-mist">{pillar.body}</p>
					</motion.li>
				);
			})}
		</motion.ul>
	);
}
