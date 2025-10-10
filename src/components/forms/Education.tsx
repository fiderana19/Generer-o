import { Button } from "@/components/ui/button";
import React from "react";
import { ScrollArea } from "../ui/scroll-area";
import { Plus, X } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Controller, useForm } from "react-hook-form";
import { EducationEntry } from "@/interfaces/cv.interface";
import { yupResolver } from "@hookform/resolvers/yup";
import { EducationCVDataValidation } from "@/validation/cv.validation";
import { useCV } from "@/context/CVContext";
import { createNewEducation } from "@/constants/Initializers";
import { LoadingOutlined } from "@ant-design/icons";

const Education: React.FC = () => {
    const { addArrayItem, removeArrayItem, cvData, updateProgress } = useCV();
    const { handleSubmit: submit, formState: { errors, isSubmitting }, control, reset } = useForm<EducationEntry>({
        resolver: yupResolver(EducationCVDataValidation),
        defaultValues: createNewEducation(),
    });

    const handelSubmit = (data: EducationEntry) => {
        addArrayItem('education', data)
        reset();
    }

    const handleNext = () => {
        updateProgress();
    }

    const handleDelete = (id: number) => {
        removeArrayItem('education', id);
    }

    return(
        <div>
            <div className="font-extrabold">Etudes</div>
            <Popover>
                <div className="flex justify-end px-4">
                    <PopoverTrigger asChild>
                        <Button variant={'ghost'} size={'icon'} className="border size-8"><Plus /></Button>
                    </PopoverTrigger>
                </div>
                <PopoverContent className="w-72 mr-[85px]">
                    <div className="font-bold text-gray-500">Nouveau etude</div>
                    <form onSubmit={submit(handelSubmit)} className="px-2 my-2">
                        <Label className="mb-1">Periode : </Label>
                        <Controller
                            control={control}
                            name="period"
                            render={({ field: { value, onChange } }) => (
                                <Input value={value} onChange={onChange} className={`${errors?.period && 'border rounded text-red-500 border-red-500'}`}  />
                            )}
                        />
                        { errors?.period && <div className="text-xs text-red-500 w-full text-left">{ errors?.period?.message }</div> }
                        <Label className="mb-1 mt-2">Titre : </Label>
                        <Controller
                            control={control}
                            name="title"
                            render={({ field: { value, onChange } }) => (
                                <Input value={value} onChange={onChange} className={`${errors?.title && 'border rounded text-red-500 border-red-500'}`}  />
                            )}
                        />
                        { errors?.title && <div className="text-xs text-red-500 w-full text-left">{ errors?.title?.message }</div> }
                        <Label className="mb-1 mt-2">Etablissement : </Label>
                        <Controller
                            control={control}
                            name="institution"
                            render={({ field: { value, onChange } }) => (
                                <Input value={value} onChange={onChange} className={`${errors?.institution && 'border rounded text-red-500 border-red-500'}`}  />
                            )}
                        />
                        { errors?.institution && <div className="text-xs text-red-500 w-full text-left">{ errors?.institution?.message }</div> }
                        <div className="flex justify-end mt-2">
                            <Button type="submit">
                                { isSubmitting && <LoadingOutlined /> }
                                Ajouter
                            </Button>
                        </div>
                    </form>
                </PopoverContent>
            </Popover>
            <div className="mt-2 h-80 overflow-hidden scroll-auto">
                <ScrollArea className="w-full h-80 px-4">
                    {
                        cvData.education && cvData.education.map((educ: EducationEntry, index: number) => {
                            return <div key={index} className="border border-dashed rounded p-2 my-1">
                                <div className="flex justify-between">
                                    <div className="font-bold text-sm">{educ.period}</div>
                                    <Button onClick={() => handleDelete(index)} variant={'ghost'} size={'icon'} className="border border-red-500 rounded-full size-5 text-xs"><X /></Button>
                                </div>
                                <div className="text-gray-500 text-sm">{educ.title}</div>
                                <div>{educ.institution}</div>
                            </div>
                        })
                    }
                    <div className="mt-4 flex justify-end">
                        <Button onClick={handleNext}>Suivant</Button>
                    </div>
                </ScrollArea>
            </div>
        </div>
    )
}

export default Education;