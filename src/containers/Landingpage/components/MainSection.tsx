import Box from 'components/Box';
import Text from 'components/Text';
import React from 'react';
import DownArrow from '../../../svgs/downarrow.svg';
import Warriors from '../../../svgs/warrior.svg';
import QuestionMark from '../../../svgs/Questionmark.svg';
import Ethereum from '../../../svgs/ethereum.svg';
import RoadMap from './RoadMap';
import styled from 'styled-components';
import FAQ from './FAQ';

const MainSection = () => {
	return (
		<Box my="wxs" mx="wxxl">
			<Box center mx="300px">
				<Text
					textAlign="center"
					color="yellow-text-50"
					fontStyle="normal"
					fontSize="60px"
					fontWeight="bold"
					fontFamily="Cinzel Decorative"
					lineHeight="79.92px"
				>
					NfT CollectibleS for THe fIghteRS
				</Text>
			</Box>
			<Box center mx="370px">
				<Text
					fontSize="26px"
					color="#D0D0D0"
					mx=""
					fontWeight="bold"
					fontFamily="El Messiri"
					lineHeight="44px"
					textAlign="center"
				>
					Digital artefacts that represent the fight that the world fought against Covid.
				</Text>
			</Box>
			<Box center mx="wxl">
				<Box as="button">I want one</Box>
			</Box>
			<Box center mx="wxl">
				<DownArrow />
			</Box>
			<Box mr="wxl" ml="ml" center>
				<Box mt="mxxl" mr="mxxl">
					<Text fontFamily="El Messiri" fontSize="45px" lineHeight="75px">
						What are Warriors?
					</Text>
					<Box>
						<Text fontFamily="El Messiri" textAlign="initial" mr="wxxl" color="#D0D0D0" fontSize="20px">
							Warriors is an NFT project which started to display the fight people had against Covid, but
							the potential is far more. Warriors NFT now aim to represent the fight against any crisis
							the world will face. Artists from all around the world could participate in this process.
							They could submit a proposal for theme, submit the assets and in return, get back the
							governance token. The goal now, is to create an ecosystem for artist around character
							design.
						</Text>
					</Box>
				</Box>
				<Box width="50%" height="436px">
					<Warriors />
				</Box>
			</Box>
			<Box mt="wl" center>
				<Box center>
					<QuestionMark width="620px" />
				</Box>
				<Box mx="mxxl" mt="wl">
					<Text fontFamily="El Messiri" fontSize="45px" lineHeight="75px">
						Why do I need one?
					</Text>
					<Box mr="wxxl">
						<Text fontFamily="El Messiri" textAlign="initial" color="#D0D0D0" fontSize="20px">
							Warriors is a generation-based NFT Project, with each warrior being unique and accompanied
							by a story. It can be for a social cause, fundraising or a brand collectible. It will take
							over 920 generations to mint all the warriors. To have one, is like being part of something
							big. It can be considered a collectible, an investment or an artefact.
						</Text>
					</Box>
				</Box>
			</Box>
			<Box mr="wxl" ml="ml" center>
				<Box mt="wxxl" mr="mxxl">
					<Text fontFamily="El Messiri" fontSize="45px" lineHeight="75px">
						What will I be charged?{' '}
					</Text>
					<Box mr="wxs">
						<Text fontFamily="El Messiri" textAlign="initial" mr="wxxl" color="#D0D0D0" fontSize="20px">
							The price to mint a warrior is decided by the DAO. For the first generation, it is set to
							<Text color="yellow-text">0.08 ETH.</Text>
						</Text>
					</Box>
				</Box>
				<Box width="50%" height="436px">
					<Ethereum />
				</Box>
			</Box>
			<Box display="flex" mt="wxxl">
				<Diamond mt="mm" />
				<StyledLine flex={1} direction="left" mt="ml" />
				<Text as="h1" fontFamily="Cinzel Decorative" fontWeight="bold" textAlign="center" px="ml">
					RoadMap
				</Text>
				<StyledLine flex={1} direction="right" mt="ml" />
				<Diamond mt="mm" />
			</Box>
			<Box mt="wl" mx="wxl">
				<RoadMap />
			</Box>
			<Box display="flex" mt="wxxl">
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
