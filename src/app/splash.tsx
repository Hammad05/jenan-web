"use client";
import { useState, useEffect, PropsWithChildren, createContext } from "react";

interface SplashScreenProps {
  isViwed: boolean;
}

export const SplashScreenContext = createContext<SplashScreenProps>({
  isViwed: true,
});
const SplashScreen: React.FC<PropsWithChildren> = ({ children }) => {
  const [isViwed, setIsViwed] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsViwed(true);
    }, 2000);
    return () => clearTimeout(timeout);
  });

  return (
    <SplashScreenContext.Provider value={{ isViwed: isViwed }}>
      {children}
    </SplashScreenContext.Provider>
  );
};

export default SplashScreen;
