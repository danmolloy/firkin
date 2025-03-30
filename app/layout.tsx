import type { Metadata } from "next";
import { Abril_Fatface, Notable, Montserrat, Nanum_Pen_Script, Unkempt } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"

const abrilFatface = Abril_Fatface({ weight: "400", subsets: ["latin"], variable: '--font-abril-fatface' })
const notable = Notable({weight: "400", subsets: ["latin"], variable: '--font-notable' })
const robotoMono = Montserrat({weight: "400", subsets: ["latin"], variable: '--font-roboto-mono' })
const rockSalt = Nanum_Pen_Script({weight: "400", subsets: ["latin"], variable: '--font-rock-salt'})
const title = Unkempt({weight: "400", subsets: ["latin"], variable: '--font-kirang-haerang'})
export const metadata: Metadata = {
  title: "The Big Firkin Band",
  description: "17-piece jazz big band sensation in South East London. Live at the Fox & Firkin on the second Sunday of every month 3:30pm-6pm!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${title.variable} ${rockSalt.variable} ${abrilFatface.variable} ${notable.variable} ${robotoMono.variable}`}>
      <body >
        {children}
      </body>
      {process.env.ENVIRONMENT !== "local" && <Analytics />}
    </html>
  );
}
