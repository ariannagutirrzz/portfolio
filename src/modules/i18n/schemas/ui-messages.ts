export type Locale = 'en' | 'es';

export type PillarCopy = {
	readonly title: string;
	readonly body: string;
};

export type StorefrontItemCopy = {
	readonly id: string;
	readonly name: string;
	readonly tagline: string;
	readonly priceLabel: string;
	readonly deliveryNote: string;
	readonly highlights: readonly string[];
	readonly ctaLabel: string;
	readonly ctaHref: string;
};

export type ServiceItemCopy = {
	readonly id: string;
	readonly title: string;
	readonly summary: string;
	readonly deliverables: readonly string[];
};

export type UiMessages = {
	readonly locale: Locale;
	readonly site: {
		readonly title: string;
		readonly metaDescription: string;
		readonly titleTemplate: string;
		readonly personJobTitle: string;
		readonly personKnowsAbout: readonly string[];
	};
	readonly a11y: {
		readonly skipToContent: string;
		readonly navPrimary: string;
		readonly language: string;
	};
	readonly nav: {
		readonly leadership: string;
		readonly work: string;
		readonly allProjects: string;
		readonly services: string;
		readonly products: string;
		readonly contact: string;
		readonly book: string;
		readonly portfolioLabel: string;
	};
	readonly hero: {
		readonly roleBadge: string;
		readonly headlineLine1: string;
		readonly headlineLine2: string;
		readonly tagline: string;
		readonly primaryCta: string;
		readonly secondaryCta: string;
		readonly secondaryCtaHref: string;
		readonly panelTitle: string;
		readonly panelBullets: readonly string[];
	};
	readonly lead: {
		readonly eyebrow: string;
		readonly title: string;
		readonly body: string;
		readonly pillars: readonly PillarCopy[];
		readonly decisionTitle: string;
		readonly decisionBody: string;
		readonly quote: string;
		readonly quoteCite: string;
	};
	readonly projects: {
		readonly eyebrow: string;
		readonly title: string;
		readonly intro: string;
		readonly asideLead: string;
		readonly asideCodePath: string;
		readonly asideTrail: string;
		readonly card: {
			readonly problemSolved: string;
			readonly architecture: string;
			readonly techStackAria: string;
			readonly repoAria: string;
			readonly liveAria: string;
		};
		readonly viewAllCta: string;
	};
	readonly projectsArchive: {
		readonly title: string;
		readonly intro: string;
		readonly backHome: string;
		readonly linkRepository: string;
		readonly linkLive: string;
	};
	readonly servicesPage: {
		readonly title: string;
		readonly intro: string;
		readonly backHome: string;
		readonly contactCtaLabel: string;
		readonly whatsappMessagePrefix: string;
		readonly items: readonly ServiceItemCopy[];
	};
	readonly store: {
		readonly eyebrow: string;
		readonly title: string;
		readonly intro: string;
		readonly items: readonly StorefrontItemCopy[];
	};
	readonly contact: {
		readonly eyebrow: string;
		readonly title: string;
		readonly body: string;
		readonly responseLabel: string;
		readonly responseValue: string;
		readonly engagementLabel: string;
		readonly engagementValue: string;
	};
	readonly contactForm: {
		readonly defaultMailSubject: string;
		readonly nameLabel: string;
		readonly emailLabel: string;
		readonly topicLabel: string;
		readonly messageLabel: string;
		readonly namePlaceholder: string;
		readonly emailPlaceholder: string;
		readonly topicPlaceholder: string;
		readonly messagePlaceholder: string;
		readonly submit: string;
		readonly footnote: string;
		readonly success: string;
		readonly errorRequired: string;
		readonly composeFallbackHint: string;
		readonly composeFallbackAction: string;
	};
	readonly footer: {
		readonly writing: string;
		readonly crafted: string;
		readonly linkedIn: string;
	};
	readonly blog: {
		readonly title: string;
		readonly eyebrow: string;
		readonly intro: string;
		readonly empty: string;
		readonly switchToEnglish: string;
		readonly switchToSpanish: string;
	};
	readonly languageSwitcher: {
		readonly label: string;
		readonly en: string;
		readonly es: string;
	};
};
