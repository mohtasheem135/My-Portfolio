'use client';

import { Source_Sans_3 } from "next/font/google";

const source_sans = Source_Sans_3({ subsets: ["latin"], style: "normal" });


const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p className={source_sans.className}>Made By @Mohtasheem Ejaz </p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  