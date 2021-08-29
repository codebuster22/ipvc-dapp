import Box from 'components/Box';
import Text from 'components/Text';
import React from 'react';

const Navbar = () => {
	return (
		<Box borderBottom="4px solid" borderBottomColor="yellow-text" position="absolute" width="100%" left={0}>
			<Box mx="21rem" between>
				<Box
					display="flex"
					alignItems="center"
					height="56.85px"
					letterSpacing="4.5%"
					fontStyle="normal"
					color="yellow-text"
					py="ml"
				>
					<Text as="h1" fontFamily="Cinzel Decorative" fontWeight="bold">
						Warriors
					</Text>
				</Box>
				<Box display="flex" justifyContent="space-around" py="ml">
					<Text as="h3" color="#D0D0D0" mx="wxxs" fontWeight="bold" fontFamily="El Messiri" lineHeight="44px">
						About
					</Text>
					<Text as="h3" color="#D0D0D0" mx="wxxs" fontWeight="bold" fontFamily="El Messiri" lineHeight="44px">
						Roadmap
					</Text>
					<Text as="h3" color="#D0D0D0" mx="wxxs" fontWeight="bold" fontFamily="El Messiri" lineHeight="44px">
						FAQ
					</Text>
					<Text
						as="h3"
						color="yellow-text-50"
						mx="wxxs"
						fontWeight="bold"
						fontFamily="El Messiri"
						lineHeight="44px"
					>
						Contact
					</Text>
				</Box>
			</Box>
		</Box>
	);
};

export default Navbar;
