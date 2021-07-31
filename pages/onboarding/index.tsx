import OnboardingComp from '@/containers/Onboarding';
import Head from 'next/head';
import React from 'react';

const OnboardingPage = (): JSX.Element => {
	return (
		<>
			<Head>
				<title>Onboarding</title>
			</Head>
			<OnboardingComp />
		</>
	);
};

export default OnboardingPage;

OnboardingPage.getInitialProps = (ctx) => {
	if (ctx?.req?.cookies['access_token']) {
		return { access_token: ctx?.req?.cookies['access_token'] };
	} else {
		ctx?.res?.writeHead(301, {
			Location: '/login',
		});
		ctx?.res?.end();
	}
};
