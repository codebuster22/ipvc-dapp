/* eslint-disable import/no-unresolved */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import * as pdfjsLib from 'pdfjs-dist';
import * as pdfjsWorker from 'pdfjs-dist/build/pdf.worker.entry';
import { PDFDocumentProxy, TextItem } from 'pdfjs-dist/types/display/api';
import Tesseract from 'tesseract.js';

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker.workerSrc;

export const parsePDF = (file: File): void => {
	const fileReader: FileReader = new FileReader();
	fileReader.onload = async (e: ProgressEvent<FileReader>) => {
		const pdf = e.target.result;
		// @ts-ignore
		const pdfDoc = pdfjsLib.getDocument(pdf);
		pdfDoc.promise.then(async (pdf) => {
			console.log(pdf.numPages);
			const pdfDocument = pdf;
			const pagesPromises = [];

			for (let i = 0; i < pdf.numPages; i++) {
				// Required to prevent that i is always the total of pages
				pagesPromises.push(getPageText(i + 1, pdfDocument));
			}

			Promise.all(pagesPromises).then(function (pagesText) {
				for (let i = 0; i < pagesText.length; i++) {
					console.log(pagesText[i]);
				}
			});
		});
	};
	fileReader.readAsArrayBuffer(file);
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const getPageText = (pageNum: number, PDFDocumentInstance: PDFDocumentProxy) => {
	// Return a Promise that is solved once the text of the page is retrieven
	return new Promise(function (resolve) {
		PDFDocumentInstance.getPage(pageNum).then(function (pdfPage) {
			// The main trick to obtain the text of the PDF page, use the getTextContent method
			pdfPage.getTextContent().then(function (textContent) {
				const textItems: TextItem[] = textContent.items;
				let finalString = '';

				// Concatenate the string of the item to the final string
				for (let i = 0; i < textItems.length; i++) {
					const item: TextItem = textItems[i];
					finalString += item?.str + ' ';
				}

				// Solve promise with the text retrieven from the page
				resolve(finalString);
			});
		});
	});
};

export const parseImage = async (file: File): Promise<string> => {
	const imagePath = URL.createObjectURL(file);
	const result = await Tesseract.recognize(imagePath, 'eng', {
		logger: (m) => console.log(m),
	});
	return result.data.text;
};
