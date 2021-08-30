/* eslint-disable @typescript-eslint/ban-ts-comment */
import * as pdfjsLib from 'pdfjs-dist';
import * as pdfjsWorker from 'pdfjs-dist/build/pdf.worker.entry';
import Tesseract from 'tesseract.js';

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker.workerSrc;

//To parse a PDF documnet, we need to first convert the PDF file into an image.
//This is done by first converting the PDF into a canvas element
//Then the canvas element is converted into a Data URL
//The Data URL is then converted to a Blob/File and it's path is determined
//The path is then passed to Tesseract to be parsed
export const parsePDF = (file: File, setProgress: (number) => void, setText: (string) => void): void => {
	const fileReader: FileReader = new FileReader();
	fileReader.onload = async (e: ProgressEvent<FileReader>) => {
		const pdfFile = e.target.result;
		// @ts-ignore
		const pdfDoc = pdfjsLib.getDocument(pdfFile); //Convert the PDF file to a PDFDocument object.
		const pdf = await pdfDoc.promise; //Get the PDFDocument object's promise.
		const page = await pdf.getPage(1); //Get the first page of the PDF document.

		//Check to ensure that we are running in the browser to access document
		if (process.browser) {
			//Initialize the canvas element
			const canvas = document.createElement('canvas');
			const ctx = canvas.getContext('2d');
			const viewport = page.getViewport({ scale: 1.5 });
			canvas.height = viewport.height;
			canvas.width = viewport.width;

			//Render the page into the canvas element and wait for the render to finish
			page.render({ canvasContext: ctx, viewport }).promise.then(async () => {
				//when render is finished, convert the canvas element to a Data URL
				const dataURI = canvas.toDataURL('image/png', 1);

				// Convert the DataURL to a Blob
				const enc = dataURI.split(',')[1];
				console.log({ dataURI, enc });
				const binary = atob(enc);
				const mime = 'image/png';
				let n = binary.length;
				const u8arr = new Uint8Array(n);
				while (n--) {
					u8arr[n] = binary.charCodeAt(n);
				}
				const blob = new Blob([u8arr], { type: mime });

				//Create a Blob path URL
				const imagePath = URL.createObjectURL(blob);

				//Pass the Blob path URL to Tesseract
				const result = await Tesseract.recognize(imagePath, 'eng', {
					logger: (m) => {
						//To track progress of the parsing process
						if (m.status == 'recognizing text') {
							const progress = Math.trunc(m.progress * 100);
							setProgress(progress);
						}
					},
				});

				setText(result?.data?.text);
			});
		}
	};
	fileReader.readAsArrayBuffer(file);
};

export const parseImage = async (file: File, setProgress: (number) => void): Promise<string> => {
	const imagePath = URL.createObjectURL(file);
	console.log({ imagePath });
	const result = await Tesseract.recognize(imagePath, 'eng', {
		logger: (m) => {
			if (m.status == 'recognizing text') {
				const progress = Math.trunc(m.progress * 100);
				setProgress(progress);
			}
		},
	});
	return result.data.text;
};
