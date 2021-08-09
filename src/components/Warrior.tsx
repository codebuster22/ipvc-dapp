/* eslint-disable import/no-unresolved */
import getAssetIds, { IAssets } from '@/ethereum/utils/getAssetIds';
import React, { useContext, useState, useEffect } from 'react';
import Box from './Box';
import { StatesContext } from './StatesContext';

interface Props {
	height?: string;
	warriorId: number;
}

const Warrior = (props: Props) => {
	const state = useContext(StatesContext);
	const [assets, setAssets] = useState<IAssets>();

	useEffect(async () => {
		console.log({ state });
		const assetIds = await getAssetIds(state?.warriorCore, props?.warriorId);
		setAssets(assetIds);
	}, [state?.provider]);

	return (
		<Box border="1px solid black" fontSize="1rem">
			<Box as="img" src={'/assets/body_2.png'} position="absolute" height={props.height} />
			<Box as="img" src={'/assets/outfit.png'} position="absolute" height={props.height} />
			<Box as="img" src={'/assets/helmet_2.png'} position="absolute" height={props.height} />
			<Box as="img" src={'/assets/sword_3.png'} position="absolute" height={props.height} />
			<Box as="img" src={'/assets/sheild_3.png'} position="absolute" height={props.height} />
			<Box as="img" src={'/assets/expression_4.png'} position="absolute" height={props.height} />
		</Box>
	);
};

export default Warrior;

Warrior.defaultProps = {
	height: '30rem',
};
