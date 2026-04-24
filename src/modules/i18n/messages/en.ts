import type { UiMessages } from '../schemas/ui-messages';

export const en: UiMessages = {
	locale: 'en',
	site: {
		title: 'Arianna — Lead Front-End & Systems',
		metaDescription:
			'Lead Front-End & Systems Engineer specializing in scalable architecture, Odoo and React ecosystems, and high-trust delivery.',
		titleTemplate: '%s · Arianna',
		personJobTitle: 'Lead Front-End & Systems Engineer',
		personKnowsAbout: ['Software architecture', 'React', 'Odoo', 'Systems design', 'Engineering leadership'],
	},
	a11y: {
		skipToContent: 'Skip to content',
		navPrimary: 'Primary',
		language: 'Language',
	},
	nav: {
		leadership: 'Leadership',
		work: 'Work',
		products: 'Products',
		contact: 'Contact',
		book: 'Book',
		portfolioLabel: 'Portfolio',
	},
	hero: {
		roleBadge: 'Lead Front-End & Systems Engineer',
		headlineLine1: 'Engineering Scalable Systems',
		headlineLine2: '& Leading Front-End Innovation',
		tagline:
			'Informatics-trained engineering discipline meets executive-level communication: shipping resilient front ends, tightening system boundaries, and mentoring teams without losing craft.',
		primaryCta: 'Start a conversation',
		secondaryCta: 'View selected systems',
		panelTitle: 'Operating principles',
		panelBullets: [
			'Architecture first, frameworks second.',
			'Measure adoption, not vanity refactors.',
			'Accessibility and performance are launch criteria.',
		],
	},
	lead: {
		eyebrow: 'The Lead layer',
		title: 'Leadership grounded in systems design',
		body: 'Whether steering a platform team or partnering with C-level stakeholders, the mandate stays constant: translate ambiguity into bounded contexts, measurable interfaces, and humane delivery tempo—especially where Odoo, React, and distributed services intersect.',
		pillars: [
			{
				title: 'Architectural precision',
				body: 'Contracts, boundaries, and observability designed before the first production commit.',
			},
			{
				title: 'Odoo × React fluency',
				body: 'Bridging enterprise ERP realities with modern client stacks—without papering over constraints.',
			},
			{
				title: 'Leadership with receipts',
				body: 'Hiring rubrics, technical RFCs, and delivery rituals that keep teams fast without burning out.',
			},
		],
		decisionTitle: 'How decisions get made',
		decisionBody:
			'RFCs with explicit tradeoffs, ADRs that age well, and design reviews that treat UX, security, and operability as one conversation. The goal is not consensus theater—it is a shared model of risk.',
		quote: '“Ship the smallest slice that proves the architecture—then compound.”',
		quoteCite: '— operating mantra',
	},
	projects: {
		eyebrow: 'Selected work',
		title: 'Systems shipped with intent',
		intro:
			'Each engagement pairs a sharp problem statement with an architecture that can survive the next reorg, framework upgrade, or traffic spike.',
		asideLead:
			'Content is driven by the Astro Content Layer—schemas live beside the domain, entries stay in',
		asideCodePath: 'src/content/projects',
		asideTrail: '.',
		card: {
			problemSolved: 'Problem solved',
			architecture: 'Architecture',
			techStackAria: 'Tech stack',
			repoAria: 'View repository for',
			liveAria: 'Open live project:',
		},
	},
	store: {
		eyebrow: 'Digital products',
		title: 'Concierge-grade assets & engagements',
		intro:
			'High-trust artifacts for teams that would rather buy proven judgment than reinvent it. Replace CTAs with your checkout links when ready.',
		items: [
			{
				id: 'architecture-intake',
				name: 'Architecture Intake',
				tagline:
					'A structured workshop to align stakeholders on constraints, risks, and delivery sequencing.',
				priceLabel: 'From $4,800',
				deliveryNote: 'Delivered remotely across two sessions with a written decision record.',
				highlights: ['System boundaries map', 'Risk register', '90-day execution roadmap'],
				ctaLabel: 'Request availability',
				ctaHref: '#contact',
			},
			{
				id: 'react-odoo-playbook',
				name: 'React × Odoo Integration Playbook',
				tagline: 'Field-tested patterns for bridging enterprise ERP data with modern client experiences.',
				priceLabel: '$189',
				deliveryNote: 'PDF + reference implementation snippets.',
				highlights: ['Auth bridging', 'Caching strategy', 'Upgrade checklist'],
				ctaLabel: 'Purchase template',
				ctaHref: '#contact',
			},
			{
				id: 'design-system-starter',
				name: 'Luxury SaaS UI Kit',
				tagline: 'Opinionated tokens, layout primitives, and motion recipes for premium B2B products.',
				priceLabel: '$129',
				deliveryNote: 'Figma library + Astro + Tailwind starter.',
				highlights: ['Token scales', 'Dark-first palettes', 'Accessibility notes'],
				ctaLabel: 'Notify me at launch',
				ctaHref: '#contact',
			},
		],
	},
	contact: {
		eyebrow: 'Contact',
		title: 'Concierge intake',
		body: 'Share the shape of the problem—platform friction, delivery risk, or leadership gap—and you will receive a thoughtful reply with next steps, not an autoresponder novel.',
		responseLabel: 'Response window',
		responseValue: 'Within two business days for new inquiries.',
		engagementLabel: 'Engagement styles',
		engagementValue: 'Advisory retainers, architecture sprints, and embedded technical lead.',
	},
	contactForm: {
		defaultMailSubject: 'Portfolio inquiry',
		nameLabel: 'Name',
		emailLabel: 'Email',
		topicLabel: 'Topic',
		messageLabel: 'Message',
		namePlaceholder: 'Jordan Lee',
		emailPlaceholder: 'you@company.com',
		topicPlaceholder: 'Fractional lead, architecture review, workshop…',
		messagePlaceholder:
			'Context, timelines, constraints—everything you would tell a partner on day zero.',
		submit: 'Open in Gmail',
		footnote:
			'This form never stores data on a server—it opens Gmail in the browser with a drafted message. You must be signed into Google for compose to work. Swap in Formspree, Resend, or your CRM when you wire production automation.',
		success:
			'Gmail should open in a new tab with your draft. If it was blocked, try again or write directly to __EMAIL__.',
		errorRequired: 'Name, email, and message are required.',
	},
	footer: {
		writing: 'Writing',
		crafted: 'Crafted with Astro & discipline',
	},
	blog: {
		title: 'Writing',
		eyebrow: 'Blog',
		intro: 'Powered by the same Content Layer as projects—publish by setting draft: false.',
		empty: 'No public posts yet. Drafts stay excluded automatically.',
		switchToEnglish: 'View in English',
		switchToSpanish: 'Ver en español',
	},
	languageSwitcher: {
		label: 'Language',
		en: 'EN',
		es: 'ES',
	},
};
