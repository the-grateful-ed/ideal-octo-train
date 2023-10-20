import Link from "next/link"

import "./globals.css"
import { Poppins, Ubuntu } from "next/font/google"

import { Analytics } from "@/components/analytics"
import Footer from "@/components/footer"
import Header from "@/components/header"
import { ModeToggle } from "@/components/mode-toggle"
import { ThemeProvider } from "@/components/theme-provider"

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-ubuntu",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-poppins",
})

export const metadata = {
  title: "edndacomputer",
  description: "a blog about computers and the current state of the internet.",
}

interface RootLayoutProps {
  children: React.ReactNode
}
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`min-h-screen bg-background text-slate-900 antialiased dark:text-slate-50 ${ubuntu.variable} ${poppins.variable}`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="mx-auto flex min-h-screen max-w-2xl flex-col px-4 pt-10">
            <Header
              header="edndacomputer"
              subheader="a blog about computers and the current state of the internet."
            />
            <main className="flex grow flex-col">{children}</main>
            <Footer />
          </div>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
