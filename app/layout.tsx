import type { Metadata } from "next";
import { Abril_Fatface, Notable, Montserrat, Nanum_Pen_Script, Unkempt, Quicksand } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"

const abrilFatface = Abril_Fatface({ weight: "400", subsets: ["latin"], variable: '--font-abril-fatface' })
const notable = Notable({weight: "400", subsets: ["latin"], variable: '--font-notable' })
const quicksand = Quicksand({weight: "400", subsets: ["latin"], variable: '--font-quicksand' })
const rockSalt = Nanum_Pen_Script({weight: "400", subsets: ["latin"], variable: '--font-rock-salt'})
const title = Unkempt({weight: "400", subsets: ["latin"], variable: '--font-unkempt'})
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
    <html lang="en" className={`${title.variable} ${rockSalt.variable} ${abrilFatface.variable} ${notable.variable} ${quicksand.variable}`}>
      <body >
        {children}
      </body>
      {process.env.ENVIRONMENT !== "local" && <Analytics />}
    </html>
  );
}
