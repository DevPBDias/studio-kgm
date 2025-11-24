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
  title:
    "KGM Studio - Criação de Sites Profissionais em Palmas e para Todo o Brasil",
  description:
    "KGM Studio é especialista em criar sites modernos, rápidos e otimizados para empresas de Palmas e de todo o Brasil. Web design, landing pages, SEO e presença digital completa para fortalecer marcas e atrair clientes.",
  keywords: [
    "criação de sites em Palmas",
    "sites profissionais Palmas",
    "web design Palmas",
    "desenvolvimento web Palmas",
    "agência digital Palmas",
    "landing pages de alta conversão",
    "SEO Palmas",
    "designer Palmas",
    "criação de site profissional",
    "empresa de sites Palmas",
    "sites para empresas",
    "web design moderno",
    "presença digital Palmas",
    "sites profissionais no Brasil",
    "agência digital Brasil",
    "KGM Studio",
    "studiokgm",
  ],
  authors: [{ name: "KGM Studio" }],
  openGraph: {
    title: "KGM Studio – Sites Profissionais, Landing Pages e SEO em Palmas",
    description:
      "Criação de sites otimizados, design moderno e SEO para empresas que querem atrair clientes.",
    url: "https://studiokgm.com.br",
    siteName: "KGM Studio",
    type: "website",
    locale: "pt_BR",
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://studiokgm.com.br",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "KGM Studio",
              url: "https://studiokgm.com.br",
              image: "https://studiokgm.com.br/og-image.jpg",
              description:
                "Criação de sites profissionais, landing pages e soluções digitais otimizadas para empresas de Palmas e de todo o Brasil.",
              telephone: "+5563992310976",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Palmas",
                addressRegion: "TO",
                addressCountry: "BR",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: -10.2491,
                longitude: -48.3243,
              },
              sameAs: [
                "https://instagram.com/kgmstudio",
                "https://studiokgm.com.br",
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "KGM Studio",
              url: "https://studiokgm.com.br",
              logo: "https://studiokgm.com.br/logo.png",
              description:
                "Estúdio especializado em criação de sites modernos, landing pages, SEO e presença digital profissional.",
              sameAs: ["https://instagram.com/kgmstudio"],
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              url: "https://studiokgm.com.br",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://studiokgm.com.br/?s={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
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
