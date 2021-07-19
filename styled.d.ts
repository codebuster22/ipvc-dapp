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
		space: string[] & Partial<ISpace>;
		breakpoints: string[] & Partial<IBreakpoints>;
	}
}
