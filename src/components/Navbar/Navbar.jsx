'use client';

import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], style: "normal" });

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-[20px] sm:px-[100px]">
        <h1 className={`${playfair.className} text-xl tracking-wide `}>Mohtasheem Ejaz</h1>
        {/* <ul className="flex space-x-4">
          <li>
            <Link href="/">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about">
             About
            </Link>
          </li>
          <li>
            <Link href="/contact">
              Contact
            </Link>
          </li>
        </ul> */}
      </div>
    </nav>
  );
};

export default Navbar;
