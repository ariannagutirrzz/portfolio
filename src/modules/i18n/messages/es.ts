import type { UiMessages } from '../schemas/ui-messages';

export const es: UiMessages = {
	locale: 'es',
	site: {
		title: 'Arianna — Liderazgo Front-End & Sistemas',
		metaDescription:
			'Ingeniera líder en Front-End y Sistemas, especializada en arquitectura escalable, ecosistemas Odoo y React, y entrega de alta confianza.',
		titleTemplate: '%s · Arianna',
		personJobTitle: 'Ingeniera líder en Front-End y Sistemas',
		personKnowsAbout: [
			'Arquitectura de software',
			'React',
			'Odoo',
			'Diseño de sistemas',
			'Liderazgo técnico',
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
		products: 'Productos',
		contact: 'Contacto',
		book: 'Agendar',
		portfolioLabel: 'Portafolio',
	},
	hero: {
		roleBadge: 'Ingeniera líder en Front-End y Sistemas',
		headlineLine1: 'Ingeniería de sistemas escalables',
		headlineLine2: 'y liderazgo en innovación front-end',
		tagline:
			'Disciplina de ingeniería informática con comunicación ejecutiva: front ends resilientes, límites de sistema claros y mentoría sin perder el oficio.',
		primaryCta: 'Iniciar conversación',
		secondaryCta: 'Ver sistemas seleccionados',
		panelTitle: 'Principios de operación',
		panelBullets: [
			'Arquitectura primero, frameworks después.',
			'Medir adopción, no refactors vanidosos.',
			'Accesibilidad y rendimiento son criterio de lanzamiento.',
		],
	},
	lead: {
		eyebrow: 'Capa de liderazgo',
		title: 'Liderazgo anclado en diseño de sistemas',
		body: 'Ya sea guiando un equipo de plataforma o alineando stakeholders de dirección, el mandato es el mismo: traducir la ambigüedad en contextos acotados, interfaces medibles y un ritmo de entrega humano—especialmente donde convergen Odoo, React y servicios distribuidos.',
		pillars: [
			{
				title: 'Precisión arquitectónica',
				body: 'Contratos, límites y observabilidad definidos antes del primer commit a producción.',
			},
			{
				title: 'Dominio Odoo × React',
				body: 'Conectar la realidad ERP empresarial con stacks modernos en cliente—sin maquillar restricciones.',
			},
			{
				title: 'Liderazgo con evidencia',
				body: 'Rúbricas de hiring, RFCs técnicos y rituales de entrega que mantienen velocidad sin quemar equipos.',
			},
		],
		decisionTitle: 'Cómo se toman las decisiones',
		decisionBody:
			'RFCs con tradeoffs explícitos, ADRs que envejecen bien y revisiones de diseño donde UX, seguridad y operabilidad son una sola conversación. No es teatro de consenso: es un modelo compartido de riesgo.',
		quote: '“Entrega la porción mínima que prueba la arquitectura—luego compón.”',
		quoteCite: '— mantra de operación',
	},
	projects: {
		eyebrow: 'Trabajo seleccionado',
		title: 'Sistemas construidos con intención',
		intro:
			'Cada compromiso combina un problema bien planteado con una arquitectura que sobrevive al próximo reorg, upgrade de framework o pico de tráfico.',
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
				id: 'react-odoo-playbook',
				name: 'Manual React × Odoo',
				tagline: 'Patrones probados en campo para unir datos ERP con experiencias cliente modernas.',
				priceLabel: '$189',
				deliveryNote: 'PDF + fragmentos de referencia.',
				highlights: ['Puente de autenticación', 'Estrategia de caché', 'Checklist de upgrade'],
				ctaLabel: 'Comprar plantilla',
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
	},
	footer: {
		writing: 'Escritos',
		crafted: 'Hecho con Astro y rigor',
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
