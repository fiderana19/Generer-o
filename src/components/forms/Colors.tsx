import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";
import { ScrollArea } from "../ui/scroll-area";
import { Controller, useForm } from "react-hook-form";
import { CVBaseColors } from "@/interfaces/cv.interface";
import { BulbOutlined, LoadingOutlined } from "@ant-design/icons";
import { yupResolver } from "@hookform/resolvers/yup";
import { ColorsCVDataValidation } from "@/validation/cv.validation";
import { useCV } from "@/context/CVContext";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "../ui/hover-card";

const Colors: React.FC = () => {
    const { updateObjectSection, updateProgress, cvData } = useCV();
    const { handleSubmit: submit, formState: { errors, isSubmitting }, control } = useForm<CVBaseColors>({
        resolver: yupResolver(ColorsCVDataValidation)
    })

    const handleSubmit = (data: CVBaseColors) => {
        updateObjectSection('colors', data)
        updateProgress();
    }

    return(
        <div>
            <div className="font-extrabold">Couleurs</div>
            <HoverCard>
                <HoverCardTrigger asChild>
                    <Button variant="link" className="w-full flex justify-end"><div>Suggestions</div><BulbOutlined /></Button>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                    <div>
                        <div className="text-sm font-medium">Il existe des meilleurs sites pour les palettes de couleurs</div>
                        <div className="mt-2">
                            <Button variant={'outline'} className="w-full my-1">Google</Button>
                            <Button variant={'outline'} className="w-full my-1">Google</Button>
                            <Button variant={'outline'} className="w-full my-1">Google</Button>
                        </div>
                    </div>
                </HoverCardContent>
            </HoverCard>
            <form onSubmit={submit(handleSubmit)} className="mt-2 mx-4 h-[65vh] overflow-hidden scroll-auto">
                <ScrollArea className="w-full h-[65vh] px-4">
                    <Label className="mb-1">Base :</Label>
                    <Controller
                        control={control}
                        name="base"
                        defaultValue={cvData.colors.base}
                        render={({ field: { value, onChange } }) => (
                            <Input type="color" value={value} defaultValue={cvData.colors.base} onChange={onChange} className={`${errors?.base && 'border rounded text-red-500 border-red-500'}`}  />
                        )}
                    />
                    { errors?.base && <div className="text-xs text-red-500 w-full text-left">{ errors?.base?.message }</div> }
                    <Label className="mb-1 mt-2">Second :</Label>
                    <Controller
                        control={control}
                        name="secondary"
                        defaultValue={cvData.colors.secondary}
                        render={({ field: { value, onChange } }) => (
                            <Input type="color" value={value} defaultValue={cvData.colors.secondary} onChange={onChange} className={`${errors?.secondary && 'border rounded text-red-500 border-red-500'}`}  />
                        )}
                    />
                    { errors?.secondary && <div className="text-xs text-red-500 w-full text-left">{ errors?.secondary?.message }</div> }
                    <Label className="mb-1 mt-2">Troisième :</Label>
                    <Controller
                        control={control}
                        name="third"
                        defaultValue={cvData.colors.third}
                        render={({ field: { value, onChange } }) => (
                            <Input type="color" value={value} defaultValue={cvData.colors.third} onChange={onChange} className={`${errors?.third && 'border rounded text-red-500 border-red-500'}`}  />
                        )}
                    />
                    { errors?.third && <div className="text-xs text-red-500 w-full text-left">{ errors?.third?.message }</div> }
                    <div className="mt-4 flex justify-end">
                        <Button type="submit">
                            { isSubmitting && <LoadingOutlined /> }
                            Suivant
                        </Button>
                    </div>
                </ScrollArea>
            </form>
        </div>
    )
}

export default Colors;