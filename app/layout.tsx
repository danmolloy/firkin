import type { Metadata } from "next";
import { Unkempt, Quicksand } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"

const quicksand = Quicksand({weight: ["300", "400", "500", "600", "700"], subsets: ["latin"], variable: '--font-quicksand' })
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
    <html lang="en" className={`${title.variable}  ${quicksand.variable}`}>
      <body >
        {children}
      </body>
      {process.env.ENVIRONMENT !== "local" && <Analytics />}
    </html>
  );
}
