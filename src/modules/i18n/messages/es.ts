import type { UiMessages } from '../schemas/ui-messages';

export const es: UiMessages = {
	locale: 'es',
	site: {
		title: 'Arianna Vega — Full-Stack Engineer',
		metaDescription:
			'Full-Stack Engineer en Simplest.guru y estudiante de Ingeniería Informática (URBE). 3+ años construyendo React, Node.js y Next.js para retail en EE. UU., automatización tributaria e integraciones.',
		titleTemplate: '%s · Arianna Vega',
		personJobTitle: 'Full-Stack Engineer',
		personKnowsAbout: [
			'React',
			'TypeScript',
			'Node.js',
			'Next.js',
			'APIs REST',
			'WebSockets',
			'PostgreSQL',
			'Docker',
			'CI/CD',
			'React Native',
		],
	},
	a11y: {
		skipToContent: 'Ir al contenido',
		navPrimary: 'Principal',
		language: 'Idioma',
	},
	nav: {
		leadership: 'Liderazgo',
		work: 'Proyectos',
		allProjects: 'Todos los proyectos',
		services: 'Servicios',
		products: 'Productos',
		contact: 'Contacto',
		book: 'Agendar',
		portfolioLabel: 'Portafolio',
	},
	hero: {
		roleBadge: 'Full-Stack Engineer · Simplest.guru',
		headlineLine1: 'Sistemas web a escala retail',
		headlineLine2: 'y full-stack con disciplina',
		tagline:
			'Desarrolladora full-stack proactiva liderando rediseños y migraciones para 85+ supermercados en EE. UU., con foco en datos en tiempo real (WebSockets), apps móviles con ESL y APIs en Node—mientras termino Ingeniería Informática en URBE.',
		primaryCta: 'Iniciar conversación',
		secondaryCta: 'Ver archivo completo de proyectos',
		secondaryCtaHref: '/es/projects/',
		panelTitle: 'Principios de operación',
		panelBullets: [
			'Claridad operativa: Jira, Git y documentación que QA puede ejecutar.',
			'Ciclo completo: UI en React, APIs en Node y ajustes en PostgreSQL.',
			'Victorias medibles: latencia, disponibilidad y carga de soporte.',
		],
	},
	lead: {
		eyebrow: 'Liderazgo en producción',
		title: 'De dashboards retail a tributos municipales',
		body: 'En Simplest.guru lidero modernización full-stack para una operación nacional de retail, asumiendo superficies en React, servicios Node.js, WebSockets y endurecimiento operativo. En Sitrive entregué una plataforma tributaria bilingüe con form builder dinámico y UI guiada por Storybook. Proyectos propios cubren inventario, facturación y herramientas clínicas con IA.',
		pillars: [
			{
				title: 'Confiabilidad a escala retail',
				body: 'Módulos con muchos datos, paginación, filtros avanzados y manejo de errores para 85+ tiendas.',
			},
			{
				title: 'Tiempo real y superficies móviles',
				body: 'WebSockets para sincronización y React Native para inventario físico con etiquetas electrónicas (ESL).',
			},
			{
				title: 'Documentación que QA usa',
				body: 'Especificaciones tipo Swagger, evidencia visual y Git/Jira para releases predecibles.',
			},
		],
		decisionTitle: 'Cómo se toman las decisiones',
		decisionBody:
			'RFCs con tradeoffs explícitos, ADRs que envejecen bien y revisiones de diseño donde UX, seguridad y operabilidad son una sola conversación. No es teatro de consenso: es un modelo compartido de riesgo.',
		quote: '“De la necesidad al resultado: yo lidero el camino.”',
		quoteCite: '— Arianna Vega',
	},
	projects: {
		eyebrow: 'Trabajo seleccionado',
		title: 'Sistemas construidos con intención',
		intro:
			'Destacados de Simplest.guru, Sitrive y builds independientes. El archivo lista cada caso—incluyendo landings, ecommerce e integraciones.',
		asideLead:
			'El contenido usa la Content Layer de Astro: los esquemas viven junto al dominio y las entradas en',
		asideCodePath: 'src/content/projects',
		asideTrail: '.',
		card: {
			problemSolved: 'Problema resuelto',
			architecture: 'Arquitectura',
			techStackAria: 'Stack tecnológico',
			repoAria: 'Ver repositorio de',
			liveAria: 'Abrir proyecto en vivo:',
		},
		viewAllCta: 'Abrir archivo completo de proyectos →',
	},
	projectsArchive: {
		title: 'Archivo de proyectos',
		intro:
			'Casos de retail, automatización municipal, inventario, integraciones de cobro, herramientas clínicas y sitios comerciales. Agrega entradas Markdown en src/content/projects para extender la lista.',
		backHome: '← Volver al inicio',
		linkRepository: 'Repositorio',
		linkLive: 'En vivo',
	},
	servicesPage: {
		title: 'Servicios',
		intro:
			'Servicios full-stack aterrizados en flujos reales: auditorías, automatizaciones, sistemas de prospección, herramientas de navegador y webs orientadas a conversión.',
		backHome: '← Volver al inicio',
		contactCtaLabel: 'Hablar por WhatsApp',
		whatsappMessagePrefix: 'Hola Arianna, necesito ayuda con este servicio:',
		items: [
			{
				id: 'web-scrolling',
				title: 'Webs one-page premium con motion por scroll',
				summary: 'Sitios one-page adaptados al negocio, con efectos de scroll, diseño responsive y estructura enfocada en conversión.',
				deliverables: ['Build autocontenido', 'Parallax y reveal interactions', 'Secciones y CTAs alineados al sector'],
			},
			{
				id: 'instagram-web',
				title: 'Instagram a web de marca personal',
				summary: 'Conversión de perfil de Instagram en una web profesional con identidad visual coherente, prueba social y flujo de contacto.',
				deliverables: ['Mapeo de contenido Instagram-web', 'Galería visual con assets reales', 'Layout de posicionamiento personal'],
			},
			{
				id: 'seo-audit',
				title: 'Auditoría SEO técnica y on-page',
				summary: 'Diagnóstico SEO completo con puntuación, prioridades claras y correcciones técnicas accionables.',
				deliverables: ['Dashboard de puntuación SEO', 'Revisión de meta/headings/schema', 'Lista priorizada de mejoras'],
			},
			{
				id: 'invoice-dashboard',
				title: 'Dashboard de facturación y métricas',
				summary: 'Dashboard financiero desde facturas para controlar ingresos, gastos, IVA, evolución temporal y riesgo por cliente.',
				deliverables: ['Dataset estructurado de facturas', 'Dashboard de KPIs', 'Insights mensuales y trimestrales'],
			},
			{
				id: 'n8n-automation',
				title: 'Automatizaciones con n8n',
				summary: 'Diseño e implementación de workflows robustos en n8n para operaciones, leads e integración entre herramientas.',
				deliverables: ['Arquitectura de workflow', 'Flujos importables o en vivo', 'Documentación operativa'],
			},
			{
				id: 'lead-prospecting',
				title: 'Prospección y mapeo de mercado',
				summary: 'Sistemas de prospección para encontrar oportunidades reales por nicho y ciudad con datos de contacto y scoring.',
				deliverables: ['Listas de leads cualificados', 'Modelo de puntuación de oportunidad', 'Insights listos para outreach'],
			},
			{
				id: 'digital-business-audit',
				title: 'Auditoría integral de negocio digital',
				summary: 'Revisión de web, redes, oferta, funnel y coherencia de posicionamiento con plan de acción ejecutable.',
				deliverables: ['Diagnóstico del estado actual', 'Roadmap por prioridad', 'Quick wins y correcciones estructurales'],
			},
			{
				id: 'meta-ads-audit',
				title: 'Auditoría de Meta Ads y landing pages',
				summary: 'Análisis de anuncios activos y landings para mejorar coherencia de mensaje, lógica de conversión y claridad comercial.',
				deliverables: ['Diagnóstico de ads y landing', 'Reescritura de copy y CTAs', 'Checklist de mejora por impacto'],
			},
			{
				id: 'chrome-extension',
				title: 'Desarrollo de extensiones Chrome a medida',
				summary: 'Extensiones Manifest V3 creadas para flujos reales, con permisos mínimos y comportamiento listo para uso.',
				deliverables: ['Paquete completo de extensión', 'Arquitectura popup/content/background', 'Guía de instalación y uso'],
			},
			{
				id: 'skill-creator',
				title: 'Diseño de skills de IA personalizadas',
				summary: 'Creación de skills reutilizables para convertir procesos repetitivos en ejecución estructurada y replicable.',
				deliverables: ['Especificación de la skill', 'Flujo y prompts operativos', 'Kit listo para equipo'],
			},
		],
	},
	store: {
		eyebrow: 'Productos digitales',
		title: 'Activos y servicios nivel concierge',
		intro:
			'Artefactos de alta confianza para equipos que prefieren comprar criterio probado antes que reinventarlo. Sustituye los CTAs por tus enlaces de checkout cuando estés listo.',
		items: [
			{
				id: 'architecture-intake',
				name: 'Architecture Intake',
				tagline:
					'Taller estructurado para alinear stakeholders en restricciones, riesgos y secuencia de entrega.',
				priceLabel: 'Desde $4.800',
				deliveryNote: '100 % remoto en dos sesiones con acta de decisiones por escrito.',
				highlights: ['Mapa de límites del sistema', 'Registro de riesgos', 'Hoja de ruta 90 días'],
				ctaLabel: 'Consultar disponibilidad',
				ctaHref: '#contact',
			},
			{
				id: 'fullstack-audit-pack',
				name: 'Revisión de arquitectura full-stack',
				tagline: 'Análisis profundo de flujos React/Node, despliegue y pruebas con checklist de remediación.',
				priceLabel: '$189',
				deliveryNote: 'Informe escrito + Q&A asíncrono.',
				highlights: ['Revisión de APIs', 'Notas de rendimiento', 'Mapa de riesgos de release'],
				ctaLabel: 'Reservar revisión',
				ctaHref: '#contact',
			},
			{
				id: 'design-system-starter',
				name: 'UI Kit SaaS premium',
				tagline: 'Tokens, primitivos de layout y recetas de motion para productos B2B de gama alta.',
				priceLabel: '$129',
				deliveryNote: 'Biblioteca Figma + starter Astro + Tailwind.',
				highlights: ['Escalas de tokens', 'Paletas dark-first', 'Notas de accesibilidad'],
				ctaLabel: 'Avísame al lanzamiento',
				ctaHref: '#contact',
			},
		],
	},
	contact: {
		eyebrow: 'Contacto',
		title: 'Recepción concierge',
		body: 'Describe el problema—fricción de plataforma, riesgo de entrega o brecha de liderazgo—y recibirás una respuesta concreta con siguientes pasos, no un autoresponder interminable.',
		responseLabel: 'Tiempo de respuesta',
		responseValue: 'Dentro de dos días hábiles para nuevos mensajes.',
		engagementLabel: 'Modalidades',
		engagementValue: 'Retainers de asesoría, sprints de arquitectura y liderazgo técnico embebido.',
	},
	contactForm: {
		defaultMailSubject: 'Consulta desde el portafolio',
		nameLabel: 'Nombre',
		emailLabel: 'Correo',
		topicLabel: 'Asunto',
		messageLabel: 'Mensaje',
		namePlaceholder: 'Tu nombre',
		emailPlaceholder: 'tu@empresa.com',
		topicPlaceholder: 'Liderazgo fraccional, revisión de arquitectura, taller…',
		messagePlaceholder:
			'Contexto, plazos y restricciones: lo mismo que le contarías a un socio el día cero.',
		submit: 'Enviar consulta',
		success: 'Gracias. Tu consulta se envió correctamente. Te responderé pronto.',
		errorRequired: 'Nombre, correo y mensaje son obligatorios.',
		errorServiceUnavailable:
			'El endpoint de automatización no está configurado todavía. Agrega las variables de entorno y vuelve a intentarlo.',
	},
	footer: {
		writing: 'Escritos',
		crafted: 'Hecho con Astro y rigor',
		linkedIn: 'LinkedIn',
	},
	blog: {
		title: 'Escritos',
		eyebrow: 'Blog',
		intro: 'Impulsado por la misma Content Layer que los proyectos: publica con draft: false.',
		empty: 'Aún no hay entradas públicas. Los borradores quedan fuera automáticamente.',
		switchToEnglish: 'Ver en inglés',
		switchToSpanish: 'Ver en español',
	},
	languageSwitcher: {
		label: 'Idioma',
		en: 'EN',
		es: 'ES',
	},
	whatsappWidget: {
		label: 'Chatear por WhatsApp',
		message: 'Hola Arianna, vi tu portafolio y quiero conversar sobre un proyecto.',
	},
};
