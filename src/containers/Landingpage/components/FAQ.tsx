import Box from 'components/Box';
import Text from 'components/Text';
import React from 'react';

const FAQS = [
	'What is the guarantee that I will receive a unique avatar?',
	'How can I check the authenticity of the Warrior, once downloaded?',
	'How many Warriors can I have?',
	'Who governs the Warriors and it’s future?',
	'What information do we store?',
];

const FAQ = () => {
	return (
		<Box mx={{ mobS: 'mxxl', tabS: 'wxxl' }} mt="wl" fontWeight="700" alignSelf="flex-start">
			<Box mx="ml" fontWeight="700">
				{FAQS.map((faq, i) => (
					<Text
						fontFamily="El Messiri"
						fontSize={{ mobS: '1.6rem', tabS: '2.8rem' }}
						lineHeight="44px"
						textAlign="initial"
						color="rgba(255, 211, 126, 0.8)"
						fontWeight="regular"
						mb={{ mobS: 'mm', tabS: 'mxxl' }}
						key={`faq-${i}`}
					>
						{faq}
					</Text>
				))}
			</Box>
		</Box>
	);
};

export default FAQ;
