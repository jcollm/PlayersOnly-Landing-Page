"use client";
import { FadeIn } from "./FadeIn";

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
    <FadeIn
      className={`flex flex-col md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      } items-center gap-8 my-16 px-4 md:px-12`}
    >
      <div className="w-full md:w-1/2">
        <img
          src={image}
          alt={title}
          className="w-full h-auto rounded-xl shadow-lg"
        />
      </div>
      <div className="w-full md:w-1/2 p-0 sm:p-8">
        <h2 className="text-3xl font-semibold mb-4 text-center md:text-left">
          {title}
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 text-center md:text-left">
          {text}
        </p>
      </div>
    </FadeIn>
  );
}
