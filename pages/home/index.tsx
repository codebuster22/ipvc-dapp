import LandingPageComp from 'containers/Landingpage';
import Head from 'next/head';
import React from 'react';

const HomePage = (): JSX.Element => {
	return (
		<>
			<Head>
				<title>Onboarding</title>
			</Head>
			<LandingPageComp />
		</>
	);
};

export default HomePage;
