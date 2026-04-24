export type StorefrontItem = {
	readonly id: string;
	readonly name: string;
	readonly tagline: string;
	readonly priceLabel: string;
	readonly deliveryNote: string;
	readonly highlights: readonly string[];
	readonly ctaLabel: string;
	readonly ctaHref: string;
};
