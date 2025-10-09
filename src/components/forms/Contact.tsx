import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";
import { ScrollArea } from "../ui/scroll-area";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";

interface CVFormProps {
    nextProgress: () => void;
}

const Contact: React.FC<CVFormProps> = ({ nextProgress }) => {

    return(
        <div>
            <div className="font-extrabold">Contacts</div>
            <form className="mt-4 mx-4 h-80 overflow-hidden scroll-auto">
                <ScrollArea className="w-full h-80 px-4">
                    <Label className="mb-1">Adresse :</Label>
                    <Input />
                    <Label className="mb-1 mt-2">Email :</Label>
                    <Input />
                    <Label className="mb-1 mt-2">Telephone :</Label>
                    <Input />
                    <Accordion
                        type="single"
                        collapsible
                        className="w-full border-transparent"
                        >
                        <AccordionItem value="facebook">
                            <AccordionTrigger className="h-10">Facebook</AccordionTrigger>
                            <AccordionContent>
                                <Input />
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="website">
                            <AccordionTrigger className="h-10">Site web</AccordionTrigger>
                            <AccordionContent>
                                <Input />
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="github">
                            <AccordionTrigger className="h-10">Github</AccordionTrigger>
                            <AccordionContent >
                                <Input />
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="linkedin">
                            <AccordionTrigger className="h-10">Linkedin</AccordionTrigger>
                            <AccordionContent>
                                <Input />
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <div className="mt-4 flex justify-end">
                        <Button onClick={nextProgress}>Suivant</Button>
                    </div>
                </ScrollArea>
            </form>
        </div>
    )
}

export default Contact;