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
  title: "Modelos Bogotá - Estudio Webcam en Bogotá",
  description:
    "Estudio en Webcam en Bogotá. Ofrece las mejores transmisiones en vivo con modelos profesionales.",
  keywords: [
    "modelos bogotá",
    "modelos webcam bogotá",
    "modelos profesionales",
    "casting modelos",
    "agencia de modelos",
    "modelos colombianas",
  ],
  openGraph: {
    title: "Modelos Bogotá - Estudio Webcam",
    description:
      "Estudio en Webcam en Bogotá. Ofrece las mejores transmisiones en vivo con modelos profesionales.",
    type: "website",
    locale: "es_CO",
    url: "https://www.mysticparadise.top/",
    siteName: "Modelos Bogotá",
    images: [
      {
        url: "/logov2.png",
        width: 1200,
        height: 630,
        alt: "Modelos Bogotá - Estudio Webcam",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Modelos Bogotá - Estudio Webcam",
    description: "Encuentra modelos profesionales en Bogotá",
    images: ["/logov2.png"],
  },
  alternates: {
    canonical: "https://www.mysticparadise.top/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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
