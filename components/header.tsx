// components/Header.tsx
import React from "react"
import Link from "next/link"

interface HeaderProps {
  header: string
  subheader: string
}

const Header: React.FC<HeaderProps> = ({ header, subheader }) => {
  return (
    <header className="mx-auto w-full rounded-t-xl bg-card p-2 text-center shadow-lg">
      <Link href="/">
        <h1 className="text-4xl lg:text-5xl">{header}</h1>
        <h2 className="text-poppins text-sm text-muted-foreground">
          {subheader}
        </h2>
      </Link>
    </header>
  )
}

export default Header
