import { BASE_COLORS } from "@/constants/Initializers";
import { initialProfilePhoto } from "@/utils/FileHandler";

export interface GeneralData {
  firstName: string;
  lastName: string | null | undefined;
  title: string; 
  profileSummary: string;
  profilePhoto: string;
}

export interface ContactData {
  address: string; 
  email: string;
  phone: string;
  website: string | null | undefined;
  facebook: string | null | undefined;
  github: string | null | undefined;
  linkedin: string | null | undefined;
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
  level: number
}

export interface SoftSkillsItem {
  skill: string,
}

export interface HobbiesItem {
  hobby: string,
}

export interface LanguagesItem {
  language: string, 
  level: number
}

export interface CVBaseColors {
  base: string, 
  secondary: string, 
  third: string, 
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

  colors: CVBaseColors;
}


// export const initialCVData: CVData = {
//   general: {   
//     firstName: "VOTRE NOM",
//     lastName: "VOTRE PRÉNOM",
//     title: "Votre titre",
//     profileSummary: "Votre description professionnelle...",
//     profilePhoto: initialProfilePhoto,
//   },
//   contact: { email: "", phone: "", facebook: "", linkedin: "",   address: "", github: "", website: "" },
//   education: [],
//   skills: [],
//   soft_skills: [],
//   experiences: [],
//   languages: [],
//   hobbies: [],
//   colors: {
//     base: BASE_COLORS.base,
//     secondary: BASE_COLORS.second,
//     third: BASE_COLORS.third
//   }
// };

export const initialCVData: CVData = {
  general: { 
    firstName: "ANTSA FIDERANA",
    lastName: "ANDRIAHERILANTO",
    title: "Développeur informatique",
    profileSummary: "Développeur spécialisé en full-stack React-Nest avec presque 2 ans et demi en développement JavaScript. Mon profil polyvalent et ma capacité d'adapter rapidement font pour moi un atout précieux dans le monde du développement web.",
    profilePhoto: initialProfilePhoto,
  },
  contact: { 
    email: "antsafider@gmail.com", 
    phone: "349754497",
    facebook: "Fiderana Antsa", 
    linkedin: "Fiderana Antsa Andriaherilanto", 
    address: "Fianarantsoa 301",
    github: "fiderana19", 
    website: null,
  },
  education: [
    {
      period: "2024-2025",
      title: "M1 en Informatique générale",
      institution: "ENI Fianarantsoa"
    },
    {
      period: "2021-2024",
      title: "Licence en Informatique générale",
      institution: "ENI Fianarantsoa"
    },
    {
      period: "2019-2020",
      title: "Baccalauréat scientifique",
      institution: "Lycée Philibert Tsiranana Majunga" 
    },
  ],
  experiences: [
    {
      period: "Août-Novembre 2024",
      title: "Developpeur Full Stack",
      company: "Ministère de l'Intérieur (MININTER)",
      description: "Conception et réalisation d'une application de gestion d'audience avec le ministre avec ReactJS, NestJS, MongoDB", // Répétition du titre pour la description courte
    },
    {
      period: "Août-Novembre 2023",
      title: "Developpeur Full Stack",
      company: "Société World Business Solution Tuléar (WBS)",
      description: "Conception et réalisation d'une application de gestion de caisse avec ReactJS, NestJS, MongoDB",
    },
    {
      period: "Août-Novembre 2023",
      title: "Developpeur Full Stack",
      company: "Société World Business Solution Tuléar (WBS)",
      description: "Conception et réalisation d'une application de gestion de caisse avec ReactJS, NestJS, MongoDB", 
    },
    {
      period: "Août-Novembre 2023",
      title: "Developpeur Full Stack",
      company: "Société World Business Solution Tuléar (WBS)",
      description: "Conception et réalisation d'une application de gestion de caisse avec ReactJS, NestJS, MongoDB",
    },
  ],
  skills: [
    { skill: "ReactJS", level: 5 },
    { skill: "VueJS", level: 4 }, 
    { skill: "NextJS", level: 4 },
    { skill: "PHP", level: 3 },
    { skill: "JSP", level: 3 },
    { skill: "Laravel", level: 3 },
    { skill: "ExpressJS", level: 4 },
    { skill: "NestJS", level: 5 },
    { skill: "React Native", level: 4 },
    { skill: "Java Swing", level: 3 },
    { skill: "Windows Form C#", level: 3 },
    { skill: "Java", level: 4 },
    { skill: "TypeScript", level: 5 },
    { skill: "JavaScript", level: 5 },
    { skill: "PHP", level: 3 },
    { skill: "Python", level: 3 },
    { skill: "C#", level: 3 },
    { skill: "MySQL", level: 4 },
    { skill: "PostgreSQL", level: 4 },
    { skill: "MongoDB", level: 5 },
    { skill: "Oracle", level: 3 },
    { skill: "Git", level: 4 },
    { skill: "UI/UX Design", level: 3 },
    { skill: "Merise", level: 3 },
    { skill: "UML", level: 3 },
    { skill: "ZTUIP", level: 3 },
    { skill: "GRASP", level: 3 },
  ],
  soft_skills: [
    { skill: "Polyvalent" },
    { skill: "Adaptabilité" },
    { skill: "Travail en équipe" },
    { skill: "Autonomie" },
  ],
  hobbies: [
    { hobby: "Football" },
    { hobby: "Jeux de cartes" },
    { hobby: "Jeux vidéos" },
    { hobby: "Basketball" },
  ],
  languages: [
    { language: "Malagasy", level: 5 }, // Maternel = 5
    { language: "Français", level: 4 }, // Bien = 4
    { language: "Anglais", level: 3 }, // Assez-bien = 3
    { language: "Allemand", level: 2 }, // Notion = 2
  ],
  colors: {
    base: BASE_COLORS.base,
    secondary: BASE_COLORS.second,
    third: BASE_COLORS.third
  }
};