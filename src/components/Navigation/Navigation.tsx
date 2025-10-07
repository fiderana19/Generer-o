import React from "react";
import { Button } from "../ui/button";
import { GithubOutlined } from '@ant-design/icons'
import { Link } from "react-router-dom";

const Navigation: React.FC = () => {

    return (
        <div className="px-10 top-0 fixed bg-transparent w-full flex items-center justify-between py-3">
            <Link to='/personnalize/A' className="font-extrabold text-xl">Générer-o</Link>
            <div className="flex gap-4">
                <Button variant={'link'}>A propos</Button>
                <Button><GithubOutlined />Github</Button>
            </div>
        </div>
    )
}

export default Navigation;