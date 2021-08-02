import getEthers from './utils/getEthers.js';
import { useEffect, useState } from 'react';
import { ETH_REQUEST_ACCOUNT } from './utils/methods';

const useEthers = () => {
    const [provider, setProvider] = useState();
	const [ ethers, setEthers ] = useState();

	const requestAccount = async () => {
		await window.ethereum.request({ method: ETH_REQUEST_ACCOUNT });
	};

	useEffect(() => {
		const connectToEthereum = async () => {
			const { provider, ethers } = await getEthers();
			if (provider) {
				await requestAccount();
			}
			setProvider(provider);
			setEthers(ethers);
		};
		connectToEthereum();
	}, [provider]);

	return [ provider, setProvider, ethers ];
}

export default useEthers;