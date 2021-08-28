import useListeners from 'ethereum/useListeners';
import React, { useEffect, useState } from 'react';
import { ProviderProps, SignerProps } from '../ethereum/types';

const StatesContext = React.createContext({
	provider: {},
	setProvider: null,
	signer: {},
	setSigner: null,
	warriorCore: {},
	setWarriorCore: null,
});

export interface StatesProviderProps {
	children?: React.ReactNode;
}

const StatesProvider = ({ children }: StatesProviderProps): JSX.Element => {
	const [provider, setProvider] = useState<ProviderProps>(null);
	const [signer, setSigner] = useState<SignerProps>(null);
	const [warriorCore, setWarriorCore] = useState<any>(null);

	useEffect(() => {
		console.log('Signer=', signer);
	}, [signer]);

	useListeners(provider, setProvider, setSigner);

	return (
		<StatesContext.Provider
			value={{
				provider,
				signer,
				warriorCore,
				setProvider,
				setSigner,
				setWarriorCore,
			}}
		>
			{children}
		</StatesContext.Provider>
	);
};

export { StatesContext, StatesProvider };
