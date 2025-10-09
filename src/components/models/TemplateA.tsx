import { useCV } from "@/context/CVContext";

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
    </div>
  );
};