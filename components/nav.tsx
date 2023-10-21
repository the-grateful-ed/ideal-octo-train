"use client"

import Link from "next/link"
import { CalendarIcon, HomeIcon } from "@radix-ui/react-icons"

import { useActivePath } from "./helper"

type NavigationItem = {
  href: string
  icon: React.ComponentType
  name: string
}

const navigation: NavigationItem[] = [
  { href: "/", icon: HomeIcon, name: "Home" },
  // { href: "/feedback", icon: UsersIcon, name: "Feedback" },
  // { href: "/roadmap", icon: FolderIcon, name: "Roadmap" },
  { href: "/comments", icon: CalendarIcon, name: "Comments" },
]

export function Nav() {
  const checkActivePath = useActivePath()

  return (
    <nav className="py-3 text-lg font-semibold">
      <ul className="flex justify-between">
        {navigation.map(({ href, icon: Icon, name }) => (
          <li key={href} className="flex justify-between">
            <Link
              href={href}
              className={`flex items-center space-x-1 ${
                checkActivePath(href) ? "text-blue-500" : ""
              }`}
            >
              <Icon />
              <span>{name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
