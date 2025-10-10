import { useCV } from "@/context/CVContext";
import React from "react";
import General from "./General";
import Education from "./Education";
import Experience from "./Experience";
import Hobbies from "./Hobbies";
import Skills from "./Skills";
import SoftSkills from "./SoftSkills";
import Contact from "./Contact";
import Languages from "./Languages";


const CVForms: React.FC = () => {
    const { progress } = useCV();

    switch (progress) {
        case 4:
            return <General />    
        case 16:
            return <Contact />    
        case 28:
            return <Education />    
        case 40:
            return <Experience />    
        case 52:
            return <Skills />    
        case 64:
            return <SoftSkills />    
        case 76:
            return <Languages />    
        case 88:
            return <Hobbies />    
        default:
            return <General />    
    }
}

export default CVForms;