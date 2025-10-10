import * as yup from 'yup'

export const GeneralCVDataValidation = yup.object({
    firstName: yup.string().required("Votre nom est requis !"),
    lastName: yup.string().nullable().optional(),
    title: yup.string().required("Votre titre est requis !"), 
    profileSummary: yup.string().required("Vous devez fournir une description !"),
})

export const ContactCVDataValidation = yup.object({
    address: yup.string().required("Votre adresse est requis !"),
    email: yup.string().email("Adresse mail invalide !").required("Votre adresse mail est requis !"),
    phone: yup.string().max(9, "Le numero doit etre composé de 9 chiffres !").required("Votre telephone est requis !"),
    website: yup.string().url("Url invalide !").nullable().optional(),
    facebook: yup.string().nullable().optional(),
    github: yup.string().nullable().optional(),
    linkedin: yup.string().nullable().optional(),
})

export const EducationCVDataValidation = yup.object({
    period: yup.string().required("La periode de l'etude est requise !"),
    title: yup.string().required("La titre est requise !"),
    institution: yup.string().required("L'etablissement est requis !"), 
})
