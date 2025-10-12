export const createNewEducation = () => ({ 
    period: "", 
    title: "", 
    institution: "" 
});

export const createNewExperience = () => ({ 
    period: "", 
    title: "", 
    company: "", 
    description: "" 
});

export const createNewSkills = () => ({ 
    skill: "", 
    level: 0, 
});

export const createNewSoftSkills = () => ({ 
    skill: "", 
});

export const createNewLanguage = () => ({ 
    language: "", 
    level: 0, 
});

export const createNewHobbies = () => ({ 
    hobby: "", 
});

export const createNewColors = () => ({
    base: BASE_COLORS.base,
    second: BASE_COLORS.second,
    third: BASE_COLORS.third,
})

export const BASE_COLORS = {
    base: "#113743",
    second: "#79EBF6",
    third: "#727077",
}