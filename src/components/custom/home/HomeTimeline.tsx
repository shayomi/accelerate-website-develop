"use client";

import { motion } from "framer-motion";
import { Typography } from "@/components/ui/typography";
import { fadeIn } from "@/Variants";

const HomeTimeline = () => {
  return (
    <motion.section>
      <div className="container">
        <div>
          <h1 className="background-text sm:text-[6rem] xl:text-[7.2rem]">
            TIMELINE
          </h1>

          <Typography variant="h6" className="z-20 -mt-4">
            The Accelerate Africa Timeline
          </Typography>
        </div>

        <motion.div
          variants={fadeIn("down", "tween", 0.2, 1.0)}
          initial="hidden"
          whileInView={"show"}
          exit={"show"}
        >
          <div className="mt-14 sm:mt-24">
            <img
              src="/images/timeline.svg"
              alt="Timeline"
              className="w-full h-auto hidden sm:block"
            />

            <img
              src="/images/timeline-mobile.svg"
              alt="Timeline"
              className="w-full h-auto block sm:hidden"
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HomeTimeline;
