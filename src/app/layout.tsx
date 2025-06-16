import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
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
          <Button variant="secondary" size="icon" className="size-16">
            <img className="" src="/logo.png" alt="PlayersOnly" />
          </Button>
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
