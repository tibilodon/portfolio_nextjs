"use client";
import "./globals.css";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";
import MobileNav from "@/components/navbar/MobileNav";
import MessageButton from "@/components/buttons/messageButton/MessageButton";

import { useState, useEffect, Suspense } from "react";
import { createCookie, getCookie } from "@/utils/cookieActions";
import SidebarButton from "@/components/buttons/sidebarButton/SidebarButton";
import Loading from "./loading";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tibor Vigh's Portfolio",
  description: "Tibor's developer portfolio website",
};
type LangOption = "hun" | "eng";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [lang, setLang] = useState<LangOption>("eng");

  //set "lang" @initial render
  useEffect(() => {
    const awaitCookie = async () => {
      const language = await getCookie("lang");
      if (language?.value) {
        setLang(language.value as LangOption);
      } else {
        setLang("eng");
      }
    };
    awaitCookie();
  }, []);

  //reset cookie whenever "lang" changes
  useEffect(() => {
    createCookie("lang", lang);
  }, [lang]);

  const [sidebar, setSidebar] = useState<boolean>(false);

  const sidebarHandler = (): void => {
    setSidebar(false);
  };

  return (
    <html lang="en">
      <body className={openSans.className}>
        <div className={"regularNav"}>
          <Navbar
            sidebar={sidebar}
            setSidebar={setSidebar}
            lang={lang}
            setLang={setLang}
          />
        </div>
        <div className={"mobileNav"}>
          {/*TODO:  mobile navbar on the bottom of the page*/}
          <MobileNav
            sidebar={sidebar}
            setSidebar={setSidebar}
            lang={lang}
            setLang={setLang}
          />
          {/* <div onClick={sidebarHandler}>
            <MessageButton />
          </div>
          <SidebarButton
            lang={lang}
            setLang={setLang}
            sidebar={sidebar}
            setSidebar={setSidebar}
          /> */}
        </div>
        <Suspense fallback={<Loading />}>
          <div
            onClick={sidebarHandler}
            onWheel={sidebarHandler}
            onScroll={sidebarHandler}
            className="content"
          >
            {children}
          </div>
        </Suspense>
      </body>
    </html>
  );
}
