import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { HeaderBar } from "@/components/HeaderBar";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // adjust as needed
  variable: "--font-montserrat",
});

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
    <html lang="en" className={montserrat.variable} suppressHydrationWarning>
      <body className="antialiased font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <HeaderBar>{children}</HeaderBar>
        </ThemeProvider>
      </body>
    </html>
  );
}
