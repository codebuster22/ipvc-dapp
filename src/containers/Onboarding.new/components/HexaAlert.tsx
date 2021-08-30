import Box from 'components/Box';
import theme from 'styleguide/theme';

const HexaAlert = ({ children }) => {
	return (
		<Box
			top={0}
			left={150}
			position="absolute"
			display="flex"
			bg="yellow-text-50"
			p="mxxs"
			pt="0"
			zIndex={2}
			css={`
				clip-path: polygon(0% 0%, 100% 0%, 100% 85%, 50% 100%, 0% 85%);
			`}
		>
			<Box
				bg="black-30"
				css={`
					clip-path: polygon(0% 0%, 100% 0%, 100% 85%, 50% 100%, 0% 85%);
				`}
				pb="ws"
			>
				<Box
					color="yellow-text"
					px="mxl"
					maxWidth="41.4rem"
					column
					alignItems="flex-start"
					backgroundImage={`linear-gradient(180deg, ${theme.colors['blue-40']} -8.92%, ${theme.colors['blue-10']}00 56.66%)`}
				>
					{children}
				</Box>
			</Box>
		</Box>
	);
};

export default HexaAlert;
