import Box from 'components/Box';
import { StepProps } from './Step0';
import ArrowLeft from 'svgs/arrow-left.svg';
import Text from 'components/Text';
import { StatesContext } from 'components/StatesContext';
import { useContext } from 'react';
import { useEffect } from 'react';

interface Props extends StepProps {
	warriorId: string;
}

const Step5 = ({ setStep, warriorId }: Props) => {
	const { warriorCore } = useContext(StatesContext);

	useEffect(() => {
		const getCurrentGenerationInfo = async () => {
			const currentPopulation = await warriorCore?.currentGenerationPopulation();
			const currentMaximumPopulation = await warriorCore?.currentGenerationMaxPopulation();
			console.log({ currentPopulation, currentMaximumPopulation });
		};
		if (warriorCore != null) {
			getCurrentGenerationInfo();
		}
	}, [warriorCore]);
	return (
		<Box alignSelf="flex-start" pl="wl" pt="wxs">
			<Box color="yellow-text" row center>
				<ArrowLeft height="38" width="46" />
				<Text as="h2" fontFamily="El Messiri" fontWeight="medium" ml="mm">
					Back to Home
				</Text>
			</Box>
		</Box>
	);
};

export default Step5;
