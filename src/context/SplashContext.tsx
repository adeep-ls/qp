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
  // Only trigger animated splash screen once per browser session
  const [isSplashActive, setIsSplashActive] = useState<boolean>(() => {
    try {
      return !sessionStorage.getItem('quest_splash_seen');
    } catch {
      return false;
    }
  });

  const completeSplash = () => {
    try {
      sessionStorage.setItem('quest_splash_seen', '1');
    } catch {
      // Ignore storage errors in incognito/restricted mode
    }
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
