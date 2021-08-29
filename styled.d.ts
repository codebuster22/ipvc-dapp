import 'styled-components';

interface ISpace {
	mxxs: string;
	mxs: string;
	ms: string;
	mm: string;
	ml: string;
	mxl: string;
	mxxl: string;
	mxxxl: string;

	wxxs: string;
	wxs: string;
	ws: string;
	wm: string;
	wl: string;
	wxl: string;
	wxxl: string;
}

interface IBreakpoints {
	mobS: string;
	mobL: string;
	tabS: string;
	tabL: string;
	deskM: string;
}

declare module 'styled-components' {
	export interface DefaultTheme {
		colors: {
			'pink-100': string;
			'purple-10': string;
			'purple-100': string;
			'purple-50': string;
			'gray-100': string;
			'orange-50': string;
			'green-100': string;

			'white-text': string;

			'yellow-10': string;
			'yellow-text': string;
			'yellow-text-50': string;

			'black-10': string;
			'black-20': string;
			'black-30': string;
			'black-40': string;

			'blue-10': string;
			'blue-20': string;
			'blue-40': string;
			'blue-50': string;
		};
		space: string[] & Partial<ISpace>;
		breakpoints: string[] & Partial<IBreakpoints>;
		colors: string[] & Partial<IColors>;
	}
}
