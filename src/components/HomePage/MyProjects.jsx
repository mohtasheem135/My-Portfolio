"use client";

import { projects } from "./card/data";
import Card from "./card/index";
import { useScroll } from "framer-motion";
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], style: "normal" });

export default function Home() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });

  return (
    <div>
      <div className="flex justify-center items-center mt-[100px] px-[20px] sm:px-[0px]">
        <h1
          className={`${playfair.className} bg-clip-text text-transparent text-[25px] sm:text-[35px] font-bold bg-gradient-to-br from-[#608BC1] to-[#22177A]`}
        >
          My Projects
        </h1>
      </div>
      <main ref={container} className="relative">
        {projects.map((project, i) => {
          // const targetScale = 1 - (projects.length - (i+1)) * 0.02; //for 6 cards 
          const targetScale = 1 - (projects.length - i) * 0.05; //for 4 cards 
          return (
            <Card
              key={`p_${i}`}
              i={i}
              {...project}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </main>
    </div>
  );
}
