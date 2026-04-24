import { motion, useReducedMotion } from 'framer-motion';

import type { UiMessages } from '../../i18n/schemas/ui-messages';
import { weightedChildTween, weightedStagger } from '../../motion/constants/weighted-motion';
import type { ProjectCardPayload } from '../schemas/project-card-payload';
import { ProjectBentoCardMotion } from './project-bento-card-motion';

type Props = {
	readonly projects: ProjectCardPayload[];
	readonly projectsCopy: UiMessages['projects'];
	readonly archiveHref: string;
	readonly archiveLabel: string;
};

const intro = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: { delayChildren: weightedStagger.delayChildren, staggerChildren: 0.08 },
	},
};

const introBlock = {
	hidden: { opacity: 0, y: 16 },
	visible: {
		opacity: 1,
		y: 0,
		transition: weightedChildTween,
	},
};

export function ProjectsWorkSectionMotion({ projects, projectsCopy, archiveHref, archiveLabel }: Props) {
	const reduceMotion: boolean | null = useReducedMotion();
	if (reduceMotion) {
		return (
			<section id="work" className="scroll-mt-24 border-b border-white/10 px-6 py-28 sm:px-10 lg:px-16" aria-labelledby="work-heading">
				<div className="mx-auto max-w-6xl">
					<div className="flex flex-col gap-8">
						<div className="max-w-2xl">
							<p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">{projectsCopy.eyebrow}</p>
							<h2 id="work-heading" className="mt-4 font-serif text-4xl tracking-tight text-pearl sm:text-5xl">
								{projectsCopy.title}
							</h2>
							<p className="mt-5 text-lg leading-relaxed text-mist">{projectsCopy.intro}</p>
						</div>
					</div>
					<div className="mt-16 grid auto-rows-fr grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 lg:grid-flow-dense">
						{projects.map((project: ProjectCardPayload, index: number) => (
							<ProjectBentoCardMotion key={project.id} cardLabels={projectsCopy.card} project={project} index={index} />
						))}
					</div>
					<div className="mt-12 flex justify-center border-t border-white/10 pt-10">
						<a
							href={archiveHref}
							className="text-sm font-semibold text-accent underline-offset-8 transition hover:text-pearl hover:underline"
						>
							{archiveLabel}
						</a>
					</div>
				</div>
			</section>
		);
	}
	return (
		<section id="work" className="scroll-mt-24 border-b border-white/10 px-6 py-28 sm:px-10 lg:px-16" aria-labelledby="work-heading">
			<div className="mx-auto max-w-6xl">
				<motion.div className="flex flex-col gap-8" variants={intro} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-10% 0px' }}>
					<motion.div className="max-w-2xl" variants={introBlock}>
						<p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">{projectsCopy.eyebrow}</p>
						<h2 id="work-heading" className="mt-4 font-serif text-4xl tracking-tight text-pearl sm:text-5xl">
							{projectsCopy.title}
						</h2>
						<p className="mt-5 text-lg leading-relaxed text-mist">{projectsCopy.intro}</p>
					</motion.div>
				</motion.div>
				<div className="mt-16 grid auto-rows-fr grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 lg:grid-flow-dense">
					{projects.map((project: ProjectCardPayload, index: number) => (
						<ProjectBentoCardMotion key={project.id} cardLabels={projectsCopy.card} project={project} index={index} />
					))}
				</div>
				<motion.div
					className="mt-12 flex justify-center border-t border-white/10 pt-10"
					initial={{ opacity: 0, y: 10 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ ...weightedChildTween, delay: 0.08 }}
				>
					<a
						href={archiveHref}
						className="text-sm font-semibold text-accent underline-offset-8 transition hover:text-pearl hover:underline"
					>
						{archiveLabel}
					</a>
				</motion.div>
			</div>
		</section>
	);
}
