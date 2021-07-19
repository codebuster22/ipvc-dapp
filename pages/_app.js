import { debounce } from 'lodash';
import { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '@/styleguide/theme';
import '../styles/globalStyles.css';

// This default export is required in a new `pages/_app.js` file.
const MyApp = ({ Component, pageProps }) => {
	useEffect(() => {
		// Set a custom CSS Property for Height
		// See https://css-tricks.com/the-trick-to-viewport-units-on-mobile/

		// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
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
			window.removeEventListener('resize', handleResize);
		};
	});

	return (
		<ThemeProvider theme={theme}>
			<Component {...pageProps} />
		</ThemeProvider>
	);
};

export default MyApp;
