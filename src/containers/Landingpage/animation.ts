import { gsap } from 'gsap';

export const animate = (): void => {
	gsap.fromTo(
		'#head1',
		{ y: '120', autoAlpha: 0, display: '' },
		{ y: '0', autoAlpha: 1, ease: 'easeOutExpo', duration: 0.5 }
	);
	gsap.fromTo(
		'#head2',
		{ y: '100', autoAlpha: 0, display: '' },
		{ y: '0', autoAlpha: 1, ease: 'easeOutExpo', duration: 0.5, delay: 0.2 }
	);
	gsap.fromTo(
		'#head3',
		{ y: '80', autoAlpha: 0, display: '' },
		{ y: '0', autoAlpha: 1, ease: 'easeOutExpo', duration: 0.5, delay: 0.3 }
	);
	gsap.fromTo('#arrow', { y: 0 }, { y: 8, ease: 'easeOutExpo', duration: 0.5, yoyo: true, repeat: -1 });
};
