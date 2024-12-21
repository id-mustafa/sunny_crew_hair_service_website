import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import Image from "next/image";
import CallNow from "./CallNow";

export default function MyNavbar() {
  return (
    <Navbar fluid rounded className="px-4 py-2 bg-white">
      {/* Logo & Brand */}
      <NavbarBrand href="#">
        <Image
          src="/logo.png" // must be in public/logo.png
          alt="Sunny Crew Logo"
          width={50}
          height={50}
          className="mr-3 h-6 sm:h-9"
        />
      </NavbarBrand>

      {/* Right Side: "Call Us Now!" button + Hamburger toggle (only on mobile) */}
      <div className="flex md:order-2 items-center gap-2">
        <CallNow />
        {/* Hide the toggle on medium+ screens. Only show on mobile. */}
        <NavbarToggle className="md:hidden" />
      </div>

      {/* Collapsible menu items */}
      <NavbarCollapse>
        <NavbarLink href="/" active>
          Home
        </NavbarLink>
        <NavbarLink href="/about">About</NavbarLink>
        <NavbarLink href="/services">Services</NavbarLink>
        <NavbarLink href="/pricing">Pricing</NavbarLink>
        <NavbarLink href="/contact">Contact</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
