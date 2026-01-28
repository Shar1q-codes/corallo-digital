"use client";

import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

export function Reveal({ children, className }: PropsWithChildren<{ className?: string }>) {
  return (
    <motion.div
      className={className}
      initial={false}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
