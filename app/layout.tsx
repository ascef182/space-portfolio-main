import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import type { PropsWithChildren } from "react";
import "./globals.css";
import Head from "next/head";

import { Footer } from "@/components/main/footer";
import { Navbar } from "@/components/main/navbar";
import { StarsCanvas } from "@/components/main/star-background";
import { siteConfig } from "@/config";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: "#030014",
};

export const metadata: Metadata = {
  title: "Pâm Ascef | Full Stack Developer Portfolio",
  description: "Portfolio of Pâm Ascef, a full stack developer with international experience in web, cloud, and mobile projects.",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <Head>
        <title>Pâm Ascef | Full Stack Developer Portfolio</title>
        <meta name="description" content="Portfolio of Pâm Ascef, a full stack developer with international experience in web, cloud, and mobile projects." />
        <meta property="og:title" content="Pâm Ascef | Full Stack Developer" />
        <meta property="og:description" content="Explore my projects, skills, and get in touch for international and local collaborations." />
        <meta property="og:image" content="/projects/site.png" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="/projects/site.png" />
        <meta name="twitter:title" content="Pâm Ascef | Full Stack Developer" />
        <meta name="twitter:description" content="Portfolio of Pâm Ascef, full stack developer." />
        <meta name="twitter:image" content="/projects/site.png" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://your-domain.com/" />
      </Head>

      <body
        className={cn(
          "bg-[#030014] overflow-y-scroll overflow-x-hidden",
          inter.className
        )}
      >
        <StarsCanvas />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
