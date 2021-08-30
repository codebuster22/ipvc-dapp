import React, { useContext, useEffect, useState } from 'react';
import Box from 'components/Box';
import Text from 'components/Text';
import ArrowIcon from 'svgs/arrow.svg';
import styled from 'styled-components';
import queryEvents from '../../ethereum/utils/queryEvents';
import { StatesContext } from 'components/StatesContext';
import useRegistry from 'components/hooks/useRegistry';
import Warrior from 'components/Warrior';
import theme from 'styleguide/theme';

const AllWarrior = () => {
	const state = useContext(StatesContext);
	const [warriors, setWarriors] = useState([]);
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

	const handleShow = (id) => {
		document.getElementById(id).style.opacity = '0.2';
		document.getElementById(`detail-${id}`).style.display = 'block';
	};

	const handleLeave = (id) => {
		document.getElementById(id).style.opacity = '1';
		document.getElementById(`detail-${id}`).style.display = 'none';
	};

	return (
		<Box bg="black-30" minHeight="100vh">
			<Box
				backgroundImage={`linear-gradient(180deg, ${theme.colors['blue-40']} -41.98%, ${theme.colors['blue-10']}00 12.33%)`}
				minHeight="100vh"
				fontFamily="Cinzel Decorative"
				color="yellow-text"
				column
				alignItems="flex-start"
			>
				<Box pl="wxl" py="mxl" color="#FFD37E" display="flex" minWidth="100%">
					<Box pt="ms" onClick={() => window.history.back()}>
						<ArrowIcon />
					</Box>
					<Text
						as="h1"
						fontWeight="extra-bold"
						fontFamily="Cinzel Decorative"
						px={{ mobS: 'ml', tabS: 'wxs' }}
						mt="mxs"
					>
						Gallery
					</Text>
					<Diamond mt="ml" />
					<StyledLine flex={1} direction="left" mt="mxl" />
				</Box>
				<Box display="flex" flexWrap="wrap" maxWidth="100%" justifyContent="center">
					{warriors?.map((warrior) => (
						<Box
							key={warrior.id}
							backgroundImage="linear-gradient(180deg, #020100 -8.92%, rgba(35, 0, 0, 0) 48.15%)"
							bg="#00301C"
							width={{ mobS: '20rem', tabL: '30rem' }}
							height={{ mobS: '20rem', tabL: '30rem' }}
							borderRadius="4px"
							position="relative"
							boxShadow="0 0 2px rgba(0,0,0,0.8)"
							mx="ms"
							my="ms"
							border="1px solid yellow"
						>
							<Box
								onMouseEnter={() => handleShow(warrior.id)}
								onMouseLeave={() => handleLeave(warrior.id)}
							>
								<Box mx="mm" id={warrior.id} opacity={1}>
									<Warrior warriorId={warrior.id} registry={registry} />
								</Box>
								<Box id={`detail-${warrior.id}`} display="none">
									<Box
										fontFamily="El Messiri"
										fontWeight="600"
										position="relative"
										top="wxl"
										left={{ tabL: 'mxxs', mobS: 'ws' }}
									>
										<Box display="flex" justifyContent="center">
											<Text>Warrior Id:</Text>
											<Text color="#FFA15C">#{warrior.id}</Text>
										</Box>
										<Box display="flex" justifyContent="center">
											<Text textAlign="center">Warrior Gen:</Text>
											<Text color="#FFA15C">0</Text>
										</Box>
										<Box justifyContent="center">
											<Text textAlign="center">Creator Address:</Text>
											<Text as="p" color="#FFA15C" textAlign="center">
												{warrior.address.substr(0, 20)}
											</Text>
											<Text as="p" color="#FFA15C" textAlign="center">
												{warrior.address.substr(21, 42)}
											</Text>
										</Box>
									</Box>
								</Box>
							</Box>
						</Box>
					))}
				</Box>
			</Box>
		</Box>
	);
};

export default AllWarrior;

const Diamond = styled(Box)(
	(props) => `
		height: 13px;
		width: 13px;
		background: ${props.theme.colors['yellow-text']};
		transform: rotate(45deg);
	`
);

const StyledLine = styled(Box)(
	(props: { theme: any; direction: string }) => `
	background-image: linear-gradient(to ${props.direction}, #15110A 0%, #362B1A 0%, #FFC977 100%);
	height: 4px;
`
);
