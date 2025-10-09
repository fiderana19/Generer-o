import { Button } from "@/components/ui/button";
import React from "react";
import { ScrollArea } from "../ui/scroll-area";
import { Plus, X } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

interface CVFormProps {
    nextProgress: () => void;
}

const Languages: React.FC<CVFormProps> = ({ nextProgress }) => {
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
                    <form className="px-2 my-2">
                        <Label className="mb-1">Langue : </Label>
                        <Input />
                        <Label className="mb-1 mt-3">Niveau : </Label>
                        <Input />
                        <div className="flex justify-end mt-2">
                            <Button>Ajouter</Button>
                        </div>
                    </form>
                </PopoverContent>
            </Popover>
            <form className="mt-2 h-80 overflow-hidden scroll-auto">
                <ScrollArea className="w-full h-80 px-4">
                    <div className="border border-dashed rounded p-2 my-1">
                        <div className="flex justify-between">
                            <div className="flex gap-1 text-sm items-center">
                                <div className="font-bold">Competence 1</div>
                                <div>(1/5)</div>
                            </div>
                            <Button variant={'ghost'} size={'icon'} className="border border-red-500 rounded-full size-5 text-xs"><X /></Button>
                        </div>
                        <div>
                        </div>
                    </div>
                    <div className="border border-dashed rounded p-2 my-1">
                        <div className="flex justify-between">
                            <div className="flex gap-1 text-sm items-center">
                                <div className="font-bold">Competence 1</div>
                                <div>(1/5)</div>
                            </div>
                            <Button variant={'ghost'} size={'icon'} className="border border-red-500 rounded-full size-5 text-xs"><X /></Button>
                        </div>
                        <div>
                        </div>
                    </div>
                    <div className="border border-dashed rounded p-2 my-1">
                        <div className="flex justify-between">
                            <div className="flex gap-1 text-sm items-center">
                                <div className="font-bold">Competence 1</div>
                                <div>(1/5)</div>
                            </div>
                            <Button variant={'ghost'} size={'icon'} className="border border-red-500 rounded-full size-5 text-xs"><X /></Button>
                        </div>
                        <div>
                        </div>
                    </div>
                    <div className="border border-dashed rounded p-2 my-1">
                        <div className="flex justify-between">
                            <div className="flex gap-1 text-sm items-center">
                                <div className="font-bold">Competence 1</div>
                                <div>(1/5)</div>
                            </div>
                            <Button variant={'ghost'} size={'icon'} className="border border-red-500 rounded-full size-5 text-xs"><X /></Button>
                        </div>
                        <div>
                        </div>
                    </div>
                    <div className="border border-dashed rounded p-2 my-1">
                        <div className="flex justify-between">
                            <div className="flex gap-1 text-sm items-center">
                                <div className="font-bold">Competence 1</div>
                                <div>(1/5)</div>
                            </div>
                            <Button variant={'ghost'} size={'icon'} className="border border-red-500 rounded-full size-5 text-xs"><X /></Button>
                        </div>
                        <div>
                        </div>
                    </div>
                    <div className="border border-dashed rounded p-2 my-1">
                        <div className="flex justify-between">
                            <div className="flex gap-1 text-sm items-center">
                                <div className="font-bold">Competence 1</div>
                                <div>(1/5)</div>
                            </div>
                            <Button variant={'ghost'} size={'icon'} className="border border-red-500 rounded-full size-5 text-xs"><X /></Button>
                        </div>
                        <div>
                        </div>
                    </div>
                    <div className="border border-dashed rounded p-2 my-1">
                        <div className="flex justify-between">
                            <div className="flex gap-1 text-sm items-center">
                                <div className="font-bold">Competence 1</div>
                                <div>(1/5)</div>
                            </div>
                            <Button variant={'ghost'} size={'icon'} className="border border-red-500 rounded-full size-5 text-xs"><X /></Button>
                        </div>
                        <div>
                        </div>
                    </div>
                    <div className="border border-dashed rounded p-2 my-1">
                        <div className="flex justify-between">
                            <div className="flex gap-1 text-sm items-center">
                                <div className="font-bold">Competence 1</div>
                                <div>(1/5)</div>
                            </div>
                            <Button variant={'ghost'} size={'icon'} className="border border-red-500 rounded-full size-5 text-xs"><X /></Button>
                        </div>
                        <div>
                        </div>
                    </div>
                    <div className="mt-4 flex justify-end">
                        <Button onClick={nextProgress}>Suivant</Button>
                    </div>
                </ScrollArea>
            </form>
        </div>
    )
}

export default Languages;