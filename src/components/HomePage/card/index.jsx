"use client";

import styles from "@/components/HomePage/card/style.module.scss";
import { useTransform, motion, useScroll } from "framer-motion";
import { useRef } from "react";

const Card = ({
  i,
  title,
  description,
  // src,
  // url,
  color,
  progress,
  range,
  targetScale,
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);
  return (
    <div ref={container} className={`${styles.cardContainer} px-[20px] -mt-[50px]`}>
      <motion.div
        style={{
          backgroundColor: color,
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className={`${styles.card} w-full sm:w-[1000px]  sm:h-[500px] p-[20px] sm:p-[50px]`}
      >
        <h2>{title}</h2>
        <div className={`${styles.body} flex flex-col sm:flex mt-[20px] sm:mt-[50px]`}>
          <div className={`${styles.description} w-full sm:w-[40%] relative top-[5%] sm:top-[10%]`}>
            <p>{description}</p>
          </div>

          <div className={`${styles.imageContainer} sm:w-[60%] w-full h-full`}>
            <motion.div className={styles.inner} style={{ scale: imageScale }}>
              <iframe
                src={`https://www.youtube.com/embed/PczQ0qSwe1E?si=7hRpCAUoUiHdMBkw`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="YouTube Video"
                className="h-[200px] "
              ></iframe>
              {/* <Image
                fill
                src={`/Homepage/contact-1.jpg`}
                alt="image" 
              /> */}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
