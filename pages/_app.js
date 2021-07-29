/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react';
import { debounce } from 'lodash';
import { ThemeProvider } from 'styled-components';
import theme from '../src/styleguide/theme';
import '../styles/globalStyles.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import getEthers from '../src/utils/getEthers';

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
	const [ethers, setEthers] = useState();
	const [provider, setProvider] = useState();
	const [signer, setSigner] = useState();

	const setup = async () => {
		const result = await getEthers();
		setEthers(result.ethers);
		setProvider(result.provider);
	};

	useEffect(() => {
		setup();
		ethereum.on('accountsChanged', async (accounts) => {
			if (provider) {
				setSigner(provider.getSigner());
			}
		});
		ethereum.on('chainChanged', (chainId) => {
			window.location.reload();
		});
	}, [provider, ethers]);

	useEffect(() => {
		if (provider) {
			setSigner(provider.getSigner());
		}
	}, [provider, ethers]);
	// till here

	return (
		<QueryClientProvider client={queryClient}>
			<ThemeProvider theme={theme}>
				<Component {...pageProps} />
			</ThemeProvider>
		</QueryClientProvider>
	);
};

export default MyApp;
