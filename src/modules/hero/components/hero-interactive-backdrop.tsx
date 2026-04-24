import { useCallback, useEffect, useRef, useState } from 'react';

type PointerPosition = {
	readonly xPercent: number;
	readonly yPercent: number;
};

const initialPointer: PointerPosition = { xPercent: 50, yPercent: 42 };

function clampPercent(value: number): number {
	return Math.min(100, Math.max(0, value));
}

export function HeroInteractiveBackdrop() {
	const containerRef = useRef<HTMLDivElement>(null);
	const [pointer, setPointer] = useState<PointerPosition>(initialPointer);
	const pendingRef = useRef<PointerPosition | null>(null);
	const rafRef = useRef<number>(0);
	const flushPointer = useCallback(() => {
		rafRef.current = 0;
		const next: PointerPosition | null = pendingRef.current;
		if (next === null) {
			return;
		}
		pendingRef.current = null;
		setPointer(next);
	}, []);
	const schedulePointer = useCallback(
		(next: PointerPosition) => {
			pendingRef.current = next;
			if (rafRef.current !== 0) {
				return;
			}
			rafRef.current = window.requestAnimationFrame(() => {
				flushPointer();
			});
		},
		[flushPointer],
	);
	const resetPointer = useCallback(() => {
		pendingRef.current = null;
		if (rafRef.current !== 0) {
			window.cancelAnimationFrame(rafRef.current);
			rafRef.current = 0;
		}
		setPointer(initialPointer);
	}, []);
	const onWindowPointerMove = useCallback(
		(event: PointerEvent) => {
			const el: HTMLDivElement | null = containerRef.current;
			if (!el) {
				return;
			}
			const rect: DOMRect = el.getBoundingClientRect();
			const inside: boolean =
				event.clientX >= rect.left &&
				event.clientX <= rect.right &&
				event.clientY >= rect.top &&
				event.clientY <= rect.bottom;
			if (!inside) {
				resetPointer();
				return;
			}
			const xPercent: number = clampPercent(((event.clientX - rect.left) / rect.width) * 100);
			const yPercent: number = clampPercent(((event.clientY - rect.top) / rect.height) * 100);
			schedulePointer({ xPercent, yPercent });
		},
		[resetPointer, schedulePointer],
	);
	useEffect(() => {
		window.addEventListener('pointermove', onWindowPointerMove, { passive: true });
		window.addEventListener('pointercancel', resetPointer, { passive: true });
		window.addEventListener('blur', resetPointer);
		return () => {
			window.removeEventListener('pointermove', onWindowPointerMove);
			window.removeEventListener('pointercancel', resetPointer);
			window.removeEventListener('blur', resetPointer);
			if (rafRef.current !== 0) {
				window.cancelAnimationFrame(rafRef.current);
			}
		};
	}, [onWindowPointerMove, resetPointer]);
	return (
		<div ref={containerRef} className="absolute inset-0 overflow-hidden" aria-hidden="true">
			<div
				className="absolute inset-0 opacity-[0.4]"
				style={{
					backgroundImage: `
            linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
					backgroundSize: '64px 64px',
					transform: `perspective(900px) rotateX(56deg) translateY(-12%) scale(1.15)`,
					transformOrigin: '50% 0%',
				}}
			/>
			<div
				className="absolute inset-0"
				style={{
					background: `radial-gradient(520px at ${pointer.xPercent}% ${pointer.yPercent}%, rgba(201,169,98,0.12), transparent 62%)`,
				}}
			/>
			<div className="grain-overlay absolute inset-0 opacity-[0.18] mix-blend-overlay" />
		</div>
	);
}
