// components/Footer.tsx
import React from 'react';
import { FaTwitter, FaLinkedin, FaDiscord, FaFacebook } from 'react-icons/fa';

const Footer: React.FC = () => {
  const socialMediaLinks = [
    { icon: <FaTwitter />, url: 'https://twitter.com/yourusername' },
    { icon: <FaLinkedin />, url: 'https://linkedin.com/in/yourusername' },
    { icon: <FaDiscord />, url: 'https://discord.com/yourusername' },
    { icon: <FaFacebook />, url: 'https://facebook.com/yourusername' },
  ];

  return (
    <footer className="mb-2 rounded-lg border bg-background p-4 shadow-xl dark:bg-gray-800">
      <div className="mx-auto w-full max-w-screen-xl md:flex md:items-center md:justify-between">
        <div className="text-sm text-gray-500 dark:text-gray-400 sm:text-center font-ubuntu">© 2023 <a href="https://www.edndacomputer.xyz/" className="hover:underline">edndacomputer™</a>. All Rights Reserved.</div>
        <div className="flex space-x-3">
          {socialMediaLinks.map((link, index) => (
              <a href={link.url} key={index} className="text-xl opacity-80 hover:opacity-60">
                {link.icon}
              </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
