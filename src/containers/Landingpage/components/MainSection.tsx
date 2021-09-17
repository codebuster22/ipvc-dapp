import Box from 'components/Box';
import Text from 'components/Text';
import React, { useEffect } from 'react';
import DownArrow from 'svgs/downarrow.svg';
import Warrior1 from 'svgs/warrior1.svg';
import Warrior2 from 'svgs/warrior2.svg';
import Warrior3 from 'svgs/warrior3.svg';

import QuestionMark from 'svgs/Questionmark.svg';
import Ethereum from 'svgs/ethereum.svg';
import RoadMap from './RoadMap';
import styled from 'styled-components';
import FAQ from './FAQ';
import HexaButton from 'components/HexaButton';
import { animate } from './../animation';
import AOS from 'aos';
import { useRouter } from 'next/router';
import 'aos/dist/aos.css';
import theme from 'styleguide/theme';

const MainSection = () => {
	useEffect(() => {
		animate();
		AOS.init({ duration: 800, delay: 1 });
	}, []);
	const router = useRouter();
	return (
		<Box mb="wxs" pt={{ mobS: '20rem', tabS: '30rem' }} column alignSelf="center">
			<Box
				maxWidth="80rem"
				alignSelf="center"
				column
				px={{ mobS: 'ml', tabS: '0' }}
				mb={{ mobS: 'ml', tabS: 'wxxl' }}
			>
				<Text
					maxWidth="80rem"
					textAlign="center"
					color="yellow-text"
					fontSize={{ mobS: '40px', tabS: '72px' }}
					fontWeight="extra-bold"
					fontFamily="Cinzel Decorative"
					lineHeight={{ mobS: '44.4px', tabS: '79.92px' }}
					mb={{ mobS: 'mm', tabS: 'mxxxl' }}
					id="head1"
					zIndex={1}
				>
					NfT CollectibleS for THe fIghteRS
				</Text>
				<Text
					as="h2"
					color="white-text"
					fontWeight="bold"
					lineHeight="34px"
					textAlign="center"
					maxWidth="64rem"
					alignSelf="center"
					id="head2"
				>
					Digital artefacts that represent the fight that the world fought against Covid.
				</Text>

				<Box center mt={{ mobS: 'mxxxl', tabS: 'ws' }} id="head3">
					<HexaButton bg="blue-20" onClick={() => router.push('/onboarding')}>
						<Text as="h1" fontWeight="thin" color="yellow-text">
							I want one!
						</Text>
					</HexaButton>
				</Box>
				<Box
					id="arrow"
					justifyContent="center"
					mx="wxl"
					mt="mxl"
					display="flex"
					css={`
						& svg {
							width: 90px;
							@media screen and (max-width: ${theme.breakpoints.tabS}) {
								width: 45px;
							}
						}
					`}
				>
					<DownArrow />
				</Box>
			</Box>

			<Box id="about">
				<Box
					display="flex"
					flexDirection={{ mobS: 'column', deskM: 'row' }}
					alignItems={{ mobS: 'center', tabS: 'inherit' }}
				>
					<Box mt="wxxs" minWidth={{ mobS: '0', tabS: '57rem' }} px="mxxxl">
						<Text fontSize={{ mobS: '32px', tabL: '48px' }} lineHeight="75px">
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
					<Warriors />
				</Box>
				<Box
					mt="wl"
					display="flex"
					flexDirection={{ mobS: 'column', tabS: 'row' }}
					data-aos="fade-up"
					data-aos-delay="4"
				>
					<Box
						alignSelf="center"
						css={`
							& svg {
								width: 62rem;

								@media only screen and (max-width: ${theme.breakpoints.tabS}) {
									width: 32rem;
								}
							}
						`}
					>
						<QuestionMark />
					</Box>
					<Box ml="mxxl" mt={{ mobS: 'ml', tabS: 'wl' }}>
						<Text fontSize={{ mobS: '32px', tabL: '48px' }} lineHeight="75px">
							Why do I need one?
						</Text>
						<Text as="h3" textAlign="initial" color="white-text">
							Warriors is a generation-based NFT Project, with each warrior being unique and accompanied
							by a story. It can be for a social cause, fundraising or a brand collectible. It will take
							over 920 generations to mint all the warriors. To have one, is like being part of something
							big. It can be considered a collectible, an investment or an artefact.
						</Text>
					</Box>
				</Box>
				<Box
					ml={{ mobS: 'mxxl', tabS: 'wxl' }}
					display="flex"
					flexDirection={{ mobS: 'column-reverse', tabS: 'row' }}
				>
					<Box mt={{ mobS: 'mxxl', tabS: 'wxxl' }} data-aos="zoom-out-left">
						<Text fontSize={{ mobS: '32px', tabL: '48px' }} lineHeight="75px">
							What will I be charged?
						</Text>
						<Text as="h3" textAlign="initial" color="white-text">
							The price to mint a warrior is decided by the DAO. For the first generation, it is set to
							<Text color="yellow-text">0.08 ETH.</Text>
						</Text>
					</Box>
					<Box
						data-aos="zoom-out-right"
						css={`
							& svg {
								width: 637px;

								@media only screen and (max-width: ${theme.breakpoints.mobL}) {
									width: 319px;
								}
							}
						`}
					>
						<Ethereum />
					</Box>
				</Box>
			</Box>
			<Box row mt={{ mobS: 'mxxl', tabS: 'wxxl' }} width="100%" data-aos="fade-up" px="mxl">
				<Diamond mt="mm" />
				<StyledLine flex={1} direction="left" mt="ml" width="50%" />
				<Text as="h1" fontFamily="Cinzel Decorative" fontWeight="bold" textAlign="center" px="ml">
					RoadMap
				</Text>
				<StyledLine flex={1} direction="right" mt="ml" />
				<Diamond mt="mm" />
			</Box>
			<Box mt={{ mobS: 'ml', tabS: 'wl' }} mx={{ mobS: 'mxl', tabS: 'wxl' }} data-aos="fade-up">
				<RoadMap />
			</Box>
			<Box row mt={{ mobS: 'mxxl', tabS: 'wxxl' }} width="100%" data-aos="fade-up" px="mxl">
				<Diamond mt="mm" />
				<StyledLine flex={1} direction="left" mt="ml" width="50%" />
				<Text as="h1" fontFamily="Cinzel Decorative" fontWeight="bold" textAlign="center" px="ml">
					FAQ
				</Text>
				<StyledLine flex={1} direction="right" mt="ml" />
				<Diamond mt="mm" />
			</Box>
			<Box data-aos="fade-up">
				<FAQ />
			</Box>
		</Box>
	);
};

