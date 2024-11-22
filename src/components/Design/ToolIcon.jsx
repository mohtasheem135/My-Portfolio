import { motion } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
const ToolIcon = ({ IconComponent, label, color }) => (
  <div className="">
    <motion.div
      whileHover={{ scale: 1.5 }}
      className="p-6 flex justify-center cursor-pointer rounded-md"
    >
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <IconComponent size={48} style={{ color }} />
          </TooltipTrigger>
          <TooltipContent>
            <p>{label}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </motion.div>
  </div>
);

export default ToolIcon;
