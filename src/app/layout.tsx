import type { Metadata } from "next";
import type { ReactNode } from "react";

import { themeInitScript } from "@/lib/theme-init";
import { site } from "@/lib/site";

import {
  Footer,
  Header,
} from "@/components/layout";

import { profile } from "@/data/profile";

import "./globals.css";

const pageTitle = `${profile.name} | ${profile.title}`;

const pageDescription =
  `Conheça o currículo digital, as competências técnicas, ` +
  `a formação e os projetos de ${profile.name}, ` +
  `desenvolvedor Full Stack.`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),

  title: pageTitle,

  description: pageDescription,

  applicationName: "Currículo Digital",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: site.locale,
    url: site.url,
    siteName: "Currículo Digital",
    title: pageTitle,
    description: pageDescription,
  },

  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
  },

  robots: {
    index: true,
    follow: true,
  },
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({
  children,
}: RootLayoutProps) {
  return (
    <html lang={site.language} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: themeInitScript,
          }}
        />
      </head>

      <body>
        <a
          href="#conteudo-principal"
          className="skip-link"
        >
          Pular para o conteúdo principal
        </a>

        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
}