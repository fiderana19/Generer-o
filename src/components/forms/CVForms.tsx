import { useCV } from "@/context/CVContext";
import { LoadingOutlined } from "@ant-design/icons";
import React, { lazy, Suspense } from "react";
const General = lazy(() => import("./General"));
const Education = lazy(() => import("./Education"));
const Experience = lazy(() => import("./Experience"));
const Hobbies = lazy(() => import("./Hobbies"));
const Skills = lazy(() => import("./Skills"));
const SoftSkills = lazy(() => import("./SoftSkills"));
const Contact = lazy(() => import("./Contact"));
const Languages = lazy(() => import("./Languages"));

const CVForms: React.FC = () => {
    const { progress } = useCV();

    switch (progress) {
        case 4:
            return <Suspense fallback={<div className='text-6xl h-80 flex flex-col justify-center text-center'><LoadingOutlined /></div>}>
                <General />
            </Suspense>
        case 16:
            return <Suspense fallback={<div className='text-6xl h-80 flex flex-col justify-center text-center'><LoadingOutlined /></div>}>
                <Contact />
            </Suspense> 
        case 28:
            return <Suspense fallback={<div className='text-6xl h-80 flex flex-col justify-center text-center'><LoadingOutlined /></div>}>
                <Education />
            </Suspense>   
        case 40:
            return <Suspense fallback={<div className='text-6xl h-80 flex flex-col justify-center text-center'><LoadingOutlined /></div>}>
                <Experience />
            </Suspense>   
        case 52:
            return <Suspense fallback={<div className='text-6xl h-80 flex flex-col justify-center text-center'><LoadingOutlined /></div>}>
                <Skills />
            </Suspense>    
        case 64:
            return <Suspense fallback={<div className='text-6xl h-80 flex flex-col justify-center text-center'><LoadingOutlined /></div>}>
                <SoftSkills />
            </Suspense>
        case 76:
            return <Suspense fallback={<div className='text-6xl h-80 flex flex-col justify-center text-center'><LoadingOutlined /></div>}>
                <Languages />
            </Suspense>
        case 88:
            return <Suspense fallback={<div className='text-6xl h-80 flex flex-col justify-center text-center'><LoadingOutlined /></div>}>
                <Hobbies />
            </Suspense>
        default:
            return <Suspense fallback={<div className='text-6xl h-80 flex flex-col justify-center text-center'><LoadingOutlined /></div>}>
                <General />
            </Suspense>
    }
}

export default CVForms;