"use client"

import Link from "next/link"
import { Code2, Contact, Home, Microscope } from "lucide-react"

import { useActivePath } from "./helper"
import { ModeToggle } from "./mode-toggle"

type NavigationItem = {
  href: string
  icon: React.ComponentType
  name: string
}

const navigation: NavigationItem[] = [
  { href: "/", icon: Home, name: "Home" },
  { href: "/about", icon: Microscope, name: "About" },
  { href: "/posts/page.tsx", icon: Code2, name: "Posts" },
  { href: "/contact", icon: Contact, name: "Contact" },
]
export function Nav() {
  const checkActivePath = useActivePath()

  return (
    <nav className="mx-auto w-full rounded-b-xl bg-card  text-sm font-semibold shadow-lg">
      <ul className="flex items-center justify-between px-3 sm:mx-0">
        {navigation.map(({ href, icon: Icon, name }) => (
          <li key={href} className="flex justify-between">
            <Link
              href={href}
              className={`flex items-center space-x-1 p-2 py-4 ${
                checkActivePath(href) ? "text-primary" : ""
              }`}
            >
              <span className="hidden sm:inline-flex">
                <Icon />
              </span>
              <span>{name}</span>
            </Link>
          </li>
        ))}
        <li>
          <ModeToggle />
        </li>
      </ul>
    </nav>
  )
}
