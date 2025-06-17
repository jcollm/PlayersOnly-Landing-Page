import { FeatureSection } from "@/components/FeatureSection";
import { HoverEffect } from "@/components/HoverEffect";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="relative h-screen w-full overflow-hidden">
        {/* Background image */}
        <Image
          src="/judge.jpg"
          alt="Aaron Judge hits a home run"
          fill
          priority
          className="object-cover z-0"
        />

        {/* Gradient overlay */}
        <div className="absolute z-10 bg-gradient-to-b from-transparent via-background/30 to-background bottom-0 w-full h-32" />

        {/* Centered content */}

        <div className="relative z-20 flex items-center justify-center h-screen">
          <div className="filter bg-background/50 dark:bg-background/30 backdrop-blur-sm rounded-xl p-8 backdrop-contrast-100 text-center max-w-3xl m-9">
            <h1 className="text-5xl font-bold mb-4 leading-[4rem]">
              Share your Brand
            </h1>
            <div className="text-lg mb-6 flex items-center justify-center flex-row gap-8 h-full">
              <p className="text-lg">
                Connecting brands with social media partners that can deliver
                them results and consistency
              </p>
              <Separator orientation="vertical" className="min-h-16" />
              <p className="text-lg">
                Becoming an early partner gives your brand access to modern
                analytics and tracking
              </p>
            </div>
            <div className="flex flex-row justify-self-start gap-8">
              <HoverEffect scale={1.1}>
                <Button
                  variant="default"
                  className=" min-w-[10rem] h-12 text-lg"
                >
                  <p>Book a Demo</p>
                </Button>
              </HoverEffect>
              <div className="border-2 rounded-3xl justify-center items-center flex p-3 shadow-md h-12 leading-5">
                <b>30+ current partner brands</b>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="">
        <FeatureSection
          title="Fast, Flexible, Beautiful"
          text="Our framework makes development a breeze across all screen sizes. Vercel can host your website for you, although it does require a build as opposed to running through localhost. this makes the devlopment process slightly more tedious but overall more shareable."
          image="/socialmedia.png"
        />
        <FeatureSection
          title="Section 2"
          text="another section which text which demonstrates simplicity, and complexity all at the same time. with an emphasis on compatibility with existing softwares and devlopment processes."
          image="/po_insights_details.png"
          reverse
        />
      </section>
    </>
    // <div>
    //   <img className="z-0 max-w-full" src="/judge.jpg" />
    //   <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-32">
    //     {/* Content here */}
    //   </div>
    // </div>
    //
    //pre-existing code from next.js setup:
    //
    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    //   <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
    //     <Image
    //       className="dark:invert"
    //       src="/next.svg"
    //       alt="Next.js logo"
    //       width={180}
    //       height={38}
    //       priority
    //     />
    //     <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
    //       <li className="mb-2 tracking-[-.01em]">
    //         Get started by editing{" "}
    //         <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
    //           src/app/page.tsx
    //         </code>
    //         .
    //       </li>
    //       <li className="tracking-[-.01em]">
    //         Save and see your changes instantly.
    //       </li>
    //     </ol>

    //     <div className="flex gap-4 items-center flex-col sm:flex-row">
    //       <a
    //         className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
    //         href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <Image
    //           className="dark:invert"
    //           src="/vercel.svg"
    //           alt="Vercel logomark"
    //           width={20}
    //           height={20}
    //         />
    //         Deploy now
    //       </a>
    //       <a
    //         className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
    //         href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Read our docs
    //       </a>
    //     </div>
    //   </main>
    //   <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="/file.svg"
    //         alt="File icon"
    //         width={16}
    //         height={16}
    //       />
    //       Learn
    //     </a>
    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="/window.svg"
    //         alt="Window icon"
    //         width={16}
    //         height={16}
    //       />
    //       Examples
    //     </a>
    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="/globe.svg"
    //         alt="Globe icon"
    //         width={16}
    //         height={16}
    //       />
    //       Go to nextjs.org →
    //     </a>
    //   </footer>
    // </div>
  );
}
