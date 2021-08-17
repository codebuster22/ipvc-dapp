import Box from '@/components/Box';
import Warrior from '@/components/Warrior';
import React, { useContext, useEffect, useState } from 'react';
import queryEvents from '../../ethereum/utils/queryEvents';
import { StatesContext } from '@/components/StatesContext';
import { IRegistry } from '../Warrior/types';
import { getAssetRegistry } from '@/api/queries';
import { useQuery } from 'react-query';

const AllWarrior = (): JSX.Element => {
	const [data, setData] = useState<Object>();
	const state = useContext(StatesContext);
	const [registry, setRegistry] = useState<IRegistry>();
	const [warriors, setWarriors] = useState([]);
	const array = [];
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
			let warrior = await getAllWarriors();
			setData(warrior);
		};
		if (state.warriorCore) {
			getWarrior();
			console.log(state.warriorCore);
		}
	}, [state?.warriorCore]);

	useEffect(() => {
		if (data) {
			Object.values(data).forEach((c) => array.push(parseInt(c[1]._hex).toString()));
			setWarriors(array);
		}
	}, [data]);

	useEffect(() => {
		warriors.map((c) => console.log(c));
	}, [warriors]);

	const getAllWarriors = async () => {
		let data = await queryEvents(state.warriorCore, 'WarriorGenerated');
		console.log('All Warriors', data);
		return data;
	};

	return (
		<Box>
			<Box display="flex" flexWrap="wrap" justifyContent="space-evenly">
				{warriors &&
					warriors.map((warrior) => {
						<Box bg="white" width="100%" height="100%" borderRadius="100%">
							This code is not working for all warriors but if I am rendering for a particular one like
							outside the loop that one is getting rendered
							<Warrior warriorId={warrior} registry={registry} />
						</Box>;
					})}
			</Box>
			<Box>
				<Warrior warriorId={'13'} registry={registry} />
				<Warrior warriorId={warriors[14]} registry={registry} />
				<Warrior warriorId={warriors[15]} registry={registry} />
			</Box>
		</Box>
	);
};

export default AllWarrior;
