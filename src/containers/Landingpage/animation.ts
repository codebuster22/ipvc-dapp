import { gsap } from 'gsap';

export const animate = (): void => {
	gsap.fromTo(
		'#head1',
		{ y: '30%', autoAlpha: 0, display: '' },
		{ y: '0%', autoAlpha: 1, ease: 'easeOutExpo', duration: 0.5 }
	);
	gsap.fromTo(
		'#head2',
		{ y: '30%', autoAlpha: 0, display: '' },
		{ y: '0%', autoAlpha: 1, ease: 'easeOutExpo', duration: 0.5, delay: 0.5 }
	);
	gsap.fromTo(
		'#head3',
		{ y: '30%', autoAlpha: 0, display: '' },
		{ y: '0%', autoAlpha: 1, ease: 'easeOutExpo', duration: 0.5, delay: 1 }
	);
};
