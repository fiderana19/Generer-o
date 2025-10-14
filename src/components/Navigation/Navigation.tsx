import React from "react";
import { Button } from "../ui/button";
import { ArrowRightOutlined, CheckOutlined, CloseOutlined, GithubOutlined, MenuOutlined } from '@ant-design/icons'
import { Link } from "react-router-dom";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { SheetDemo } from "../demo/SheetDemo";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";
import { Separator } from "../ui/separator";

const Navigation: React.FC = () => {

    return (
        <div className="px-[4%] md:px-10 top-0 fixed bg-transparent w-full flex items-center justify-between py-3">
            <Link to='/' className="font-extrabold text-xl">Générer-o</Link>
            <div className="hidden md:flex gap-4">
                <Sheet>
                <SheetTrigger asChild>
                    <Button variant={'link'}>A propos</Button>
                </SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                        <SheetTitle>A propos de Generer-o</SheetTitle>
                        <SheetDescription>
                            <blockquote className="mt-6 border-l-2 pl-6 italic">
                                &quot;
                                    Notre mission est de simplifier la création de CV professionnels et percutants en quelques minutes. Conçu pour la rapidité et la perfection du design, notre générateur vous assure un document prêt à imprimer et optimisé pour le format A4.
                                &quot;
                            </blockquote>
                            <div className="text-black my-4">
                                <div>
                                    <div className="font-medium">Basé sur react-to-print</div>
                                    <Separator className="my-1" />
                                    <div className="flex flex-col gap-2 mt-2">
                                        <div className="flex gap-2">
                                            <div className="text-green-500"><CheckOutlined /></div> 
                                            <div>Compatible avec les navigateurs modernes.</div>
                                        </div>
                                        <div>
                                            <div className="flex gap-2">
                                                <div className="text-green-500"><CheckOutlined /></div> 
                                                <div>Compatible avec les navigateurs modernes.</div>
                                            </div>
                                            <div className="px-4 pt-2">
                                                <div className=" p-2 border rounded text-justify bg-gray-50">
                                                    Bien que l'impression sur navigateur mobile fonctionne généralement, l'impression dans une vue Web (lorsque votre page est ouverte par une application comme Facebook ou Slack, mais pas par le navigateur lui-même) est généralement inefficace. Certaines vues Web ne rendent pas l'API appropriée disponible. D'autres la rendent disponible, mais empêchent l'impression.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex gap-2">
                                            <div className="text-red-500"><CloseOutlined /></div> 
                                            <div>Non supporté par Firefox Android.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SheetDescription>
                    </SheetHeader>
                    <SheetFooter>
                        <SheetClose asChild>
                            <Button variant="outline">Fermer</Button>
                        </SheetClose>
                    </SheetFooter>
                </SheetContent>
                </Sheet>
                <Button><GithubOutlined />Github</Button>
            </div>
            <div className="md:hidden block">
                <Popover>
                    <PopoverTrigger asChild>
                    <Button
                        variant={"ghost"}
                        size={'icon'}
                    >
                        <MenuOutlined />
                    </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-max p-4 mr-4">
                        <div className="flex flex-col gap-1.5">
                            <Button variant={'outline'}>A propos</Button>
                            <Button variant={'outline'}><GithubOutlined />Github</Button>                            
                        </div>
                    </PopoverContent>
                </Popover>  
            </div>
        </div>
    )
}

export default Navigation;