export default MainSection;

const Warriors = () => (
	<Box
		display="flex"
		alignItems="flex-end"
		position="relative"
		justifyContent="space-between"
		flex={1}
		mt={{ mobS: '15rem', tabS: '0' }}
	>
		<Box
			as="img"
			src="./images/base.png"
			top="35rem"
			// width={{ mobS: '30rem', tabS: '55rem' }}
			css={`
				width: 55rem;

				@media only screen and (max-width: ${theme.breakpoints.tabS}) {
					width: 30rem;
				}
			`}
		></Box>
		<Box
			as="img"
			src="./images/warrior_1.png"
			position="absolute"
			left={{ mobS: '13rem', tabS: '26rem' }}
			zIndex={1}
			id="right"
			data-aos="fade-right"
			data-aos-offset="50"
			css={`
				height: 30rem;

				@media only screen and (max-width: ${theme.breakpoints.tabS}) {
					height: 16.5rem;
				}
			`}
		></Box>
		<Box
			as="img"
			src="./images/warrior_2.png"
			position="absolute"
			left={{ mobS: '5rem', tabS: '13rem' }}
			id="down"
			zIndex={2}
			data-aos="fade"
			data-aos-delay="2"
			css={`
				height: 30rem;

				@media only screen and (max-width: ${theme.breakpoints.tabS}) {
					height: 19rem;
				}
			`}
		></Box>
		<Box
			as="img"
			src="./images/warrior_3.png"
			position="absolute"
			id="left"
			data-aos="fade-left"
			css={`
				height: 30rem;

				@media only screen and (max-width: ${theme.breakpoints.tabS}) {
					height: 16.5rem;
				}
			`}
			zIndex={1}
		></Box>
	</Box>
);

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
