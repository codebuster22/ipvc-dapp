import getEthers from './utils/getEthers';
import { useEffect, useState } from 'react';
import { ETH_REQUEST_ACCOUNT } from './utils/methods';
import { ProviderProps, UseEthersResult } from './types';

// To expose ethereum to the window object
declare let window: any;

const useEthers = (): UseEthersResult => {
	const [provider, setProvider] = useState<ProviderProps>(null);
	const [ethers, setEthers] = useState<any>(null);

	const requestAccount = async () => {
		if (process.browser) await window?.ethereum?.request({ method: ETH_REQUEST_ACCOUNT });
	};

	useEffect(() => {
		const process = async () => {
			const { provider, ethers } = await getEthers();
			setProvider(provider as ProviderProps);
			setEthers(ethers);
		};
		process();
	}, []);

	useEffect(() => {
		const connectToEthereum = async () => {
			if (provider) {
				try {
					await requestAccount();
				} catch (e) {
					console.log(e);
				}
			}
		};
		connectToEthereum();
	}, [provider]);

	return [provider, setProvider, ethers];
};

export default useEthers;
