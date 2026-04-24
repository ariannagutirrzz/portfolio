import { motion, useReducedMotion } from 'framer-motion';

import type { UiMessages } from '../../i18n/schemas/ui-messages';
import { weightedTween } from '../../motion/constants/weighted-motion';

type Props = {
	readonly hero: UiMessages['hero'];
};

export function HeroGlassPanelMotion({ hero }: Props) {
	const reduceMotion: boolean | null = useReducedMotion();
	if (reduceMotion) {
		return (
			<div className="glass-panel w-full max-w-md rounded-2xl p-8 lg:mb-2">
				<p className="text-xs font-semibold uppercase tracking-[0.2em] text-mist">{hero.panelTitle}</p>
				<ul className="mt-6 space-y-4 text-sm leading-relaxed text-pearl/90">
					{hero.panelBullets.map((line: string, i: number) => (
						<li key={`${i}`} className={i === 0 ? 'border-l-2 border-accent/60 pl-4' : 'border-l-2 border-white/15 pl-4'}>
							{line}
						</li>
					))}
				</ul>
			</div>
		);
	}
	return (
		<motion.div
			className="glass-panel w-full max-w-md rounded-2xl p-8 lg:mb-2"
			initial={{ opacity: 0, y: 24 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ ...weightedTween, delay: 0.35 }}
		>
			<p className="text-xs font-semibold uppercase tracking-[0.2em] text-mist">{hero.panelTitle}</p>
			<ul className="mt-6 space-y-4 text-sm leading-relaxed text-pearl/90">
				{hero.panelBullets.map((line: string, i: number) => (
					<li key={`${i}`} className={i === 0 ? 'border-l-2 border-accent/60 pl-4' : 'border-l-2 border-white/15 pl-4'}>
						{line}
					</li>
				))}
			</ul>
		</motion.div>
	);
}
