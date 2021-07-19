import { DefaultTheme } from 'styled-components';

//Breakpoints
const breakpoints: DefaultTheme['breakpoints'] = ['319px', '424px', '767px', '1023px', '1199px'];

breakpoints.mobS = breakpoints[0]; // 319px
breakpoints.mobL = breakpoints[1]; // 424px
breakpoints.tabS = breakpoints[2]; // 767px
breakpoints.tabL = breakpoints[3]; // 1023px
breakpoints.deskM = breakpoints[4]; //1199px

//Spacing
const space: DefaultTheme['space'] = [
	'0',
	'0.4rem',
	'0.8rem',
	'1.2rem',
	'1.6rem',
	'2rem',
	'2.4rem',
	'2.8rem',
	'3.2rem',
	'4rem',
	'4.8rem',
	'5.6rem',
	'6.4rem',
	'8rem',
	'10rem',
	'12rem',
];

space.mxxs = space[1];
space.mxs = space[2];
space.ms = space[3];
space.mm = space[4];
space.ml = space[5];
space.mxl = space[6];
space.mxxl = space[7];
space.mxxxl = space[8];

space.wxxs = space[9];
space.wxs = space[10];
space.ws = space[11];
space.wm = space[12];
space.wl = space[13];
space.wxl = space[14];
space.wxxl = space[15];

const theme: DefaultTheme = {
	space,
	breakpoints,
};

export default theme;
