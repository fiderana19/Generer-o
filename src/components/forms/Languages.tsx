import { Button } from "@/components/ui/button";
import React from "react";
import { ScrollArea } from "../ui/scroll-area";
import { Plus, X } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Controller, useForm } from "react-hook-form";
import { LanguagesItem } from "@/interfaces/cv.interface";
import { useCV } from "@/context/CVContext";
import { yupResolver } from "@hookform/resolvers/yup";
import { LanguagesCVDataValidation } from "@/validation/cv.validation";
import { createNewLanguage } from "@/constants/Initializers";
import { handleNumberKeyPress } from "@/utils/handleKeyPress";
import { LoadingOutlined } from "@ant-design/icons";

const Languages: React.FC = () => {
    const { addArrayItem, removeArrayItem, cvData, updateProgress } = useCV();
    const { handleSubmit: submit, formState: { errors, isSubmitting }, control, reset } = useForm<LanguagesItem>({
        resolver: yupResolver(LanguagesCVDataValidation),
        defaultValues: createNewLanguage(),
    })

    const handleSubmit = (data: LanguagesItem) => {
        addArrayItem('languages', data);
        reset();
    }

    const handleDelete = (id: number) => {
        removeArrayItem('languages', id);
    }

    return(
        <div>
            <div className="font-extrabold">Langues</div>
            <Popover>
                <div className="flex justify-end px-4">
                    <PopoverTrigger asChild>
                        <Button variant={'ghost'} size={'icon'} className="border size-8"><Plus /></Button>
                    </PopoverTrigger>
                </div>
                <PopoverContent className="w-72 mr-[85px]">
                    <div className="font-bold text-gray-500">Nouveau langue</div>
                    <form onSubmit={submit(handleSubmit)} className="px-2 my-2">
                        <Label className="mb-1">Langue : </Label>
                        <Controller
                            control={control}
                            name="language"
                            render={({ field: { value, onChange } }) => (
                                <Input value={value} onChange={onChange} className={`${errors?.language && "border border-red-500 text-red-500 rounded"}`} />
                            )}
                        />
                        { errors?.language && <div className="text-red-500 w-full text-xs text-left">{ errors?.language?.message }</div> }
                        <Label className="mb-1 mt-3">Niveau (Echelle de 1 à 5) : </Label>
                        <Controller
                            control={control}
                            name="level"
                            render={({ field: { value, onChange } }) => (
                                <Input value={Number(value) | 0} onChange={onChange} onKeyPress={handleNumberKeyPress} className={`${errors?.level && "border border-red-500 text-red-500 rounded"}`} />
                            )}
                        />
                        { errors?.level && <div className="text-red-500 w-full text-xs text-left">{ errors?.level?.message }</div> }
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
                        cvData?.languages && cvData?.languages.map((language: LanguagesItem, index: number) => {
                            return <div key={index} className="border border-dashed rounded p-2 my-1">
                                <div className="flex justify-between">
                                    <div className="flex gap-1 text-sm items-center">
                                        <div className="font-bold">{ language?.language }</div>
                                        <div>({ language.level }/5)</div>
                                    </div>
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

export default Languages;