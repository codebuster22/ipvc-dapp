import { ethers } from "ethers";
import { useEffect, useState } from "react";
import contracts from '../contracts/contracts.json';

const useContract = (contractName, provider) => {
    const [contract, setContract] = useState();

    const getContractDetails = (contractName, provider) => {
        const network = contracts[provider.provider.networkVersion];
        const contractDetails = network[Object.keys(network)[0]].contracts[contractName];
        return {address: contractDetails.address, abi: contractDetails.abi};
    }

    useEffect(() => {
        if(provider?.provider){
            const {address, abi} = getContractDetails(contractName, provider);
            setContract(new ethers.Contract(address, abi, provider));
        }
    }, [provider]);

    return contract;
}

export default useContract;