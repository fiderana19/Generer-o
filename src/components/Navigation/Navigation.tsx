import React from "react";
import { Button } from "../ui/button";
import { GithubOutlined } from '@ant-design/icons'

const Navigation: React.FC = () => {
    return (
        <div className="px-10 top-0 fixed bg-transparent w-full flex items-center justify-between py-3">
            <div className="font-extrabold text-xl">Générer-o</div>
            <div className="flex gap-4">
                <Button variant={'link'}>Découvrir</Button>
                <Button><GithubOutlined />Github</Button>
            </div>
        </div>
    )
}

export default Navigation;