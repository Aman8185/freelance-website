import { createContext, useContext, useState, ReactNode } from 'react';

type CursorType = 'default' | 'hover' | 'click' | 'hidden';

interface CursorPosition {
  x: number;
  y: number;
}

interface CustomCursorContextType {
  cursorType: CursorType;
  cursorPosition: CursorPosition;
  setCursorType: (type: CursorType) => void;
  setCursorPosition: (position: CursorPosition) => void;
}

const CustomCursorContext = createContext<CustomCursorContextType | undefined>(undefined);

export const useCustomCursor = () => {
  const context = useContext(CustomCursorContext);
  if (context === undefined) {
    throw new Error('useCustomCursor must be used within a CustomCursorProvider');
  }
  return context;
};

interface CustomCursorProviderProps {
  children: ReactNode;
}

export const CustomCursorProvider = ({ children }: CustomCursorProviderProps) => {
  const [cursorType, setCursorType] = useState<CursorType>('default');
  const [cursorPosition, setCursorPosition] = useState<CursorPosition>({ x: 0, y: 0 });

  const value = {
    cursorType,
    cursorPosition,
    setCursorType,
    setCursorPosition,
  };

  return (
    <CustomCursorContext.Provider value={value}>
      {children}
    </CustomCursorContext.Provider>
  );
}; 