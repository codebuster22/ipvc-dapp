import OnboardingComp from '@/containers/Onboarding/index.new';
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
