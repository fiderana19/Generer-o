import React from "react";
import { Button } from "../ui/button";
import { GithubOutlined, MenuOutlined } from '@ant-design/icons'
import { Link } from "react-router-dom";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

const Navigation: React.FC = () => {

    return (
        <div className="px-[4%] md:px-10 top-0 fixed bg-transparent w-full flex items-center justify-between py-3">
            <Link to='/' className="font-extrabold text-xl">Générer-o</Link>
            <div className="hidden md:flex gap-4">
                <Button variant={'link'}>A propos</Button>
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