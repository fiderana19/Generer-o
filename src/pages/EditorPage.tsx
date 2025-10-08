import { TemplateA } from '@/components/models/TemplateA';
import { TemplateB } from '@/components/models/TemplateB';
import { useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';
import { PrintableCV } from './cvdisplay/PrintableCV';
import Navigation from '@/components/Navigation/Navigation';
import { Button } from "@/components/ui/button"
import {
  Card,
} from "@/components/ui/card"
import { Progress } from '@/components/ui/progress';
import General from '@/components/forms/General';

const templates = {
  'A': TemplateA,
  'B': TemplateB,
};

const EditorPage: React.FC<any> = () => {
  const { templateId } = useParams<{ templateId: string }>();
    
  const TemplateComponent = templates[templateId as keyof typeof templates] || TemplateA; 

  const componentRef = useRef<any>(null);

  const reactToPrintFn = useReactToPrint({
    contentRef: componentRef, 
    });

  return (
    <div className="bg-four-custom py-16 flex min-h-screen">
      <Navigation />        
      <div className='flex justify-between px-[4%] w-full'>
        <div>
          <div className={`w-[794px] h-[1123px] bg-white overflow-auto shadow-2xl`}>
            <div ref={componentRef}>
              <PrintableCV 
                TemplateComponent={TemplateComponent} 
              />
            </div> 
          </div>
        </div>
        <div className='w-1/4 fixed right-[4%] top-16'>
          <div className="flex w-full max-w-sm flex-col gap-6">
            <Progress value={66} />
            <Card className='px-4'>
              <General />                  
            </Card>
            <Button onClick={reactToPrintFn}> 
              Imprimer/Télécharger PDF
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditorPage;