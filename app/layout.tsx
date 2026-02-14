import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Areculateir — Operations Walkthrough",
  description: "A systems-level method for building and shipping modern brands",
  generator: "v0.app",
  icons: {
    icon: "/brand/aasmark.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="bg-black">
      <body className={`${inter.className} bg-black`}>{children}</body>
    </html>
  )
}
