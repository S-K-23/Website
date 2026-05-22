import type { Metadata } from "next";
import { Inter, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { ScrollProgress } from "@/components/ScrollProgress";
import { SmoothScroll } from "@/components/SmoothScroll";
import { CustomCursor } from "@/components/CustomCursor";
import { MatrixField } from "@/components/MatrixField";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const serif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sohum Kashyap — CS + Math @ Purdue · AI/ML Researcher",
  description:
    "Personal site of Sohum Kashyap — Purdue CS + Math, AI/ML researcher at Argonne, UPenn, and the Kihara Lab. Selected projects, publications, and writing.",
  authors: [{ name: "Sohum Kashyap" }],
  openGraph: {
    title: "Sohum Kashyap",
    description: "CS + Math @ Purdue · AI/ML researcher · systems builder",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable} ${mono.variable}`}>
      <body className="font-sans antialiased bg-bg text-fg">
        <MatrixField />
        <SmoothScroll>
          <CustomCursor />
          <ScrollProgress />
          <Navigation />
          <main className="relative z-10">{children}</main>
        </SmoothScroll>
      </body>
    </html>
  );
}
