"use client";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { fadeIn } from "../../../Variants";
import { transition1 } from "@/Transition";

const HomeHero = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition1}
      className="section"
    >
      <motion.div className="home-hero-bg relative pt-16 pb-44 sm:pt-14 sm:pb-32 min-h-[700px] sm:min-h-[600px] xl:min-h-[700px] sm:h-[85vh] w-full flex items-center">
        <motion.img
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          exit={{ scale: 0 }}
          transition={transition1}
          src="/images/a2-pattern.webp"
          alt="Accelerate Africa's Pattern"
          className="absolute h-full w-[100%] sm:w-[50%] object-cover left-0 bottom-0 z-10"
        />

        <motion.div className="container z-20 flex items-center h-full">
          <div className="flex items-center flex-wrap sm:flex-nowrap gap-4 sm:gap-8 w-full">
            <motion.div
              variants={fadeIn("down", "tween", 0.2, 0.8)}
              initial="hidden"
              whileInView={"show"}
              exit={"show"}
              className="basis-full sm:basis-1/2 order-last sm:order-first"
            >
              <div className="sm:max-w-lg">
                <div className="space-y-4 mb-8">
                  <Typography
                    variant="h1"
                    className="hidden sm:block leading-[3rem] sm:leading-none"
                  >
                    Accelerate
                  </Typography>

                  <Typography
                    variant="h1"
                    className="leading-[3rem] sm:leading-none"
                  >
                    <span className="sm:hidden">Accelerate</span>
                    <span> your startup, from </span>
                    <span className="sm:hidden text-secondary">
                      Africa to the world
                    </span>
                  </Typography>

                  <Typography
                    variant="h1"
                    className="text-secondary leading-[3rem] sm:leading-none hidden sm:block"
                  >
                    Africa to the world
                  </Typography>
                </div>

                <Typography variant="p" className="max-w-[80%] mb-10">
                  We’ve worked with some of Africa’s most successful startups.
                  Now we want to work with you!
                </Typography>

                <a
                  href={process.env.NEXT_PUBLIC_APPLICATION_FORM_LINK}
                  target="_blank"
                >
                  <Button size="lg">Apply Now</Button>
                </a>
              </div>
            </motion.div>

            <motion.div
              variants={fadeIn("up", "tween", 0.2, 0.8)}
              initial="hidden"
              whileInView={"show"}
              exit={"show"}
              className="basis-full sm:basis-1/2 flex sm:justify-end order-first sm:order-last"
            >
              <img
                src="/images/home-hero-image.webp"
                alt="Homepage hero image"
                className="h-[300px] sm:h-full sm:max-h-[65vh] w-auto"
              />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default HomeHero;
