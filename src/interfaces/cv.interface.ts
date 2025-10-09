export interface GeneralData {
  firstName: string;
  lastName: string | null | undefined;
  title: string; 
  profileSummary: string;
}

export interface ContactData {
  address: string; 
  email: string;
  phone: string;
  website: string;
  facebook: string;
  github: string;
  linkedin: string;
}

export interface EducationEntry {
  period: string;
  title: string;
  institution: string;
}

export interface ExperienceEntry {
  period: string;
  title: string;
  company: string;
  description: string;
}

export interface SkillsItem {
  skill: string,
  level: string
}

export interface SoftSkillsItem {
  skill: string,
}

export interface HobbiesItem {
  hobby: string,
}

export interface LanguagesItem {
  language: string, 
  level: string
}

export interface CVData {
  general: GeneralData;

  contact: ContactData;
  
  education: EducationEntry[];
  
  experiences: ExperienceEntry[]; 
  
  skills: SkillsItem[];
  
  soft_skills: SoftSkillsItem[];

  hobbies: HobbiesItem[];

  languages: LanguagesItem[],
}

export const initialCVData: CVData = {
  general: {   
    firstName: "VOTRE NOM",
    lastName: "VOTRE PRÉNOM",
    title: "Titre du Poste",
    profileSummary: "Votre profil professionnel ici...",
  },
  contact: { email: "", phone: "", facebook: "", linkedin: "",   address: "", github: "", website: "" },
  education: [],
  skills: [],
  soft_skills: [],
  experiences: [],
  languages: [],
  hobbies: []
};