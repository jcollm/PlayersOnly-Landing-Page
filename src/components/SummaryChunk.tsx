"use client";
import { FadeIn } from "./FadeIn";
import { HTMLMotionProps } from "motion/react";

export function SummaryChunk({
  title,
  text,
  icon,
  ...props
}: {
  title: string;
  text: string;
  icon: React.ReactNode;
} & HTMLMotionProps<"div">) {
  return (
    <FadeIn
      className="flex flex-col flex-grow items-center w-1/2 lg:w-1/4 gap-2 p-2 md:p-5 m-2 sm:m-4"
      {...props}
    >
      <div className="flex flex-row items-center justify-center sm:justify-start gap-2 w-full">
        {icon}
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <div className="flex flex-row items-center justify-start">
        <p className="text-md text-gray-700 dark:text-gray-300">{text}</p>
      </div>
    </FadeIn>
  );
}
