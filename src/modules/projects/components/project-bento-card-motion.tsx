import { motion, useReducedMotion } from 'framer-motion';
import { ExternalLink, GitBranch } from 'lucide-react';

import type { UiMessages } from '../../i18n/schemas/ui-messages';
import { weightedChildTween } from '../../motion/constants/weighted-motion';
import type { ProjectCardPayload } from '../schemas/project-card-payload';

type Props = {
	readonly project: ProjectCardPayload;
	readonly index: number;
	readonly cardLabels: UiMessages['projects']['card'];
};

const spanClass: Record<ProjectCardPayload['bentoSpan'], string> = {
	narrow: '',
	wide: 'md:col-span-2',
	hero: 'md:col-span-2',
};

export function ProjectBentoCardMotion({ project, index, cardLabels }: Props) {
	const reduceMotion: boolean | null = useReducedMotion();
	const baseClass: string = [
		'group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.07] to-transparent p-6 transition duration-500 hover:border-accent/35 hover:shadow-[0_0_0_1px_rgba(201,169,98,0.15)]',
		spanClass[project.bentoSpan],
	].join(' ');
	if (reduceMotion) {
		return (
			<article className={baseClass}>
				<ProjectCardInner cardLabels={cardLabels} project={project} />
			</article>
		);
	}
	return (
		<motion.article
			className={baseClass}
			initial={{ opacity: 0, y: 22 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: '-5% 0px' }}
			transition={{ ...weightedChildTween, delay: index * 0.06 }}
		>
			<ProjectCardInner cardLabels={cardLabels} project={project} />
		</motion.article>
	);
}

type InnerProps = {
	readonly project: ProjectCardPayload;
	readonly cardLabels: UiMessages['projects']['card'];
};

function ProjectCardInner({ project, cardLabels }: InnerProps) {
	return (
		<>
			<div className="flex items-start justify-between gap-4">
				<div>
					<p className="text-xs font-semibold uppercase tracking-[0.2em] text-mist">{project.year}</p>
					<h3 className="mt-2 font-serif text-2xl tracking-tight text-pearl">{project.title}</h3>
				</div>
				<div className="flex shrink-0 gap-2 opacity-0 transition group-hover:opacity-100">
					{project.repository ? (
						<a
							href={project.repository}
							className="rounded-lg border border-white/15 p-2 text-mist transition hover:border-accent/50 hover:text-accent"
							target="_blank"
							rel="noreferrer noopener"
							aria-label={`${cardLabels.repoAria} ${project.title}`}
						>
							<GitBranch className="size-4" aria-hidden="true" />
						</a>
					) : null}
					{project.link ? (
						<a
							href={project.link}
							className="rounded-lg border border-white/15 p-2 text-mist transition hover:border-accent/50 hover:text-accent"
							target="_blank"
							rel="noreferrer noopener"
							aria-label={`${cardLabels.liveAria} ${project.title}`}
						>
							<ExternalLink className="size-4" aria-hidden="true" />
						</a>
					) : null}
				</div>
			</div>
			<p className="mt-4 text-sm leading-relaxed text-mist">{project.summary}</p>
			<div className="mt-6 space-y-4 text-sm leading-relaxed">
				<div>
					<p className="text-xs font-semibold uppercase tracking-wider text-accent/90">{cardLabels.problemSolved}</p>
					<p className="mt-1 text-pearl/90">{project.problemSolved}</p>
				</div>
				<div>
					<p className="text-xs font-semibold uppercase tracking-wider text-accent/90">{cardLabels.architecture}</p>
					<p className="mt-1 text-pearl/90">{project.architectureUsed}</p>
				</div>
			</div>
			<ul className="mt-6 flex flex-wrap gap-2" aria-label={cardLabels.techStackAria}>
				{project.techStack.map((tech: string, techIndex: number) => (
					<li
						key={`${project.id}-tech-${techIndex}`}
						className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-pearl/85"
					>
						{tech}
					</li>
				))}
			</ul>
		</>
	);
}
