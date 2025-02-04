"use client";

import React, { createContext, useContext, useState } from "react";

interface NavProps {
  callNav: boolean;
  setCallNav: React.Dispatch<React.SetStateAction<boolean>>;
}

export const NavContext = createContext<NavProps | undefined>(undefined);

export const NavProvider = ({ children }: { children: React.ReactNode }) => {
  const [callNav, setCallNav] = useState(false);

  return (
    <NavContext.Provider
      value={{
        callNav,
        setCallNav,
      }}
    >
      {children}
    </NavContext.Provider>
  );
};

export const useNavContext = (): NavProps => {
  const context = useContext(NavContext);
  if (!context) {
    throw new Error("NavContext deve ser usado dentro de um NavProvider");
  }
  return context;
};
