/* eslint-disable import/no-unresolved */
import { COWIN_API_KEY, IPFS_URL } from '@/utils/constants';
import axios from 'axios';

export const getBeneficiaries = async (): Promise<any> => {
	const res = await axios({
		url: '/api/v2/appointment/beneficiaries',
		headers: {
			'x-api-key': COWIN_API_KEY,
			Authorization: 'Bearer ' + localStorage.getItem('access_token'),
		},
	});
	return res.data;
};

export const getAssetRegistry = async (): Promise<any> => {
	const res = await axios.get(`${IPFS_URL}QmadFsEm8GfbG9urFYYTaFVF4ubU8YCawHy1pBB75Ai4y5`);
	return res.data;
};
