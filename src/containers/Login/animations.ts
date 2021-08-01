import { gsap } from 'gsap';

export const startStep2 = (): void => {
	gsap.fromTo(
		'.otp-step-1',
		{ y: '10%', autoAlpha: 0, display: 'block' },
		{ y: '0%', autoAlpha: 1, ease: 'easeOutExpo', duration: 0.5 }
	);
	gsap.fromTo(
		'.otp-step-2',
		{ y: '10%', autoAlpha: 0, display: 'block' },
		{ y: '0%', autoAlpha: 1, ease: 'easeOutExpo', duration: 0.5, delay: 0.3 }
	);
};

export const revertStep2 = (): void => {
	gsap.to('.otp-step-1', { y: '10%', autoAlpha: 0, display: 'none' });
	gsap.to('.otp-step-2', { y: '10%', autoAlpha: 0, display: 'none' });
};
