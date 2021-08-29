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
import { StepProps } from './Step0';

interface Props extends StepProps {
	setAddress: (string) => void;
}

const Step1 = (props: Props) => {
	const [provider, setProvider] = useEthers();
	const [signer, setSigner] = useSigner(provider);
	const [address, setAddress] = useState<string>('');
	const warriorCore = useContract(contracts.warrior, provider);

	useListeners(provider, setProvider, setSigner);

	const state = useContext(StatesContext);

	useEffect(() => {
		if (provider) {
			state?.setProvider(provider);
			console.log({ provider });
		}
	}, [provider]);

	useEffect(() => {
		if (signer !== null) {
			const getAddress = async () => {
				state?.setSigner(signer);

				try {
					const address = await signer?.getAddress();
					console.log({ address });

					setAddress(address);
					props.setAddress(address);
				} catch (e) {
					setAddress(null);
					props.setAddress('');
				}
				// setChainName(chains[signer.provider.provider.chainId.toString()]);
			};
			setInterval(getAddress, 2000);
			getAddress();
		}
	}, [signer]);

	useEffect(() => {
		console.log(address);

		if (address && signer != null) {
			console.log({ address });
			clearInterval();
			setTimeout(() => {
				props.setStep(2);
			}, 1000);
		}
	}, [address]);

	useEffect(() => {
		if (warriorCore) {
			console.log(warriorCore);
			state?.setWarriorCore(warriorCore);
		}
	}, [warriorCore]);

	return (
		<Box alignSelf="flex-start" mx="wxxl">
			<HexaAlert>
				<Text as="h3" fontFamily="Cinzel" fontWeight="bold" mt="mxxxl" mb="mxl">
					Step. 1
				</Text>
				<Text as="h1" fontWeight="bold" fontFamily="El Messiri" lineHeight="28.8px">
					Connect Metamask
				</Text>
				<Text as="h3" color="yellow-text-50" fontFamily="El Messiri" mt="mm" textAlign="center">
					Allow Metamask to connect with https://warriors.chainlabs.in
				</Text>
			</HexaAlert>
		</Box>
	);
};

export default Step1;
