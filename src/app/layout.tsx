import type { Metadata } from "next";
import { Playfair_Display, Crimson_Text } from "next/font/google";
import "./globals.css";
import { NavProvider } from "@/context/nav-provider";

const playfair = Playfair_Display({
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

const crimson = Crimson_Text({
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-crimson",
});

export const metadata: Metadata = {
  title: "KGM Studio - Presença Digital de Alto Nível",
  description: "Sites com design sofisticado e moderno que não apenas impressionam, mas também impulsionam seus resultados e fortalecem sua marca.",
  keywords: ["web design", "desenvolvimento web", "design moderno", "agência digital", "sites profissionais"],
  authors: [{ name: "KGM Studio" }],
  openGraph: {
    title: "KGM Studio - Presença Digital de Alto Nível",
    description: "Sites com design sofisticado e moderno que impulsionam seus resultados.",
    type: "website",
    locale: "pt_BR",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link
          rel="preload"
          href="/_next/static/media/playfair-display-v30-latin-regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/_next/static/media/crimson-text-v19-latin-regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${playfair.variable} ${crimson.variable} font-crimson antialiased`}
      >
        <NavProvider>{children}</NavProvider>
      </body>
    </html>
  );
}
