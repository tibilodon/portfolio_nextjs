"use client";
import styles from "./scrollWrap.module.css";
import { useState, useEffect, useRef } from "react";
import useBooleanState from "@/utils/setActive";
import React, { ReactNode } from "react";

type ScrollWrapProps = {
  children: React.ReactNode;
  text: string;
};

const ScrollWrap: React.FunctionComponent<ScrollWrapProps> = ({
  children,
  text,
}) => {
  //   console.log(text);
  const { toggle, value } = useBooleanState(false);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const targetRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // The callback function will be called whenever the observed element enters or exits the viewport
        //TODO: here you can select the component and set the active route
        console.log("see", text, entry.isIntersecting);
        setIsIntersecting(entry.isIntersecting);
        toggle();
      },
      {
        // Options for the IntersectionObserver
        root: null, // Use the viewport as the root
        // rootMargin: "0px", // No margin
        threshold: 0.2, // Trigger when 50% of the observed element is visible
      }
    );

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    // Clean up the observer when the component unmounts
    return () => {
      observer.disconnect();
    };
  }, []);
  console.log(text);

  //   if (React.isValidElement(children)) {
  //     console.log(children.props.children[0].props);
  //   } else {
  //     console.log("Children is not a valid React element");
  //   }

  return (
    <div className={styles.wrap}>
      <div
        ref={targetRef}
        className={`
            ${styles.hidden} ${isIntersecting ? styles.show : ""}
        `}
        // className={`${styles.box} ${isIntersecting ? styles.visible : ""}`}
      >
        {children}
      </div>
    </div>
  );
};

export default ScrollWrap;
