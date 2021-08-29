import React from 'react';
import Box from 'components/Box';

const Home = (): JSX.Element => {
	return <Box>Home</Box>;
};

export default Home;

Home.getInitialProps = (ctx) => {
	ctx?.res?.writeHead(301, {
		Location: '/home',
	});
	ctx?.res?.end();

	return {};
};
