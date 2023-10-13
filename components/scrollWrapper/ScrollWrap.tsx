"use client";
import styles from "./scrollWrap.module.css";
import { useState, useEffect, useRef } from "react";
import { usePath } from "@/utils/activeContext";

type ScrollWrapProps = {
  children: React.ReactNode;
  text: string;
};

const ScrollWrap: React.FunctionComponent<ScrollWrapProps> = ({
  children,
  text,
}) => {
  const {
    setHomePath,
    setAboutPath,
    setProjectPath,
    setWorkPath,
    setContactPath,
    pathMatchRoute,
  } = usePath();
  const [isIntersecting, setIsIntersecting] = useState(false);
  const targetRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // The callback function will be called whenever the observed element enters or exits the viewport
        const interSecting: boolean = entry.isIntersecting;
        switch (text) {
          case "home":
            interSecting && setHomePath();
            break;
          case "about":
            interSecting && setAboutPath();
            break;
          case "project":
            interSecting && setProjectPath();
            break;
          case "work":
            interSecting && setWorkPath();
            break;
          case "contact":
            interSecting && setContactPath();
            break;

          default:
            break;
        }

        setIsIntersecting(interSecting);
      },
      {
        // Options for the IntersectionObserver
        root: null, // Use the viewport as the root
        // rootMargin: "20px", // No margin
        threshold: 0.1, // Trigger when 50% of the observed element is visible
      }
    );

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    // Clean up the observer when the component unmounts
    return () => {
      pathMatchRoute();
      observer.disconnect();
    };
  }, []);

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
