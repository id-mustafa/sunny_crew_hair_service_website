'use client';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 w-full bg-white h-24 z-20 flex items-center justify-center px-8">
      <Link
        href="/"
        className="flex flex-col items-center gap-2"
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
    </nav>
  );
};

export default Navbar;
