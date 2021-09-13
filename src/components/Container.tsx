import styled from 'styled-components';
import Box from 'components/Box';

export const containerPaddingX = {
	mobS: 'mm',
	mobL: 'mxl',
	tabS: 'wxxs',
	tabL: 'ws',
	deskM: 'wxxl',
	deskL: 0,
};

const Container = styled(Box).attrs(() => ({
	px: containerPaddingX,
}))(
	({ theme }) => `
	padding: 0;
	margin: 0 auto;
	width: 100%;

	@media screen and (min-width: ${theme.breakpoints.deskM}) {
		max-width: 112rem;
		margin: 0 auto;
	}

	@media screen and (min-width: ${theme.breakpoints.deskM}) and (orientation: landscape) {
		padding: 0;
		margin: 0 auto;
	}
`
);

export default Container;
