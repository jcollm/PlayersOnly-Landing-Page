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
      <body className="antialiased">
        <div className="flex flex-row max-w-full gap-8 p-6 bg-gray-500">
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
          <NavigationMenu className="items-center">
            <NavigationMenuList>
              <NavigationMenuItem>
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
