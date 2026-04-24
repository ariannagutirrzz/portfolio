import { motion, useReducedMotion } from 'framer-motion';

import type { UiMessages } from '../../i18n/schemas/ui-messages';
import { weightedChildTween, weightedStagger } from '../../motion/constants/weighted-motion';

type Props = {
	readonly contact: UiMessages['contact'];
};

const container = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: { delayChildren: weightedStagger.delayChildren, staggerChildren: 0.1 },
	},
};

const block = {
	hidden: { opacity: 0, y: 16 },
	visible: {
		opacity: 1,
		y: 0,
		transition: weightedChildTween,
	},
};

export function ContactSidebarMotion({ contact }: Props) {
	const reduceMotion: boolean | null = useReducedMotion();
	if (reduceMotion) {
		return (
			<div>
				<p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">{contact.eyebrow}</p>
				<h2 id="contact-heading" className="mt-4 font-serif text-4xl tracking-tight text-pearl sm:text-5xl">
					{contact.title}
				</h2>
				<p className="mt-6 text-lg leading-relaxed text-mist">{contact.body}</p>
				<dl className="mt-10 space-y-6 text-sm text-mist">
					<div>
						<dt className="text-xs font-semibold uppercase tracking-wider text-accent/90">{contact.responseLabel}</dt>
						<dd className="mt-1 text-pearl/90">{contact.responseValue}</dd>
					</div>
					<div>
						<dt className="text-xs font-semibold uppercase tracking-wider text-accent/90">{contact.engagementLabel}</dt>
						<dd className="mt-1 text-pearl/90">{contact.engagementValue}</dd>
					</div>
				</dl>
			</div>
		);
	}
	return (
		<motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-12% 0px' }}>
			<motion.p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent" variants={block}>
				{contact.eyebrow}
			</motion.p>
			<motion.h2 id="contact-heading" className="mt-4 font-serif text-4xl tracking-tight text-pearl sm:text-5xl" variants={block}>
				{contact.title}
			</motion.h2>
			<motion.p className="mt-6 text-lg leading-relaxed text-mist" variants={block}>
				{contact.body}
			</motion.p>
			<motion.div className="mt-10 space-y-6 text-sm text-mist" variants={block}>
				<dl className="space-y-6">
					<div>
						<dt className="text-xs font-semibold uppercase tracking-wider text-accent/90">{contact.responseLabel}</dt>
						<dd className="mt-1 text-pearl/90">{contact.responseValue}</dd>
					</div>
					<div>
						<dt className="text-xs font-semibold uppercase tracking-wider text-accent/90">{contact.engagementLabel}</dt>
						<dd className="mt-1 text-pearl/90">{contact.engagementValue}</dd>
					</div>
				</dl>
			</motion.div>
		</motion.div>
	);
}
