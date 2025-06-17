import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { HeaderBar } from "@/components/HeaderBar";

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
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
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
