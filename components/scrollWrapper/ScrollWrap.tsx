"use client";
import styles from "./scrollWrap.module.css";
import { useState, useEffect, useRef } from "react";
// import { usePath } from "@/utils/activeContext";

type ScrollWrapProps = {
  children: React.ReactNode;
  // text: string;
};

const ScrollWrap: React.FunctionComponent<ScrollWrapProps> = ({
  children,
  // text,
}) => {
  // const {
  //   setHomePath,
  //   setAboutPath,
  //   setProjectPath,
  //   setWorkPath,
  //   setContactPath,
  //   setServicePath,
  //   pathMatchRoute,
  //   path,
  //   setPath,
  // } = usePath();
  const [isIntersecting, setIsIntersecting] = useState(false);
  const targetRef = useRef<HTMLDivElement | null>(null);

  useEffect(
    () => {
      // console.log("useffect runs");
      const observer = new IntersectionObserver(
        ([entry]) => {
          // console.log("the entry", window.scrollY);
          // // The callback function will be called whenever the observed element enters or exits the viewport
          const interSecting: boolean = entry.isIntersecting;
          // if (window.scrollY < 200) {
          //   // setHomePath();
          //   setPath("/");
          // }
          // if (window.scrollY > 4200) {
          //   setPath("/contact");
          //   // setContactPath();
          // }
          // switch (text) {
          //   case "home":
          //     interSecting && setPath("/");
          //     // interSecting&&  setHomePath();

          //     break;
          //   case "about":
          //     interSecting && setPath("/about");
          //     // interSecting && setAboutPath();
          //     break;
          //   case "projects":
          //     interSecting && setPath("/projects");
          //     // interSecting && setProjectPath();
          //     break;
          //   case "services":
          //     // interSecting && setServicePath();
          //     interSecting && setPath("/services");
          //     break;
          //   case "work":
          //     interSecting && setPath("/work");
          //     // interSecting && setWorkPath();
          //     break;
          //   case "contact":
          //     interSecting && setPath("/contact");
          //     // interSecting && setContactPath();
          //     break;

          //   default:
          //     break;
          // }

          setIsIntersecting(interSecting);
        },
        {
          // Options for the IntersectionObserver
          root: null, // Use the viewport as the root
          // rootMargin: "-20px", // No margin
          threshold: 0.1, // Trigger when 50% of the observed element is visible
        }
      );

      if (targetRef.current) {
        observer.observe(targetRef.current);
      }

      // Clean up the observer when the component unmounts
      return () => {
        // pathMatchRoute();
        observer.disconnect();
      };
    },

    [
      // text,
      // path,
      // setPath,
      // pathMatchRoute,
      // pathMatchRoute,
      // setAboutPath,
      // setContactPath,
      // setHomePath,
      // setProjectPath,
      // setWorkPath,
      // setServicePath,
    ]
  );

  // useEffect(() => {
  //   console.log("useEffect runs");
  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       console.log("the entry", window.scrollY);
  //       const interSecting: boolean = entry.isIntersecting;

  //       if (window.scrollY < 200) {
  //         setPath((prevPath) => (prevPath !== "/" ? "/" : prevPath));
  //       }
  //       if (window.scrollY > 4200) {
  //         setPath((prevPath) =>
  //           prevPath !== "/contact" ? "/contact" : prevPath
  //         );
  //       }

  //       switch (text) {
  //         case "home":
  //           interSecting &&
  //             setPath((prevPath) => (prevPath !== "/" ? "/" : prevPath));
  //           break;
  //         case "about":
  //           interSecting &&
  //             setPath((prevPath) =>
  //               prevPath !== "/about" ? "/about" : prevPath
  //             );
  //           break;
  //         case "projects":
  //           interSecting &&
  //             setPath((prevPath) =>
  //               prevPath !== "/projects" ? "/projects" : prevPath
  //             );
  //           break;
  //         case "services":
  //           interSecting &&
  //             setPath((prevPath) =>
  //               prevPath !== "/services" ? "/services" : prevPath
  //             );
  //           break;
  //         case "work":
  //           interSecting &&
  //             setPath((prevPath) =>
  //               prevPath !== "/work" ? "/work" : prevPath
  //             );
  //           break;
  //         case "contact":
  //           interSecting &&
  //             setPath((prevPath) =>
  //               prevPath !== "/contact" ? "/contact" : prevPath
  //             );
  //           break;
  //         default:
  //           break;
  //       }

  //       setIsIntersecting(interSecting);
  //     },
  //     {
  //       root: null,
  //       threshold: 0.1,
  //     }
  //   );

  //   if (targetRef.current) {
  //     observer.observe(targetRef.current);
  //   }

  //   return () => {
  //     pathMatchRoute();
  //     observer.disconnect();
  //   };
  // }, [pathMatchRoute, text]);

  return (
    <div
      ref={targetRef}
      className={`
            ${styles.hidden} ${isIntersecting ? styles.show : ""}
        `}
    >
      {children}
    </div>
  );
};

export default ScrollWrap;
