import Box from '@/components/Box';
import { useRouter } from 'next/router';
import nookies from 'nookies';
import React from 'react';

const OnboardingComp = (): JSX.Element => {
	const router = useRouter();
	// Temporary Logout Function
	const handleLogout = () => {
		nookies.destroy({}, 'access_token');
		router.replace(`/login`);
	};

	return (
		<Box>
			<h1>Onboarding</h1>
			<Box as="button" onClick={handleLogout}>
				Logout
			</Box>
			<Box color="green-100"></Box>
		</Box>
	);
};

export default OnboardingComp;
