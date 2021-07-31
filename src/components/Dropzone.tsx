import { useRef, useState } from 'react';
import Box, { BoxProps } from './Box';
import Text from './Text';
import UploadIcon from '../svgs/upload-file.svg';

export interface DropzoneProps extends BoxProps {
	setFile?: (file: File) => void;
}

const Dropzone = ({ setFile, ...props }: DropzoneProps): JSX.Element => {
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

		const rect = e.target.getBoundingClientRect();

		if (e.clientX < rect.left || e.clientX > rect.right || e.clientY < rect.top || e.clientY > rect.bottom) {
			setHighlight(false);
		}
	};

	return (
		// @ts-expect-error Style Props spreading causing overload of props
		<Box
			{...props}
			cursor="pointer"
			onClick={() => openFileSystem()}
			onDragEnter={onDragEnter}
			onDragOver={onDragOver}
			onDragLeave={onDragLeave}
			onDrop={handleDrop}
			column
		>
			<Box
				bg={highlight ? 'green-100' : props.bg ?? 'white'}
				center
				column
				height="95%"
				width="98%"
				borderRadius="10px"
			>
				<UploadIcon color="black" height="32px" />
				<Text as="h5" mt="mxs">
					Drag & Drop or Click to Browse
				</Text>
				<Box
					ref={inputRef}
					as="input"
					type="file"
					display="none"
					onChange={(e) => setFile(e.target.files[0])}
				></Box>
			</Box>
		</Box>
	);
};

export default Dropzone;
