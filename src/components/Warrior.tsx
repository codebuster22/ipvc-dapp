/* eslint-disable import/no-unresolved */
import { IRegistry } from '@/containers/Warrior/types';
import getAssetIds, { IAssets } from '@/ethereum/utils/getAssetIds';
import { IPFS_FALLBACK_URL, IPFS_URL } from '@/utils/constants';
import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import Box, { BoxProps } from './Box';
import { StatesContext } from './StatesContext';

interface Props extends BoxProps {
	warriorId: string;
	registry: IRegistry;
}

const Warrior = ({ warriorId, registry, ...styleProps }: Props) => {
	const state = useContext(StatesContext);
	const [assets, setAssets] = useState<IAssets>();
	const [urls, setUrls] = useState([]);

	useEffect(() => {
		const getAssets = async () => {
			const assetIds = await getAssetIds(state?.warriorCore, warriorId?.toString(), registry);
			setAssets(assetIds);
		};
		if (state?.warriorCore && warriorId) {
			getAssets();
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
		<Box fontSize="1rem" {...styleProps}>
			<Asset
				as="img"
				className="asset-img"
				src={urls?.[0]}
				onError={(e) => (e.target.src = `${IPFS_FALLBACK_URL}${urls?.[0].split('ipfs/')[1]}`)}
				position="absolute"
				ht={styleProps.height}
			/>
			<Asset
				as="img"
				className="asset-img"
				src={urls?.[1]}
				onError={(e) => (e.target.src = `${IPFS_FALLBACK_URL}${urls?.[1].split('ipfs/')[1]}`)}
				position="absolute"
				ht={styleProps.height}
			/>
			<Asset
				as="img"
				className="asset-img"
				src={urls?.[2]}
				onError={(e) => (e.target.src = `${IPFS_FALLBACK_URL}${urls?.[2].split('ipfs/')[1]}`)}
				position="absolute"
				ht={styleProps.height}
			/>
			<Asset
				as="img"
				className="asset-img"
				src={urls?.[3]}
				onError={(e) => (e.target.src = `${IPFS_FALLBACK_URL}${urls?.[3].split('ipfs/')[1]}`)}
				position="absolute"
				ht={styleProps.height}
			/>
			<Asset
				as="img"
				className="asset-img"
				src={urls?.[4]}
				onError={(e) => (e.target.src = `${IPFS_FALLBACK_URL}${urls?.[4].split('ipfs/')[1]}`)}
				position="absolute"
				ht={styleProps.height}
			/>
			<Asset
				as="img"
				className="asset-img"
				src={urls?.[5]}
				onError={(e) => (e.target.src = `${IPFS_FALLBACK_URL}${urls?.[5].split('ipfs/')[1]}`)}
				position="absolute"
				ht={styleProps.height}
			/>
		</Box>
	);
};
export default Warrior;

const Asset = styled(Box)(
	({ theme, ht }: { theme: any; ht?: string }) => `

	height: ${ht};

	@media only screen and (min-width: ${theme.breakpoints.mobS}) and (max-width: ${theme.breakpoints.mobL}) {
		height: 17rem;
	}
	@media only screen and (min-width: ${theme.breakpoints.mobL}) and (max-width: ${theme.breakpoints.tabS}) {
		height: 23rem;
	}
	@media only screen and (min-width: ${theme.breakpoints.tabS}) and (max-width: ${theme.breakpoints.tabL}) {
		height: 45rem;
	}

`
);
