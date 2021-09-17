import Box from 'components/Box';
import Text from 'components/Text';
import React from 'react';
import Twitter from 'svgs/twitter.svg';
import Discord from 'svgs/discord.svg';
import Telegram from 'svgs/telegram.svg';
import { useRouter } from 'next/router';
import Container from 'components/Container';

const Footer = () => {
	const router = useRouter();
	return (
		<Box backgroundColor="blue-20" id="footer" px="mxl">
			<Container>
				<Box>
					<Box
						between
						alignItems={{ mobS: 'center', tabS: 'flex-start' }}
						flexDirection={{ mobS: 'column', tabS: 'row' }}
					>
						<Box mt={{ mobS: 'mxl', tabS: 'wxl' }}>
							<Text
								fontSize="41px"
								fontFamily="Cinzel Decorative"
								fontWeight="bold"
								lineHeight="56px"
								color="yellow-text"
							>
								Warriors
							</Text>
							<Text
								color="white-text"
								fontSize="14px"
								lineHeight="14px"
								fontFamily="El Messiri"
								fontWeight="bold"
								textAlign={{ mobS: 'start', tabS: 'end' }}
								letterSpacing="0.04em"
								fontStyle="normal"
							>
								an NFT project by Chain Labs
							</Text>
						</Box>
						<Box
							mr={{ mobS: '0', tabS: 'wxxl' }}
							mt={{ mobS: 'mxl', tabS: 'wxl' }}
							mb="mxl"
							center
							flexDirection={{ mobS: 'row', tabS: 'column' }}
							maxWidth="100%"
							flexWrap="wrap"
						>
							<FooterItem href="#about" content="About" />
							<FooterItem href="#roadmap" content="Roadmap" />
							<FooterItem href="#faq" content="FAQs" />
							<FooterItem href="#contact" content="Contact Us" />
							<Box
								display="flex"
								justifyContent="space-between"
								mx="mxs"
								minWidth={{ mobS: '50%', tabS: '100%' }}
							>
								<Twitter cursor="pointer" />
								<Discord onClick={() => router.push('https://discord.gg/fhZzy9Bw')} cursor="pointer" />
								<Telegram cursor="pointer" />
							</Box>
						</Box>
					</Box>
				</Box>
			</Container>
		</Box>
	);
};

export default Footer;

const FooterItem = ({ href, content, color }: { href: string; content: string; color?: string }) => {
	return (
		<a href={href}>
			<Text
				as="h3"
				color={color ?? 'white-text'}
				mx="wxxs"
				fontWeight="bold"
				fontFamily="El Messiri"
				lineHeight="44px"
				letterSpacing="0.045em"
			>
				{content}
			</Text>
		</a>
	);
};
