import { useCV } from "@/context/CVContext";
import { EducationEntry } from "@/interfaces/cv.interface";

export const TemplateA: React.FC = () => {
  const { cvData } = useCV();

  return (
    <div>
      <div>
        { cvData.general.firstName }        
      </div>
      <div>
        { cvData.general.lastName }        
      </div>
      <div>
        { cvData.general.title }        
      </div>
      <div>
        { cvData.general.profileSummary }        
      </div>
      <div>
        <img src={cvData?.general.profilePhoto} alt="Photo de profile" className="w-60 h-60 object-cover"/>               
      </div>
-------------
      <div>
        { cvData.contact.address }        
      </div>
      <div>
        { cvData.contact.email }        
      </div>
      <div>
        { cvData.contact.phone }        
      </div>
      <div>
        { cvData.contact.facebook }        
      </div>
      <div>
        { cvData.contact.website }        
      </div>
      <div>
        { cvData.contact.github }        
      </div>
      <div>
        { cvData.contact.linkedin }        
      </div>
      ***************
      <div>
        {
          cvData.education && cvData.education.map((ed: EducationEntry, index: any) => {
            return <div key={index} className="border">
              <div>
                {index}                
              </div>
              <div>
                {ed.period}                
              </div>
              <div>
                {ed.title}                
              </div>
              <div>
                {ed.institution}                
              </div>
            </div>
          })
        }
      </div>
    </div>
  );
};