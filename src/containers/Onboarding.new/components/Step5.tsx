import { useContext, useState, useEffect } from 'react';
import Box from 'components/Box';
import { StepProps } from './Step0';
import ArrowLeft from 'svgs/arrow-left.svg';
import Text from 'components/Text';
import { StatesContext } from 'components/StatesContext';

import theme from 'styleguide/theme';
import Warrior from 'components/Warrior';
import { IRegistry } from 'containers/Warrior/types';
import BorderDesign from './BorderDesign';
import HexaButton from './HexaButton';
import Confetti from 'react-confetti';
import { useRouter } from 'next/router';
import If from 'components/If';

interface Props extends StepProps {
	warriorId: string;
	registry: IRegistry;
	address: string;
}

let height, width;

const Step5 = ({ setStep, warriorId, registry, address }: Props) => {
	const { warriorCore } = useContext(StatesContext);
	const [currentGenInfo, setCurrentGenInfo] = useState({ currentPopulation: '0', currentGenMaxPopulation: '0' });
	const [showDownloadModal, setShowDownloadModal] = useState(false);
	const [showShareModal, setShowShareModal] = useState(false);
	const [loading, setLoading] = useState(true);

	const router = useRouter();

	useEffect(() => {
		const getCurrentGenerationInfo = async () => {
			const currentPopulation = await warriorCore?.currentGenerationPopulation();
			const currentMaximumPopulation = await warriorCore?.currentGenerationMaxPopulation();
			setCurrentGenInfo({
				currentPopulation: parseInt(currentPopulation).toString(),
				currentGenMaxPopulation: parseInt(currentMaximumPopulation).toString(),
			});
		};
		if (warriorCore != null) {
			getCurrentGenerationInfo();
		}
	}, [warriorCore]);

	const draw = async (ctx, imgs) => {
		ctx.fillStyle = 'rgb(256, 256, 256)';
		ctx.fillRect(0, 0, 1000, 1400);
		ctx.font = '30px Comic Sans black';
		ctx.fillStyle = 'black';
		ctx.fillText(`#${warriorId}`, 500, 1300);
		for (let i = 0; i < imgs.length; i++) {
			imgs[i].crossOrigin = 'anonymous';
			imgs[i].onload = async () => {
				await ctx.drawImage(imgs[i], 40, 40, 950, 1200);
			};
		}
	};

	const download = (e) => {
		e.preventDefault();

		if (process.browser) {
			const link = document.getElementById('download');
			if (link.getAttribute('href')) {
				setShowDownloadModal(true);
				return;
			}
			const canvas = document.createElement('canvas');
			const ctx = canvas.getContext('2d');
			canvas.height = 1400;
			canvas.width = 1000;
			const imgs = document.getElementsByClassName('asset-img');

			draw(ctx, imgs).then(() => {
				setTimeout(() => {
					link.setAttribute('download', `Warrior #${warriorId}.png`);
					const imageLink = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream');
					link.setAttribute('href', imageLink);
					setShowDownloadModal(true);
				}, 1500);
			});
		}
	};

	// if (process.browser) {
	// 	width = window.innerWidth;
	// 	height = window.innerHeight;
	// }

	useEffect(() => {
		if (process.browser) {
			const imgs = document.getElementsByClassName('asset-img');
			let loaded = 0;
			for (let i = 0; i < imgs.length; i++) {
				// @ts-expect-error onload in Element
				imgs[i].onload = async () => {
					loaded++;
					console.log(loaded);

					if (loaded >= 5) {
						setLoading(false);
					}
				};
			}
		}
	});

	return (
		<Box
			alignSelf={{ tabS: 'flex-start', mobS: 'center' }}
			pl={{ tabS: 'wl', mobS: 'mxxl' }}
			pr={{ mobS: 'mxxl', tabS: '0' }}
			pt="wxs"
		>
			{/* <Confetti run recycle={false} width={width} height={height} numberOfPieces={1000} /> */}
			<Box color="yellow-text" row alignItems="center" mb="wl" cursor="pointer" onClick={() => router.push('/')}>
				<ArrowLeft height="38" width="46" />
				<Text as="h2" fontFamily="El Messiri" fontWeight="medium" ml="mm">
					Back to Home
				</Text>
			</Box>
			<Box display={{ deskM: 'flex' }}>
				<Box width={{ mobS: '25rem', mobL: '27rem', tabS: '50rem', tabL: '65rem' }}>
					<Box bg="blue-10">
						<Box
							display="flex"
							justifyContent="center"
							position="relative"
							height={{ mobS: '25rem', mobL: '27rem', tabS: '50rem', tabL: '65rem' }}
							border={`4px solid ${theme.colors['yellow-text-50']}`}
							backgroundImage={`linear-gradient(180deg, ${theme.colors['black-20']} -8.92%, rgba(35, 0, 0, 0) 48.15%)`}
						>
							<BorderDesign color={theme.colors['yellow-text-50']} />
							<Box height="80%" position="relative" alignSelf="center">
								<Warrior warriorId={warriorId} registry={registry} />
							</Box>
							<Box
								width="100%"
								transform="rotate(180deg)"
								css={`
									transform-origin: 50% 50%;
								`}
								position="absolute"
								left={0}
								bottom={0}
							>
								<BorderDesign rotated color={theme.colors['yellow-text-50']} />
							</Box>
							<Box
								position="absolute"
								center
								height="100%"
								width="100%"
								bg="blue-10"
								display={!loading ? 'none' : 'flex'}
							>
								<Text as="h2" color="white-text">
									Loading...
								</Text>
							</Box>
						</Box>
					</Box>
				</Box>
				<Box
					alignSelf="center"
					ml={{ deskM: 'wxxl', tabL: '0' }}
					fontFamily="El Messiri"
					column
					alignItems="flex-start"
					py="ml"
				>
					<WarriorInfoItem label="Creator Address:" value={address} />
					<WarriorInfoItem label="Warrior ID:" value={`#${warriorId}`} />
					<WarriorInfoItem label="Current Gen Population:" value={currentGenInfo.currentPopulation} />
					<WarriorInfoItem
						label="Current Gen Max Population:"
						value={currentGenInfo.currentGenMaxPopulation}
					/>
					<Box mt={{ tabS: 'mxxxl' }}>
						<HexaButton size="small" onClick={download} id="download-btn">
							<Text as="h3" fontWeight="thin">
								Download
							</Text>
						</HexaButton>
					</Box>
				</Box>
			</Box>
			<Box
				height="100vh"
				width="100\vw"
				bg={`${theme.colors['black-10']}a0`}
				display={showDownloadModal ? 'flex' : 'none'}
				position="absolute"
				top={0}
				left={0}
				center
				css={`
					backdrop-filter: blur(5px);
				`}
			>
				<Box
					id="download-modal"
					border={`4px solid ${theme.colors['yellow-text']}`}
					column
					justifyContent="flex-start"
					px="wl"
					position="relative"
					backgroundImage="linear-gradient(180deg, rgba(1, 84, 145, 1) -8.11%, rgba(0, 8, 35) 41.22%)"
					mx="ml"
				>
					<BorderDesign color={theme.colors['yellow-text']} />
					<Text maxWidth="40rem" textAlign="center" mb="mxxxl" mt="wxl">
						Are you sure you want to download this warrior?
					</Text>
					<Box row center mb="wxl" mx="ml">
						<a id="download" style={{ textDecoration: 'none' }} onClick={() => setShowDownloadModal(false)}>
							<HexaButton size="small">
								<Text as="h3" color="white">
									Confirm
								</Text>
							</HexaButton>
						</a>
						<Text color="white" onClick={() => setShowDownloadModal(false)} ml="mxl" cursor="pointer">
							Cancel
						</Text>
					</Box>
					<Box
						width="100%"
						transform="rotate(180deg)"
						css={`
							transform-origin: 50% 50%;
						`}
						position="absolute"
						left={0}
						bottom={0}
					>
						<BorderDesign rotated color={theme.colors['yellow-text']} />
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default Step5;

const WarriorInfoItem = ({ label, value }: { label: string; value: string }) => {
	return (
		<Box row mb={{ tabL: 'mxxl', mobS: 'mxs' }}>
			<Text as="h3" fontWeight="bold" pr="mm" color="white">
				{label}
			</Text>
			<If
				condition={label == 'Creator Address:'}
				then={
					<Box>
						<Text as="h3" fontWeight="bold">
							{value.substring(0, 22)}
						</Text>
						<Text as="h3" fontWeight="bold">
							{value.substring(22, 42)}
						</Text>
					</Box>
				}
				else={
					<Text as="h3" fontWeight="bold">
						{value}
					</Text>
				}
			/>
		</Box>
	);
};
