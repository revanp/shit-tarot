import type { Metadata } from "next"
import { Cinzel_Decorative, Cinzel, EB_Garamond } from "next/font/google"
import "./globals.css"

const cinzelDecorative = Cinzel_Decorative({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-cinzel-decorative",
  display: "swap"
})

const cinzel = Cinzel({
  weight: ["400", "600", "700", "900"],
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap"
})

const ebGaramond = EB_Garamond({
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-eb-garamond",
  display: "swap"
})

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://shittarot.revanpratamas.com"
  ),
  title: "SHIT TAROT : The Ancient Art of Making Shit Up",
  description:
    "An antique occult fortune-teller's table disguised as serious divination. 22 Major Arcana cards packed with brutal honesty and existential roast. Prepare to be judged.",
  keywords: [
    "Tarot",
    "Shit Tarot",
    "Occult Divination",
    "Funny Tarot",
    "Tarot Reader",
    "Fortune Teller",
    "Major Arcana",
  ],
  authors: [{ name: "Revan Pratama", url: "https://revanpratamas.com" }],
  openGraph: {
    title: "SHIT TAROT : The Ancient Art of Making Shit Up",
    description:
      "An antique occult fortune-teller's table disguised as serious divination. Draw 3 cards & prepare to be judged.",
    url: "https://shittarot.revanpratamas.com",
    siteName: "SHIT TAROT",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SHIT TAROT : The Ancient Art of Making Shit Up",
    description:
      "An antique occult fortune-teller's table disguised as serious divination. Draw 3 cards & prepare to be judged.",
    creator: "@revanpratama",
  },
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🜚</text></svg>",
  },
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${cinzelDecorative.variable} ${cinzel.variable} ${ebGaramond.variable}`}>
      <body className="bg-[#120c08] text-[#f4ebd9] font-serif antialiased selection:bg-[#782222] selection:text-[#f4ebd9] min-h-screen overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
