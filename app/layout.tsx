"use client";
import "./globals.css";
// import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";
import MobileNav from "@/components/navbar/MobileNav";

import { useState, useEffect, Suspense } from "react";
import { createCookie, getCookie } from "@/utils/cookieActions";
import Loading from "./loading";
import { LangOption } from "@/utils/commonTypes";
import Modal from "@/components/modal/Modal";

//context
import ActivePathProvider from "@/utils/activeContext";

const openSans = Open_Sans({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Tibor Vigh's Portfolio",
//   description: "Tibor's developer portfolio website",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [lang, setLang] = useState<LangOption>("");

  //set "lang" @initial render
  useEffect(() => {
    const awaitCookie = async () => {
      const language = await getCookie("lang");
      const tnc = await getCookie("tnc");
      if (language?.value) {
        setLang(language.value as LangOption);
      } else {
        setLang("hun");
      }
    };
    awaitCookie();
  }, []);

  //reset cookie whenever "lang" changes
  useEffect(() => {
    if (lang) {
      createCookie("lang", lang);
    }
  }, [lang]);

  const [sidebar, setSidebar] = useState<boolean>(false);

  const sidebarHandler = (): void => {
    setSidebar(false);
  };

  return (
    <html lang="en">
      <body className={openSans.className}>
        <Suspense fallback={<Loading />}>
          <ActivePathProvider>
            <div className={"regularNav"}>
              <Navbar
                sidebar={sidebar}
                setSidebar={setSidebar}
                lang={lang}
                setLang={setLang}
              />
            </div>
            <div className={"mobileNav"}>
              {/*TODO:  mobile navbar */}
              <MobileNav
                sidebar={sidebar}
                setSidebar={setSidebar}
                lang={lang}
                setLang={setLang}
              />
            </div>
            <div
              onClick={sidebarHandler}
              onWheel={sidebarHandler}
              onScroll={sidebarHandler}
              className="content"
            >
              <Modal />
              {children}
            </div>
          </ActivePathProvider>
        </Suspense>
      </body>
    </html>
  );
}
