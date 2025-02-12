"use client";

import { JSX } from "react";
import { motion } from "framer-motion";

interface FadeInProps {
  children: JSX.Element;
}

export const FadeIn = ({ children }: FadeInProps) => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </div>
  );
};
