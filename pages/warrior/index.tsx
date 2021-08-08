import React from 'react';
import Head from 'next/head';
import Warrior from '@/components/Warrior';

const WarriorPage = () => {
	return (
		<React.Fragment>
			<Head>
				<title>Warrior</title>
			</Head>
			<Warrior height="60rem" />
		</React.Fragment>
	);
};

export default WarriorPage;
