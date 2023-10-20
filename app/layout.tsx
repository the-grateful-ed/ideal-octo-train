import Link from "next/link"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@/components/analytics"
import { ModeToggle } from "@/components/mode-toggle"
import Header from "@/components/header"
import { Ubuntu, Poppins } from 'next/font/google';
import Footer from "@/components/footer"

const ubuntu = Ubuntu({ 
  subsets: ['latin'],
  weight:["400", "700"],
  variable: '--font-ubuntu',
});

const poppins = Poppins({ 
  subsets: ['latin'],
  weight:["400", "700"],
  variable: '--font-poppins',
});

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
        className={`min-h-screen bg-background text-slate-900 antialiased dark:text-slate-50 ${ubuntu.variable} ${poppins.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="mx-auto max-w-2xl px-4 py-10">
          <Header header="edndacomputer" subheader="a blog about computers and the current state of the internet." /> 
                       <div className="flex items-center justify-between">
                <ModeToggle />
                <nav className="ml-auto space-x-6 text-sm font-medium">
                  <Link href="/">Home</Link>
                  <Link href="/about">About</Link>
                </nav>
              </div>
            <main>{children}</main>
        <Footer />
          </div>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
