interface PrintableCVProps {
  TemplateComponent: React.FC;
}

export const PrintableCV: React.FC<PrintableCVProps> = ({ TemplateComponent }) => {
  return (
    <TemplateComponent />
  );
};