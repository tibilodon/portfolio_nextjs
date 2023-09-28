"use client";
import React, { createContext, useContext, useState } from "react";
const ActiveContext = createContext({
  path: "/",
  setHomePath: () => {},
  setAboutPath: () => {},
  setProjectPath: () => {},
  setContactPath: () => {},
  setWorkPath: () => {},
  pathMatchRoute: () => {},
});

type ProviderProps = {
  children: React.ReactNode;
};

export const usePath = () => {
  return useContext(ActiveContext);
};

export default function ActivePathProvider({ children }: ProviderProps) {
  const [path, setPath] = useState<string>("");

  const pathMatchRoute = () => {
    setPath("");
  };

  const setHomePath = () => {
    setPath("/");
  };

  const setAboutPath = () => {
    setPath("/about");
  };
  const setProjectPath = () => {
    setPath("/project");
  };

  const setWorkPath = () => {
    setPath("/work");
  };

  const setContactPath = () => {
    setPath("/contact");
  };

  return (
    <ActiveContext.Provider
      value={{
        path,
        setHomePath,
        setAboutPath,
        setProjectPath,
        setWorkPath,
        setContactPath,
        pathMatchRoute,
      }}
    >
      {children}
    </ActiveContext.Provider>
  );
}
