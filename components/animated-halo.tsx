"use client";

import { motion, useReducedMotion } from "framer-motion";

interface AnimatedHaloProps {
  className?: string;
}

export function AnimatedHalo({ className }: AnimatedHaloProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className} />;
  }

  return (
    <motion.div
      className={className}
      animate={{ scale: [1, 1.05, 1], opacity: [0.45, 0.6, 0.45] }}
      transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

