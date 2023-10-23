import "./globals.css"
import { Poppins, Ubuntu } from "next/font/google"

import { Analytics } from "@/components/analytics"
import Footer from "@/components/footer"
import Header from "@/components/header"
import { Nav } from "@/components/nav"
import { ThemeProvider } from "@/components/theme-provider"

const ubuntu = Ubuntu({
  subsets: ["latin"],
  variable: "--font-ubuntu",
  weight: "300",
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
        className={`mx-auto min-h-screen max-w-2xl bg-background antialiased ${ubuntu.variable} ${poppins.variable}`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex min-h-screen  flex-col pt-10">
            <Header
              header="edndacomputer"
              subheader="a blog about computers and the current state of the internet."
            />
            <Nav />
            <main className="flex grow flex-col">{children}</main>
            <Footer />
          </div>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
