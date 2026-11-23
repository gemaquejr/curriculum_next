import type { Metadata } from "next";
import type { ReactNode } from "react";
import { themeInitScript } from "@/lib/theme-init";

import {
  Footer,
  Header,
} from "@/components/layout";

import { profile } from "@/data/profile";

import "./globals.css";

export const metadata: Metadata = {
  title: `${profile.name} | ${profile.title}`,

  description:
    `Currículo digital e portfólio profissional de ${profile.name}, desenvolvedor Full Stack.`,
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({
  children,
}: RootLayoutProps) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: themeInitScript,
          }}
        />
      </head>

      <body>
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
}