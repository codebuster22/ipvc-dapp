// use this file to connect with metamask or with some JSON RPC
import { ethers } from 'ethers';

// To expose ethereum to the window object
declare let window: any;

export interface IEthers {
	provider: ethers.providers.Provider | ethers.providers.JsonRpcProvider;
	ethers: any;
}

const getEthers = (): Promise<IEthers> =>
	new Promise((resolve, reject) => {
		window.addEventListener('load', async () => {
			if (window.ethereum) {
				const provider = new ethers.providers.Web3Provider(window.ethereum);
				try {
					await window.ethereum.enable();
					resolve({ provider, ethers });
				} catch (error) {
					console.error(error);
					reject(error);
				}
			} else if (window.web3) {
				const provider = new ethers.providers.Web3Provider(window.web3);
				try {
					await window.web3.enable();
					resolve({ provider, ethers });
				} catch (error) {
					console.error(error);
					reject(error);
				}
			} else {
				const provider = new ethers.providers.JsonRpcProvider('http://127.0.0.1:8545');
				console.log('No web3 instance injected, using local web3.');
				resolve({ provider, ethers });
			}
		});
	});

export default getEthers;
