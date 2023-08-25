"use client"
import React, { createContext, useContext, useState, ReactNode } from "react";

const LinkContext = createContext<{ link: string; setLink: React.Dispatch<React.SetStateAction<string>> } | undefined>(undefined);

const LinkProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [link, setLink] = useState("none");

  return (
    <LinkContext.Provider value={{ link, setLink }}>
      {children}
    </LinkContext.Provider>
  );
};

const useLinkContext = () => {
  const context = useContext(LinkContext);
  if (!context) {
    throw new Error("useLinkContext must be used within a LinkProvider");
  }
  return context;
};

export { LinkProvider, useLinkContext };
