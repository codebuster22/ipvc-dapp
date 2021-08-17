import Box from '@/components/Box';
import React from 'react';
import AllWarrior from '@/containers/gallery/AllWarriors';

const GalleryPage = (): JSX.Element => {
	return (
		<React.Fragment>
			<title>Gallery</title>
			<Box height="100vh" bg="pink">
				<AllWarrior />
			</Box>
		</React.Fragment>
	);
};

export default GalleryPage;
