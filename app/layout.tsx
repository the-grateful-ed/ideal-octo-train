import "./globals.css"
import { Fira_Code, Poppins, Ubuntu } from "next/font/google"

import { Analytics } from "@/components/analytics"
import Footer from "@/components/footer"
import Header from "@/components/header"
import { Nav } from "@/components/nav"
import { ThemeProvider } from "@/components/theme-provider"

const ubuntu = Ubuntu({
  subsets: ["latin"],
  variable: "--font-ubuntu",
  weight: ["300", "400", "500", "700"],
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
          <div className="mx-auto  flex min-h-screen flex-col border-2 border-black bg-gray-200 pt-10 sm:max-w-2xl">
            <div className="mx-1 sm:mx-4">
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
