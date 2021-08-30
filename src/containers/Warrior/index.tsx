import Box from 'components/Box';
import useRegistry from 'components/hooks/useRegistry';
import Warrior from 'components/Warrior';
import React, { useState } from 'react';

const WarriorComp = () => {
	const [warriorId, setWarriorId] = useState<string>('0');
	const [warrior, setWarrior] = useState<string>('0');
	const registry = useRegistry();

	return (
		<Box px={{ mobS: 'ms', tabS: 'auto' }} py={{ mobS: 'ml', tabS: 'wl' }} column width="100vw" height="100vh">
			<Box>
				<Box
					as="input"
					placeholder="Enter Warrior Id"
					border="1px solid black"
					borderRadius="4px"
					fontSize="2rem"
					value={warriorId}
					onChange={(e) => setWarriorId(e.target.value)}
					mt="0"
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
					mt="mm"
					ml={{ mobS: '0', tabS: 'mm' }}
					onClick={() => setWarrior(warriorId)}
				>
					Render
				</Box>
			</Box>
			<Box>
				<Warrior warriorId={warrior} registry={registry} />
			</Box>
		</Box>
	);
};

export default WarriorComp;
