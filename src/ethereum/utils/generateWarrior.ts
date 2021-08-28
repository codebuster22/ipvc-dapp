import { AWS_LAMBDA_WARRIOR_SIGNATURE_URL } from 'utils/constants';
import { toast } from 'react-toastify';
import { BigNumber } from 'ethers';

const { default: axios } = require('axios');
const { utils } = require('ethers');

const gasPriceUrl = `https://ethgasstation.info/api/ethgasAPI.json?api-key=${process.env.NEXT_PUBLIC_GAS_STATION_KEY}`;

const toGwei = (amount) => utils.parseUnits(amount.toString(), 'gwei');

const toEther = (amount) => utils.formatUnits(amount.toString(), 'ether');

const getGasPrice = async () => {
	const unparsedGasPrice = (await axios.get(gasPriceUrl)).data.average / 10;
	return toGwei(unparsedGasPrice);
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
	const mintFee = warriorCore?.mintFee !== undefined ? await warriorCore?.mintFee() : BigNumber.from('0');
	const cost = gasPrice?.mul(gas)?.add(utils.formatUnits(mintFee.toString(), 'ether'));
	console.log('Generating warrior');
	toast(`maximum cost of transaction:- ${toEther(cost)} ETH`);
	const transaction = await warriorCore
		?.connect(signer)
		?.generateWarrior(from, metadata, response?.data?.signature, { value: mintFee.toString() });
	const event = (await transaction.wait())?.events?.filter((event) => event?.event == 'WarriorGenerated')[0]?.args;
	const id = event[1];
	toast(`Warrior generated for ${event[0]} with warrior id ${id?.toString()}`, {
		autoClose: 7000,
	});
	return parseInt(id);
};

export default generateWarrior;
