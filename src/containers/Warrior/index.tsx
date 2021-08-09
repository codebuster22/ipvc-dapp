/* eslint-disable import/no-unresolved */
import { getAssetRegistry } from '@/api/queries';
import Box from '@/components/Box';
import Warrior from '@/components/Warrior';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { IRegistry } from './types';

const WarriorComp = () => {
	const [warriorId, setWarriorId] = useState<string>('50');
	const [warrior, setWarrior] = useState<string>('50');
	const [registry, setRegistry] = useState<IRegistry>();
	useQuery('registry-fetch', getAssetRegistry, {
		enabled: true,
		onSuccess: (result) => {
			let key;
			for (const k in result) {
				key = k;
				break;
			}
			const res = JSON.parse(key);
			setRegistry(res);
		},
		onError: (error: any) => {
			console.log({ error });
		},
	});

	return (
		<Box center>
			<Box position="relative">
				<Warrior height="50rem" warriorId={warrior} registry={registry} />
			</Box>
			<Box
				as="input"
				placeholder="Enter Warrior Id"
				border="1px solid black"
				borderRadius="4px"
				fontSize="2rem"
				value={warriorId}
				onChange={(e) => setWarriorId(e.target.value)}
				mt="wxxs"
				py="ms"
				px="mxs"
				fontFamily="inherit"
				type="number"
				outline="none"
				onKeyDown={(e) => {
					if (e.keyCode == 13) {
						document.getElementById('warrior-btn').click();
					}
				}}
			/>
			<Box
				as="button"
				id="warrior-btn"
				fontSize="2rem"
				py="mxs"
				px="mxs"
				fontFamily="inherit"
				mt="wxxs"
				ml="mm"
				onClick={() => setWarrior(warriorId)}
			>
				Render
			</Box>
		</Box>
	);
};

export default WarriorComp;
