/* eslint-disable import/no-unresolved */
import { IRegistry } from '@/containers/Warrior/types';
import getAssetIds, { IAssets } from '@/ethereum/utils/getAssetIds';
import { IPFS_URL } from '@/utils/constants';
import React, { useContext, useState, useEffect } from 'react';
import Box from './Box';
import { StatesContext } from './StatesContext';

interface Props {
	height?: string;
	warriorId: string;
	registry: IRegistry;
}

const Warrior = ({ height, warriorId, registry }: Props) => {
	const state = useContext(StatesContext);
	const [assets, setAssets] = useState<IAssets>();
	const [urls, setUrls] = useState([]);

	// @ts-expect-error using async in useEffect
	useEffect(async () => {
		if (state?.warriorCore && warriorId) {
			const assetIds = await getAssetIds(state?.warriorCore, warriorId?.toString());
			setAssets(assetIds);
		}
	}, [state?.warriorCore, warriorId]);

	useEffect(() => {
		if (assets) {
			const results = [];
			for (const k in assets) {
				const cid = registry[k][assets[k]]?.cid;
				results.push(`${IPFS_URL}${cid}`);
			}
			setUrls(results);
		}
	}, [assets]);

	return (
		<Box border="1px solid black" fontSize="1rem" position="absolute" top="10rem">
			<Box as="img" src={urls?.[0]} position="absolute" height={height} />
			<Box as="img" src={urls?.[1]} position="absolute" height={height} />
			<Box as="img" src={urls?.[2]} position="absolute" height={height} />
			<Box as="img" src={urls?.[3]} position="absolute" height={height} />
			<Box as="img" src={urls?.[4]} position="absolute" height={height} />
			<Box as="img" src={urls?.[5]} position="absolute" height={height} />
		</Box>
	);
};

export default Warrior;

Warrior.defaultProps = {
	height: '30rem',
};
