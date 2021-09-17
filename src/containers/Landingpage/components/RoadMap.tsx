import Box from 'components/Box';
import Text from 'components/Text';
import React from 'react';
import theme from 'styleguide/theme';
import BackgroundMap from '../../../svgs/background.svg';

const ROADMAP_STEPS = [
	'Launch zeroth-gen warriors.',
	'5 Warriors Giveaway at 50% Completion of first generation',
	'10 Warriors Giveaway at 100% Completion of first generation',
	'Finalizing next generation Theme',
	'Start Accepting proposals for Warriors Assets for next Generation',
	'Launch Warriors Token, Governance Token for Warriors DAO',
	'IDO for Warriors Token',
	'Start Accepting proposals for Warriors Assets for next Generation',
	'Handover Ownership to DAO',
];

const RoadMap = () => {
	return (
		<Box display="flex" justifyContent={{ mobS: 'flex-start', tabS: 'center' }}>
			<Box
				css={`
					transform-origin: 25% 50%;
					position: absolute;
					@media only screen and (max-width: ${theme.breakpoints.tabS}) {
						transform: rotate(90deg);
					}
					& svg {
						height: 45rem;
						@media only screen and (max-width: ${theme.breakpoints.tabS}) {
							height: 30rem;
						}
					}
				`}
			>
				<BackgroundMap />
			</Box>
			<Box>
				{ROADMAP_STEPS.map((step, index) => (
					<Box display="flex">
						<Text
							px="mm"
							py="mxs"
							as="h2"
							fontFamily="san-serif"
							color="yellow-text"
							textAlign="center"
							width="50px"
						>
							-
						</Text>
						<Text as="h2" py="ms" fontFamily="El Messiri" color="#D0D0D0" key={`step-${index}`}>
							{step}
						</Text>
					</Box>
				))}
			</Box>
		</Box>
	);
};

export default RoadMap;
