import { motion } from "framer-motion";
import { useIsMobile } from "@/app/hooks/useIsMobile";
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";


const iconMap = {
  github: FaGithub,
  github2: FaGithub,
  email: MdEmail,
  linkedin: FaLinkedinIn,
  leetcode: SiLeetcode,
  open: FaExternalLinkAlt,
};

const tooltipMap = {
  github: "Github",
  github2: "Github Repository",
  email: "Mailto: mohtasheemejaz@gmail.com",
  linkedin: "Linkedin",
  leetcode: "Leetcode",
  open: "Go to College-Notes-App"
};

export function Chakra({ className, name, link, isClockwise }) {
  const isMobile = useIsMobile();
  const IconComponent = iconMap[name];
  const tooltipText = tooltipMap[name];

  return (
    <div className={`h-28 flex items-center justify-center ${className}`}>
      <motion.ul
        className="rounded-sm w-14 h-14 sm:w-20 sm:h-20 bg-[#22177A] absolute shadow-sm"
        animate={{ opacity: 1, scale: 1, rotate: isClockwise ? 360 : -360 }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          duration: 3,
          delay: isClockwise && 0.9,
        }}
      />
      <motion.ul
        className="rounded-sm w-8 sm:w-14 h-8 sm:h-14 bg-[#608BC1] absolute shadow-sm"
        initial={{ rotate: 0 }}
        animate={{ opacity: 1, scale: 1, rotate: isClockwise ? 360 : -360 }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          duration: 3,
          delay: 0.3,
        }}
      />
      <div className="absolute flex justify-center cursor-pointer hover:bg-gray-200 hover:shadow-xl hover:round p-2 hover:rounded-full">
        {IconComponent && (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <a href={link} target="_blank" rel="noopener noreferrer">
                  <IconComponent size={isMobile ? 20 : 25} />
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p>{tooltipText}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
      </div>
    </div>
  );
}
