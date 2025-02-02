"use client";

import { motion, useAnimation, useInView } from "motion/react";
import { JSX, useEffect, useRef } from "react";

interface FadeInProps {
  children: JSX.Element;
}

export const FadeIn = ({ children }: FadeInProps) => {
  const mainControls = useAnimation();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    } else {
      mainControls.start("hidden");
    }
  }, [isInView, mainControls]);

  return (
    <div ref={ref}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
        style={{
          willChange: "auto",
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};
