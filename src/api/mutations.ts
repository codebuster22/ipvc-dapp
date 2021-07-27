import { COWIN_API_KEY } from '@/utils/constants';
import hash from 'hash.js';
import axios from 'axios';

interface GetOtpProps {
	txnId: string;
}

export const getOtp = async (mobile: string): Promise<GetOtpProps> => {
	const res = await axios({
		url: 'api/v2/auth/generateOTP',
		method: 'post',
		headers: {
			'x-api-key': COWIN_API_KEY,
		},
		data: {
			mobile: mobile,
		},
	});
	return res?.data;
};

interface VerifyOtpProps {
	token: string;
	isNewAccount: string;
}

export const verifyOtp = async ({ txnId, otp }: { txnId: string; otp: string }): Promise<VerifyOtpProps> => {
	const res = await axios({
		url: 'api/v2/auth/confirmOTP',
		method: 'post',
		headers: {
			'x-api-key': COWIN_API_KEY,
		},
		data: {
			txnId,
			otp: hash.sha256().update(otp).digest('hex'),
		},
	});
	return res?.data;
};
