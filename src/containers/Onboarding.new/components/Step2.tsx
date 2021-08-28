import Box from 'components/Box';
import { StatesContext } from 'components/StatesContext';
import Text from 'components/Text';
import useContract from 'ethereum/useContract';
import useEthers from 'ethereum/useEthers';
import useListeners from 'ethereum/useListeners';
import useSigner from 'ethereum/useSigner';
import contracts from 'ethereum/utils/contracts';
import React, { useContext, useEffect, useState } from 'react';
import HexaAlert from './HexaAlert';
import HexaButton from './HexaButton';
import { StepProps } from './Step0';

const Step2 = ({ setStep }: StepProps) => {
	return (
		<Box alignSelf="flex-start" mx="wxxl">
			<HexaAlert>
				<Text as="h3" fontFamily="Cinzel" fontWeight="bold" mt="mxxxl" mb="mxl">
					Step. 2
				</Text>
				<Text as="h1" fontWeight="bold" fontFamily="El Messiri" lineHeight="28.8px">
					Describe your Victory.
				</Text>
				<Text as="h3" color="yellow-text-50" fontFamily="El Messiri" mt="mm" textAlign="center">
					Describe your victory over this pandemic and submit.
				</Text>
				<HexaButton mb="wxs" size="small" disabled alignSelf="center">
					<Text as="h6" fontFamily="El Messiri" zIndex={1}>
						Next
					</Text>
				</HexaButton>
			</HexaAlert>
			<Box
				mx={{ tabS: '33rem', mobS: '0rem' }}
				position={{ tabS: 'absolute', mobS: 'relative' }}
				width={{ tabS: '30%', mobs: '' }}
				top={{ tabS: 'wxl' }}
				left={{ tabS: '16rem', mobS: '0' }}
				px="wm"
				pt="wl"
				display="block"
				border="1px solid #7A7369"
				zIndex={1}
				backgroundColor="linear-gradient(180deg, #401F00 -8.92%, rgba(35, 0, 0, 0) 48.15%)"
			>
				<Text as="h3">Describe your victory over this pandemic and submit.</Text>
				<Box
					as="textarea"
					mt="ms"
					css={`
						resize: none;
					`}
					border="none"
					height="30vh"
					placeholder="start typing here..."
					color="#FFD37E80"
					justifyContent="center"
					fontFamily="inherit"
					fontSize="medium"
					fontWeight="inherit"
					width="100%"
					outline="none"
					backgroundColor="rgba(192, 150, 69, 0.1)"
				></Box>
				<HexaButton my="wxs" size="small" disabled alignSelf="center" mx={{ deskM: 'wl' }}>
					<Text as="h5" fontFamily="El Messiri" textAlign="center">
						Submit
					</Text>
				</HexaButton>
			</Box>
		</Box>
	);
};

export default Step2;
