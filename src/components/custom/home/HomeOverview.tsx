"use client";

import { Typography } from "@/components/ui/typography";
import { motion } from "framer-motion";
import { fadeIn } from "../../../Variants";
import { areasOfFucus } from "@/utils/data/areasOfFucus";
import { transition2 } from "@/Transition";

const HomeOverview = () => {
  return (
    <motion.section className="container">
      <div className="flex flex-wrap md:flex-nowrap gap-10 sm:gap-8 lg:gap-14 items-end">
        <motion.div
          variants={fadeIn("down", "tween", 0.2, 0.8)}
          initial="hidden"
          whileInView={"show"}
          exit={"show"}
          className="basis-full sm:basis-6/12 lg:basis-5/12"
        >
          <img
            src="/images/home-overview.webp"
            alt="Home overview"
            className="w-full h-auto"
          />
        </motion.div>

        <div className="basis-full sm:basis-6/12 lg:basis-7/12 overflow-hidden">
          <h1 className="background-text">OVERVIEW</h1>

          <motion.div
            variants={fadeIn("up", "tween", 0.2, 0.8)}
            initial="hidden"
            whileInView={"show"}
            exit={"show"}
            className="lg:max-w-[590px] lg:ml-auto z-20 -mt-4"
          >
            {/*<Typography variant="h6">Dear Founder,</Typography>*/}

            <Typography variant="h3" className="text-accent mt-4">
              8 weeks. 10 founders. 75+ coinvestors, 2 founder operators. 7+
              advisors. 1 goal.
            </Typography>

            <Typography variant="p">
              After over a decade of supporting several Africa focused founding
              teams, we have identified five critical areas of support to focus
              on during the program, alongside some of the top experts in these
              fields.
            </Typography>
          </motion.div>
        </div>
      </div>

      <motion.div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-4 xl:gap-6 mt-12 sm:mt-16">
        {areasOfFucus.map((item, index) => (
          <motion.div
            variants={fadeIn("up", "tween", index * 0.2, 0.8)}
            initial="hidden"
            whileInView={"show"}
            exit={"show"}
            whileHover={{ scale: 1.1 }}
            transition={transition2}
            key={index}
            className="bg-[#f7f7f7] gray-card-shadow px-2.5 py-5 sm:px-4 sm:py-6 text-center rounded-lg"
          >
            <img
              src={item.icon}
              alt={item.title}
              className="w-7 h-7 mx-auto mb-5"
            />

            <Typography variant="h6" className="mb-3">
              {item.title}
            </Typography>

            <Typography variant="smallText" className="font-normal">
              {item.description}
            </Typography>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default HomeOverview;
