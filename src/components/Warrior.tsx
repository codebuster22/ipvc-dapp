/* eslint-disable import/no-unresolved */
import React from 'react';
import Box from './Box';

const Warrior = (props) => {
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
