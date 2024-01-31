"use client";

import { Typography } from "@/components/ui/typography";
import partners from "@/utils/data/partners";
import { motion } from "framer-motion";
import { fadeIn } from "../../../Variants";

const HomePartners = () => {
  return (
    <motion.section className="container">
      <Typography variant="h4">Our Partners</Typography>

      <motion.div
        variants={fadeIn("down", "tween", 0.1, 0.4)}
        initial="hidden"
        whileInView={"show"}
        exit={"show"}
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 sm:gap-14 items-center mt-12"
      >
        {partners.map((partner, index: number) => (
          <a href={partner.url} target="_blank" key={index}>
            <img
              src={partner.logo}
              alt={partner.name}
              title={partner.name}
              className="w-full"
            />
          </a>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default HomePartners;
