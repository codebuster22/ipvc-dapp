/* eslint-disable import/no-unresolved */
import React, { useContext, useEffect, useState } from 'react';

import Box from '@/components/Box';
import Text from '@/components/Text';
import theme from '@/styleguide/theme';

import { ethers } from 'ethers';
import generateWarrior from '@/ethereum/utils/generateWarrior';
import { StatesContext } from '@/components/StatesContext';
import { toast, ToastContainer } from 'react-toastify';

import SaveAltIcon from '@material-ui/icons/SaveAlt';
import CloseIcon from '@/svgs/close.svg';

import 'react-toastify/dist/ReactToastify.css';
import If from '@/components/If';
import Warrior from '@/components/Warrior';
import { getAssetRegistry } from '@/api/queries';
import { useQuery } from 'react-query';
import { IRegistry } from '../Warrior/types';

const OnboardingComp = (): JSX.Element => {
	const [text, setText] = useState<string>('');
	const [success, setSuccess] = useState<boolean>(false);
	const [loading, setLoading] = useState<boolean>(false);
	const [warriorId, setWarriorId] = useState<string>();
	const [warrior, setWarrior] = useState<boolean>(false);
	const [registry, setRegistry] = useState<IRegistry>();

	const { signer, warriorCore } = useContext(StatesContext);
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

	const getError = async (code) => {
		if (code == 4001) return 'Proccess ended unacceptably. Please try again';
		if (code == 'INVALID_ARGUMENT') return 'Please unlock your MetaMask';
		if (code == 'UNPREDICTABLE_GAS_LIMIT') return 'Metadata already used';
	};

	const handleWarriorGenerate = async (e) => {
		e.preventDefault();
		if (text.length !== 0) {
			setLoading(true);
			// @ts-expect-error signer-props
			const address = await signer?.getAddress();
			const metadata = ethers.utils.keccak256(ethers.utils.toUtf8Bytes(text.concat(address)));
			try {
				const id = await generateWarrior(warriorCore, signer, metadata);
				setWarriorId(id.toString());
				setLoading(false);
				setSuccess(true);
				setWarriorId(id.toString());
				setWarrior(true);
			} catch (err) {
				const error = await getError(err.code);
				toast.error(error);
				setLoading(false);
			}
		}
	};

	const handleViewWarrior = () => {
		setWarrior(true);
	};

	const handleCloseWarrior = () => {
		setWarrior(false);
	};

	const download = () => {
		if (process.browser) {
			const canvas = document.createElement('canvas');
			const ctx = canvas.getContext('2d');
			canvas.height = 700;
			canvas.width = 500;
			const imgs = document.getElementsByClassName('asset-img');

			// @ts-expect-error function inside function
			async function draw(imgs) {
				ctx.fillStyle = 'rgb(256, 256, 256';
				ctx.fillRect(0, 0, 500, 700);
				for (let i = 0; i < imgs.length; i++) {
					imgs[i].crossOrigin = 'anonymous';
					ctx.drawImage(imgs[i], 20, 20, 450, 600);
					ctx.font = '30px Aria black';
					ctx.fillStyle = 'black';
					ctx.fillText(`#${warriorId}`, 250, 650);
				}
			}

			imgs[5].addEventListener('load', () => {
				draw(imgs).then(() => {
					const link = document.getElementById('download');
					link.setAttribute('download', `Warrior #${warriorId}.png`);
					const imageLink = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream');
					link.setAttribute('href', imageLink);
				});
			});
		}
	};

	useEffect(() => {
		if (warrior) {
			download();
		}
		return () => clearTimeout();
	}, [warrior]);

	return (
		<Box height="100vh" center bg="purple-10">
			<Box
				height={{ mobS: '100%', tabS: 'auto' }}
				color="black"
				maxWidth={{ mobS: '100%', tabS: '42rem' }}
				bg="white"
				borderRadius={{ mobS: '0', tabS: '10px' }}
				overflow="hidden"
				pb="0"
				backgroundImage={`linear-gradient(-145deg, ${theme.colors['green-100']} 1%, ${theme.colors['purple-50']} 100%);`}
			>
				<Box pt="wm" px="mxxl" pb="wxxl">
					<Text as="h1" fontWeight="bold">
						Generate Warrior
					</Text>
					<Text as="h4" fontWeight="regular">
						Describe your victory over this pandemic in a few lines.
					</Text>
				</Box>
				<Box
					bg="white"
					mt={`-${theme.space.wl}`}
					borderTopLeftRadius="30px"
					borderTopRightRadius="5px"
					borderBottomLeftRadius="5px"
					borderBottomRightRadius="30px"
					px="mxxl"
					pt="wxxs"
					mx="mxs"
					mb="wl"
				>
					<Text as="h3" fontWeight="medium" mb="ms">
						Your Warrior Story
					</Text>
					<Box
						as="textarea"
						placeholder="Type here..."
						css={`
							resize: none;
						`}
						height="15rem"
						width="100%"
						fontFamily="inherit"
						fontSize="1.6rem"
						outline="none"
						borderRadius="8px"
						px="mxs"
						py="mxs"
						mb="ms"
						border="2px solid grey"
						value={text}
						onChange={(e) => setText(e.target.value)}
					/>
					<Box
						as="button"
						className="get-btn"
						height="5rem"
						width="100%"
						bg={loading ? 'gray-100' : success ? 'green' : 'orange-50'}
						fontFamily="inherit"
						mb="ml"
						color="white"
						border="none"
						borderRadius="7px"
						onClick={success ? handleViewWarrior : handleWarriorGenerate}
						cursor="pointer"
					>
						{loading ? 'Fetching' : success ? `View Warrior` : 'Get Warrior'}
					</Box>
				</Box>
			</Box>
			<If
				condition={warrior == true}
				then={
					<Box center position="absolute" height="100vh" bg="transparent">
						<Box
							height={{ mobS: '40vh', deskM: '80vh', tabS: '60vh', mobL: '75vh', tabL: '50vh' }}
							width={{ mobS: '80vw', deskM: '40vw' }}
							borderRadius="20px"
							bg="pink"
							opacity="1"
						>
							<Box
								display="flex"
								justifyContent="space-between"
								px="mm"
								py="ms"
								borderBottom="1px solid black"
								borderTopRightRadius="20px"
								borderTopLeftRadius="20px"
							>
								<Box as="a" download="Warrior.png" id="download" fontSize="1.6rem">
									<SaveAltIcon fontSize="large" cursor="pointer" />
								</Box>
								<CloseIcon height="30px" cursor="pointer" onClick={handleCloseWarrior} />
							</Box>
							<Box
								display="flex"
								justifyContent="flex-start"
								mx={{ mobS: 'wm', deskM: 'mm', tabS: 'wxl', tabL: 'wxxl' }}
								px={{ tabL: 'wxl' }}
							>
								<Warrior warriorId={warriorId} registry={registry} />
							</Box>
						</Box>
					</Box>
				}
			/>
			<ToastContainer style={{ fontSize: '14px', fontFamily: 'Nunito Sans' }} />
		</Box>
	);
};

export default OnboardingComp;
