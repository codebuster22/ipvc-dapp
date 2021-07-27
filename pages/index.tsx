/* eslint-disable import/no-unresolved */
import React, { useRef, useState } from 'react';
import { useMutation } from 'react-query';

import { parseImage, parsePDF } from '@/utils/parsing';
import { getOtp, verifyOtp } from '@/api/mutations';
import Box from '@/components/Box';
import If from '@/components/If';

const Home = (): JSX.Element => {
	const [mobile, setMobile] = useState<string>('');
	const [otp, setOtp] = useState<string>('');
	const [txnId, setTxnId] = useState<string>('');
	const [isVerified, setIsVerified] = useState<boolean>(false);
	const GET_OTP_MUTATION = useMutation('otp', getOtp, {
		onSuccess(res) {
			setTxnId(res?.txnId);
		},
	});

	const inputRef = useRef(null);

	const VERIFY_OTP_MUTATION = useMutation('otp', verifyOtp, {
		onSuccess: async (res) => {
			setIsVerified(true);
			console.log(res);
			localStorage.setItem('access_token', res.token);
		},
	});

	const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();
		const file = e.target.files[0];
		console.log({ inputRef, file });
		if (file['type'] === 'application/pdf') {
			parsePDF(file);
		} else if (file['type'].split('/')[0] === 'image') {
			const text = await parseImage(file);
			console.log({ text });
		}
	};

	return (
		<React.Fragment>
			<Box column center width="100%" mt="5rem" fontSize="4rem">
				<Box
					as="input"
					value={mobile}
					placeholder="Enter Mobile Number"
					onChange={(e) => setMobile(e.target.value)}
				/>
				<Box as="button" onClick={() => GET_OTP_MUTATION.mutate(mobile)} mt="ml">
					{GET_OTP_MUTATION?.isLoading ? 'Loading...' : 'Send OTP'}
				</Box>
			</Box>
			<If
				condition={!!txnId}
				then={
					<Box column center width="100%" mt="5rem" fontSize="4rem">
						<Box as="input" value={otp} placeholder="Enter Otp" onChange={(e) => setOtp(e.target.value)} />
						<Box as="button" onClick={() => VERIFY_OTP_MUTATION.mutate({ txnId, otp })} mt="ml">
							{VERIFY_OTP_MUTATION.isLoading ? 'Loading...' : 'Verify OTP'}
						</Box>
						<If
							condition={isVerified}
							then={
								<Box fontSize="4rem" color="green">
									OTP Verified
								</Box>
							}
						/>
						<If
							condition={VERIFY_OTP_MUTATION.isError && !isVerified}
							then={
								<Box fontSize="4rem" color="red">
									Invalid Otp
								</Box>
							}
						/>
					</Box>
				}
			/>
			<Box>
				<input type="file" ref={inputRef} onChange={handleUpload}></input>
			</Box>
		</React.Fragment>
	);
};

export default Home;
