import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

const General: React.FC = () => {
    return(
        <div>
            <div className="font-extrabold">Informations générales</div>
            <form className="mt-4 mx-4">
                <Label className="mb-1">Nom complet :</Label>
                <Input />
                <Label className="mb-1 mt-2">Titre :</Label>
                <Input />
                <Label className="mb-1 mt-2">Description :</Label>
                <Input />
                <div className="mt-4 flex justify-end">
                    <Button>Suivant</Button>
                </div>
            </form>
        </div>
    )
}

export default General;