import { WindowControls } from '#components'
import WindowWrapper from '#hoc/WindowWrapper'
import { Download } from 'lucide-react'
import React from 'react'

import { Document, Page, pdfjs } from 'react-pdf'
// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//     'pdfjs-dist/build/pdf.worker.min.mjs',
//     import.meta.url,
// ).toString();
pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`

const Resume = () => {
    return (
        <>
            <div id="window-header">
                <WindowControls target={'resume'} />
                <h2>Resume.pdf</h2>
                <a href="files/resume.pdf" download className='cursor-pointer' title='Download Resume'>
                    <Download className='icon' />
                </a>
            </div>
            <div className='w-full h-screen overflow-scroll overflow-y-scroll flex flex-1 justify-center'>
                <Document file={'files/resume.pdf'}
                >
                    <Page pageNumber={1} renderAnnotationLayer renderTextLayer />
                </Document>
            </div>
        </>
    )
}
export default WindowWrapper(Resume, 'resume')