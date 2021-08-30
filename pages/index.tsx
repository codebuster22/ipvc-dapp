import LandingPageComp from 'containers/Landingpage';
import Head from 'next/head';
import React from 'react';

const Home = (): JSX.Element => {
	return (
		<>
			<Head>
				<title>Warriors</title>
			</Head>
			<LandingPageComp />
		</>
	);
};

export default Home;
