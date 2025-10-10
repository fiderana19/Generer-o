import { Button } from "@/components/ui/button";
import React from "react";
import { ScrollArea } from "../ui/scroll-area";
import { Plus, X } from "lucide-react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Controller, useForm } from "react-hook-form";
import { SkillsItem } from "@/interfaces/cv.interface";
import { createNewSkills } from "@/constants/Initializers";
import { LoadingOutlined } from "@ant-design/icons";
import { handleNumberKeyPress } from "@/utils/handleKeyPress";
import { yupResolver } from "@hookform/resolvers/yup";
import { SkillsCVDataValidation } from "@/validation/cv.validation";
import { useCV } from "@/context/CVContext";

interface CVFormProps {
    nextProgress: () => void;
}

const Skills: React.FC<CVFormProps> = ({ nextProgress }) => {
    const { addArrayItem, removeArrayItem, cvData } = useCV();
    const { handleSubmit: submit, formState: { errors, isSubmitting }, control, reset } = useForm<SkillsItem>({
        defaultValues: createNewSkills(),
        resolver: yupResolver(SkillsCVDataValidation)
    })

    const handleSubmit = (data: SkillsItem) => {
        addArrayItem('skills', data);
        reset();
    }

    const handleDelete = (id: number) => {
        removeArrayItem('skills', id);
    }

    return(
        <div>
            <div className="font-extrabold">Competences</div>
            <Popover>
                <div className="flex justify-end px-4">
                    <PopoverTrigger asChild>
                        <Button variant={'ghost'} size={'icon'} className="border size-8"><Plus /></Button>
                    </PopoverTrigger>
                </div>
                <PopoverContent className="w-72 mr-[85px]">
                    <div className="font-bold text-gray-500">Nouveau competence</div>
                    <form onSubmit={submit(handleSubmit)} className="px-2 my-2">
                        <Label className="mb-1">Competence : </Label>
                        <Controller 
                            control={control}
                            name="skill"
                            render={({ field: { value, onChange } }) => (
                                <Input value={value} onChange={onChange} className={`${errors?.skill && "border border-red-500 text-red-500 rounded"}`} />
                            )}
                        />
                        { errors?.skill && <div className="text-red-500 text-left w-full text-xs">{ errors?.skill?.message }</div> }
                        <Label className="mb-1 mt-3">Niveau (Echelle de 1 à 5) : </Label>
                        <Controller 
                            control={control}
                            name="level"
                            render={({ field: { value, onChange } }) => (
                                <Input value={Number(value) | 0} onKeyPress={handleNumberKeyPress} onChange={onChange} className={`${errors?.level && "border border-red-500 text-red-500 rounded"}`} />
                            )}
                        />
                        { errors?.level && <div className="text-red-500 text-left w-full text-xs">{ errors?.level?.message }</div> }
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
                        cvData.skills && cvData.skills.map((skill: SkillsItem, index: number) => {
                            return <div key={index} className="border border-dashed rounded p-2 my-1">
                                <div className="flex justify-between">
                                    <div className="flex gap-1 text-sm items-center">
                                        <div className="font-bold">{skill.skill}</div>
                                        <div>({skill.level}/5)</div>
                                    </div>
                                    <Button onClick={() => handleDelete(index)} variant={'ghost'} size={'icon'} className="border border-red-500 rounded-full size-5 text-xs"><X /></Button>
                                </div>
                                <div>
                                </div>
                            </div>
                        })
                    }
                    <div className="mt-4 flex justify-end">
                        <Button onClick={nextProgress}>Suivant</Button>
                    </div>
                </ScrollArea>
            </div>
        </div>
    )
}

export default Skills;