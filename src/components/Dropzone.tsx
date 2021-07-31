import { useRef, useState } from 'react';
import Box from './Box';
import Text from './Text';

export interface DropzoneProps {
	setFile: (file: File) => void;
}

const Dropzone = ({ setFile }: DropzoneProps): JSX.Element => {
	const inputRef = useRef(null);
	const [highlight, setHighlight] = useState(false);

	const openFileSystem = () => {
		if (inputRef.current.disabled) {
			return;
		} else {
			inputRef.current.click();
		}
	};

	const onDragEnter = (e) => {
		e.preventDefault();
		setHighlight(true);
	};

	const onDragOver = (event) => {
		event.preventDefault();
	};

	const handleDrop = (e) => {
		e.preventDefault();

		if (inputRef.current.disabled) {
			return;
		}

		const files = e.dataTransfer.files;

		setFile(files[0]);
		setHighlight(false);
	};

	const onDragLeave = (e) => {
		e.preventDefault();

		setHighlight(false);
	};

	return (
		<Box
			border="4px dashed"
			borderColor="purple-100"
			height="20rem"
			my="ml"
			width="40rem"
			center
			onClick={() => openFileSystem()}
			onDragEnter={onDragEnter}
			onDragOver={onDragOver}
			onDragLeave={onDragLeave}
			onDrop={handleDrop}
			bg={highlight ? 'purple-50' : 'gray-100'}
		>
			<Text as="h2">Drag & Drop</Text>
			<Box ref={inputRef} as="input" type="file" display="none" onChange={console.log}></Box>
		</Box>
	);
};

export default Dropzone;
