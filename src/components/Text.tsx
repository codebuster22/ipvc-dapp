import React from 'react';
import Box, { BoxProps } from '@/components/Box';

export const fontSizes = {
	h1: { mobileXs: '2rem', tabletMd: '2.8rem', desktopMd: '3.2rem' },
	h2: { mobileXs: '1.6rem', tabletMd: '2rem', desktopMd: '2.4rem' },
	h3: { mobileXs: '1.4rem', tabletMd: '1.8rem', desktopMd: '2rem' },
	h4: { mobileXs: '1.2rem', tabletMd: '1.4rem', desktopMd: '1.6rem' },
	h5: { mobileXs: '1rem', tabletMd: '1.2rem', desktopMd: '1.4rem' },
	p: { mobileXs: '1.4rem', tabletMd: '1.6rem', desktopMd: '2rem' },
};

const fontWeights = {
	'extra-bold': 800,
	bold: 700,
	thin: 600,
	medium: 600,
	regular: 400,
};

export interface TextProps extends BoxProps {
	as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
	fontWeight?: 'extra-bold' | 'bold' | 'medium' | 'regular' | 'thin';
	children?: string | React.ReactNode;
	id?: string;
	dangerouslySetInnerHTML?: { __html: string };
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
