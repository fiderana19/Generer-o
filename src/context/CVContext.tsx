import { CVData, initialCVData } from "@/interfaces/cv.interface";
import { useState, useCallback, useContext, createContext, useEffect } from "react";

type ArrayElement<A> = A extends readonly (infer T)[] ? T : never;

export interface CVContextType {
  cvData: CVData;
  updateObjectSection: <K extends keyof CVData>(field: K, newObject: CVData[K]) => void;
  updateArrayItem: <K extends keyof CVData>(
    arrayField: K, 
    index: number, 
    newObject: ArrayElement<CVData[K]>
  ) => void;
  addArrayItem: <K extends keyof CVData>(
    arrayField: K, 
    newItem: ArrayElement<CVData[K]>
  ) => void;
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

  const updateObjectSection = useCallback((field: any, newObject: any) => {
    if (typeof newObject === 'object' && newObject !== null) {
      setCvData(prevData => ({
        ...prevData,
        [field]: newObject,
      }));
    }
  }, []);

  const updateArrayItem = useCallback((arrayField: any, index: any, newObject: any) => {
    setCvData((prevData: any) => {
      const currentArray = prevData[arrayField] as Array<any>;
      const newArray = currentArray.map((item, i) => 
        i === index ? newObject : item
      );
      return { ...prevData, [arrayField]: newArray };
    });
  }, []);
  
  const addArrayItem = useCallback((arrayField: any, newItem: any) => {
    setCvData((prevData: any) => ({
      ...prevData,
      [arrayField]: [...(prevData[arrayField] as Array<any>), newItem],
    }));
  }, []);
  
  const removeArrayItem = useCallback((arrayField: any, index: any) => {
    setCvData((prevData: any) => {
      const newArray = (prevData[arrayField] as Array<any>).filter((_, i) => i !== index);
      return { ...prevData, [arrayField]: newArray };
    });
  }, []);

  const contextValue: CVContextType = {
    cvData,
    updateObjectSection,
    updateArrayItem,
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