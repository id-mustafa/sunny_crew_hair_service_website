'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import CallNow from './CallNow';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="fixed top-0 left-0 right-0 w-full shadow-xl bg-white h-24 z-20 flex items-center justify-between px-8">
      <Link
        href="/"
        className="flex flex-col items-center gap-2"
        onClick={closeMenu}
      >
        <Image
          src="/logo.png"
          alt="Sunny and Crew Hair Service"
          width={100}
          height={100}
          priority
          className="object-contain"
        />
      </Link>
      
      <strong>
        <div className='text-2xl'>Sunny & Crew Hair Service</div>
      </strong>

      {/* Desktop Links */}
      <div className="hidden sm:flex gap-8 items-center">
      </div>

      {/* Hamburger Icon */}
      <div className="sm:hidden flex items-center">
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="relative w-8 h-8 flex items-center justify-center focus:outline-none"
      >
          {/* Top Line */}
          <div
            className={`absolute h-1 w-6 bg-black rounded transition-all duration-300 ease-in-out ${
              menuOpen
                ? 'rotate-45 translate-y-0'
                : 'translate-y-[-8px] rotate-0'
            }`}
          ></div>
          {/* Middle Line */}
          <div
            className={`absolute h-1 w-6 bg-black rounded transition-opacity duration-300 ease-in-out ${
              menuOpen ? 'opacity-0' : 'opacity-100'
            }`}
          ></div>
          {/* Bottom Line */}
          <div
            className={`absolute h-1 w-6 bg-black rounded transition-all duration-300 ease-in-out ${
              menuOpen
                ? '-rotate-45 translate-y-0'
                : 'translate-y-[8px] rotate-0'
            }`}
          ></div>
        </button>
      </div>



      {/* Mobile Menu */}
      <div
        className={`absolute top-24 left-0 w-full bg-white shadow-lg flex flex-col items-center py-4 sm:hidden transition-opacity duration-300 ease-in-out ${
          menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <CallNow />
      </div>
    </nav>
  );
};

export default Navbar;
