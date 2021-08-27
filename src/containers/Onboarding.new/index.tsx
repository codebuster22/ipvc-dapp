import React from 'react';
import Box from 'components/Box';
import Step0 from './components/Step0';
import Step1 from './components/Step1';
import { useState } from 'react';
import Step2 from './components/Step2';

const OnboardingComp = () => {
	const [step, setStep] = useState<number>(0);
	const stepsComponents = [<Step0 {...{ setStep }} />, <Step1 {...{ setStep }} />, <Step2 {...{ setStep }} />];
	return (
		<Box bg="#0F1118" minHeight="100vh">
			<Box
				backgroundImage="linear-gradient(180deg, #401F00 16.98%, #23000000 80.33%)"
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
