"use client";

import styles from "@/components/HomePage/card/style.module.scss";
import { useTransform, motion, useScroll } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ProjectDetails from "./ProjectDetails";
import { Chakra } from "@/components/Design/Chakra";

const Card = ({
  i,
  title,
  description,
  features,
  benefits,
  // src,
  // url,
  color,
  progress,
  range,
  targetScale,
  project_name,
  repository_link,
  project_name2,
  redirect_url
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);
  return (
    <div
      ref={container}
      className={`${styles.cardContainer} px-[20px] sm:mt-[50px] -mt-[50px]`}
    >
      <motion.div
        style={{
          backgroundColor: color,
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className={`${styles.card} w-full sm:w-[1000px]  sm:h-[500px] p-[20px] sm:p-[50px]`}
      >
        <h2>{title}</h2>
        <div
          className={`${styles.body} flex flex-col sm:flex-row mt-[20px] sm:mt-[20px] `}
        >
          <div className={` w-full sm:w-[50%]`}>
            <p className="px-3">{description}</p>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="text-white px-3" variant="link">
                  view Details
                </Button>
              </DialogTrigger>
              <DialogContent className="border-4 border-black max-w-[650px]">
                <DialogTitle>College-Notes-App</DialogTitle>
                <ProjectDetails features={features} benefits={benefits} />
              </DialogContent>
            </Dialog>
            <div className="w-full flex px-[40px]">
              <Chakra
                name={project_name}
                link={repository_link}
                isClockwise={true}
              />
              <Chakra
                className="ml-[70px] sm:ml-[100px]"
                name={project_name2}
                link={redirect_url}
                isClockwise={false}
              />
            </div>
          </div>

          <div className={`${styles.imageContainer} sm:w-[50%] w-full h-full`}>
            <motion.div className={styles.inner} style={{ scale: imageScale }}>
              <iframe
                src={`https://www.youtube.com/embed/PczQ0qSwe1E?si=7hRpCAUoUiHdMBkw`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="YouTube Video"
                className="h-[200px] sm:h-full sm:w-full "
              ></iframe>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
