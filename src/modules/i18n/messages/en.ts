import type { UiMessages } from '../schemas/ui-messages';

export const en: UiMessages = {
	locale: 'en',
	site: {
		title: 'Arianna Vega — Full-Stack Engineer',
		metaDescription:
			'Full-Stack Engineer at Simplest.guru and Informatics Engineering student. 3+ years shipping React, Node.js, and Next.js systems for retail scale, tax automation, and integrations.',
		titleTemplate: '%s · Arianna Vega',
		personJobTitle: 'Full-Stack Engineer',
		personKnowsAbout: [
			'React',
			'TypeScript',
			'Node.js',
			'Next.js',
			'REST APIs',
			'WebSockets',
			'PostgreSQL',
			'Docker',
			'CI/CD',
			'React Native',
		],
	},
	a11y: {
		skipToContent: 'Skip to content',
		navPrimary: 'Primary',
		language: 'Language',
	},
	nav: {
		leadership: 'Leadership',
		work: 'Work',
		allProjects: 'All projects',
		products: 'Products',
		contact: 'Contact',
		book: 'Book',
		portfolioLabel: 'Portfolio',
	},
	hero: {
		roleBadge: 'Full-Stack Engineer · Simplest.guru',
		headlineLine1: 'Retail-grade web systems',
		headlineLine2: '& disciplined full-stack delivery',
		tagline:
			'Proactive full-stack developer leading redesigns and migrations for 85+ US supermarkets, tightening real-time data paths (WebSockets), mobile ESL workflows, and backend APIs—while finishing a Bachelor’s in Informatics Engineering at URBE.',
		primaryCta: 'Start a conversation',
		secondaryCta: 'Browse full project archive',
		secondaryCtaHref: '/en/projects/',
		panelTitle: 'Operating principles',
		panelBullets: [
			'Lead with clarity: Jira, Git, and documented flows for QA.',
			'Own the full slice: React UI, Node APIs, and PostgreSQL tuning.',
			'Prefer measurable wins: latency, uptime, and support load.',
		],
	},
	lead: {
		eyebrow: 'Leadership in production',
		title: 'From supermarket dashboards to municipal tax flows',
		body: 'At Simplest.guru I drive full-stack modernization for a nationwide retail stack, owning React surfaces, Node.js services, WebSockets, and operational hardening. At Sitrive I shipped a bilingual tax platform with a dynamic form builder and Storybook-driven UI. Side projects span inventory, billing integrations, and AI-assisted clinical tooling.',
		pillars: [
			{
				title: 'Retail-scale reliability',
				body: 'Dashboards, charts, and data-heavy modules with pagination, advanced filters, and resilient error handling for 85+ stores.',
			},
			{
				title: 'Real-time & mobile surfaces',
				body: 'WebSockets for live sync plus a React Native ESL workflow bridging store hardware and digital pricing.',
			},
			{
				title: 'Documentation that QA trusts',
				body: 'Swagger-backed specs, visual evidence, and disciplined Git/Jira hygiene so releases stay predictable.',
			},
		],
		decisionTitle: 'How decisions get made',
		decisionBody:
			'RFCs with explicit tradeoffs, ADRs that age well, and design reviews that treat UX, security, and operability as one conversation. The goal is not consensus theater—it is a shared model of risk.',
		quote: '“From need to outcome: I lead the way.”',
		quoteCite: '— Arianna Vega',
	},
	projects: {
		eyebrow: 'Selected work',
		title: 'Systems shipped with intent',
		intro:
			'Highlights from Simplest.guru, Sitrive, and independent builds. The archive lists every case study—including landings, ecommerce, and integrations.',
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
		viewAllCta: 'Open full project archive →',
	},
	projectsArchive: {
		title: 'Project archive',
		intro:
			'Case studies spanning retail operations, municipal tax automation, inventory platforms, billing integrations, clinical tooling, and marketing sites. Add new Markdown entries under src/content/projects to grow this list.',
		backHome: '← Back to home',
		linkRepository: 'Repository',
		linkLive: 'Live',
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
				id: 'fullstack-audit-pack',
				name: 'Full-stack architecture review',
				tagline: 'Deep dive on your React/Node data flows, deployment story, and testing gaps with a remediation checklist.',
				priceLabel: '$189',
				deliveryNote: 'Written report + async Q&A.',
				highlights: ['API review', 'Performance notes', 'Release risk map'],
				ctaLabel: 'Book a review',
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
		composeFallbackHint: 'If no new tab appeared, your browser may have blocked it. You can still open the draft here—your portfolio stays on this page:',
		composeFallbackAction: 'Open Gmail compose',
	},
	footer: {
		writing: 'Writing',
		crafted: 'Crafted with Astro & discipline',
		linkedIn: 'LinkedIn',
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
