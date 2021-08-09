import Box from '@/components/Box';
import { StatesContext } from '@/components/StatesContext';
import Warrior from '@/components/Warrior';
import React, { useContext, useEffect, useState } from 'react';

const WarriorComp = () => {
	const state = useContext(StatesContext);
	const [warriorId, setWarriorId] = useState<number>();

	return (
		<Box>
			<Box>
				<Warrior height="50rem" warriorId={warriorId} />
			</Box>
		</Box>
	);
};

export default WarriorComp;
