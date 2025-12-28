// "use client";

// import { useEffect, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";

// export default function Navbar() {
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 20);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav
//       className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
//         scrolled
//           ? "bg-white/80 backdrop-blur-lg shadow-md py-2"
//           : "bg-transparent py-4"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto pl-2 pr-2 md:pl-0 md:pr-0 flex justify-between items-center">
        
//         {/* Logo */}
//         <Link href="/" className="flex items-center -ml-42">
//           <div
//             className={`relative transition-all duration-500 ${
//               scrolled ? "w-[200px] h-[36px]" : "w-[260px] h-[44px]"
//             }`}
//           >
//             <Image
//               src="/logo_rent.png"
//               alt="Logo"
//               fill
//               className="object-contain"
//               priority
//             />
//           </div>
//         </Link>

//         {/* Menu */}
//     <ul
//     className={`flex gap-8 font-medium items-center transition-colors duration-300 -mr-16 ${
//       scrolled ? "text-gray-800" : "text-white"
//     }`}
//   >
//     <li className="cursor-pointer relative group">
//       Home
//       <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
//     </li>

//     <li className="cursor-pointer relative group">
//       Vehicles
//       <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
//     </li>

//     <li className="cursor-pointer relative group">
//       Contact
//       <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
//     </li>

//     <li className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition-all duration-300 hover:shadow-lg">
//       Login
//     </li>
//   </ul>      </div>
//     </nav>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
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
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">

        {/* Logo */}
        <Link href="/" className="flex items-center lg:-ml-42">
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

        {/* Desktop Menu */}
        <ul
          className={`hidden md:flex gap-8 font-medium items-center transition-colors duration-300 lg:-mr-16 ${
            scrolled ? "text-gray-800" : "text-white"
          }`}
        >
          {["Home", "Vehicles", "Contact"].map((item) => (
            <li key={item} className="cursor-pointer relative group">
              {item}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
          <li className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition-all duration-300 hover:shadow-lg">
            Login
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Animated Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } bg-white shadow-lg`}
      >
        <ul className="flex flex-col gap-4 px-6 py-6 text-gray-800 font-medium">
          {["Home", "Vehicles", "Contact"].map((item) => (
            <li key={item} className="cursor-pointer">
              {item}
            </li>
          ))}
          <li className="bg-blue-600 text-white text-center py-2 rounded-md">
            Login
          </li>
        </ul>
      </div>
    </nav>
  );
}
