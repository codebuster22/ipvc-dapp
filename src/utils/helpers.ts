import { ethers } from 'ethers';

export const getMetadata = (): string => {
	const metadata = ethers?.utils?.keccak256(ethers?.utils?.toUtf8Bytes(Date.now().toString()));
	return metadata;
};

export const getError = async (code) => {
	if (code == 4001) return 'Proccess ended unacceptably. Please try again';
	if (code == 'INVALID_ARGUMENT') return 'Please unlock your MetaMask';
	if (code == 'UNPREDICTABLE_GAS_LIMIT') return 'Metadata already used';
};
