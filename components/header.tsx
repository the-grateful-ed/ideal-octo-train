// components/Header.tsx
import React from "react"
interface HeaderProps {
  header: string
  subheader: string
}


const Header: React.FC<HeaderProps> = ({ header, subheader }) => {
  return (
    <header className="text-center">
      <h1 className="text-4xl lg:text-5xl">
        {header}
      </h1>
      <h2 className="text-poppins text-sm text-muted-foreground">
        {subheader}
      </h2>
    </header>
  )
}

export default Header
