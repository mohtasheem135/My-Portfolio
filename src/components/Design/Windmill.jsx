import React from 'react'
import { motion } from "framer-motion";

const Windmill = () => {
  return (
    <>
      {/* <motion.ul className="rounded-sm w-2 h-28 bg-black absolute mt-[110px]" /> */}
        <motion.ul
          className="rounded-sm w-24 h-24 bg-[#22177A] absolute shadow-sm"
          //   animate={{ x: 500, scale: 2, transition: { duration: 2 } }}
          //   initial={{ opacity: 0, scale: 0.5, rotate: 0 }}
          animate={{ opacity: 1, scale: 1, rotate: 360 }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            duration: 3,
          }}
        />
        <motion.ul
          className="rounded-sm w-20 h-20 bg-[#608BC1] absolute shadow-md"
          //   animate={{ x: 500, scale: 2, transition: { duration: 2 } }}
          //   initial={{ opacity: 0, scale: 0.5, rotate: 30 }}
          animate={{ opacity: 1, scale: 1, rotate: 360 }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            duration: 3,
            delay: 0.3,
          }}
        />
        <motion.ul
          className="rounded-sm w-16 h-16 bg-[#22177A] absolute shadow-lg"
          //   animate={{ x: 500, scale: 2, transition: { duration: 2 } }}
          //   initial={{ opacity: 0, scale: 0.5, rotate: 60 }}
          animate={{ opacity: 1, scale: 1, rotate: 360 }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            duration: 3,
            delay: 0.6,
          }}
        />
        <motion.ul
          className="rounded-sm w-12 h-12 bg-[#608BC1] absolute shadow-xl"
          //   animate={{ x: 500, scale: 2, transition: { duration: 2 } }}
          // initial={{ opacity: 0, scale: 0.5, rotate: 90 }}
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
          className="rounded-sm w-8 h-8 bg-[#22177A] absolute shadow-xl"
          //   animate={{ x: 500, scale: 2, transition: { duration: 2 } }}
          // initial={{ opacity: 0, scale: 0.5, rotate: 90 }}
          animate={{ opacity: 1, scale: 1, rotate: 360 }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            duration: 3,
            delay: 1.2,
          }}
        />
        <motion.ul
          className="rounded-sm w-4 h-4 bg-[#608BC1] absolute shadow-xl"
          //   animate={{ x: 500, scale: 2, transition: { duration: 2 } }}
          // initial={{ opacity: 0, scale: 0.5, rotate: 90 }}
          animate={{ opacity: 1, scale: 1, rotate: 360 }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            duration: 3,
            delay: 1.5,
          }}
        />
        <motion.ul className="w-1 h-1 bg-gray-400 absolute" />
        {/* <motion.ul className="rounded- w-2 h-2 bg-black absolute" /> */}
    </>
  )
}

export default Windmill
