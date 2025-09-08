import "./globals.css";

import { Pinyon_Script, Prata } from "next/font/google";

import { LenisProvider } from "@/components/LenisProvider";
import { Navbar } from "@/components/Navbar";
import { ThemeProvider } from "@/components/Providers";
import { SidebarProvider } from "@/components/Providers/SidebarProvider";
import type { Metadata } from "next";
import Script from "next/script";

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
    "modelo webcam bogotá",
    "trabajo webcam bogotá",
    "empleo webcam bogotá",
    "vacantes modelo webcam bogotá",
    "reclutamiento modelo webcam bogotá",
    "estudio webcam bogotá",
    "casting modelo webcam bogotá",
    "trabajo desde casa webcam bogotá",
    "webcam bogotá sin experiencia",
    "ingresos modelo webcam bogotá",
    "ganancias webcam bogotá",
    "estudios webcam bogotá",
    "trabajo webcam parejas bogotá",
    "modelo webcam parejas bogotá",
    "trabajo webcam mujeres bogotá",
    "trabajo webcam chicas bogotá",
    "webcam bogotá independiente",
    "webcam bogotá seguro",
    "requisitos modelo webcam bogotá",
    "entrevista modelo webcam bogotá",
    "capacitación webcam bogotá",
    "oferta trabajo webcam bogotá",
    "trabajo webcam trans bogotá",
  ],
  openGraph: {
    title: "Modelos Bogotá - Estudio Webcam y Oportunidades de Trabajo",
    description:
      "Estudio en Webcam en Bogotá. Ofrecemos las mejores transmisiones en vivo con modelos profesionales y oportunidades de trabajo para modelos en Bogotá.",
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
    description:
      "Encuentra modelos profesionales en Bogotá y descubre oportunidades de trabajo para modelos",
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
      {/* Google Tag (gtag.js) */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${
          process.env.NEXT_PUBLIC_GTAG_AW ?? "AW-17526687912"
        }`}
        strategy="afterInteractive"
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);} 
            gtag('js', new Date());
            gtag('config', '${
              process.env.NEXT_PUBLIC_GTAG_AW ?? "AW-17526687912"
            }');
          `,
        }}
      />
      <LenisProvider isRoot>
        <body
          className={`${prata.variable} ${pinyon.variable}  antialiased w-full flex flex-col justify-center gradient1`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
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
