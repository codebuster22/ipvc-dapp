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
		if (process.browser) {
			window.addEventListener('onload', () => {
				const block = document.getElementById('content');
				if (block) {
					block.style.display = 'flex';
				}
			});
		}
	}, []);

	useEffect(() => {
		const getWarrior = async () => {
			const array = [];
			const warrior = await getAllWarriors();

			Object.values(warrior).forEach((c) => {
				console.log(c[0]);
				return array.push({ id: parseInt(c[1]._hex).toString(), address: c[0] });
			});
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
		<Box bg="pink" display="flex" id="content" center column maxWidth="100vw">
			<Text
				fontSize={{ mobS: '5rem', tabS: '15rem' }}
				fontWeight="bold"
				mb={{ mobS: 'mm', tabS: 'wm' }}
				pb={{ mobS: 'mxl', tabS: 'wxl' }}
				pt={{ mobS: 'mxl', tabS: 'wl' }}
				bg="purple-10"
				color="white"
				px={{ mobS: 'mxs', tabS: '20rem' }}
				width="100%"
			>
				Gallery
			</Text>
			<Box
				display="flex"
				flexWrap="wrap"
				mx={{ mobS: 'ms', tabS: '20rem' }}
				maxWidth="100%"
				justifyContent="center"
			>
				{warriors?.map((warrior) => (
					<Box
						bg="white"
						width={{ mobS: '14rem', tabS: '25rem' }}
						height={{ mobS: '14rem', tabS: '25rem' }}
						borderRadius="4px"
						position="relative"
						boxShadow="0 0 2px rgba(0,0,0,0.8)"
						mx="ms"
						my="mxs"
					>
						<Box>
							<Warrior warriorId={warrior.id} registry={registry} />
							<Box position="absolute" right="ml">
								<Text>#{warrior.id}</Text>
							</Box>
							<Box
								position="relative"
								top={{ mobS: '133px', tabS: '240px' }}
								mx={{ mobS: '10px', tabS: 'wl', deskM: 'wxs' }}
							>
								<Text fontSize={{ mobs: '0.45rem', deskM: '0.75rem' }}>
									<strong>{warrior.address}</strong>
								</Text>
							</Box>
						</Box>
					</Box>
				))}
			</Box>
		</Box>
	);
};

export default AllWarrior;
