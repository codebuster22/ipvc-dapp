import Box from 'components/Box';
import Text from 'components/Text';
import React from 'react';
import BackgroundMap from '../../../svgs/background.svg';

const RoadMap = () => {
	return (
		<Box display="flex" justifyContent="center" id="roadmap">
			<BackgroundMap height="450px" />
			<Box position="absolute">
				<Box display="flex">
					<Text
						px="mm"
						py="mxs"
						fontSize="30px"
						fontFamily="sun serif"
						color="yellow-text"
						textAlign="center"
						width="50px"
					>
						-
					</Text>
					<Text py="ms" fontFamily="El Messiri" color="#D0D0D0">
						Launch zeroth-gen warriors.
					</Text>
				</Box>
				<Box display="flex">
					<Text
						px="mm"
						py="mxs"
						fontSize="30px"
						fontFamily="sun serif"
						color="yellow-text"
						textAlign="center"
						width="50px"
					>
						-
					</Text>
					<Text py="ms" fontFamily="El Messiri" color="#D0D0D0" textAlign="center">
						5 Warriors Giveaway at 50% Completion of first generation
					</Text>
				</Box>
				<Box display="flex">
					<Text
						py="mxs"
						fontSize="30px"
						fontFamily="sun serif"
						color="yellow-text"
						textAlign="center"
						width="50px"
					>
						-
					</Text>
					<Text py="ms" fontFamily="El Messiri" color="#D0D0D0" textAlign="center">
						10 Warriors Giveaway at 100% Completion of first generation
					</Text>
				</Box>
				<Box display="flex">
					<Text
						py="mxs"
						fontSize="30px"
						fontFamily="sun serif"
						color="yellow-text"
						textAlign="center"
						width="50px"
					>
						-
					</Text>
					<Text py="ms" fontFamily="El Messiri" color="#D0D0D0" textAlign="center">
						Finalizing next generation Theme
					</Text>
				</Box>
				<Box display="flex">
					<Text
						py="mxs"
						fontSize="30px"
						fontFamily="sun serif"
						color="yellow-text"
						textAlign="center"
						width="50px"
					>
						-
					</Text>
					<Text py="ms" fontFamily="El Messiri" color="#D0D0D0" textAlign="center">
						Start Accepting proposals for Warriors Assets for next Generation
					</Text>
				</Box>
				<Box display="flex">
					<Text
						py="mxs"
						fontSize="30px"
						fontFamily="sun serif"
						color="yellow-text"
						textAlign="center"
						width="50px"
					>
						-
					</Text>
					<Text py="ms" fontFamily="El Messiri" color="#D0D0D0" textAlign="center">
						Launch Warriors Token, Governance Token for Warriors DAO
					</Text>
				</Box>
				<Box display="flex">
					<Text
						py="mxs"
						fontSize="30px"
						fontFamily="sun serif"
						color="yellow-text"
						textAlign="center"
						width="50px"
					>
						-
					</Text>
					<Text px="m s" fontFamily="El Messiri" color="#D0D0D0">
						IDO for Warriors Token
					</Text>
				</Box>
				<Box display="flex">
					<Text
						py="mxs"
						fontSize="30px"
						fontFamily="sun serif"
						color="yellow-text"
						textAlign="center"
						width="50px"
					>
						-
					</Text>
					<Text py="ms" fontFamily="El Messiri" color="#D0D0D0">
						Start Accepting proposals for Warriors Assets for next Generation
					</Text>
				</Box>
				<Box display="flex">
					<Text
						py="mxs"
						fontSize="30px"
						fontFamily="sun serif"
						color="yellow-text"
						textAlign="center"
						width="50px"
					>
						-
					</Text>
					<Text py="ms" fontFamily="El Messiri" color="#D0D0D0">
						Handover Ownership to DAO
					</Text>
				</Box>
			</Box>
		</Box>
	);
};

export default RoadMap;
