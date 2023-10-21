// components/Header.tsx
import React from "react"

interface HeaderProps {
  header: string
  subheader: string
}

const Header: React.FC<HeaderProps> = ({ header, subheader }) => {
  return (
    <header className="text-center">
      <h1 className="scroll-m-20 font-ubuntu text-4xl font-extrabold tracking-tight lg:text-5xl">
        {header}
      </h1>
      <h2 className="text-poppins text-sm text-muted-foreground">
        {subheader}
      </h2>
    </header>
  )
}

export default Header
