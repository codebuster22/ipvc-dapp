import ethers from 'ethers';

export const getMetadata = (): string => {
	const metadata = ethers?.utils?.keccak256(ethers?.utils?.toUtf8Bytes(Date.now().toString()));
	return metadata;
};
