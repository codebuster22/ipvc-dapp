import { useState, useEffect } from "react"

const useSigner = (provider) => {
    const [signer, setSigner] = useState();

    useEffect(()=>{
        if(provider?.provider){
            setSigner(provider.getSigner());
        }
    }, [provider]);

    return [signer, setSigner];
}

export default useSigner;