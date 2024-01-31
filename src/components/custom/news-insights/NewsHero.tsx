"use client";
import { Typography } from "@/components/ui/typography";
import { motion } from "framer-motion";
import { fadeIn } from "@/Variants";

const NewsHero = () => {
  return (
    <motion.section className="news-hero-banner-bg">
      <motion.div
        variants={fadeIn("down", "tween", 0.2, 0.8)}
        initial="hidden"
        whileInView={"show"}
        exit={"show"}
        className="container"
      >
        <div className="max-w-[38rem]">
          <h1 className="text-5xl lg:text-7xl font-bold">News & Insights</h1>
        </div>

        <div className="max-w-[28rem]">
          <Typography variant="div" className="mt-8">
            Discover the pulse of African innovation with the latest insights
            and updates from the forefront of business and technology
          </Typography>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default NewsHero;
