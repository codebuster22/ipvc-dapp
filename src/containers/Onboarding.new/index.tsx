import Box from 'components/Box';
import Text from 'components/Text';
import React from 'react';
import styled from 'styled-components';

const OnboardingComp = () => {
	return (
		<Box bg="#0F1118" minHeight="100vh">
			<Box
				backgroundImage="linear-gradient(180deg, #401F00 16.98%, #23000000 80.33%)"
				minHeight="100vh"
				fontFamily="Cinzel Decorative"
				color="yellow-text"
				column
				alignItems="center"
			>
				<Box center mb={{ mobS: '10rem', tabS: '20rem' }} minWidth="100%" mt="ws">
					<StyledLine flex={1} direction="right" />
					<Diamond />
					<Text as="h1" fontWeight="extra-bold" px={{ mobS: 'ml', tabS: 'wl' }}>
						Warriors
					</Text>
					<Diamond />
					<StyledLine flex={1} direction="left" />
				</Box>
				<Text
					fontSize={{ mobS: '30px', tabS: '64px' }}
					fontWeight="medium"
					center
					textTransform="capitalize"
					textAlign="center"
					px="ms"
					maxWidth={{ mobS: '100%', tabS: '120rem' }}
				>
					Generating a Warrior is a simple 3 step process.
				</Text>
				<Text
					mt="mxxxl"
					as="h1"
					fontFamily="El Messiri"
					color="yellow-text-50"
					fontWeight="regular"
					textAlign="center"
				>
					Follow these steps and get yourself
					<br />a unique NFT collectible.
				</Text>
				<Box row alignItems="center" mt={{ mobS: 'mxl', tabS: 'wm' }}>
					<HexaButton>
						<Text as="h1" fontFamily="El Messiri" zIndex={2}>
							Let's Go
						</Text>
					</HexaButton>
					<Text as="h1" fontFamily="El Messiri" ml={{ mobS: 'ml', tabS: 'wl' }}>
						View Gallery
					</Text>
				</Box>
			</Box>
		</Box>
	);
};

export default OnboardingComp;

const StyledLine = styled(Box)(
	(props: { theme: any; direction: string }) => `
	background-image: linear-gradient(to ${props.direction}, #15110A 0%, #362B1A 0%, #FFC977 100%);
	height: 4px;
`
);

const Diamond = styled(Box)(
	(props) => `
		height: 16px;
		width: 16px;
		background: ${props.theme.colors['yellow-text']};
		transform: rotate(45deg);
	`
);

const HexaButton = ({ children, onClick }: { children: React.ReactNode; onClick?: () => any }) => {
	return (
		<Box
			px="mxxs"
			py="mxxs"
			css={`
				clip-path: polygon(7% 0%, 93% 0%, 100% 50%, 93% 100%, 7% 100%, 0% 50%);
			`}
			bg="yellow-text"
			onClick={onClick}
			cursor="pointer"
		>
			<Box
				px={{ mobS: 'mxxl', tabS: 'wxxl' }}
				py={{ mobS: 'mxxs', tabS: 'mm' }}
				css={`
					clip-path: polygon(7% 0%, 93% 0%, 100% 50%, 93% 100%, 7% 100%, 0% 50%);
				`}
				bg="#1F1D19"
			>
				{children}
			</Box>
		</Box>
	);
};
