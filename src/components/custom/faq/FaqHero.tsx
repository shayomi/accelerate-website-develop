"use client";
import { Typography } from "@/components/ui/typography";
import { motion } from "framer-motion";
import { fadeIn } from "@/Variants";

const FaqHero = () => {
  return (
    <motion.section className="faq-hero-banner-bg">
      <div className="container">
        <motion.div
          variants={fadeIn("down", "tween", 0.1, 0.6)}
          initial="hidden"
          whileInView={"show"}
          exit={"show"}
          className="max-w-[28rem]"
        >
          <h1 className="text-5xl lg:text-7xl font-bold">FAQ</h1>

          <Typography variant="div" className="mt-8">
            Have questions about Accelerate Africa? We have answers. Here are
            some common responses that may be helpful
          </Typography>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default FaqHero;
