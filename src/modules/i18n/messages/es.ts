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
		submit: 'Abrir en Gmail',
		footnote:
			'Este formulario no guarda datos en servidor: abre Gmail en el navegador con el borrador listo. Debes tener sesión en Google para que funcione. Luego puedes conectar Formspree, Resend o tu CRM.',
		success:
			'Gmail debería abrirse en una pestaña nueva con tu borrador. Si el navegador bloqueó la ventana, inténtalo de nuevo o escribe directamente a __EMAIL__.',
		errorRequired: 'Nombre, correo y mensaje son obligatorios.',
		composeFallbackHint:
			'Si no se abrió una pestaña nueva, el navegador pudo bloquearla. Abre el borrador aquí sin salir del portafolio:',
		composeFallbackAction: 'Abrir redacción en Gmail',
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
};
