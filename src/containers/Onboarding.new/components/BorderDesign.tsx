import Box from 'components/Box';
import theme from 'styleguide/theme';

const BorderDesign = ({ rotated, color }: { rotated?: boolean; color: string }) => {
	const styles = rotated ? { bottom: 0, transform: 'rotate(45deg)' } : { top: 0 };
	return (
		<Box position="absolute" width="100%" left={0} {...{ styles }}>
			<Box borderBottom={`4px solid ${color}`} height="2.2rem" width="100%"></Box>
			<Box
				borderBottom={`4px solid ${color}`}
				borderLeft={`4px solid ${color}`}
				height="12rem"
				width="2.2rem"
				position="absolute"
				top={2}
				transform="skewY(45deg)"
				right={0}
			></Box>
			<Box
				borderBottom={`4px solid ${color}`}
				borderRight={`4px solid ${color}`}
				height="12rem"
				width="2.2rem"
				position="absolute"
				top={2}
				left={0}
				transform="skewY(-45deg)"
			></Box>
		</Box>
	);
};

export default BorderDesign;
