import { Button } from "@/components/ui/button";
import React from "react";
import { ScrollArea } from "../ui/scroll-area";
import { Plus, X } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Controller, useForm } from "react-hook-form";
import { ExperienceEntry } from "@/interfaces/cv.interface";
import { createNewExperience } from "@/constants/Initializers";
import { LoadingOutlined } from "@ant-design/icons";
import { Textarea } from "../ui/textarea";
import { yupResolver } from "@hookform/resolvers/yup";
import { ExperienceCVDataValidation } from "@/validation/cv.validation";
import { useCV } from "@/context/CVContext";

const Experience: React.FC = () => {
    const { addArrayItem, removeArrayItem, cvData, updateProgress } = useCV();
    const { handleSubmit: submit, formState: { errors, isSubmitting }, control, reset } = useForm<ExperienceEntry>({
        defaultValues: createNewExperience(),
        resolver: yupResolver(ExperienceCVDataValidation)
    })

    const handleSubmit = (data: ExperienceEntry) => {
        addArrayItem('experiences', data);
        reset();
    }

    const handleDelete = (id: number) => {
        removeArrayItem('experiences', id);
    }

    return(
        <div>
            <div className="font-extrabold">Experiences</div>
            <Popover>
                <div className="flex justify-end px-4">
                    <PopoverTrigger asChild>
                        <Button variant={'ghost'} size={'icon'} className="border size-8"><Plus /></Button>
                    </PopoverTrigger>
                </div>
                <PopoverContent className="w-72 mr-[85px]">
                    <div className="font-bold text-gray-500">Nouvelle experience</div>
                    <form onSubmit={submit(handleSubmit)} className="px-2 my-2">
                        <Label className="mb-1">Periode : </Label>
                        <Controller 
                            control={control}
                            name="period"
                            render={({ field: { value, onChange } }) => (
                                <Input value={value} onChange={onChange} className={`${errors?.period && "border border-red-500 text-red-500 rounded"}`} />
                            )}
                        />
                        { errors?.period && <div className="text-red-500 text-xs text-left w-full">{ errors?.period?.message }</div> }
                        <Label className="mb-1 mt-2">Titre : </Label>
                        <Controller 
                            control={control}
                            name="title"
                            render={({ field: { value, onChange } }) => (
                                <Input value={value} onChange={onChange} className={`${errors?.title && "border border-red-500 text-red-500 rounded"}`} />
                            )}
                        />
                        { errors?.title && <div className="text-red-500 text-xs text-left w-full">{ errors?.title?.message }</div> }
                        <Label className="mb-1 mt-2">Société : </Label>
                        <Controller 
                            control={control}
                            name="company"
                            render={({ field: { value, onChange } }) => (
                                <Input value={value} onChange={onChange} className={`${errors?.company && "border border-red-500 text-red-500 rounded"}`} />
                            )}
                        />
                        { errors?.company && <div className="text-red-500 text-xs text-left w-full">{ errors?.company?.message }</div> }
                        <Label className="mb-1 mt-2">Description : </Label>
                        <Controller 
                            control={control}
                            name="description"
                            render={({ field: { value, onChange } }) => (
                                <Textarea value={value} onChange={onChange} className={`${errors?.description && "border border-red-500 text-red-500 rounded"}`} />
                            )}
                        />
                        { errors?.description && <div className="text-red-500 text-xs text-left w-full">{ errors?.description?.message }</div> }
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
                        cvData.experiences && cvData.experiences.map((exp: ExperienceEntry, index: number) => {
                            return <div key={index} className="border border-dashed rounded p-2 my-1">
                                <div className="flex justify-between">
                                    <div className="font-bold text-sm">{exp.period}</div>
                                    <Button onClick={() => handleDelete(index)} variant={'ghost'} size={'icon'} className="border border-red-500 rounded-full size-5 text-xs"><X /></Button>
                                </div>
                                <div className="text-gray-500">{exp.company}</div>
                                <div className="font-medium text-sm">{exp.title}</div>
                                <div>{exp.description}</div>
                            </div>
                        })
                    }
                    <div className="mt-4 flex justify-end">
                        <Button onClick={updateProgress}>Suivant</Button>
                    </div>
                </ScrollArea>
            </div>
        </div>
    )
}

export default Experience;