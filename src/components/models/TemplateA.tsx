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
    </div>
  );
};