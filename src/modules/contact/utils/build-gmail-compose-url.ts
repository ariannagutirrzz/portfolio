/**
 * Opens Gmail’s web compose UI with pre-filled fields (does not use mailto / the OS default client).
 * @see https://support.google.com/mail/answer/56256 (compose parameters)
 */
export function buildGmailComposeUrl(params: { readonly to: string; readonly subject: string; readonly body: string }): string {
	const url: URL = new URL('https://mail.google.com/mail/');
	url.searchParams.set('view', 'cm');
	url.searchParams.set('fs', '1');
	url.searchParams.set('to', params.to);
	url.searchParams.set('su', params.subject);
	url.searchParams.set('body', params.body);
	return url.toString();
}
