import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "PlayersOnly",
  description: "All-in-one sports platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-white dark:bg-black text-black dark:text-white">
        <div className="flex flex-row max-w-full gap-8 p-6">
          <Link href="/" className="inline-block">
            <Image
              src="/logo.png"
              alt="PlayersOnly"
              width={60}
              height={60}
              priority
              className="h-auto w-auto"
            />
          </Link>
          <NavigationMenu orientation="horizontal" className="items-center">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="https://playersonly.io/insights"
                    className="text-xl"
                  >
                    Brands
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link
                    href="https://playersonly.io/athletes"
                    className="text-xl"
                  >
                    Athletes
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        {children}
      </body>
    </html>
  );
}
