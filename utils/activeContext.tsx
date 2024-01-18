"use client";
import React, { createContext, useContext, useState } from "react";
import { getCookie, createCookie } from "./cookieActions";

type AppContextProviderType = {
  path: string;

  setHomePath: () => void;
  setAboutPath: () => void;
  setProjectPath: () => void;
  setContactPath: () => void;
  setWorkPath: () => void;
  pathMatchRoute: () => void;
  //TODO: fix type

  sidebar: boolean;
  sidebarHandler: () => void;
};

const ActiveContext = createContext<AppContextProviderType>({
  path: "/",
  setHomePath: () => {},
  setAboutPath: () => {},
  setProjectPath: () => {},
  setContactPath: () => {},
  setWorkPath: () => {},
  pathMatchRoute: () => {},

  sidebar: false,
  sidebarHandler: () => {},
});

type ProviderProps = {
  children: React.ReactNode;
};

export const usePath = () => {
  return useContext(ActiveContext);
};

export default function ActivePathProvider({ children }: ProviderProps) {
  const [sidebar, setSidebar] = useState<boolean>(false);
  const sidebarHandler = (): void => {
    setSidebar(false);
  };
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
    setPath("/projects");
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

        sidebar,
        sidebarHandler,
      }}
    >
      {children}
    </ActiveContext.Provider>
  );
}
