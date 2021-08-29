import Box from 'components/Box';
import Warrior from 'components/Warrior';
import React, { useContext, useEffect, useState } from 'react';
import queryEvents from '../../ethereum/utils/queryEvents';
import { StatesContext } from 'components/StatesContext';
import Text from 'components/Text';
import useRegistry from 'components/hooks/useRegistry';
import ReactTooltip from 'react-tooltip';

const AllWarrior = (): JSX.Element => {
	const state = useContext(StatesContext);
	const [warriors, setWarriors] = useState([]);
	const [page, setPage] = useState(0);
	const [searchValue, setSearchValue] = useState<string>('');
	const [searchError, setSearchError] = useState<string>('');
	const registry = useRegistry();
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
				return array.push({ id: parseInt(c[1]._hex).toString(), address: c[0] });
			});
			setWarriors(array);
		};
		if (state.warriorCore) {
			getWarrior();
		}
	}, [state?.warriorCore]);

	useEffect(() => {
		const array = [];
		if (searchValue) {
			console.log('yes');
			console.log(searchValue);
			console.log(warriors);
			warriors?.forEach((c) => {
				console.log(searchValue);
				if (c.id.includes(searchValue) || c.address.includes(searchValue)) {
					console.log(searchValue, c);
					array.push(c);
				} else {
					setSearchError('Invalid Search');
				}
			});
			setWarriors(array);
		}
	}, [searchValue]);

	const getAllWarriors = async () => {
		const data = await queryEvents(state.warriorCore, 'WarriorGenerated');
		return data;
	};

	// if (warriors.length <= 0) return <Text as="h2">Loading...</Text>;

	return (
		<Box bg="pink" display="flex" id="content" center column maxWidth="100vw">
			<Box
				pb={{ mobS: 'mxl', mobL: 'wm', tabS: 'wxl' }}
				pt={{ mobS: 'mxl', mobL: 'wxs', tabS: 'wl' }}
				mb={{ mobS: 'mm', mobL: 'ml', tabS: 'wm' }}
				bg="purple-10"
				width="100%"
			>
				<Text
					fontSize={{ mobS: '5rem', mobL: '8rem', tabL: '15rem' }}
					fontWeight="bold"
					color="white"
					px={{ mobS: 'ws', mobL: 'ws', tabS: '20rem' }}
				>
					Gallery
				</Text>
				<Box
					as="input"
					type="text"
					value={searchValue}
					onChange={(e) => setSearchValue(e.target.value)}
					ml="20rem"
					p="mxs"
					placeholder="Search"
					border="none"
					pl="ms"
					outline="none"
					height="150%"
					width="20%"
					bg="white"
					borderRadius="20px"
				/>
			</Box>
			<Box
				display="flex"
				flexWrap="wrap"
				mx={{ mobS: 'ms', tabL: '16rem', webM: '20rem' }}
				maxWidth="100%"
				justifyContent="center"
			>
				{warriors?.map((warrior) => (
					<Box
						key={warrior.id}
						bg="white"
						width={{ mobS: '25rem', tabL: '30rem' }}
						height={{ mobS: '25rem', tabL: '30rem' }}
						borderRadius="4px"
						position="relative"
						boxShadow="0 0 2px rgba(0,0,0,0.8)"
						mx="ms"
						my="ms"
					>
						<Box>
							<Warrior warriorId={warrior.id} registry={registry} />
							<Box position="absolute" right="ml">
								<Text>#{warrior.id}</Text>
							</Box>
							<Box
								position="relative"
								top={{ mobS: '23.7rem', tabL: '28.5rem' }}
								center
								data-tip
								data-for="registerTip"
							>
								<Text fontSize={{ mobs: '0.75rem', deskM: '0.75rem' }} fontWeight="extra-bold">
									{warrior.address}
								</Text>
								<ReactTooltip id="registerTip" place="top" effect="solid">
									Creator
								</ReactTooltip>
							</Box>
						</Box>
					</Box>
				))}
				{searchError != '' ? <Text>Invalid Search</Text> : ''}
			</Box>
		</Box>
	);
};

export default AllWarrior;
