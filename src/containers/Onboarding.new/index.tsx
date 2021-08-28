import React, { useState } from 'react';
import Box from 'components/Box';
import Step0 from './components/Step0';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import theme from 'styleguide/theme';

const OnboardingComp = () => {
	const [step, setStep] = useState<number>(0);
	const stepsComponents = [<Step0 {...{ setStep }} />, <Step1 {...{ setStep }} />, <Step2 {...{ setStep }} />];
	return (
		<Box bg="black-20" minHeight="100vh">
			<Box
				backgroundImage={`linear-gradient(180deg, ${theme.colors['blue-50']}CC -8.11%, ${theme.colors['blue-10']}00 41.22%)`}
				minHeight="100vh"
				fontFamily="Cinzel Decorative"
				color="yellow-text"
				column
				alignItems="center"
			>
				{stepsComponents[step]}
			</Box>
		</Box>
	);
};

export default OnboardingComp;
