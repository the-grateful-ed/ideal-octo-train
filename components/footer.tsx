// components/Footer.tsx
import React from "react"
import { FaDiscord, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa"

const Footer: React.FC = () => {
  const socialMediaLinks = [
    { icon: <FaTwitter />, url: "https://twitter.com/yourusername" },
    { icon: <FaLinkedin />, url: "https://linkedin.com/in/yourusername" },
    { icon: <FaDiscord />, url: "https://discord.com/yourusername" },
    { icon: <FaFacebook />, url: "https://facebook.com/yourusername" },
  ]

  return (
    <footer className="m-2 rounded-lg border bg-background p-2 shadow-xl">
      <div className="mx-auto flex w-full flex-col justify-center space-y-1.5 md:flex-row md:items-center md:justify-between">
        <div className="text-center font-ubuntu text-sm ">
          © 2023 <a href="https://www.edndacomputer.xyz/">edndacomputer™</a>.
          All Rights Reserved.
        </div>
        <div className="flex justify-center space-x-3">
          {socialMediaLinks.map((link, index) => (
            <a
              href={link.url}
              key={index}
              className="stroke-current text-xl hover:text-primary"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
