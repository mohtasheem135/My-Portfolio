import { motion } from "framer-motion";
import { useIsMobile } from "@/app/hooks/useIsMobile";
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export function AnticlockwiseChakra({ className, name }) {
  const isMobile = useIsMobile();
  return (
    <div className={`h-28 flex items-center justify-center ${className}`}>
      <motion.ul
        className="rounded-sm w-14 h-14 sm:w-20 sm:h-20 bg-[#22177A] absolute shadow-sm"
        initial={{ rotate: 0 }}
        animate={{ opacity: 1, scale: 1, rotate: -360 }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          duration: 3,
        }}
      />
      <motion.ul
        className="rounded-sm w-8 sm:w-14 h-8 sm:h-14 bg-[#608BC1] absolute shadow-sm"
        initial={{ rotate: 0 }}
        animate={{ opacity: 1, scale: 1, rotate: -360 }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          duration: 3,
          delay: 0.3,
        }}
      />
      <div className="absolute flex justify-center cursor-pointer hover:bg-gray-200 hover:shadow-xl hover:round p-2 hover:rounded-full">
        {name === "github" ? (
          <FaGithub size={`${isMobile ? 20 : 30}`} />
        ) : (
          <FaLinkedinIn size={`${isMobile ? 20 : 30}`} />
        )}
      </div>
    </div>
  );
}

export function ClockwiseChakra({ className, name }) {
  const isMobile = useIsMobile();
  return (
    <div className={`h-28 flex items-center justify-center ${className}`}>
      <motion.ul
        className="rounded-sm w-14 h-14 sm:w-20 sm:h-20 bg-[#22177A] absolute shadow-sm"
        animate={{ opacity: 1, scale: 1, rotate: 360 }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          duration: 3,
          delay: 0.9,
        }}
      />
      <motion.ul
        className="rounded-sm w-8 sm:w-14 h-8 sm:h-14 bg-[#608BC1] absolute shadow-sm"
        initial={{ rotate: 0 }}
        animate={{ opacity: 1, scale: 1, rotate: 360 }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          duration: 3,
          delay: 0.3,
        }}
      />
      <div className="absolute flex justify-center cursor-pointer hover:bg-gray-200 hover:shadow-xl hover:round p-2 hover:rounded-full">
        {name === "email" ? (
          <MdEmail size={`${isMobile ? 20 : 30}`} />
        ) : (
          <SiLeetcode size={`${isMobile ? 20 : 30}`} />
        )}
      </div>
    </div>
  );
}
