import { ethers } from "ethers";
import { useEffect } from "react";

const useListeners = (provider, setProvider, setSigner) => {
    useEffect(() => {
        if(provider){
            window.ethereum.on('accountsChanged', async (accounts) => {
                if (provider) {
                    setSigner(provider.getSigner());
                }
            });
            window.ethereum.on('chainChanged', async (chainId) => {
                const PROVIDER = new ethers.providers.Web3Provider(window.ethereum);
                setProvider(PROVIDER);
            });
        }
    }, [provider]);
}

export default useListeners;