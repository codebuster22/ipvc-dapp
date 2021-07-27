import { COWIN_API_KEY } from '@/utils/constants';
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
