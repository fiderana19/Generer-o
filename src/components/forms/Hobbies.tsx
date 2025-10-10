import { Button } from "@/components/ui/button";
import React from "react";
import { ScrollArea } from "../ui/scroll-area";
import { Plus, X } from "lucide-react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { useCV } from "@/context/CVContext";
import { Controller, useForm } from "react-hook-form";
import { HobbiesItem } from "@/interfaces/cv.interface";
import { yupResolver } from "@hookform/resolvers/yup";
import { HobbiesCVDataValidation } from "@/validation/cv.validation";
import { createNewHobbies } from "@/constants/Initializers";
import { LoadingOutlined } from "@ant-design/icons";

interface CVFormProps {
    nextProgress: () => void;
}

const Hobbies: React.FC<CVFormProps> = ({ nextProgress }) => {
    const { addArrayItem, removeArrayItem ,cvData } = useCV();
    const { handleSubmit: submit, formState: { errors, isSubmitting }, control, reset } = useForm<HobbiesItem>({
        resolver: yupResolver(HobbiesCVDataValidation),
        defaultValues: createNewHobbies(),
    })

    const handleSubmit = (data: HobbiesItem) => {
        addArrayItem('hobbies', data);
        reset();
    }

    const handleDelete = (id: number) => {
        removeArrayItem('hobbies', id);
    }

    return(
        <div>
            <div className="font-extrabold">Centre d'interets</div>
            <Popover>
                <div className="flex justify-end px-4">
                    <PopoverTrigger asChild>
                        <Button variant={'ghost'} size={'icon'} className="border size-8"><Plus /></Button>
                    </PopoverTrigger>
                </div>
                <PopoverContent className="w-72 mr-[85px]">
                    <div className="font-bold text-gray-500">Nouveau centre d'interet</div>
                    <form onSubmit={submit(handleSubmit)} className="px-2 my-2">
                        <Label className="mb-1">Interet : </Label>
                        <Controller 
                            control={control}
                            name="hobby"
                            render={({ field: { value, onChange } }) => (
                                <Input value={value} onChange={onChange} className={`${errors?.hobby && "border border-red-500 text-red-500 rounded"}`} />
                            )}
                        />
                        { errors?.hobby && <div className="text-red-500 text-xs w-full text-left">{ errors?.hobby?.message }</div> }
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
                        cvData?.hobbies && cvData?.hobbies.map((hobby: HobbiesItem, index: number) => {
                            return <div key={index} className="border border-dashed rounded p-2 my-1">
                                <div className="flex justify-between">
                                    <div className="font-bold text-sm">{ hobby?.hobby }</div>
                                    <Button onClick={() => handleDelete(index)} variant={'ghost'} size={'icon'} className="border border-red-500 rounded-full size-5 text-xs"><X /></Button>
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

export default Hobbies;