import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print'


const CVPreview: React.FC<any> = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  
    const reactToPrintFn = useReactToPrint({ contentRef });

    return (
    <div>
        <button onClick={reactToPrintFn}>Print</button>
        <div ref={contentRef} className='bg-gray-500 flex w-[900px]'>
            Content to print
        </div>
    </div>
    );
};

export default CVPreview;