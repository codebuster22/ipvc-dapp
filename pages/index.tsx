/* eslint-disable import/no-unresolved */
import React from 'react';
import Box from '@/components/Box';

const Home = (): JSX.Element => {
	return <Box>Home</Box>;
};

export default Home;

Home.getInitialProps = (ctx) => {
	if (ctx?.req?.cookies['access_token']) {
		ctx?.res?.writeHead(301, {
			Location: '/onboarding',
		});
		ctx?.res?.end();
	} else {
		ctx?.res?.writeHead(301, {
			Location: '/login',
		});
		ctx?.res?.end(); 
	}
	return {};
};
