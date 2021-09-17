import Box from 'components/Box';
import Text from 'components/Text';
import HexaAlert from './HexaAlert';
import { StepProps } from './Step0';

const Step3 = ({ setStep }: StepProps) => {
	return (
		<Box alignSelf="flex-start" column alignItems="center" minWidth="100%">
			<HexaAlert>
				<Text as="h3" fontFamily="Cinzel" fontWeight="bold" mt="mxxxl" mb="mxl">
					Step. 3
				</Text>
				<Text as="h1" fontWeight="bold" fontFamily="El Messiri" lineHeight="28.8px">
					Confirm Payment
				</Text>
				<Text as="h3" color="yellow-text-50" fontFamily="El Messiri" mt="mm">
					Confirm payment for Ethereum Transaction fees.
				</Text>
			</HexaAlert>
		</Box>
	);
};

export default Step3;
