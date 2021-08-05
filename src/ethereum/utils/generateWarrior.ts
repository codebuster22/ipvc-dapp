import { AWS_LAMBDA_WARRIOR_SIGNATURE_URL } from '@/utils/constants';

const { default: axios } = require('axios');
const { utils } = require('ethers');

const gasPriceUrl = `https://ethgasstation.info/api/ethgasAPI.json?api-key=${process.env.NEXT_PUBLIC_GAS_STATION_KEY}`;

const getGasPrice = async () => {
	const unparsedGasPrice = (await axios.get(gasPriceUrl)).data.average / 10;
	return utils.parseUnits(unparsedGasPrice.toString(), 'gwei');
};

const generateWarrior = async (warriorCore, signer, metadata) => {
	const to = warriorCore?.address;
	const from = await signer?.getAddress();
	const messageHash = await warriorCore?.generateHash(to, from, metadata);
	const response = await axios.get(`${AWS_LAMBDA_WARRIOR_SIGNATURE_URL}?metadata=${messageHash}`);
	const gas = await warriorCore
		?.connect(signer)
		?.estimateGas?.generateWarrior(from, metadata, response.data.signature);
	const gasPrice = await getGasPrice();
	const cost = gasPrice?.mul(gas);
	alert(`maximum cost of transaction:- ${utils.formatUnits(cost.toString(), 'ether')} ETH`);
	const transaction = await warriorCore?.connect(signer)?.generateWarrior(from, metadata, response?.data?.signature);
	const event = (await transaction.wait())?.events?.filter((event) => event?.event == 'WarriorGenerated')[0]?.args;
	alert(`Warrior generated for ${event[0]} with warrior id ${event[1]?.toString()}`);
};

export default generateWarrior;
