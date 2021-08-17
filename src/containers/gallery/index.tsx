/* eslint-disable import/no-unresolved */
import Box from '@/components/Box';
import Warrior from '@/components/Warrior';
import React, { useContext, useEffect, useState } from 'react';
import queryEvents from '../../ethereum/utils/queryEvents';
import { StatesContext } from '@/components/StatesContext';
import { IRegistry } from '../Warrior/types';
import { getAssetRegistry } from '@/api/queries';
import { useQuery } from 'react-query';
import Text from '@/components/Text';

const PER_PAGE = 15;

const AllWarrior = (): JSX.Element => {
	const state = useContext(StatesContext);
	const [registry, setRegistry] = useState<IRegistry>();
	const [warriors, setWarriors] = useState([]);
	const [page, setPage] = useState(0);
	useQuery('registry-fetch', getAssetRegistry, {
		enabled: true,
		onSuccess: (result) => {
			let key;
			for (const k in result) {
				key = k;
				break;
			}
			const res = JSON.parse(key);
			setRegistry(res);
		},
		onError: (error: any) => {
			console.log({ error });
		},
	});

	useEffect(() => {
		const getWarrior = async () => {
			const array = [];
			const warrior = await getAllWarriors();
			Object.values(warrior).forEach((c) => array.push(parseInt(c[1]._hex).toString()));
			setWarriors(array);
		};
		if (state.warriorCore) {
			getWarrior();
		}
	}, [state?.warriorCore]);

	// useEffect(() => {
	// 	if (warriors.length > 0) {
	// 		warriors.map((c) => console.log(c));
	// 	}
	// }, [warriors]);

	const getAllWarriors = async () => {
		const data = await queryEvents(state.warriorCore, 'WarriorGenerated');
		// console.log('All Warriors', data);
		return data;
	};

	if (warriors.length <= 0) return <Box>Loading...</Box>;

	return (
		<Box bg="pink">
			<Text fontSize="15rem" fontWeight="bold" mb="wm" pb="wxl" pt="wl" bg="purple-10" color="white" px="20rem">
				Gallery
			</Text>
			<Box display="flex" flexWrap="wrap" px="20rem">
				{warriors?.map((warrior) => (
					<Box
						bg="white"
						width="25rem"
						height="25rem"
						borderRadius="4px"
						position="relative"
						boxShadow="0 0 2px rgba(0,0,0,0.8)"
						mx="ms"
						my="mxs"
					>
						{/* This code is not working for all warriors but if I am rendering for a particular one like
							outside the loop that one is getting rendered */}
						<Warrior warriorId={warrior} registry={registry} height="25rem" />
					</Box>
				))}
			</Box>
			{/* <Box>
				<Warrior warriorId={'13'} registry={registry} />
				<Warrior warriorId={warriors[14]} registry={registry} />
				<Warrior warriorId={warriors[15]} registry={registry} />
			</Box> */}
		</Box>
	);
};

export default AllWarrior;
