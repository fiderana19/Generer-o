import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";
import { Textarea } from "../ui/textarea";

interface CVFormProps {
    nextProgress: () => void;
}

const General: React.FC<CVFormProps> = ({ nextProgress }) => {
    return(
        <div>
            <div className="font-extrabold">Informations générales</div>
            <form className="mt-4 mx-4">
                <Label className="mb-1">Nom :</Label>
                <Input />
                <Label className="mb-1 mt-2">Prenom(s) :</Label>
                <Input />
                <Label className="mb-1 mt-2">Titre :</Label>
                <Input />
                <Label className="mb-1 mt-2">Description :</Label>
                <Textarea />
                <div className="mt-4 flex justify-end">
                    <Button onClick={nextProgress}>Suivant</Button>
                </div>
            </form>
        </div>
    )
}

export default General;