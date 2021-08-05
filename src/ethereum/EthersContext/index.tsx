import React from 'react';
import { ProviderProps, SignerProps } from '../types';

const EthersContext = React.createContext({
	provider: {},
	signer: {},
	warriorCore: {},
});

export interface EthersProviderProps {
	children?: React.ReactNode;
	provider: ProviderProps;
	signer: SignerProps;
	warriorCore: any;
}

const EthersProvider = ({ children, provider, signer, warriorCore }: EthersProviderProps): JSX.Element => {
	return (
		<EthersContext.Provider
			value={{
				provider,
				signer,
				warriorCore,
			}}
		>
			{children}
		</EthersContext.Provider>
	);
};

export { EthersContext, EthersProvider };
