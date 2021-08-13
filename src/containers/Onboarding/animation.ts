import { gsap, Linear } from 'gsap';

export const rotate = (id) => {
	gsap.to(id, {
		rotate: '-360',
		transformOrigin: '50% 40%',
		display: 'block',
		repeat: -1,
		ease: Linear.easeNone,
		duration: 2,
	});
};
