import React, { useState, useContext } from 'react';
import Box from 'components/Box';
import Step0 from './components/Step0';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import theme from 'styleguide/theme';
import { ethers } from 'ethers';
import generateWarrior from 'ethereum/utils/generateWarrior';
import { StatesContext } from 'components/StatesContext';
import { getError } from 'utils/helpers';
import { toast } from 'react-toastify';
import Step3 from './components/Step3';
import Step5 from './components/Step5';
import useRegistry from 'components/hooks/useRegistry';
import Step4 from './components/Step4';

const OnboardingComp = () => {
	const [step, setStep] = useState<number>(0);
	const [formText, setFormText] = useState<string>('');
	const [warriorId, setWarriorId] = useState<string>('');
	const [address, setAddress] = useState<string>('');

	const { warriorCore, signer } = useContext(StatesContext);
	const registry = useRegistry();

	const handleWarriorGenerate = async (e) => {
		e.preventDefault();

		if (formText.length !== 0) {
			// setLoading(true);
			// @ts-expect-error signer-props
			const address = await signer?.getAddress();
			const metadata = ethers.utils.keccak256(ethers.utils.toUtf8Bytes(formText.concat(address)));
			try {
				const id = await generateWarrior(warriorCore, signer, metadata, setStep);
				setStep(5);
				// setWarriorId(id.toString());
				// setLoading(false);
				// setSuccess(true);
				setWarriorId(id.toString());
				// setIsModalOpen(true);
			} catch (err) {
				const error = await getError(err.code);
				toast.error(error);
				// setLoading(false);
			}
		}
	};

	const stepsComponents = [
		<Step0 {...{ setStep }} />,
		<Step1 {...{ setStep, setAddress }} />,
		<Step2 {...{ setStep, handleWarriorGenerate, formText, setFormText }} />,
		<Step3 {...{ setStep }} />,
		<Step4 {...{ setStep }} />,
		<Step5 {...{ setStep, warriorId, registry, address }} />,
	];

	return (
		<Box bg="black-30" minHeight="100vh">
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
