import { motion, useReducedMotion } from 'framer-motion';

import type { UiMessages } from '../../i18n/schemas/ui-messages';
import { weightedChildTween, weightedStagger } from '../../motion/constants/weighted-motion';
import type { ProjectCardPayload } from '../schemas/project-card-payload';
import { ProjectBentoCardMotion } from './project-bento-card-motion';

type Props = {
	readonly projects: ProjectCardPayload[];
	readonly projectsCopy: UiMessages['projects'];
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

function AsideParagraph({ copy }: { readonly copy: UiMessages['projects'] }) {
	return (
		<p className="max-w-xs text-sm leading-relaxed text-mist">
			{copy.asideLead}{' '}
			<code className="rounded bg-white/10 px-1.5 py-0.5 text-xs text-pearl">{copy.asideCodePath}</code>
			{copy.asideTrail}
		</p>
	);
}

export function ProjectsWorkSectionMotion({ projects, projectsCopy }: Props) {
	const reduceMotion: boolean | null = useReducedMotion();
	if (reduceMotion) {
		return (
			<section id="work" className="scroll-mt-24 border-b border-white/10 px-6 py-28 sm:px-10 lg:px-16" aria-labelledby="work-heading">
				<div className="mx-auto max-w-6xl">
					<div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
						<div className="max-w-2xl">
							<p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">{projectsCopy.eyebrow}</p>
							<h2 id="work-heading" className="mt-4 font-serif text-4xl tracking-tight text-pearl sm:text-5xl">
								{projectsCopy.title}
							</h2>
							<p className="mt-5 text-lg leading-relaxed text-mist">{projectsCopy.intro}</p>
						</div>
						<AsideParagraph copy={projectsCopy} />
					</div>
					<div className="mt-16 grid auto-rows-fr grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 lg:grid-flow-dense">
						{projects.map((project: ProjectCardPayload, index: number) => (
							<ProjectBentoCardMotion key={project.id} cardLabels={projectsCopy.card} project={project} index={index} />
						))}
					</div>
				</div>
			</section>
		);
	}
	return (
		<section id="work" className="scroll-mt-24 border-b border-white/10 px-6 py-28 sm:px-10 lg:px-16" aria-labelledby="work-heading">
			<div className="mx-auto max-w-6xl">
				<motion.div
					className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end"
					variants={intro}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: '-10% 0px' }}
				>
					<motion.div className="max-w-2xl" variants={introBlock}>
						<p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">{projectsCopy.eyebrow}</p>
						<h2 id="work-heading" className="mt-4 font-serif text-4xl tracking-tight text-pearl sm:text-5xl">
							{projectsCopy.title}
						</h2>
						<p className="mt-5 text-lg leading-relaxed text-mist">{projectsCopy.intro}</p>
					</motion.div>
					<motion.div variants={introBlock}>
						<AsideParagraph copy={projectsCopy} />
					</motion.div>
				</motion.div>
				<div className="mt-16 grid auto-rows-fr grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 lg:grid-flow-dense">
					{projects.map((project: ProjectCardPayload, index: number) => (
						<ProjectBentoCardMotion key={project.id} cardLabels={projectsCopy.card} project={project} index={index} />
					))}
				</div>
			</div>
		</section>
	);
}
