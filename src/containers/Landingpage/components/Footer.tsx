import Box from 'components/Box';
import Text from 'components/Text';
import React from 'react';
import Twitter from 'svgs/twitter.svg';
import Discord from 'svgs/discord.svg';
import Telegram from 'svgs/telegram.svg';
import { useRouter } from 'next/router';

const Footer = () => {
	const router = useRouter();
	return (
		<Box backgroundColor="blue-20" width="100%" id="footer">
			<Box mx="wxxl">
				<Box between mx="wxxl" alignItems="initial">
					<Box mr="wxxl" mt="wxl">
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
							color="#FFFFFF"
							fontSize="14px"
							lineHeight="14px"
							fontFamily="El Messiri"
							fontWeight="bold"
							textAlign="end"
							letterSpacing="0.04em"
							fontStyle="normal"
						>
							an NFT project by Chain Labs
						</Text>
					</Box>
					<Box mr="wxxl" mt="wxl" mb="mxl" px="wxxl">
						<Text
							fontSize="28px"
							color="#D0D0D0"
							mx="wxxs"
							fontWeight="bold"
							fontFamily="El Messiri"
							lineHeight="44px"
							letterSpacing="0.045em"
							mr="wxxl"
						>
							About
						</Text>
						<Text
							fontSize="28px"
							color="#D0D0D0"
							mx="wxxs"
							fontWeight="bold"
							fontFamily="El Messiri"
							lineHeight="44px"
							letterSpacing="0.045em"
							mr="wxxl"
						>
							Roadmap
						</Text>
						<Text
							fontSize="28px"
							color="#D0D0D0"
							mx="wxxs"
							fontWeight="bold"
							fontFamily="El Messiri"
							lineHeight="44px"
							letterSpacing="0.045em"
							mr="wxxl"
						>
							FAQ
						</Text>
						<Text
							fontSize="28px"
							color="#D0D0D0"
							mx="wxxs"
							fontWeight="bold"
							fontFamily="El Messiri"
							lineHeight="44px"
							letterSpacing="0.045em"
							mr="wxxl"
						>
							Contact us
						</Text>
						<Box display="flex" justifyContent="space-evenly" mx="mxs">
							<Twitter cursor="pointer" />
							<Discord onClick={() => router.push('https://discord.gg/fhZzy9Bw')} cursor="pointer" />
							<Telegram cursor="pointer" />
						</Box>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default Footer;
