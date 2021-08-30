import Box from 'components/Box';
import Text from 'components/Text';
import { StepProps } from './Step0';
import Sword from 'svgs/sword.svg';

const Step4 = ({ setStep }: StepProps) => {
	return (
		<Box center column height="100vh">
			<Box position="relative">
				<Box
					id="left-sword"
					css={`
						transform-origin: 50% 50%;
						transform: rotate(90deg);
					`}
				>
					<Sword />
				</Box>
				<Box position="absolute" top={3} left={2} id="right-sword">
					<Sword />
				</Box>
			</Box>
			<Text as="h1" fontWeight="regular" fontFamily="El Messiri" color="white-text" mt="mm">
				Please wait white we generate your warrior.
			</Text>
		</Box>
	);
};

export default Step4;
