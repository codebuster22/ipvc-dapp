import Box from 'components/Box';
import Text from 'components/Text';
import React, { useState } from 'react';

import HamburgerIcon from 'svgs/hamburger.svg';

const Navbar = () => {
	const [showDropdown, setShowDropdown] = useState(false);
	return (
		<Box
			borderBottom="4px solid"
			borderBottomColor="yellow-text"
			position="absolute"
			width="100%"
			left={0}
			zIndex={10}
		>
			<Box mx={{ mobS: 'ml', deskM: '21rem' }} between>
				<Box
					display="flex"
					alignItems="center"
					height="56.85px"
					letterSpacing="4.5%"
					fontStyle="normal"
					color="yellow-text"
					py="ml"
				>
					<a href="/">
						<Text as="h1" fontFamily="Cinzel Decorative" fontWeight="bold">
							Warriors
						</Text>
					</a>
				</Box>
				<Box display={{ mobS: 'none', tabS: 'flex' }} justifyContent="space-around" py="ml">
					<NavItem href="#about" content="About" />
					<NavItem href="#roadmap" content="Roadmap" />
					<NavItem href="#faq" content="FAQs" />
					<NavItem href="#contact" content="Contact" color="yellow-text-50" />
				</Box>
				<Box
					color="yellow-text"
					display={{ mobS: 'block', tabS: 'none' }}
					onClick={() => setShowDropdown(!showDropdown)}
				>
					<HamburgerIcon />
				</Box>
			</Box>
			<Box column center display={showDropdown ? 'flex' : 'none'} bg="blue-20" zIndex={3}>
				<NavItem href="#about" content="About" />
				<NavItem href="#roadmap" content="Roadmap" />
				<NavItem href="#faq" content="FAQs" />
				<NavItem href="#contact" content="Contact" color="yellow-text-50" />
			</Box>
		</Box>
	);
};

export default Navbar;

const NavItem = ({ href, content, color }: { href: string; content: string; color?: string }) => {
	return (
		<a href={href}>
			<Text
				as="h3"
				color={color ?? 'white-text'}
				mx={{ mobS: 'mm', tabS: 'wxxs' }}
				fontWeight="bold"
				fontFamily="El Messiri"
				lineHeight="44px"
			>
				{content}
			</Text>
		</a>
	);
};
