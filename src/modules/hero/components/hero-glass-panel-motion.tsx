import { motion, useReducedMotion } from 'framer-motion';

import { weightedTween } from '../../motion/constants/weighted-motion';

export function HeroGlassPanelMotion() {
	const reduceMotion: boolean | null = useReducedMotion();
	if (reduceMotion) {
		return (
			<div className="w-full max-w-md rounded-2xl border border-white/15 bg-white/3 p-3 lg:mb-2">
				<div className="overflow-hidden rounded-xl">
					<img src="/images/arianna-vega-headshot.png" alt="Arianna Vega portrait" className="h-[440px] w-full object-cover object-center" loading="lazy" />
				</div>
			</div>
		);
	}
	return (
		<motion.div
			className="w-full max-w-md rounded-2xl border border-white/15 bg-white/3 p-3 lg:mb-2"
			initial={{ opacity: 0, y: 24 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ ...weightedTween, delay: 0.35 }}
		>
			<div className="overflow-hidden rounded-xl">
				<img src="/images/arianna-vega-headshot.png" alt="Arianna Vega portrait" className="h-[440px] w-full object-cover object-center" loading="lazy" />
			</div>
		</motion.div>
	);
}
