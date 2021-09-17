import Box from 'components/Box';
import Container from 'components/Container';
import React from 'react';
import theme from 'styleguide/theme';
import Footer from './components/Footer';
import MainSection from './components/MainSection';
import Navbar from './components/Navbar';

const LandingPageComp = () => {
	return (
		<Box minHeight="100vh" maxWidth="100vw" bg="black-30" overflowX="hidden">
			<Navbar />
			<Box
				backgroundImage={`linear-gradient(180deg, ${theme.colors['blue-50']} -20.11%, ${theme.colors['blue-10']}00 12.76%)`}
				minHeight="100vh"
				color="yellow-text"
				fontFamily="El Messiri"
			>
				<Container>
					<MainSection />
				</Container>
			</Box>
			<Footer />
		</Box>
	);
};

export default LandingPageComp;
