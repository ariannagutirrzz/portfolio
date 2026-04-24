import { motion, useReducedMotion } from 'framer-motion';
import { Send } from 'lucide-react';
import { useCallback, useMemo, useState } from 'react';

import type { UiMessages } from '../../i18n/schemas/ui-messages';
import { weightedChildTween } from '../../motion/constants/weighted-motion';

type FormStatus = 'idle' | 'submitting' | 'success';

const initialStatus: FormStatus = 'idle';

type Props = {
	readonly contactForm: UiMessages['contactForm'];
	readonly locale: UiMessages['locale'];
};

const automationWebhookUrl: string = import.meta.env.PUBLIC_LEAD_AUTOMATION_WEBHOOK_URL ?? '';

type ContactLeadPayload = {
	readonly name: string;
	readonly email: string;
	readonly topic: string;
	readonly message: string;
	readonly subject: string;
	readonly source: 'portfolio-contact-form';
	readonly locale: string;
};

export function ContactConciergeForm({ contactForm, locale }: Props) {
	const reduceMotion: boolean | null = useReducedMotion();
	const [name, setName] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [topic, setTopic] = useState<string>('');
	const [message, setMessage] = useState<string>('');
	const [status, setStatus] = useState<FormStatus>(initialStatus);
	const [error, setError] = useState<string>('');
	const payload: ContactLeadPayload = useMemo(() => {
		const subject: string = topic.trim() || contactForm.defaultMailSubject;
		return {
			name: name.trim(),
			email: email.trim(),
			topic: topic.trim(),
			message: message.trim(),
			subject,
			source: 'portfolio-contact-form',
			locale,
		};
	}, [name, email, topic, message, contactForm.defaultMailSubject, locale]);
	const onSubmit = useCallback(
		async (event: { preventDefault: () => void }) => {
			event.preventDefault();
			setError('');
			if (!payload.name || !payload.email || !payload.message) {
				setError(contactForm.errorRequired);
				return;
			}
			if (!automationWebhookUrl) {
				setError(contactForm.errorServiceUnavailable);
				return;
			}
			setStatus('submitting');
			try {
				const response: Response = await fetch(automationWebhookUrl, {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify(payload),
				});
				if (!response.ok) {
					throw new Error(`Automation request failed with status ${response.status}`);
				}
				setStatus('success');
				setName('');
				setEmail('');
				setTopic('');
				setMessage('');
			} catch {
				setStatus('idle');
				setError(contactForm.errorServiceUnavailable);
			}
		},
		[payload, contactForm.errorRequired, contactForm.errorServiceUnavailable],
	);
	const formClassName: string = 'glass-panel space-y-6 rounded-2xl p-8 md:p-10';
	if (reduceMotion) {
		return (
			<form className={formClassName} onSubmit={onSubmit} noValidate>
				<ContactConciergeFormFields
					contactForm={contactForm}
					name={name}
					setName={setName}
					email={email}
					setEmail={setEmail}
					topic={topic}
					setTopic={setTopic}
					message={message}
					setMessage={setMessage}
					error={error}
					status={status}
				/>
			</form>
		);
	}
	return (
		<motion.form
			className={formClassName}
			onSubmit={onSubmit}
			noValidate
			initial={{ opacity: 0, y: 18 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: '-10% 0px' }}
			transition={{ ...weightedChildTween, delay: 0.12 }}
		>
			<ContactConciergeFormFields
				contactForm={contactForm}
				name={name}
				setName={setName}
				email={email}
				setEmail={setEmail}
				topic={topic}
				setTopic={setTopic}
				message={message}
				setMessage={setMessage}
				error={error}
				status={status}
			/>
		</motion.form>
	);
}

type FieldsProps = {
	readonly contactForm: UiMessages['contactForm'];
	readonly name: string;
	readonly setName: (value: string) => void;
	readonly email: string;
	readonly setEmail: (value: string) => void;
	readonly topic: string;
	readonly setTopic: (value: string) => void;
	readonly message: string;
	readonly setMessage: (value: string) => void;
	readonly error: string;
	readonly status: FormStatus;
};

function ContactConciergeFormFields({
	contactForm,
	name,
	setName,
	email,
	setEmail,
	topic,
	setTopic,
	message,
	setMessage,
	error,
	status,
}: FieldsProps) {
	const isSubmitting: boolean = status === 'submitting';
	return (
		<>
			<div className="grid gap-6 md:grid-cols-2">
				<div className="space-y-2">
					<label htmlFor="contact-name" className="text-xs font-semibold uppercase tracking-wider text-mist">
						{contactForm.nameLabel}
					</label>
					<input
						id="contact-name"
						name="name"
						type="text"
						autoComplete="name"
						value={name}
						onChange={(e) => {
							setName(e.target.value);
						}}
						disabled={isSubmitting}
						className="w-full rounded-xl border border-white/15 bg-white/4 px-4 py-3 text-sm text-pearl outline-none transition placeholder:text-mist/60 focus:border-accent/60"
						placeholder={contactForm.namePlaceholder}
					/>
				</div>
				<div className="space-y-2">
					<label htmlFor="contact-email" className="text-xs font-semibold uppercase tracking-wider text-mist">
						{contactForm.emailLabel}
					</label>
					<input
						id="contact-email"
						name="email"
						type="email"
						autoComplete="email"
						inputMode="email"
						value={email}
						onChange={(e) => {
							setEmail(e.target.value);
						}}
						disabled={isSubmitting}
						className="w-full rounded-xl border border-white/15 bg-white/4 px-4 py-3 text-sm text-pearl outline-none transition placeholder:text-mist/60 focus:border-accent/60"
						placeholder={contactForm.emailPlaceholder}
					/>
				</div>
			</div>
			<div className="space-y-2">
				<label htmlFor="contact-topic" className="text-xs font-semibold uppercase tracking-wider text-mist">
					{contactForm.topicLabel}
				</label>
				<input
					id="contact-topic"
					name="topic"
					type="text"
					value={topic}
					onChange={(e) => {
						setTopic(e.target.value);
					}}
					disabled={isSubmitting}
					className="w-full rounded-xl border border-white/15 bg-white/4 px-4 py-3 text-sm text-pearl outline-none transition placeholder:text-mist/60 focus:border-accent/60"
					placeholder={contactForm.topicPlaceholder}
				/>
			</div>
			<div className="space-y-2">
				<label htmlFor="contact-message" className="text-xs font-semibold uppercase tracking-wider text-mist">
					{contactForm.messageLabel}
				</label>
				<textarea
					id="contact-message"
					name="message"
					rows={5}
					value={message}
					onChange={(e) => {
						setMessage(e.target.value);
					}}
					disabled={isSubmitting}
					className="w-full resize-y rounded-xl border border-white/15 bg-white/4 px-4 py-3 text-sm text-pearl outline-none transition placeholder:text-mist/60 focus:border-accent/60"
					placeholder={contactForm.messagePlaceholder}
				/>
			</div>
			{error ? (
				<p className="text-sm text-red-300" role="alert">
					{error}
				</p>
			) : null}
			{status === 'success' ? (
				<p className="text-sm text-accent" role="status">
					{contactForm.success}
				</p>
			) : null}
			<button
				type="submit"
				disabled={isSubmitting}
				className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent py-3.5 text-sm font-semibold text-void transition hover:bg-pearl md:w-auto md:px-10"
			>
				{contactForm.submit}
				<Send className="size-4" aria-hidden="true" />
			</button>
		</>
	);
}
