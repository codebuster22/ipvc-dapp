import Box from 'components/Box';
import React from 'react';
import Footer from './components/Footer';
import MainSection from './components/MainSection';
import Navbar from './components/Navbar';
import RoadMap from './components/RoadMap';

const LandingPageComp = () => {
	return (
		<Box minHeight="100vh" bg="#0F1118">
			<Box
				backgroundImage="linear-gradient(180deg, #015491 -8.11%, rgba(0, 8, 35, 0) 23.76%)"
				minHeight="100vh"
				color="yellow-text"
				fontFamily="Cinzel Decorative"
				column
			>
				<Navbar />
				<MainSection />
				<Footer />
			</Box>
		</Box>
	);
};

export default LandingPageComp;
