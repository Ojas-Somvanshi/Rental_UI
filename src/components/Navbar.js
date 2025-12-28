"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/80 backdrop-blur-lg shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto pl-2 pr-2 md:pl-0 md:pr-0 flex justify-between items-center">
        
        {/* Logo */}
        <Link href="/" className="flex items-center -ml-42">
          <div
            className={`relative transition-all duration-500 ${
              scrolled ? "w-[200px] h-[36px]" : "w-[260px] h-[44px]"
            }`}
          >
            <Image
              src="/logo_rent.png"
              alt="Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Menu */}
    <ul
    className={`flex gap-8 font-medium items-center transition-colors duration-300 -mr-16 ${
      scrolled ? "text-gray-800" : "text-white"
    }`}
  >
    <li className="cursor-pointer relative group">
      Home
      <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
    </li>

    <li className="cursor-pointer relative group">
      Vehicles
      <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
    </li>

    <li className="cursor-pointer relative group">
      Contact
      <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
    </li>

    <li className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition-all duration-300 hover:shadow-lg">
      Login
    </li>
  </ul>      </div>
    </nav>
  );
}
