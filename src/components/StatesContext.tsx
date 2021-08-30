import React from 'react';
import { ProviderProps, SignerProps } from '../ethereum/types';

const StatesContext = React.createContext({
	provider: {},
	signer: {},
	warriorCore: {},
});

export interface StatesProviderProps {
	children?: React.ReactNode;
	provider: ProviderProps;
	signer: SignerProps;
	warriorCore: any;
}

const StatesProvider = ({ children, provider, signer, warriorCore }: StatesProviderProps): JSX.Element => {
	return (
		<StatesContext.Provider
			value={{
				provider,
				signer,
				warriorCore,
			}}
		>
			{children}
		</StatesContext.Provider>
	);
};

export { StatesContext, StatesProvider };
