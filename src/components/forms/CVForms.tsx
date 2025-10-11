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
const Colors = lazy(() => import("./Colors"));

const CVForms: React.FC = () => {
    const { progress } = useCV();

    switch (progress) {
        case 10:
            return <Suspense fallback={<div className='text-6xl h-[65vh] flex flex-col justify-center text-center'><LoadingOutlined /></div>}>
                <General />
            </Suspense>
        case 20:
            return <Suspense fallback={<div className='text-6xl h-[65vh] flex flex-col justify-center text-center'><LoadingOutlined /></div>}>
                <Contact />
            </Suspense> 
        case 30:
            return <Suspense fallback={<div className='text-6xl h-[65vh] flex flex-col justify-center text-center'><LoadingOutlined /></div>}>
                <Education />
            </Suspense>   
        case 40:
            return <Suspense fallback={<div className='text-6xl h-[65vh] flex flex-col justify-center text-center'><LoadingOutlined /></div>}>
                <Experience />
            </Suspense>   
        case 50:
            return <Suspense fallback={<div className='text-6xl h-[65vh] flex flex-col justify-center text-center'><LoadingOutlined /></div>}>
                <Skills />
            </Suspense>    
        case 60:
            return <Suspense fallback={<div className='text-6xl h-[65vh] flex flex-col justify-center text-center'><LoadingOutlined /></div>}>
                <SoftSkills />
            </Suspense>
        case 70:
            return <Suspense fallback={<div className='text-6xl h-[65vh] flex flex-col justify-center text-center'><LoadingOutlined /></div>}>
                <Languages />
            </Suspense>
        case 80:
            return <Suspense fallback={<div className='text-6xl h-[65vh] flex flex-col justify-center text-center'><LoadingOutlined /></div>}>
                <Hobbies />
            </Suspense>
        case 90:
            return <Suspense fallback={<div className='text-6xl h-[65vh] flex flex-col justify-center text-center'><LoadingOutlined /></div>}>
                <Colors />
            </Suspense>
        default:
            return <Suspense fallback={<div className='text-6xl h-[65vh] flex flex-col justify-center text-center'><LoadingOutlined /></div>}>
                <General />
            </Suspense>
    }
}

export default CVForms;