/**
 * Heavy, smooth tween easing (no spring / no bounce).
 * Approximates a slow-in, confident settle—suited to premium UI entrances.
 */
export const weightedEase: readonly [number, number, number, number] = [0.33, 0, 0.17, 1];

export const weightedTween = {
	type: 'tween' as const,
	duration: 1.05,
	ease: weightedEase,
};

export const weightedChildTween = {
	type: 'tween' as const,
	duration: 0.88,
	ease: weightedEase,
};

export const weightedStagger = {
	staggerChildren: 0.1,
	delayChildren: 0.06,
};
