/* eslint-disable import/no-unresolved */
import React, { useContext, useState } from 'react';

import Box from '@/components/Box';
import Text from '@/components/Text';
import theme from '@/styleguide/theme';

import { ethers } from 'ethers';
import generateWarrior from '@/ethereum/utils/generateWarrior';
import { StatesContext } from '@/components/StatesContext';
import { toast, ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const OnboardingComp = (): JSX.Element => {
	const [text, setText] = useState<string>('');
	const [success, setSuccess] = useState<boolean>(false);
	const [loading, setLoading] = useState<boolean>(false);

	const { signer, warriorCore } = useContext(StatesContext);

	const handleWarriorGenerate = async (e) => {
		e.preventDefault();
		if (text.length > 0) {
			setLoading(true);
			// @ts-expect-error signer-props
			const address = await signer?.getAddress();
			const metadata = ethers.utils.keccak256(ethers.utils.toUtf8Bytes(text.concat(address)));
			try {
				await generateWarrior(warriorCore, signer, metadata);
				setLoading(false);
				setSuccess(true);
			} catch (err) {
				toast.error('Metadata already used');
				setLoading(false);
			}
		}
	};

	const handleBlockWarrior = () => {
		console.log('You have already fetched the warrior');
	};

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
						onClick={success ? handleBlockWarrior : handleWarriorGenerate}
						cursor="pointer"
						disabled={loading == true || success == true}
						css={`
							:disabled {
								cursor: not-allowed;
							}
						`}
					>
						{loading ? 'Fetching' : success ? 'Warrior fetched Successfully' : 'Get Warrior'}
					</Box>
				</Box>
			</Box>
			<ToastContainer style={{ fontSize: '14px', fontFamily: 'Nunito Sans' }} />
		</Box>
	);
};

export default OnboardingComp;
