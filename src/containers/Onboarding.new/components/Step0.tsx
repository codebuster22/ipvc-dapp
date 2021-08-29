import Box from 'components/Box';
import Text from 'components/Text';
import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';
import HexaButton from './HexaButton';

export interface StepProps {
	setStep: (number) => void;
}

const Step0 = ({ setStep }: StepProps) => {
	const router = useRouter();
	return (
		<React.Fragment>
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
				<HexaButton onClick={() => setStep(1)}>
					<Text as="h1" fontFamily="El Messiri" zIndex={2}>
						Let's Go
					</Text>
				</HexaButton>
				<Text
					as="h1"
					fontFamily="El Messiri"
					ml={{ mobS: 'ml', tabS: 'wl' }}
					onClick={() => router.push('/gallery')}
				>
					View Gallery
				</Text>
			</Box>
		</React.Fragment>
	);
};

export default Step0;

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
