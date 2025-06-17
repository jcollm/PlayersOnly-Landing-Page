"use client";
import { motion } from "motion/react";

export function FadeIn({
  children,
  time = 1,
  ...props
}: {
  children: React.ReactNode;
  time?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: time }}
      viewport={{ once: true }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
