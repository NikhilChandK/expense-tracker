import React, { createContext, ReactNode, RefObject, useRef } from 'react';
type RefContextType = {
    titleRef: RefObject<HTMLSpanElement>;
    buttonRef: RefObject<HTMLButtonElement>;
};
type RefProviderProps = {
    children: ReactNode;
};
const SplashScreenContext = createContext<RefContextType | null>(null);
const SplashScreenProvider = ({ children }: RefProviderProps) => {
    const titleRef = useRef<HTMLSpanElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);
    return (
        <SplashScreenContext.Provider value={{ titleRef, buttonRef }}>
            {children}
        </SplashScreenContext.Provider>
    );
};

export { SplashScreenContext, SplashScreenProvider };
