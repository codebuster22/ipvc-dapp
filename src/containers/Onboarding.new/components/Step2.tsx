import Box from 'components/Box';
import Text from 'components/Text';
import { useState } from 'react';
import theme from 'styleguide/theme';
import HexaAlert from './HexaAlert';
import HexaButton from './HexaButton';
import { StepProps } from './Step0';
import BorderDesign from './BorderDesign';

const Step2 = ({ setStep }: StepProps) => {
	const [formText, setFormText] = useState<string>('');
	return (
		<Box alignSelf="flex-start" column alignItems="center" minWidth="100%">
			<HexaAlert>
				<Text as="h3" fontFamily="Cinzel" fontWeight="bold" mt="mxxxl" mb="mxl">
					Step. 2
				</Text>
				<Text as="h1" fontWeight="bold" fontFamily="El Messiri" lineHeight="28.8px">
					Describe your Victory.
				</Text>
				<Text as="h3" color="yellow-text-50" fontFamily="El Messiri" mt="mm" textAlign="center">
					Describe your victory over this pandemic and submit.
				</Text>
			</HexaAlert>
			<Box bg="black-20" alignSelf="center" maxWidth="58rem" mt="15.4rem">
				<Box
					border={`4px solid ${theme.colors['yellow-10']}`}
					zIndex={1}
					backgroundImage={`linear-gradient(180deg, ${theme.colors['blue-50']}CC -8.11%, ${theme.colors['blue-10']}00 31.22%)`}
					px="wxl"
					position="relative"
				>
					<BorderDesign />
					<Text as="h1" fontWeight="medium" fontFamily="El Messiri" lineHeight="43.2px" mt="wl">
						Describe your victory over this pandemic and submit.
					</Text>
					<Box
						as="textarea"
						mt="ms"
						css={`
							resize: none;
							&:placeholder {
								text-transform: none;
							}
						`}
						p="mm"
						border="none"
						height="30vh"
						placeholder="Start typing here..."
						color="yellow-text"
						justifyContent="center"
						fontFamily="El Messiri"
						fontWeight="medium"
						lineHeight="31.26px"
						fontSize="2rem"
						width="100%"
						outline="none"
						bg="#0D1C2B"
						value={formText}
						onChange={(e) => setFormText(e.target.value)}
					></Box>
					<HexaButton
						mt="wxs"
						mb="wl"
						size="small"
						disabled={formText.length ? false : true}
						alignSelf="center"
						mx={{ deskM: 'wl' }}
					>
						<Text as="h5" fontFamily="El Messiri" textAlign="center">
							Submit
						</Text>
					</HexaButton>
					<Box
						width="100%"
						transform="rotate(180deg)"
						css={`
							transform-origin: 50% 50%;
						`}
						position="absolute"
						left={0}
					>
						<BorderDesign rotated />
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default Step2;
