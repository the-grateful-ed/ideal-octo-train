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
        className={`min-h-screen bg-primary antialiased ${ubuntu.variable} ${poppins.variable}`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="mx-auto  flex min-h-screen max-w-2xl flex-col bg-background pt-10">
            <div className="sm:mx-2.5">
              <Header
                header="edndacomputer"
                subheader="a blog about computers and the current state of the internet."
              />
              <Nav />
              <main className="my-5 flex grow flex-col">{children}</main>
              <Footer />
            </div>
          </div>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
