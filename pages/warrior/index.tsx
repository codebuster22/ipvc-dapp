import React from 'react';
import Head from 'next/head';
import WarriorComp from '@/containers/Warrior';

const WarriorPage = () => {
	return (
		<React.Fragment>
			<Head>
				<title>Warrior</title>
			</Head>
			<WarriorComp />
		</React.Fragment>
	);
};

export default WarriorPage;
