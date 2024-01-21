"use client";
import React, {
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

type AppContextProviderType = {
  path: string;
  setPath: Dispatch<SetStateAction<string>>;

  setHomePath: () => void;
  setAboutPath: () => void;
  setProjectPath: () => void;
  setContactPath: () => void;
  setWorkPath: () => void;
  setServicePath: () => void;
  pathMatchRoute: () => void;
  //TODO: fix type

  sidebar: boolean;
  sidebarHandler: () => void;
};

const ActiveContext = createContext<AppContextProviderType>({
  path: "/",
  setPath: () => {},
  setHomePath: () => {},
  setAboutPath: () => {},
  setProjectPath: () => {},
  setContactPath: () => {},
  setWorkPath: () => {},
  setServicePath: () => {},
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

  const setServicePath = () => {
    setPath("/services");
  };

  return (
    <ActiveContext.Provider
      value={{
        path,
        setPath,
        setHomePath,
        setAboutPath,
        setProjectPath,
        setWorkPath,
        setContactPath,
        setServicePath,
        pathMatchRoute,

        sidebar,
        sidebarHandler,
      }}
    >
      {children}
    </ActiveContext.Provider>
  );
}
