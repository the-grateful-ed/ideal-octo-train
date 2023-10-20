import Link from "next/link"

import { ModeToggle } from "@/components/mode-toggle"

interface NavProps {
  // Define any props your Nav component needs here
}

export const Nav: React.FC<NavProps> = () => {
  return (
    <nav className="flex flex-row justify-around py-3 font-poppins">
      <ModeToggle />
      <Link href="/">Home</Link>
      <Link href="/contact">Contact</Link>
      <Link href="/about">About Me</Link>
    </nav>
  )
}
