import { gsap } from 'gsap';

export const animateTop = (id): void => {
	gsap.fromTo(
		id,
		{ y: '30%', autoAlpha: 0, display: 'block' },
		{ y: '0%', autoAlpha: 1, ease: 'easeOutExpo', duration: 0.5, delay: 0.3 }
	);
};

export const animateDown = (id): void => {
	gsap.fromTo(
		id,
		{ y: '10%', autoAlpha: 0, display: 'block' },
		{ y: '0%', autoAlpha: 1, ease: 'easeOutExpo', duration: 0.5, delay: 0.3 }
	);
};

export const animateLeft = (id): void => {
	gsap.fromTo(
		id,
		{ x: '100%', autoAlpha: 0, display: 'block' },
		{ x: '80%', autoAlpha: 1, ease: 'easeOutExpo', duration: 0.5, delay: 0.3 }
	);
};

export const animateRight = (id): void => {
	gsap.fromTo(
		id,
		{ x: '-10%', autoAlpha: 0, display: 'block' },
		{ x: '10%', autoAlpha: 5, ease: 'easeOutExpo', duration: 0.5, delay: 0.3 }
	);
};
