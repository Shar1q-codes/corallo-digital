"use client";

import { motion, useMotionValueEvent, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

interface AnimatedCounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

export function AnimatedCounter({
  value,
  prefix = "",
  suffix = "",
  className
}: AnimatedCounterProps) {
  const spring = useSpring(0, {
    stiffness: 80,
    damping: 20,
    mass: 0.8
  });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    spring.set(value);
  }, [spring, value]);

  useMotionValueEvent(spring, "change", (latest) => {
    setDisplay(Math.round(latest));
  });

  return (
    <motion.span className={className}>
      {prefix}
      <motion.span
        aria-hidden
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {display.toLocaleString()}
      </motion.span>
      {suffix}
    </motion.span>
  );
}
