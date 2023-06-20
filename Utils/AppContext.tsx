import React, { createContext, useState } from 'react';

export const AppContext = createContext<{ city: string; setCityValue: React.Dispatch<React.SetStateAction<string>> }>({
  city: '',
  setCityValue: () => {}
});

interface AppProviderProps {
  children: React.ReactNode;
}

const AppProvider = ({ children }: AppProviderProps) => {
  const [city, setCityValue] = useState('Stockolm');

  return (
    <AppContext.Provider value={{ city, setCityValue }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
