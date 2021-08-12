import bs58 from 'bs58';

const getBytes32FromHash = (hash) => `0x${bs58.decode(hash).slice(2).toString('hex')}`;

const getHashFromBytes32 = (bytes) => {
	const hashHex = `1220${bytes.slice(2)}`;
	const hashBytes = Buffer.from(hashHex, 'hex');
	return bs58.encode(hashBytes);
};

export { getBytes32FromHash, getHashFromBytes32 };
