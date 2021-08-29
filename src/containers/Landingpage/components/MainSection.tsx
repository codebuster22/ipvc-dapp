import Box from 'components/Box';
import Text from 'components/Text';
import React, { useEffect } from 'react';
import DownArrow from '../../../svgs/downarrow.svg';
import Warrior1 from '../../../svgs/warrior1.svg';
import Warrior2 from '../../../svgs/warrior2.svg';
import Warrior3 from '../../../svgs/warrior3.svg';

import QuestionMark from '../../../svgs/Questionmark.svg';
import Ethereum from '../../../svgs/ethereum.svg';
import RoadMap from './RoadMap';
import styled from 'styled-components';
import FAQ from './FAQ';
import HexaButton from 'components/HexaButton';
import { animateTop } from './../animation';
import { animateLeft } from './../animation';
import { animateDown } from './../animation';
import { animateRight } from './../animation';

const MainSection = () => {
	useEffect(() => {
		animateTop('#top');
		animateDown('#down');
		animateLeft('#left');
		animateRight('#right');
	}, []);
import { useRouter } from 'next/router';

const MainSection = () => {
	const router = useRouter();
	return (
		<Box mb="wxs" pt="30rem" column alignSelf="center">
			<Box maxWidth="80rem" alignSelf="center" column id="top">
				<Text
					maxWidth="80rem"
					textAlign="center"
					color="yellow-text"
					fontSize="72px"
					fontWeight="bold"
					fontFamily="Cinzel Decorative"
					lineHeight="79.92px"
					mb="mxxxl"
				>
					NfT CollectibleS for THe fIghteRS
				</Text>
				<Text
					as="h1"
					color="white-text"
					fontWeight="bold"
					lineHeight="44px"
					textAlign="center"
					maxWidth="64rem"
					alignSelf="center"
				>
					Digital artefacts that represent the fight that the world fought against Covid.
				</Text>

				<Box center mt="ws">
					<HexaButton bg="blue-20" onClick={() => router.push('/onboarding')}>
						<Text as="h1" fontWeight="thin" color="yellow-text">
							I want one!
						</Text>
					</HexaButton>
				</Box>
				<Box center mx="wxl" mt="wxxl">
					<DownArrow />
				</Box>
			</Box>

			<Box mx={{ mobS: 'mxxl', deskM: 'wxxl' }} id="about">
				<Box row>
					<Box mt="mxxl" minWidth="57rem">
						<Text fontSize={{ mobS: '45px', tabL: '48px' }} lineHeight="75px">
							What are Warriors?
						</Text>
						<Text as="h3" textAlign="initial" color="white-text">
							Warriors is an NFT project which started to display the fight people had against Covid, but
							the potential is far more. Warriors NFT now aim to represent the fight against any crisis
							the world will face. Artists from all around the world could participate in this process.
							They could submit a proposal for theme, submit the assets and in return, get back the
							governance token. The goal now, is to create an ecosystem for artist around character
							design.
						</Text>
					</Box>
					<Box display="flex" mr="680px">
						<Box id="right">
							<Warrior1 />
						</Box>
						<Box position="absolute" ml="180px" id="down" zIndex={2}>
							<Warrior2 />
						</Box>
						<Box position="absolute" ml="180px" id="left">
							<Warrior3 />
						</Box>
					</Box>
				</Box>
				<Box mt="wl" center>
					<Box>
						<QuestionMark width="620px" />
					</Box>
					<Box mx="mxxl" mt="wl" maxWidth="60rem">
						<Text fontSize={{ mobS: '45px', tabL: '48px' }} lineHeight="75px">
							Why do I need one?
						</Text>
						<Text as="h3" textAlign="initial" color="white-text" mr="wxxl">
							Warriors is a generation-based NFT Project, with each warrior being unique and accompanied
							by a story. It can be for a social cause, fundraising or a brand collectible. It will take
							over 920 generations to mint all the warriors. To have one, is like being part of something
							big. It can be considered a collectible, an investment or an artefact.
						</Text>
					</Box>
				</Box>
				<Box mr="wxl" center>
					<Box mt="wxxl" mr="mxxl" maxWidth="60rem">
						<Text fontSize={{ mobS: '45px', tabL: '48px' }} lineHeight="75px">
							What will I be charged?
						</Text>
						<Text as="h3" textAlign="initial" mr="wxxl" color="white-text">
							The price to mint a warrior is decided by the DAO. For the first generation, it is set to
							<Text color="yellow-text">0.08 ETH.</Text>
						</Text>
					</Box>
					<Box width="50%" height="436px">
						<Ethereum />
					</Box>
				</Box>
			</Box>
			<Box row mt="wxxl" width="100%">
				<Diamond mt="mm" />
				<StyledLine flex={1} direction="left" mt="ml" width="50%" />
				<Text as="h1" fontFamily="Cinzel Decorative" fontWeight="bold" textAlign="center" px="ml">
					RoadMap
				</Text>
				<StyledLine flex={1} direction="right" mt="ml" />
				<Diamond mt="mm" />
			</Box>
			<Box mt="wl" mx="wxl">
				<RoadMap />
			</Box>
			<Box display="flex" mt="wxxl" width="100%">
				<Diamond mt="mm" />
				<StyledLine flex={1} direction="left" mt="ml" />
				<Text as="h1" fontFamily="Cinzel Decorative" fontWeight="bold" textAlign="center" px="ml">
					FAQ
				</Text>
				<StyledLine flex={1} direction="right" mt="ml" />
				<Diamond mt="mm" />
			</Box>
			<FAQ />
		</Box>
	);
};

export default MainSection;

const StyledLine = styled(Box)(
	(props: { theme: any; direction: string }) => `
	background-image: linear-gradient(to ${props.direction}, #15110A 0%, #362B1A 0%, #FFC977 100%);
	height: 4px;
	width: 100%;
`
);

const Diamond = styled(Box)(
	(props) => `
		height: 13px;
		width: 13px;
		background: ${props.theme.colors['yellow-text']};
		transform: rotate(45deg);
	`
);
