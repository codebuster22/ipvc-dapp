import Box from 'components/Box';
import theme from 'styleguide/theme';

const BorderDesign = ({ rotated }: { rotated?: boolean }) => {
	const styles = rotated ? { bottom: 0, transform: 'rotate(45deg)' } : { top: 0 };
	return (
		<Box position="absolute" width="100%" left={0} {...{ styles }}>
			<Box
				borderBottom={`4px solid ${theme.colors['yellow-10']}`}
				// borderTop={rotated ? `4px solid ${theme.colors['yellow-10']}` : 'none'}
				height="2.2rem"
				width="100%"
			></Box>
			<Box
				borderBottom={`4px solid ${theme.colors['yellow-10']}`}
				borderLeft={`4px solid ${theme.colors['yellow-10']}`}
				height="12rem"
				width="2.2rem"
				position="absolute"
				top={2}
				transform="skewY(45deg)"
				right={0}
			></Box>
			<Box
				borderBottom={`4px solid ${theme.colors['yellow-10']}`}
				borderRight={`4px solid ${theme.colors['yellow-10']}`}
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
