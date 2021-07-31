// eslint-disable-next-line import/no-unresolved
import { getOtp, verifyOtp } from '@/api/mutations';
import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
import { debounce } from 'lodash';
import 'react-toastify/dist/ReactToastify.css';
import nookies from 'nookies';
import Box from '@/components/Box';
import React, { useState } from 'react';
import { useMutation } from 'react-query';
import { revertStep2, startStep2 } from './animations';
import theme from '@/styleguide/theme';

const LoginComp = (): JSX.Element => {
	const [mobileNumber, setMobileNumber] = useState<string>('');
	const [otp, setOtp] = useState<string>('');
	const [txnId, setTxnId] = useState<string>('');
	const [step, setStep] = useState<number>(0);
	const router = useRouter();

	const GET_OTP_MUTATION = useMutation('otp', getOtp, {
		onSuccess(res) {
			console.log({ res });
			setTxnId(res?.txnId);
			toast.success('OTP Sent');
		},
		onError: (err) => {
			console.log({ err });
		},
	});

	const VERIFY_OTP_MUTATION = useMutation('otp', verifyOtp, {
		onSuccess: async (res) => {
			console.log(res);
			nookies.set({}, 'access_token', res.token);
			toast.success('Verification Succesful ✅✅');
			debounce(() => {
				router.push('/');
			}, 1000);
			router.push('/onboarding');
		},
		onError: (err) => {
			console.log({ err });
			toast.error('Invailid OTP. Please Try Again');
		},
	});

	const handleOTPSend = async (e) => {
		e.preventDefault();
		if (mobileNumber.length !== 10) {
			toast.error('Invalid Mobile Number');
		} else {
			GET_OTP_MUTATION.mutate(mobileNumber);
			if (step === 0) {
				setStep(1);
				startStep2();
			}
		}
	};

	const handleOTPVerify = async () => {
		VERIFY_OTP_MUTATION.mutate({ otp, txnId });
	};

	const handleStepBack = () => {
		setStep(0);
		setTxnId('');
		setOtp('');
		revertStep2();
	};

	return (
		<Box
			height="100vh"
			bg={{ mobS: 'white', tabS: 'purple-10' }}
			row
			center
			alignItems={{ mobS: 'flex-start', tabS: 'center' }}
		>
			<Box
				maxWidth={{ mobS: '100%', tabS: '42rem' }}
				bg="white"
				borderRadius={{ mobS: '0', tabS: '10px' }}
				overflow="hidden"
			>
				<Box
					backgroundImage="linear-gradient(-123.75deg, #F65F59 1.87%, #FF5C00 120.46%);"
					column
					pt="wm"
					px="mxxl"
					pb="wxxl"
					color="white"
				>
					<Box fontSize="36px" fontFamily="700">
						OTP Verification
					</Box>
					<Box fontSize="18px">
						This step shows that it is
						<br /> really you trying to sign-in.
					</Box>
				</Box>
				<Box
					boxShadow="0 0 25px rgba(0, 0, 0, 0.1)"
					pt="wxxs"
					px="mxxl"
					fontSize="18px"
					fontWeight="700"
					bg="white"
					mx="ml"
					borderRadius="10px"
					transform="translateY(-8rem)"
				>
					<Box>Enter your phone number so that we can send a One-Time-Password (OTP) to your phone.</Box>
					<Box>
						<Box row fontSize="14px" pt="wxxs" ml="mxxs" mb="mxs">
							<Box mr="ml">Country</Box>
							<Box>Phone Number</Box>
						</Box>
						<Box
							width="100%"
							border="1px solid black"
							height="5rem"
							borderRadius="5px"
							overflow="hidden"
							bg={step ? 'green-100' : 'white'}
							row
							css={`
								transition: background 200ms ease-out;
							`}
						>
							<Box borderRight="1px solid black" width="6rem" height="100%" bg="green-100" center>
								+91
							</Box>
							<Box
								as="input"
								type="number"
								value={mobileNumber}
								onChange={(e) => setMobileNumber(e.target.value)}
								placeholder="Enter Phone Number"
								border="none"
								pl="ms"
								fontFamily="inherit"
								fontSize="inherit"
								fontWeight="inherit"
								outline="none"
								flex={1}
								bg="transparent"
								disabled={step === 1}
							/>
						</Box>
						<Box
							className="otp-step-2"
							display="none"
							fontSize="14px"
							mb="ml"
							mt="mxxs"
							css={`
								& > span {
									color: ${theme.colors['purple-100']};
									cursor: pointer;
								}
							`}
						>
							Change Mobile Number? <span onClick={handleStepBack}>Click Here.</span>
						</Box>
						<Box
							className="otp-step-1"
							display="none"
							as="input"
							type="number"
							value={otp}
							onChange={(e) => setOtp(e.target.value)}
							placeholder="Enter OTP"
							fontFamily="inherit"
							fontSize="inherit"
							fontWeight="inherit"
							outline="none"
							width="100%"
							border="1px solid black"
							height="5rem"
							borderRadius="5px"
							px="mxl"
						/>
						<Box className="otp-step-2" display="none" fontSize="14px" mt="mxxs">
							It may take a while to receive the code.
						</Box>
						<Box
							className="otp-step-2"
							display="none"
							fontSize="14px"
							css={`
								& > span {
									color: ${theme.colors['purple-100']};
									cursor: pointer;
								}
							`}
						>
							Didn’t receive the code? <span onClick={handleOTPSend}>Resend</span>
						</Box>
						<Box
							as="button"
							className="submit-btn"
							bg="purple-100"
							onClick={step ? handleOTPVerify : handleOTPSend}
							fontFamily="inherit"
							border="none"
							color="white"
							height="5rem"
							width="100%"
							mt={step ? 'ms' : 'mxl'}
							borderRadius="5px"
							mb="ws"
							cursor="pointer"
							// disabled={mobileNumber.length !== 10}
						>
							{VERIFY_OTP_MUTATION.isLoading ? 'Verifying' : step ? 'Verify OTP' : 'Send OTP'}
						</Box>
					</Box>
				</Box>
			</Box>
			<ToastContainer style={{ fontSize: '14px', fontFamily: 'Nunito Sans' }} />
		</Box>
	);
};

export default LoginComp;
