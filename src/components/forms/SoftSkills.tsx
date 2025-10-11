import { Button } from "@/components/ui/button";
import React from "react";
import { ScrollArea } from "../ui/scroll-area";
import { Plus, X } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Controller, useForm } from "react-hook-form";
import { SoftSkillsItem } from "@/interfaces/cv.interface";
import { createNewSoftSkills } from "@/constants/Initializers";
import { useCV } from "@/context/CVContext";
import { yupResolver } from "@hookform/resolvers/yup";
import { SoftSkillsCVDataValidation } from "@/validation/cv.validation";
import { LoadingOutlined } from "@ant-design/icons";


const SoftSkills: React.FC = () => {
    const { addArrayItem, removeArrayItem, cvData, updateProgress } = useCV();
    const { handleSubmit: submit, formState: { errors, isSubmitting }, control, reset } = useForm<SoftSkillsItem>({
        resolver: yupResolver(SoftSkillsCVDataValidation),
        defaultValues: createNewSoftSkills(),
    })

    const handleSubmit = (data: SoftSkillsItem) => {
        addArrayItem('soft_skills', data);
        reset();
    }

    const handleDelete = (id: number) => {
        removeArrayItem('soft_skills', id);
    }

    return(
        <div>
            <div className="font-extrabold">Soft skills</div>
            <Popover>
                <div className="flex justify-end px-4">
                    <PopoverTrigger asChild>
                        <Button variant={'ghost'} size={'icon'} className="border size-8"><Plus /></Button>
                    </PopoverTrigger>
                </div>
                <PopoverContent className="w-72 mr-[85px]">
                    <div className="font-bold text-gray-500">Nouveau soft skills</div>
                    <form onSubmit={submit(handleSubmit)} className="px-2 my-2">
                        <Label className="mb-1">Soft skill : </Label>
                        <Controller 
                            control={control}
                            name="skill"
                            render={({ field: { value, onChange } }) => (
                                <Input value={value} onChange={onChange} className={`${errors?.skill && 'border border-red-500 text-red-500 rounded'}`} />
                            )}
                        />
                        { errors?.skill && <div className="text-red-500 text-left text-xs w-full">{ errors?.skill?.message }</div> }
                        <div className="flex justify-end mt-2">
                            <Button type="submit">
                                { isSubmitting && <LoadingOutlined /> }
                                Ajouter
                            </Button>
                        </div>
                    </form>
                </PopoverContent>
            </Popover>
            <div className="mt-2 h-[65vh] overflow-hidden scroll-auto">
                <ScrollArea className="w-full h-[65vh] px-4">
                    {
                        cvData?.soft_skills && cvData?.soft_skills.map((skill: SoftSkillsItem, index: number) => {
                            return <div key={index} className="border border-dashed rounded p-2 my-1">
                                <div className="flex justify-between">
                                    <div className="font-bold text-sm">{ skill.skill }</div>
                                    <Button onClick={() => handleDelete(index)} variant={'ghost'} size={'icon'} className="border border-red-500 rounded-full size-5 text-xs"><X /></Button>
                                </div>
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

export default SoftSkills;