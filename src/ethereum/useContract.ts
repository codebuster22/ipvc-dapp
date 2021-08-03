import { ethers } from 'ethers';
import { useEffect, useState } from 'react';
import contracts from '../contracts/contracts.json';
import { ProviderProps } from './types';

const useContract = (contractName: string, provider: ProviderProps): any => {
	const [contract, setContract] = useState(null);

	const getContractDetails = (contractName, provider) => {
		const network = contracts[provider.provider.networkVersion];
		const contractDetails = network[Object.keys(network)[0]].contracts[contractName];
		return { address: contractDetails.address, abi: contractDetails.abi };
	};

	useEffect(() => {
		if (provider?.provider) {
			try {
				const { address, abi } = getContractDetails(contractName, provider);
				setContract(new ethers.Contract(address, abi, provider));
			} catch (error) {
				setContract(undefined);
				return error.message;
			}
		}
	}, [provider]);

	return contract;
};

export default useContract;
