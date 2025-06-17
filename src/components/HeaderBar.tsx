"use client";
import { motion } from "motion/react";
import { HoverEffect } from "./HoverEffect";
import Link from "next/link";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "./ui/navigation-menu";
import { ModeToggle } from "./ModeToggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";

export function HeaderBar({ children }: { children: React.ReactNode }) {
  const navItems = [
    { title: "Brands", href: "https://playersonly.io/insights" },
    { title: "Athletes", href: "https://playersonly.io/athletes" },
    { title: "AI", href: "https://www.playersonly.ai/" },
    { title: "About", href: "https://playersonly.io/about" },
  ];
  return (
    <>
      <div className="sticky top-0 z-50 flex items-center justify-center w-full bg-background border-b-2 h-20">
        <div className="flex flex-row flex-grow items-center justify-between p-6 max-w-[90rem]">
          <div className="flex flex-row items-center gap-8">
            <Link href="/" className="inline-block">
              <HoverEffect scale={1.1}>
                <Image
                  src="/logo.png"
                  alt="PlayersOnly"
                  width={40}
                  height={40}
                  priority
                  className="h-auto w-auto"
                />
              </HoverEffect>
            </Link>
            <div className="block md:hidden">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="secondary" size="icon" className="size-8">
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
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="min-w-fit" align="start">
                  <DropdownMenuGroup>
                    {navItems.map((item) => (
                      <DropdownMenuItem key={item.title} asChild>
                        <Link href={item.href} className="text-xl">
                          {item.title}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="hidden md:block">
              <NavigationMenu orientation="horizontal">
                <NavigationMenuList>
                  {navItems.map((item) => (
                    <HoverEffect y={-4} key={item.title}>
                      <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                          <Link href={item.href} className="text-xl">
                            {item.title}
                          </Link>
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                    </HoverEffect>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
          <ModeToggle></ModeToggle>
        </div>
      </div>
      {children}
    </>
  );
}
