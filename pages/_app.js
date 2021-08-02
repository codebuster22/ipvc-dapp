/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react';
import { debounce } from 'lodash';
import { ThemeProvider } from 'styled-components';
import theme from '../src/styleguide/theme';
import '../styles/globalStyles.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import useEthers from '../src/ethereum/useEthers';
import useContract from '../src/ethereum/useContract';
import useSigner from '../src/ethereum/useSigner';
import chains from '../src/ethereum/utils/chains';
import contracts from '../src/ethereum/utils/contracts.js';
import useListeners from '../src/ethereum/useListeners';

const queryClient = new QueryClient();

// This default export is required in a new `pages/_app.js` file.
const MyApp = ({ Component, pageProps }) => {
	useEffect(() => {
		// Set a custom CSS Property for Height
		// See https://css-tricks.com/the-trick-to-viewport-units-on-mobile/

		// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
		if (process.browser) {
			const vh = window.innerHeight * 0.01;
			// Then we set the value in the --vh custom property to the root of the document
			document.documentElement.style.setProperty('--vh', `${vh}px`);

			const handleResize = debounce(() => {
				// We execute the same script as before
				const vh = window.innerHeight * 0.01;
				document.documentElement.style.setProperty('--vh', `${vh}px`);
			}, 150);

			window.addEventListener('resize', handleResize);
			return () => {
				if (process.browser) {
					window.removeEventListener('resize', handleResize);
				}
			};
		}
	});

	// this should be on the topmost element
	// starting from here
	const [provider, setProvider, ethers] = useEthers();
	const [signer, setSigner] = useSigner(provider);
	const [address, setAddress] = useState();
	const [chainName, setChainName] = useState();
	const warriorCore = useContract(contracts.warrior, provider);
	const geneGenerator = useContract(contracts.geneGenerator, provider);

	useListeners(provider, setProvider, setSigner);

	useEffect(() => {
		if (signer?.provider) {
			const getAddress = async () => {
				setAddress(await signer.getAddress());
				setChainName(chains[signer.provider.provider.chainId.toString()]);
			};
			getAddress();
		}
	}, [signer]);

	const getCurrentGen = async () => {
		console.log((await warriorCore.currentGeneration()).toString());
		console.log((await warriorCore.currentGenerationMaxPopulation()).toString());
		console.log((await warriorCore.maxPopulation()).toString());
	};

	return (
		<QueryClientProvider client={queryClient}>
			<ThemeProvider theme={theme}>
				<Component {...pageProps} />
			</ThemeProvider>
		</QueryClientProvider>
	);
};

export default MyApp;
