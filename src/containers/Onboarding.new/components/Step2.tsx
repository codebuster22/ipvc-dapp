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
				<Text as="h3" color="yellow-text-50" fontFamily="El Messiri" mt="mm" textAlign="center" mb="wxs">
					Describe your victory over this pandemic and submit.
				</Text>
			</HexaAlert>
		</Box>
	);
};

export default Step2;
