import React, { createContext, useContext, useState } from 'react';

interface SplashContextType {
  isSplashActive: boolean;
  completeSplash: () => void;
}

const SplashContext = createContext<SplashContextType>({
  isSplashActive: true,
  completeSplash: () => {},
});

export function SplashProvider({ children }: { children: React.ReactNode }) {
  // Always trigger the animated splash screen on initial page load / refresh
  const [isSplashActive, setIsSplashActive] = useState<boolean>(true);

  const completeSplash = () => {
    setIsSplashActive(false);
  };

  return (
    <SplashContext.Provider value={{ isSplashActive, completeSplash }}>
      {children}
    </SplashContext.Provider>
  );
}

export function useSplash() {
  return useContext(SplashContext);
}
