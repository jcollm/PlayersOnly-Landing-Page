"use client";
import { motion } from "motion/react";

export function HoverEffect({
  children,
  scale = 1,
  y = 0,
  time = 0.08,
  ...props
}: {
  children: React.ReactNode;
  scale?: number;
  y?: number;
  time?: number;
}) {
  return (
    <motion.div
      className="flex justify-center items-center gap-8"
      whileHover={{ scale: scale, y: y }}
      transition={{ duration: time }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
