import type { Metadata } from "next";
import { Inter, Irish_Grover, Inconsolata, Nunito, Kanit, Hammersmith_One, Special_Elite, Abril_Fatface, Notable, Medula_One, Roboto, Roboto_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const inconsolata = Inconsolata({weight: "400", subsets: ["latin"], variable: '--font-inconsolata' })
const nunito = Nunito({weight: "400", subsets: ["latin"], variable: '--font-nunito' })
const irishGrover = Irish_Grover({ weight: "400", subsets: ["latin"], variable: '--font-irish-grover' })
const abrilFatface = Abril_Fatface({ weight: "400", subsets: ["latin"], variable: '--font-abril-fatface' })
const notable = Notable({weight: "400", subsets: ["latin"], variable: '--font-notable' })
const specialElite = Special_Elite({weight: "400", subsets: ["latin"], variable: '--font-special-elite' })
const robotoMono = Roboto_Mono({weight: "400", subsets: ["latin"], variable: '--font-roboto-mono' })

export const metadata: Metadata = {
  title: "The Big Firkin Band",
  description: "17-piece jazz big band sensation in South East London.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${irishGrover.variable} ${inter.variable} ${nunito.variable} ${inconsolata.variable} ${abrilFatface.variable} ${notable.variable} ${specialElite.variable} ${robotoMono.variable}`}>
      <body >
        {children}
      </body>
    </html>
  );
}
