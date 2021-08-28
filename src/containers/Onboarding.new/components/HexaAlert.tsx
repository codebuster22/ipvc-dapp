import Box from 'components/Box';

const HexaAlert = ({ children }) => {
	return (
		<Box
			position="absolute"
			display="flex"
			bg="yellow-text-50"
			p="4px"
			pt="0"
			zIndex={2}
			css={`
				clip-path: polygon(0% 0%, 100% 0%, 100% 85%, 50% 100%, 0% 85%);
			`}
		>
			<Box
				bg="#1F1D19"
				css={`
					clip-path: polygon(0% 0%, 100% 0%, 100% 85%, 50% 100%, 0% 85%);
				`}
			>
				<Box
					color="yellow-text"
					px="mxl"
					maxWidth="41.4rem"
					column
					alignItems="flex-start"
					backgroundImage="linear-gradient(180deg, #401F00 16.98%, #23000000 80.33%)"
				>
					{children}
				</Box>
			</Box>
		</Box>
	);
};

export default HexaAlert;
