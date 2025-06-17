"use client";
import { motion } from "motion/react";

export function FeatureSection({
  title,
  text,
  image,
  reverse = false,
}: {
  title: string;
  text: string;
  image: string;
  reverse?: boolean;
}) {
  return (
    <motion.div
      className={`flex flex-col md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      } items-center gap-8 my-16 px-4 md:px-12`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="w-full md:w-1/2">
        <img
          src={image}
          alt={title}
          className="w-full h-auto rounded-xl shadow-lg"
        />
      </div>
      <div className="w-full md:w-1/2 p-8">
        <h2 className="text-3xl font-semibold mb-4">{title}</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300">{text}</p>
      </div>
    </motion.div>
  );
}
