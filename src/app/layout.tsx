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
  metadataBase: new URL("https://studiokgm.com.br"),
  title:
    "KGM Studio - Criação de Sites Profissionais em Palmas-TO e para Todo o Brasil",
  description:
    "Agência digital em Palmas, Tocantins especializada em criação de sites profissionais, landing pages de alta conversão, SEO e design moderno. Atendemos empresas de Palmas-TO e todo o Brasil com soluções web que geram resultados reais.",
  keywords: [
    "criação de sites em Palmas",
    "criação de sites em Palmas TO",
    "criação de sites em Palmas Tocantins",
    "sites profissionais Palmas",
    "web design Palmas",
    "desenvolvimento web Palmas",
    "agência digital Palmas",
    "agência de marketing digital Palmas",
    "SEO Palmas",
    "designer Palmas",
    "empresa de sites Palmas",
    "presença digital Palmas",
    "sites responsivos Palmas",
    "landing page Palmas",
    "criação de sites Tocantins",
    "web design Tocantins",
    "agência digital Tocantins",
    "sites profissionais Tocantins",
    "desenvolvimento web Tocantins",
    "sites profissionais no Brasil",
    "agência digital Brasil",
    "criação de sites online",
    "desenvolvimento web Brasil",
    "landing pages de alta conversão",
    "criação de site profissional",
    "sites para empresas",
    "web design moderno",
    "site responsivo",
    "otimização SEO",
    "design de sites",
    "sites corporativos",
    "e-commerce",
    "portfólio online",
    "KGM Studio",
    "studiokgm",
    "Studio KGM Palmas",
  ],
  authors: [{ name: "KGM Studio", url: "https://studiokgm.com.br" }],
  creator: "KGM Studio",
  publisher: "KGM Studio",
  openGraph: {
    title: "KGM Studio – Criação de Sites Profissionais em Palmas-TO",
    description:
      "Agência digital em Palmas especializada em sites modernos, landing pages e SEO para empresas que querem crescer online. Atendemos Palmas-TO e todo o Brasil.",
    url: "https://studiokgm.com.br",
    siteName: "KGM Studio",
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "KGM Studio - Criação de Sites em Palmas-TO",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KGM Studio – Sites Profissionais em Palmas-TO",
    description:
      "Criação de sites modernos, landing pages e SEO em Palmas. Transforme sua presença digital.",
    images: ["/og-image.jpg"],
    creator: "@kgmstudio",
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
  alternates: {
    canonical: "https://studiokgm.com.br",
  },
  verification: {
    google: "google-site-verification-code",
  },
  category: "Web Development",
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
              "@id": "https://studiokgm.com.br#organization",
              name: "KGM Studio",
              url: "https://studiokgm.com.br",
              image: "https://studiokgm.com.br/og-image.jpg",
              logo: "https://studiokgm.com.br/logo.png",
              description:
                "Agência digital especializada em criação de sites profissionais, landing pages de alta conversão, SEO e design moderno. Atendemos empresas de Palmas-TO e todo o Brasil.",
              telephone: "+5563992310976",
              email: "contato@studiokgm.com.br",
              priceRange: "$$",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Palmas",
                addressRegion: "TO",
                addressCountry: "BR",
                postalCode: "77000-000",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: -10.2491,
                longitude: -48.3243,
              },
              areaServed: [
                {
                  "@type": "City",
                  name: "Palmas",
                  "@id": "https://www.wikidata.org/wiki/Q173059",
                },
                {
                  "@type": "State",
                  name: "Tocantins",
                },
                {
                  "@type": "Country",
                  name: "Brasil",
                },
              ],
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                  ],
                  opens: "09:00",
                  closes: "18:00",
                },
              ],
              sameAs: [
                "https://instagram.com/kgmstudio",
                "https://studiokgm.com.br",
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Serviços de Criação Web",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Criação de Sites Profissionais",
                      description:
                        "Desenvolvimento de sites modernos e responsivos",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Landing Pages de Alta Conversão",
                      description:
                        "Páginas otimizadas para conversão de visitantes em clientes",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "SEO e Otimização",
                      description:
                        "Otimização para mecanismos de busca e melhor posicionamento",
                    },
                  },
                ],
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://studiokgm.com.br#organization",
              name: "KGM Studio",
              url: "https://studiokgm.com.br",
              logo: "https://studiokgm.com.br/logo.png",
              description:
                "Estúdio especializado em criação de sites modernos, landing pages, SEO e presença digital profissional em Palmas-TO.",
              foundingDate: "2024",
              foundingLocation: {
                "@type": "Place",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Palmas",
                  addressRegion: "TO",
                  addressCountry: "BR",
                },
              },
              sameAs: ["https://instagram.com/kgmstudio"],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+5563992310976",
                contactType: "customer service",
                availableLanguage: "Portuguese",
                areaServed: "BR",
              },
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": "https://studiokgm.com.br#website",
              url: "https://studiokgm.com.br",
              name: "KGM Studio",
              description: "Criação de sites profissionais em Palmas-TO",
              publisher: {
                "@id": "https://studiokgm.com.br#organization",
              },
              inLanguage: "pt-BR",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://studiokgm.com.br/?s={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://studiokgm.com.br",
                },
              ],
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "KGM Studio - Criação de Sites em Palmas",
              image: "https://studiokgm.com.br/og-image.jpg",
              "@id": "https://studiokgm.com.br",
              url: "https://studiokgm.com.br",
              telephone: "+5563992310976",
              address: {
                "@type": "PostalAddress",
                streetAddress: "",
                addressLocality: "Palmas",
                addressRegion: "TO",
                postalCode: "77000-000",
                addressCountry: "BR",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: -10.2491,
                longitude: -48.3243,
              },
              priceRange: "$$",
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                  ],
                  opens: "09:00",
                  closes: "18:00",
                },
              ],
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
