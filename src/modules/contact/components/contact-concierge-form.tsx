import { motion, useReducedMotion } from 'framer-motion';
import { Send } from 'lucide-react';
import { useCallback, useMemo, useState } from 'react';

import type { UiMessages } from '../../i18n/schemas/ui-messages';
import { weightedChildTween } from '../../motion/constants/weighted-motion';
import { buildGmailComposeUrl } from '../utils/build-gmail-compose-url';

type FormStatus = 'idle' | 'success';

const initialStatus: FormStatus = 'idle';

type Props = {
	readonly contactForm: UiMessages['contactForm'];
	readonly primaryEmail: string;
};

export function ContactConciergeForm({ contactForm, primaryEmail }: Props) {
	const reduceMotion: boolean | null = useReducedMotion();
	const [name, setName] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [topic, setTopic] = useState<string>('');
	const [message, setMessage] = useState<string>('');
	const [status, setStatus] = useState<FormStatus>(initialStatus);
	const [error, setError] = useState<string>('');
	const gmailComposeUrl: string = useMemo(() => {
		const subject: string = topic.trim() || contactForm.defaultMailSubject;
		const bodyLines: string[] = [
			`Name: ${name.trim()}`,
			`Email: ${email.trim()}`,
			'',
			message.trim(),
		];
		return buildGmailComposeUrl({
			to: primaryEmail,
			subject,
			body: bodyLines.join('\n'),
		});
	}, [name, email, topic, message, primaryEmail, contactForm.defaultMailSubject]);
	const onSubmit = useCallback(
		(event: { preventDefault: () => void }) => {
			event.preventDefault();
			setError('');
			if (!name.trim() || !email.trim() || !message.trim()) {
				setError(contactForm.errorRequired);
				return;
			}
			const opened: Window | null = window.open(gmailComposeUrl, '_blank', 'noopener,noreferrer');
			if (opened === null) {
				window.location.assign(gmailComposeUrl);
			}
			setStatus('success');
		},
		[name, email, message, gmailComposeUrl, contactForm.errorRequired],
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
					primaryEmail={primaryEmail}
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
				primaryEmail={primaryEmail}
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
	readonly primaryEmail: string;
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
	primaryEmail,
}: FieldsProps) {
	const successParts: string[] = contactForm.success.split('__EMAIL__');
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
						className="w-full rounded-xl border border-white/15 bg-white/[0.04] px-4 py-3 text-sm text-pearl outline-none transition placeholder:text-mist/60 focus:border-accent/60"
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
						className="w-full rounded-xl border border-white/15 bg-white/[0.04] px-4 py-3 text-sm text-pearl outline-none transition placeholder:text-mist/60 focus:border-accent/60"
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
					className="w-full rounded-xl border border-white/15 bg-white/[0.04] px-4 py-3 text-sm text-pearl outline-none transition placeholder:text-mist/60 focus:border-accent/60"
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
					className="w-full resize-y rounded-xl border border-white/15 bg-white/[0.04] px-4 py-3 text-sm text-pearl outline-none transition placeholder:text-mist/60 focus:border-accent/60"
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
					{successParts[0]}
					<a className="underline underline-offset-4" href={`mailto:${primaryEmail}`}>
						{primaryEmail}
					</a>
					{successParts[1] ?? ''}
				</p>
			) : null}
			<button
				type="submit"
				className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent py-3.5 text-sm font-semibold text-void transition hover:bg-pearl md:w-auto md:px-10"
			>
				{contactForm.submit}
				<Send className="size-4" aria-hidden="true" />
			</button>
			<p className="text-xs leading-relaxed text-mist">{contactForm.footnote}</p>
		</>
	);
}
