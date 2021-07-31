import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import nookies from 'nookies';
import { debounce } from 'lodash';

import Box from '@/components/Box';
import Text from '@/components/Text';
import Dropzone from '@/components/Dropzone';
import theme from '@/styleguide/theme';
import { parseImage, parsePDF } from '@/utils/parsing';

import PDFIcon from '../../svgs/pdf.svg';
import ImageIcon from '../../svgs/image-icon.svg';
import If from '@/components/If';
import { gsap } from 'gsap';

const OnboardingComp = (): JSX.Element => {
	const router = useRouter();
	const [file, setFile] = useState<File>(null);
	const [progress, setProgress] = useState<number>(0);
	const [step, setStep] = useState<number>(0);
	const [text, setText] = useState<string>('');

	// Temporary Logout Function
	const handleLogout = () => {
		nookies.destroy({}, 'access_token');
		router.replace(`/login`);
	};

	const handleVerify = async (e) => {
		e.preventDefault();
		setStep(1);
		let text;
		if (file['type'] === 'application/pdf') {
			parsePDF(file, setProgress, setText);
		} else if (file['type'].split('/')[0] === 'image') {
			text = await parseImage(file, setProgress);
			setText(text);
		}
	};

	useEffect(() => {
		if (text?.length > 0) {
			setStep(2);
			setTimeout(() => {
				setStep(3);
			}, 3000);
			clearTimeout();
			setTimeout(() => {
				setStep(4);
			}, 3000);
		}
		return () => {
			clearTimeout();
		};
	}, [text]);

	useEffect(() => {
		gsap.to('#progress-bar', { width: `${progress}%` });
	}, [progress]);

	return (
		<Box height="100vh" center bg="purple-10">
			{/* <h1>Onboarding</h1>
			<Box as="button" onClick={handleLogout}>
				Logout
			</Box> */}
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
						Verify Certificate
					</Text>
					<Text as="h4" fontWeight="medium">
						This step verifies your vaccine certificate with the CoWIN database.
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
					mb="mxl"
				>
					<Text as="h3" fontWeight="medium" mb="mm">
						Upload Certificate
					</Text>
					<If
						condition={file === null}
						then={
							<Dropzone
								center
								height="13rem"
								setFile={setFile}
								border="2px dashed"
								borderColor="gray-100"
								borderRadius="10px"
							/>
						}
						else={
							<Box
								boxShadow="0 0 5px 0 rgba( 0, 0, 0, 0.37 )"
								column
								alignItems="center"
								height="14rem"
								borderRadius="10px"
								bg="rgba(0,0,0,0.05)"
								px="ml"
								border="1px solid"
								borderColor="gray-100"
							>
								<Box row pt="mxs">
									<If
										condition={file?.type === 'application/pdf'}
										then={<PDFIcon height="8rem" color="maroon" />}
										else={<ImageIcon height="8rem" color="black" />}
									/>
									<Box column ml="ms" flex={1} height="60%">
										<Text fontWeight="medium" as="h4" color="black">
											{file?.name?.split('.')[0]?.length > 18
												? `${file?.name?.split('.')[0]?.substr(0, 18)}...${
														file?.type?.split('/')[1]
												  }`
												: file?.name}
										</Text>
										<Text fontWeight="regular" as="h5" color="black">
											{(file?.size / 1024).toFixed(2)} KB
										</Text>
										<Box row alignItems="center">
											<Box
												height="0.4rem"
												bg="grey"
												borderRadius="10px"
												width={{ mobS: '10rem', tabS: '15rem' }}
												overflow="hidden"
												mr="mxs"
											>
												<Box bg="green-100" height="0.4rem" width="0" id="progress-bar"></Box>
											</Box>
											<Text as="h5" color="black" fontWeight="regular">
												{progress}%
											</Text>
										</Box>
									</Box>
								</Box>
								<Box row center>
									<Text
										fontSize="0.8rem"
										fontWeight="medium"
										textAlign="center"
										mr="mxs"
										borderRadius="5px"
										bg={step < 1 ? 'none' : step == 1 ? 'purple-100' : 'green-100'}
										color={step === 1 ? 'white' : 'black'}
										px="mxs"
										py="mxxs"
									>
										Parsing
										<br /> Document
									</Text>
									<Box height="0.1rem" width="3rem" borderTop="2px dotted grey" />
									<Text
										fontSize="1rem"
										fontWeight="bold"
										textAlign="center"
										mx="mxs"
										borderRadius="5px"
										bg={step < 2 ? 'none' : step == 2 ? 'purple-100' : 'green-100'}
										color={step === 2 ? 'white' : 'black'}
										px="mxs"
										py="mxxs"
									>
										Verifying
									</Text>
									<Box height="0.1rem" width="3rem" borderTop="2px dotted grey" />
									<Text
										fontSize="1rem"
										fontWeight="bold"
										textAlign="center"
										ml="mxs"
										borderRadius="5px"
										bg={step < 3 ? 'none' : step == 3 ? 'purple-100' : 'green-100'}
										color={step === 3 ? 'white' : 'black'}
										px="mxs"
										py="mxxs"
									>
										Done
									</Text>
								</Box>
							</Box>
						}
					/>

					<Box
						as="button"
						className="submit-btn"
						bg={step > 0 ? (step > 3 ? 'green-100' : 'purple-10') : 'purple-100'}
						color={step > 3 ? 'black' : 'white'}
						fontFamily="inherit"
						border="none"
						height="5rem"
						width="100%"
						mt="mxl"
						borderRadius="5px"
						mb="wxs"
						cursor="pointer"
						onClick={handleVerify}
						disabled={step > 0 || !file}
						css={`
							:disabled {
								cursor: not-allowed;
							}
						`}
					>
						{step > 0 ? (step > 3 ? 'Succesful' : 'Processing') : 'Verify Certificate'}
					</Box>
				</Box>
				<Box
					as="button"
					px="mm"
					py="ms"
					border="none"
					fontFamily="inherit"
					borderRadius="8px"
					boxShadow="0 0 10px 0 rgba(0,0,0,0.25)"
					mx="50%"
					transform="translateX(-50%)"
					onClick={handleLogout}
				>
					Logout
				</Box>
			</Box>
		</Box>
	);
};

export default OnboardingComp;
