/* eslint-disable import/no-unresolved */
import { COWIN_API_KEY, IPFS_CID, IPFS_FALLBACK_URL, IPFS_URL } from '@/utils/constants';
import axios from 'axios';

let URL: string = IPFS_URL;

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
	try {
		const res = await axios.get(`${URL}${IPFS_CID}`);
		return res.data;
	} catch (e) {
		console.log({ e });
		if (URL === IPFS_FALLBACK_URL) {
			URL = IPFS_URL;
		} else {
			URL = IPFS_FALLBACK_URL;
		}
	}
};
