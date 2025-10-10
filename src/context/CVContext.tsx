import { CVData, initialCVData } from "@/interfaces/cv.interface";
import { useState, useCallback, useContext, createContext, useEffect } from "react";

type ArrayElement<A> = A extends readonly (infer T)[] ? T : never;

export interface CVContextType {
  cvData: CVData;
  updateObjectSection: <K extends keyof CVData>(field: K, newObject: CVData[K]) => void;
  addArrayItem: <K extends keyof CVData>(arrayField: K, newItem: ArrayElement<CVData[K]>) => void;
  removeArrayItem: (arrayField: keyof CVData, index: number) => void;
}

const CVContext = createContext<CVContextType | undefined>(undefined);

export const CVProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cvData, setCvData] = useState<CVData>(initialCVData);

  useEffect(() => {
    const savedData = localStorage.getItem('userCVData');
    
    if (savedData) {
      try {
        const parsedData: CVData = JSON.parse(savedData);
        setCvData(parsedData);
      } catch (e) {
        setCvData(initialCVData); 
      }
    }
  }, []); 

  useEffect(() => {
    localStorage.setItem('userCVData', JSON.stringify(cvData));
  }, [cvData]);

  const updateObjectSection = useCallback(<K extends keyof CVData>(field: K, newObject: CVData[K]) => {
    if (typeof newObject === 'object' && newObject !== null) {
      setCvData(prevData => ({
        ...prevData,
        [field]: newObject,
      }));
    }
  }, []);
  
  const addArrayItem = useCallback(<K extends keyof CVData>(arrayField: K, newItem: ArrayElement<CVData[K]>) => {
    const item = {...newItem};
    setCvData((prevData: any) => ({
      ...prevData,
      [arrayField]: [...(prevData[arrayField]), item],
    }
  ));
  }, []);
  
  const removeArrayItem = useCallback((arrayField: keyof CVData, index: number) => {
    setCvData((prevData: any) => {
      const newArray = (prevData[arrayField] as Array<any>).filter((_, i) => i !== index);
      return { ...prevData, [arrayField]: newArray };
    });
  }, []);

  const contextValue: CVContextType = {
    cvData,
    updateObjectSection,
    addArrayItem,
    removeArrayItem,
  };

  return (
    <CVContext.Provider value={contextValue}>
      {children}
    </CVContext.Provider>
  );
};

export const useCV = () => {
  const context = useContext(CVContext);
  if (!context) {
    throw new Error('useCV must be inside of CVProvider');
  }
  return context;
};