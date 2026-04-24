import { motion, useReducedMotion } from 'framer-motion';

import type { UiMessages } from '../../i18n/schemas/ui-messages';
import { weightedChildTween, weightedStagger } from '../../motion/constants/weighted-motion';

type Props = {
	readonly hero: Pick<UiMessages['hero'], 'headlineLine1' | 'headlineLine2'>;
};

const container = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: weightedStagger,
	},
};

const item = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { ...weightedChildTween },
	},
};

export function HeroKineticHeadline({ hero }: Props) {
	const reduceMotion: boolean | null = useReducedMotion();
	if (reduceMotion) {
		return (
			<h1 className="font-serif text-balance text-4xl leading-[1.18] tracking-normal text-pearl sm:text-5xl lg:text-5xl">
				<span className="block">{hero.headlineLine1}</span>
				<span className="mt-2 block text-mist">{hero.headlineLine2}</span>
			</h1>
		);
	}
	return (
		<motion.h1
			className="font-serif text-balance text-4xl leading-[1.18] tracking-normal text-pearl sm:text-5xl lg:text-5xl"
			variants={container}
			initial="hidden"
			animate="visible"
		>
			<motion.span className="block" variants={item}>
				{hero.headlineLine1}
			</motion.span>
			<motion.span className="mt-2 block text-mist" variants={item}>
				{hero.headlineLine2}
			</motion.span>
		</motion.h1>
	);
}
