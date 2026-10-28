import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Toaster } from "react-hot-toast"
import Colophon from "@/components/Colophon"
import Masthead from "@/components/Masthead"
import { person } from "@/lib/content"
import "./globals.css"

const geist = Geist({ subsets: ["latin"], variable: "--font-geist", display: "swap" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono", display: "swap" })

export const metadata: Metadata = {
  metadataBase: new URL(`https://www.${person.site}`),
  title: `${person.prefix} ${person.name} — ${person.roleLine}`,
  description: person.standfirst,
  openGraph: {
    title: `${person.prefix} ${person.name}`,
    description: person.standfirst,
    type: "profile",
  },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB" className={`${geist.variable} ${geistMono.variable}`}>
      <body className="min-h-dvh bg-void">
        <Masthead />
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: "#13161b",
              color: "#f2f4f7",
              border: "1px solid rgb(255 255 255 / 0.1)",
              fontSize: "0.875rem",
            },
          }}
        />
        {children}
        <Colophon />
      </body>
    </html>
  )
}
