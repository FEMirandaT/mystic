import { LenisProvider } from "@/components/LenisProvider";
import { Navbar } from "@/components/Navbar";
import { ThemeProvider } from "@/components/Providers";
import { SidebarProvider } from "@/components/Providers/SidebarProvider";
import type { Metadata } from "next";
import { Pinyon_Script, Prata } from "next/font/google";
import "./globals.css";

const prata = Prata({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-prata",
});
const pinyon = Pinyon_Script({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-pinyon",
});

export const metadata: Metadata = {
  title: "Mystic Paradise Studio",
  description: "Studio webcam en Bogotá, trabaja con nosotros.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta key="theme-color" name="theme-color" content={"#0e0e0f"} />
        <meta
          key="apple-mobile-web-app-status-bar-style"
          name="apple-mobile-web-app-status-bar-style"
          content={"#0e0e0e"}
        />
        <meta
          key="msapplication-navbutton-color"
          name="msapplication-navbutton-color"
          content={"#0e0e0e"}
        />
      </head>
      <LenisProvider isRoot>
        <body
          className={`${prata.variable} ${pinyon.variable}  antialiased w-full flex justify-center gradient1`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <SidebarProvider>
              <Navbar />
              {children}
            </SidebarProvider>
          </ThemeProvider>
        </body>
      </LenisProvider>
    </html>
  );
}
