"use client";
import React, { createContext, useContext, useState } from "react";
import { getCookie } from "./cookieActions";

const ActiveContext = createContext({
  path: "/",
  setHomePath: () => {},
  setAboutPath: () => {},
  setProjectPath: () => {},
  setContactPath: () => {},
  setWorkPath: () => {},
  pathMatchRoute: () => {},
  getCurrentLang: () => {},
});

type ProviderProps = {
  children: React.ReactNode;
};

export const usePath = () => {
  return useContext(ActiveContext);
};

export default function ActivePathProvider({ children }: ProviderProps) {
  const [path, setPath] = useState<string>("");

  const getCurrentLang = async () => {
    const res = await getCookie("lang");
    if (res?.value) {
      return res?.value;
    } else {
      return "eng";
    }
  };

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
        getCurrentLang,
      }}
    >
      {children}
    </ActiveContext.Provider>
  );
}
