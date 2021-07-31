import React from 'react';
import Head from 'next/head';
import LoginComp from '@/containers/Login';

const LoginPage = (): JSX.Element => {
	return (
		<React.Fragment>
			<Head>
				<title>Login</title>
			</Head>
			<LoginComp />
		</React.Fragment>
	);
};

export default LoginPage;

LoginPage.getInitialProps = async (ctx): Promise<any> => {
	if (ctx?.req?.cookies['access_token']) {
		ctx?.res?.writeHead(301, {
			Location: '/onboarding',
		});
		ctx?.res?.end();
	} else {
		return {};
	}
};
