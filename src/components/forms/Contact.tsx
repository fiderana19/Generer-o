import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";
import { ScrollArea } from "../ui/scroll-area";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import { Controller, useForm } from "react-hook-form";
import { ContactData } from "@/interfaces/cv.interface";
import { LoadingOutlined } from "@ant-design/icons";
import { yupResolver } from "@hookform/resolvers/yup";
import { ContactCVDataValidation } from "@/validation/cv.validation";
import { useCV } from "@/context/CVContext";
import { handleNumberKeyPress } from "@/utils/handleKeyPress";

interface CVFormProps {
    nextProgress: () => void;
}

const Contact: React.FC<CVFormProps> = ({ nextProgress }) => {
    const { updateObjectSection } = useCV();
    const { handleSubmit: submit, formState: { errors, isSubmitting }, control } = useForm<ContactData>({
        resolver: yupResolver(ContactCVDataValidation)
    })

    const handleSubmit = (data: ContactData) => {
        updateObjectSection('contact', data)
        nextProgress();
    }

    return(
        <div>
            <div className="font-extrabold">Contacts</div>
            <form onSubmit={submit(handleSubmit)} className="mt-4 mx-4 h-80 overflow-hidden scroll-auto">
                <ScrollArea className="w-full h-80 px-4">
                    <Label className="mb-1">Adresse :</Label>
                    <Controller
                        control={control}
                        name="address"
                        render={({ field: { value, onChange } }) => (
                            <Input value={value} onChange={onChange} className={`${errors?.address && 'border rounded text-red-500 border-red-500'}`}  />
                        )}
                    />
                    { errors?.address && <div className="text-xs text-red-500 w-full text-left">{ errors?.address?.message }</div> }
                    <Label className="mb-1 mt-2">Email :</Label>
                    <Controller
                        control={control}
                        name="email"
                        render={({ field: { value, onChange } }) => (
                            <Input value={value} onChange={onChange} className={`${errors?.email && 'border rounded text-red-500 border-red-500'}`}  />
                        )}
                    />
                    { errors?.email && <div className="text-xs text-red-500 w-full text-left">{ errors?.email?.message }</div> }
                    <Label className="mb-1 mt-2">Telephone :</Label>
                    <div className="relative">
                        <div className="border absolute top-[1px] left-0 p-1 rounded">+261</div>
                    </div>
                    <Controller
                        control={control}
                        name="phone"
                        render={({ field: { value, onChange } }) => (
                            <Input value={value} onChange={onChange} onKeyPress={handleNumberKeyPress} className={`ml-12 w-48 ${errors?.phone && 'border rounded text-red-500 border-red-500'}`}  />
                        )}
                    />
                    { errors?.phone && <div className="text-xs text-red-500 w-full text-left">{ errors?.phone?.message }</div> }
                    <Accordion
                        type="single"
                        collapsible
                        className="w-full border-transparent"
                        >
                        <AccordionItem value="facebook">
                            <AccordionTrigger className="h-10">Facebook</AccordionTrigger>
                            <AccordionContent>
                                <Controller
                                    control={control}
                                    name="facebook"
                                    render={({ field: { value, onChange } }) => (
                                        <Input value={value ? value : ""} onChange={onChange} className={`${errors?.facebook && 'border rounded text-red-500 border-red-500'}`}  />
                                    )}
                                />
                                { errors?.facebook && <div className="text-xs text-red-500 w-full text-left">{ errors?.facebook?.message }</div> }
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <Accordion
                        type="single"
                        collapsible
                        className="w-full border-transparent"
                        >
                        <AccordionItem value="website">
                            <AccordionTrigger className="h-10">Site web</AccordionTrigger>
                            <AccordionContent>
                                <Controller
                                    control={control}
                                    name="website"
                                    render={({ field: { value, onChange } }) => (
                                        <Input value={value ? value : ""} onChange={onChange} className={`${errors?.website && 'border rounded text-red-500 border-red-500'}`}  />
                                    )}
                                />
                                { errors?.website && <div className="text-xs text-red-500 w-full text-left">{ errors?.website?.message }</div> }
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <Accordion
                        type="single"
                        collapsible
                        className="w-full border-transparent"
                        >
                        <AccordionItem value="github">
                            <AccordionTrigger className="h-10">Github</AccordionTrigger>
                            <AccordionContent >
                                <Controller
                                    control={control}
                                    name="github"
                                    render={({ field: { value, onChange } }) => (
                                        <Input value={value ? value : ""} onChange={onChange} className={`${errors?.github && 'border rounded text-red-500 border-red-500'}`}  />
                                    )}
                                />
                                { errors?.github && <div className="text-xs text-red-500 w-full text-left">{ errors?.github?.message }</div> }
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <Accordion
                        type="single"
                        collapsible
                        className="w-full border-transparent"
                        >
                        <AccordionItem value="linkedin">
                            <AccordionTrigger className="h-10">Linkedin</AccordionTrigger>
                            <AccordionContent>
                                <Controller
                                    control={control}
                                    name="linkedin"
                                    render={({ field: { value, onChange } }) => (
                                        <Input value={value ? value : ""} onChange={onChange} className={`${errors?.linkedin && 'border rounded text-red-500 border-red-500'}`}  />
                                    )}
                                />
                                { errors?.linkedin && <div className="text-xs text-red-500 w-full text-left">{ errors?.linkedin?.message }</div> }
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
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

export default Contact;