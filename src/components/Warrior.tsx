/* eslint-disable import/no-unresolved */
import { IRegistry } from '@/containers/Warrior/types';
import getAssetIds, { IAssets } from '@/ethereum/utils/getAssetIds';
import { IPFS_URL } from '@/utils/constants';
import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import Box from './Box';
import { StatesContext } from './StatesContext';

interface Props {
	warriorId: string;
	registry: IRegistry;
}

const Warrior = ({ warriorId, registry }: Props) => {
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
		<Box fontSize="1rem">
			<Asset as="img" src={urls?.[0]} position="absolute" />
			<Asset as="img" src={urls?.[1]} position="absolute" />
			<Asset as="img" src={urls?.[2]} position="absolute" />
			<Asset as="img" src={urls?.[3]} position="absolute" />
			<Asset as="img" src={urls?.[4]} position="absolute" />
			<Asset as="img" src={urls?.[5]} position="absolute" />
		</Box>
	);
};

export default Warrior;

const Asset = styled(Box)(
	({ theme }: { theme: any }) => `

	height: 50rem;

	@media only screen and (min-width: ${theme.breakpoints.mobS}) and (max-width: ${theme.breakpoints.tabS}) {
		height: 25rem;
	}

`
);
