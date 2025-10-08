import { useCV } from "@/context/CVContext";

export const TemplateA: React.FC = () => {
  const { cvData } = useCV();

  return (
    <div>
      { cvData.general.firstName }
      a ito
    </div>
  );
};