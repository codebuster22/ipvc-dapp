import React from 'react';
import Box, { BoxProps } from 'components/Box';

export const fontSizes = {
	h1: { mobS: '2.8rem', tabS: '3.2rem', deskM: '3.6rem' },
	h2: { mobS: '2rem', tabS: '2.8rem', deskM: '3.2rem' },
	h3: { mobS: '1.6rem', tabS: '2rem', deskM: '2.4rem' },
	h4: { mobS: '1.4rem', tabS: '1.6rem', deskM: '2rem' },
	h5: { mobS: '1.2rem', tabS: '1.4rem', deskM: '1.6rem' },
	h6: { mobS: '1rem', tabS: '1.2rem', deskM: '1.4rem' },
	p: { mobS: '1.4rem', tabS: '1.6rem', deskM: '2rem' },
};

const fontWeights = {
	'extra-bold': 800,
	bold: 700,
	medium: 600,
	regular: 500,
	thin: 400,
};

export interface TextProps extends BoxProps {
	as?: 'head' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
	fontWeight?: 'extra-bold' | 'bold' | 'medium' | 'regular' | 'thin';
	children?: string | React.ReactNode;
	id?: string;
	dangerouslySetInnerHTML?: { __html: string };
	onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const Text = ({
	as = 'p',
	fontWeight = 'regular',
	color = 'body-text',
	children,
	...restProps
}: TextProps): JSX.Element => {
	const fs = fontSizes[as];
	const fw = fontWeights[fontWeight];

	return (
		<Box margin={0} padding={0} as={as} color={color as string} fontSize={fs} fontWeight={fw} {...restProps}>
			{children}
		</Box>
	);
};

export default Text;
