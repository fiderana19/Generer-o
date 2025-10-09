import * as yup from 'yup'

export const GeneralCVDataValidation = yup.object({
    firstName: yup.string().required("Votre nom est requis !"),
    lastName: yup.string().nullable().optional(),
    title: yup.string().required("Votre titre est requis !"), 
    profileSummary: yup.string().required("Vous devez fournir une description !"),
})