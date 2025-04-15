import React, { createContext, useContext, useState } from 'react';

interface AppContextType {
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
  formData: {
    name: string;
    email: string;
    phone: string;
    service: string;
    date: string;
    time: string;
    message: string;
    immediateSearch: boolean;
  };
  setFormData: React.Dispatch<React.SetStateAction<{
    name: string;
    email: string;
    phone: string;
    service: string;
    date: string;
    time: string;
    message: string;
    immediateSearch: boolean;
  }>>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    message: '',
    immediateSearch: false,
  });

  return (
    <AppContext.Provider value={{ isMenuOpen, setIsMenuOpen, formData, setFormData }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
} 