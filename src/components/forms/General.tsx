import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { ChangeEvent } from "react";
import { Textarea } from "../ui/textarea";
import { Controller, useForm } from 'react-hook-form'
import { GeneralData } from "@/interfaces/cv.interface";
import { yupResolver } from '@hookform/resolvers/yup'
import { GeneralCVDataValidation } from "@/validation/cv.validation";
import { useCV } from "@/context/CVContext";
import { LoadingOutlined } from "@ant-design/icons";
import { allowedImageTypes, fileToBase64, MAX_FILE_SIZE } from "@/utils/FileHandler";
import { ScrollArea } from "../ui/scroll-area";

const General: React.FC = () => {
    const { updateObjectSection, updateProgress } = useCV();
    const { handleSubmit: submit, formState: { errors, isSubmitting }, control, setError, setValue, clearErrors } = useForm<GeneralData>({
        resolver: yupResolver(GeneralCVDataValidation)
    });

    const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];

        if (file) {
        if (file.size > MAX_FILE_SIZE) {
            setError('profilePhoto', {
                type: 'onChange',
                message: "La taille maximale est de 5Mo !"
            }, {
                shouldFocus: true
            });        
            event.target.value = ''; 
            return;
        }
        
        if (!allowedImageTypes.includes(file.type)) {
            setError('profilePhoto', {
                type: 'onChange',
                message: "Veuillez sélectionner un fichier de type image !"
            }, {
                shouldFocus: true
            });        
            event.target.value = '';
            return;
        }
        
        try {
            const base64String = await fileToBase64(file);

            setValue('profilePhoto', base64String);
            clearErrors('profilePhoto');
        } catch (error) {
            setError('profilePhoto', {
                type: 'onChange',
                message: "Erreur de la conversion, veuillez réessayer !"
            }, {
                shouldFocus: true
            });        
        }
        }
    };

    const handleSubmit = (data: GeneralData) => {
        updateObjectSection('general', data);
        updateProgress();
    }

    return(
        <div>
            <div className="font-extrabold">Informations générales</div>
            <ScrollArea className="w-full h-[65vh]">
                <form onSubmit={submit(handleSubmit)} className="mt-4 mx-4">
                    <Label className="mb-1">Nom :</Label>
                    <Controller
                        control={control}
                        name="firstName"
                        render={({ field: { value, onChange } }) => (
                            <Input value={value} onChange={onChange} className={`${errors?.firstName && 'border rounded text-red-500 border-red-500'}`}  />
                        )}
                    />
                    { errors?.firstName && <div className="text-xs text-red-500 w-full text-left">{ errors?.firstName?.message }</div> }
                    <Label className="mb-1 mt-2">Prenom(s) :</Label>
                    <Controller
                        control={control}
                        name="lastName"
                        render={({ field: { value, onChange } }) => (
                            <Input value={value ? value : ""} onChange={onChange} className={`${errors?.lastName && 'border rounded text-red-500 border-red-500'}`}  />
                        )}
                    />
                    { errors?.lastName && <div className="text-xs text-red-500 w-full text-left">{ errors?.lastName?.message }</div> }                
                    <Label className="mb-1 mt-2">Titre :</Label>
                    <Controller
                        control={control}
                        name="title"
                        render={({ field: { value, onChange } }) => (
                            <Input value={value} onChange={onChange} className={`${errors?.title && 'border rounded text-red-500 border-red-500'}`}  />
                        )}
                    />
                    { errors?.title && <div className="text-xs text-red-500 w-full text-left">{ errors?.title?.message }</div> }                
                    <Label className="mb-1 mt-2">Description :</Label>
                    <Controller
                        control={control}
                        name="profileSummary"
                        render={({ field: { value, onChange } }) => (
                            <Textarea value={value} onChange={onChange} className={`${errors?.profileSummary && 'border rounded text-red-500 border-red-500'}`}  />
                        )}
                    />
                    { errors?.profileSummary && <div className="text-xs text-red-500 w-full text-left">{ errors?.profileSummary?.message }</div> }  
                    <Label className="mb-1 mt-2">Photo de profile :</Label>
                    <Input type="file" onChange={handleFileChange} className={`${errors?.profilePhoto && 'border rounded text-red-500 border-red-500'}`}  />
                    { errors?.profilePhoto && <div className="text-xs text-red-500 w-full text-left">{ errors?.profilePhoto?.message }</div> } 
                    <div className="mt-4 flex justify-end">
                        <Button type="submit">
                            { isSubmitting && <LoadingOutlined /> }
                            Suivant
                        </Button>
                    </div>
                </form>
            </ScrollArea>
        </div>
    )
}

export default General;