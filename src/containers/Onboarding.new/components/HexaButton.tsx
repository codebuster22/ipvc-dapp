import Box, { BoxProps } from 'components/Box';

interface Props extends BoxProps {
	children: React.ReactNode;
	onClick?: (any) => any;
	size?: 'small' | 'large';
	disabled?: boolean;
}

const HexaButton = ({ children, onClick, size, disabled, ...otherProps }: Props) => {
	return (
		// @ts-expect-error BoxProps
		<Box
			px="mxxs"
			py="mxxs"
			css={`
				clip-path: polygon(7% 0%, 93% 0%, 100% 50%, 93% 100%, 7% 100%, 0% 50%);
			`}
			bg={disabled ? 'yellow-text-50' : 'yellow-text'}
			opacity={disabled ? 0.2 : 1}
			onClick={onClick}
			cursor="pointer"
			{...otherProps}
		>
			<Box
				px={size === 'small' ? { mobS: 'ms', tabS: 'ws' } : { mobS: 'mxxl', tabS: 'wxxl' }}
				py={size === 'small' ? { mobS: 'mxxxs', tabS: 'mxs' } : { mobS: 'mxxs', tabS: 'mm' }}
				css={`
					clip-path: polygon(7% 0%, 93% 0%, 100% 50%, 93% 100%, 7% 100%, 0% 50%);
				`}
				bg="#1F242D"
				opacity={1}
			>
				{children}
			</Box>
		</Box>
	);
};

export default HexaButton;
