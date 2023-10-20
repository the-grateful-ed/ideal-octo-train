// components/Header.tsx
import React from 'react';

interface HeaderProps {
  header: string;
  subheader: string;
}

const Header: React.FC<HeaderProps> = ({ header, subheader }) => {
  return (
    <header className='text-center'>
      <h1 className="font-ubuntu text-3xl font-bold">{header}</h1>
      <h2 className="font-italic font-poppins text-xl">{subheader}</h2>
    </header>
  );
};

export default Header;
