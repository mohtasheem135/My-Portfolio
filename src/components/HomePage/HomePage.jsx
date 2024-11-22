"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import {
  ClockwiseChakra,
  AnticlockwiseChakra,
} from "@/components/Design/Chakra";
import { Playfair_Display } from "next/font/google";
import { Source_Sans_3 } from "next/font/google";
import { useIsMobile } from "@/app/hooks/useIsMobile";

const playfair = Playfair_Display({ subsets: ["latin"], style: "normal" });
const source_sans = Source_Sans_3({ subsets: ["latin"], style: "normal" });

const HomePage = () => {
  const isMobile = useIsMobile();

  return (
    <div className="flex flex-col-reverse sm:flex-row pb-[50px]">
      {/* {!isMobile && ( */}
      <div className="sm:w-1/2">
        <div className="sm:mt-[100px] px-[20px] sm:ml-[100px]">
          <h1
            className={`${playfair.className} flex text-[25px] sm:text-[35px] font-bold`}
          >
            Hello,
            <motion.ul
              className="rounded-sm h-[45px] bg-[#22177A] absolute shadow-sm -z-10 ml-[70px] sm:ml-[100px] "
              initial={{ width: "0px", padding: "0px 0px" }}
              animate={{
                width: `${isMobile ? "158px" : "218px"}`,
              }}
              transition={{
                ease: "linear",
                duration: 2,
              }}
            >
              <p className="ml-[5px] text-[#608BC1]">Mohtasheem</p>
            </motion.ul>
            <p className="ml-[165px] sm:ml-[225px]">here</p>
          </h1>
          <p
            className={`${source_sans.className} mt-[15px] sm:pr-[150px]`}
          >
            I am currently employed as a full-time Software Developer at
            Charzer, where I have honed my expertise in cutting-edge web
            development technologies, including React.js, Next.js, Redux,
            Tailwind CSS, and API Integration. In my role, I have contributed to
            building scalable and efficient solutions, focusing on delivering
            high-quality code and user-friendly applications.
          </p>
        </div>
        <div className="sm:h-28 w-full mt-[0px] sm:mt-[50px] px-[70px] sm:px-[140px] flex">
          <AnticlockwiseChakra name="github" />
          <ClockwiseChakra className={`ml-[70px] sm:ml-[100px]`} name="email" />
          <AnticlockwiseChakra className={`ml-[70px] sm:ml-[100px]`} />
          <ClockwiseChakra className={`ml-[70px] sm:ml-[100px]`} />
        </div>
      </div>
      {/* // )} */}

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          ease: "linear",
          duration: 2,
        }}
        className="sm:w-1/2"
      >
        <Image
          src="/Homepage/profile.jpg"
          width={1920}
          height={1280}
          alt="profile-img"
        />
      </motion.div>
    </div>
  );
};

export default HomePage;
