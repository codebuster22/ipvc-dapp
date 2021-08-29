import Box from 'components/Box';
import React from 'react';
import theme from 'styleguide/theme';
import Footer from './components/Footer';
import MainSection from './components/MainSection';
import Navbar from './components/Navbar';

const LandingPageComp = () => {
	return (
		<Box minHeight="100vh" bg="black-30">
			<Navbar />
			<Box
				backgroundImage={`linear-gradient(180deg, ${theme.colors['blue-50']} -20.11%, ${theme.colors['blue-10']}00 12.76%)`}
				minHeight="100vh"
				color="yellow-text"
				fontFamily="El Messiri"
				px={{ mobS: 'wxxl', deskL: '21rem' }}
			>
				<MainSection />
			</Box>
			<Footer />
		</Box>
	);
};

export default LandingPageComp;
