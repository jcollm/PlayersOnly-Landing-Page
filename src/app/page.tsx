import { FadeIn } from "@/components/FadeIn";
import { FeatureSection } from "@/components/FeatureSection";
import { HoverEffect } from "@/components/HoverEffect";
import { SummaryChunk } from "@/components/SummaryChunk";
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
          <div className="filter bg-background/70 dark:bg-background/30 backdrop-blur-sm rounded-xl p-4 md:p-8 backdrop-contrast-100 text-center max-w-3xl m-4 md:m-9 overflow-hidden">
            <h1 className="text-5xl font-bold mb-4 leading-[4rem]">
              PlayersOnly Brand Partners
            </h1>
            <div className="text-lg mb-6 flex items-center justify-center flex-row gap-2 md:gap-8 h-full">
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
              <FadeIn time={1.3}>
                <div className="border-2 rounded-3xl font-bold justify-center items-center flex p-3 shadow-md h-24 sm:h-12 leading-5">
                  30+ current partner brands
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>
      <section className="">
        <FeatureSection
          title="Fast, Flexible, Beautiful"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin auctor lorem odio, sit amet consectetur magna vestibulum nec. Sed mollis sollicitudin mattis. Praesent velit purus, sodales et mi in, mattis consequat nibh. Mauris urna ex, finibus nec posuere non, efficitur faucibus mauris. Ut ac condimentum quam."
          image="/socialmedia.png"
        />
        <FeatureSection
          title="Benefits of Partnership"
          text="Nulla in turpis congue, auctor nisi sit amet, ornare lectus. Aenean mollis congue fermentum. Sed lacinia dolor sed nibh venenatis consequat in a ante. Phasellus id erat ultrices dui rhoncus accumsan sed et magna. Vivamus eget nibh malesuada, viverra nibh dictum, mattis orci."
          image="/po_insights_details.png"
          reverse
        />
        <FeatureSection
          title="All-In-One Social Media"
          text="Curabitur tempus malesuada quam vel tempor. Phasellus eleifend porttitor erat, non venenatis dolor tempus eget. Maecenas in vulputate est, in sagittis magna. Vivamus ac libero ex. In faucibus elementum augue, et aliquet magna mattis et."
          image="/placeholder.png"
        />
      </section>
      <Separator className="my-20" />
      <section className="flex flex-col lg:flex-row justify-center items-baseline my-20 ">
        <div className="flex flex-row justify-around items-baseline">
          <SummaryChunk
            title="Controls"
            text="Aliquam consequat lectus at lacinia volutpat. Duis blandit enim sit amet dolor sollicitudin faucibus. Quisque imperdiet diam vel dolor luctus condimentum. Etiam vel dolor eu diam consequat hendrerit id in eros."
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5"
                />
              </svg>
            }
          />
          <SummaryChunk
            title="Learning"
            text="Aenean vel nisl leo. Sed facilisis, magna a semper tincidunt, nunc mi auctor orci, et ultrices justo nisl fermentum nulla. Phasellus volutpat, sapien ac tincidunt dapibus, ligula nisl iaculis orci, nec tempor ex neque nec nunc."
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                />
              </svg>
            }
          />
        </div>
        <div className="flex flex-row justify-around items-baseline">
          <SummaryChunk
            title="Analytics"
            text="Ut efficitur quam at eros auctor facilisis. Fusce pellentesque quis dolor non luctus. Quisque et erat nunc. Nullam eget rutrum tortor. Donec eget dui nec quam congue luctus. Etiam viverra accumsan lectus, id feugiat lectus iaculis a."
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"
                />
              </svg>
            }
          />
          <SummaryChunk
            title="SEO"
            text="Curabitur gravida imperdiet est ac luctus. Duis sed ullamcorper dolor. Phasellus ut luctus odio, sit amet imperdiet odio. Nam varius nec dui non dapibus."
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            }
          />
        </div>
      </section>
      <Separator className="my-20" />
      <div className="h-50"></div>
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
