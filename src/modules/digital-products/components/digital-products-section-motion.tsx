import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

import type { StorefrontItemCopy } from '../../i18n/schemas/ui-messages';
import type { UiMessages } from '../../i18n/schemas/ui-messages';
import { weightedChildTween, weightedStagger } from '../../motion/constants/weighted-motion';

type Props = {
	readonly messages: UiMessages;
};

const intro = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: { delayChildren: weightedStagger.delayChildren, staggerChildren: 0.09 },
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

const list = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: { delayChildren: 0.12, staggerChildren: 0.1 },
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

export function DigitalProductsSectionMotion({ messages }: Props) {
	const store = messages.store;
	const reduceMotion: boolean | null = useReducedMotion();
	if (reduceMotion) {
		return (
			<section id="store" className="scroll-mt-24 border-b border-white/10 px-6 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-24" aria-labelledby="store-heading">
				<div className="mx-auto max-w-5xl">
					<div className="max-w-2xl">
						<p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">{store.eyebrow}</p>
						<h2 id="store-heading" className="mt-4 font-serif text-4xl tracking-tight text-pearl sm:text-5xl">
							{store.title}
						</h2>
						<p className="mt-5 text-base leading-relaxed text-mist sm:text-lg">{store.intro}</p>
					</div>
					<ul className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
						{store.items.map((item: StorefrontItemCopy) => (
							<li
								key={item.id}
								className="glass-panel flex flex-col rounded-2xl p-8 transition duration-300 hover:-translate-y-1 hover:border-accent/45 hover:shadow-[0_12px_40px_rgba(77,140,238,0.18)]"
							>
								<DigitalProductCard item={item} />
							</li>
						))}
					</ul>
				</div>
			</section>
		);
	}
	return (
		<section id="store" className="scroll-mt-24 border-b border-white/10 px-6 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-24" aria-labelledby="store-heading">
			<div className="mx-auto max-w-5xl">
				<motion.div className="max-w-2xl" variants={intro} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-10% 0px' }}>
					<motion.p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent" variants={block}>
						{store.eyebrow}
					</motion.p>
					<motion.h2 id="store-heading" className="mt-4 font-serif text-4xl tracking-tight text-pearl sm:text-5xl" variants={block}>
						{store.title}
					</motion.h2>
					<motion.p className="mt-5 text-base leading-relaxed text-mist sm:text-lg" variants={block}>
						{store.intro}
					</motion.p>
				</motion.div>
				<motion.ul
					className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
					variants={list}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: '-8% 0px' }}
				>
					{store.items.map((item: StorefrontItemCopy) => (
						<motion.li
							key={item.id}
							className="glass-panel flex flex-col rounded-2xl p-8 transition duration-300 hover:-translate-y-1 hover:border-accent/45 hover:shadow-[0_12px_40px_rgba(77,140,238,0.18)]"
							variants={card}
						>
							<DigitalProductCard item={item} />
						</motion.li>
					))}
				</motion.ul>
			</div>
		</section>
	);
}

function DigitalProductCard({ item }: { readonly item: StorefrontItemCopy }) {
	return (
		<>
			<div className="flex items-start justify-between gap-4">
				<h3 className="font-serif text-2xl text-pearl">{item.name}</h3>
				<span className="rounded-full border border-accent/30 bg-accent-soft px-3 py-1 text-xs font-semibold text-accent">
					{item.priceLabel}
				</span>
			</div>
			<p className="mt-4 text-sm leading-relaxed text-mist">{item.tagline}</p>
			<p className="mt-3 text-xs uppercase tracking-wider text-mist/80">{item.deliveryNote}</p>
			<ul className="mt-6 space-y-2 text-sm text-pearl/90">
				{item.highlights.map((line: string, i: number) => (
					<li key={`${item.id}-hl-${i}`} className="flex gap-2">
						<span className="mt-1 size-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
						<span>{line}</span>
					</li>
				))}
			</ul>
			<a
				href={item.ctaHref}
				className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-pearl transition hover:text-accent"
			>
				{item.ctaLabel}
				<ArrowUpRight className="size-4" aria-hidden="true" />
			</a>
		</>
	);
}
