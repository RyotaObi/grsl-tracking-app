import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import "leaflet/dist/leaflet.css"

export const metadata: Metadata = {
  title: "リアルタイム位置情報マップ",
  description: "車両の位置情報をリアルタイムで表示",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja" className="h-full">
      <body className="antialiased h-full">{children}</body>
    </html>
  )
}
