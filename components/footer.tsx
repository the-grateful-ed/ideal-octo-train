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
    <footer className="rounded-lg bg-white shadow dark:bg-gray-800">
      <div className="mx-auto w-full max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 dark:text-gray-400 sm:text-center">© 2023 <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.</span>
        <ul className="font-2xl mt-3 flex flex-wrap items-center text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
          {socialMediaLinks.map((link, index) => (
            <li key={index}>
              <a href={link.url} className="mr-4 hover:underline md:mr-6">
                {link.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
