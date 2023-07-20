import "@/styles/global.css";

import type { Metadata } from 'next'
import { Fira_Mono, Inter } from 'next/font/google'
import { siteConfig } from "@/config/site"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { Analytics } from "@/components/analytics";

const inter = Inter({
  subsets: ['latin'],
  variable: "--font-sans",
  display: 'swap',

});

const firaMono = Fira_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  authors: [
    {
      name: siteConfig.name,
      url: siteConfig.url,
    },
  ],
  creator: siteConfig.name,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FDFDFE" },
    { media: "(prefers-color-scheme: dark)", color: "#131620" },
  ],
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <html lang="pt" suppressHydrationWarning>
      <body className={`${inter.variable} ${firaMono.variable} `}>
        <Header />
        <main className="max-w-[1000px] w-full mx-auto px-4 flex-1 items-center justify-center mt-20">{children}</main>
        <div className="max-w-[1000px] w-full mx-auto px-4 flex-1 items-center justify-center mt-20">
          <Footer />
        </div>
        <TailwindIndicator />
        <Analytics />


      </body>
    </html>
  )
}
