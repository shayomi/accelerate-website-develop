"use client";

import { Typography } from "@/components/ui/typography";
import { motion } from "framer-motion";
import { fadeIn } from "../../../Variants";
import { Button } from "@/components/ui/button";
import { homeBenefits } from "@/utils/data/homeBenefits";
import { transition2 } from "@/Transition";

const HomeBenefits = () => {
  return (
    <motion.section className="container">
      <div className="flex flex-wrap md:flex-nowrap gap-24 sm:gap-8 lg:gap-14 items-center">
        <motion.div
          initial="hidden"
          whileInView={"show"}
          variants={fadeIn("up", "tween", 0.2, 0.4)}
          className="basis-full sm:basis-6/12 grid grid-cols-2 gap-y-14 gap-x-6 lg:gap-14 items-stretch order-last sm:order-first"
        >
          {homeBenefits.map((item, index) => (
            <motion.div
              initial="hidden"
              whileInView={"show"}
              variants={fadeIn("up", "tween", index * 0.2, 0.4)}
              whileHover={{ scale: 1.05 }}
              transition={transition2}
              key={index}
              className="basis-full sm:basis-6/12 relative"
            >
              <h1 className="absolute top-[-3rem] left-5 text-[3.5rem] tracking-wide font-bold">
                {item.order}
              </h1>

              <div className="bg-faded-secondary pt-6 pb-5 px-5 rounded-3xl h-full">
                <Typography
                  variant="largeText"
                  className="text-[0.9rem] sm:text-lg font-normal mt-4"
                >
                  {item.description}
                </Typography>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="basis-full sm:basis-6/12 order-first sm:order-last">
          <h1 className="background-text">BENEFITS</h1>

          <motion.div
            variants={fadeIn("up", "tween", 0.2, 0.8)}
            initial="hidden"
            whileInView={"show"}
            exit={"show"}
            className="z-20 -mt-4"
          >
            <Typography variant="h6">Why Accelerate?</Typography>

            <Typography variant="h3" className="text-accent mt-4">
              This is not your typical accelerator
            </Typography>

            <Typography variant="p">
              It could be easy to mistake Accelerate Africa for your typical
              one-size fits all accelerator program, but nothing could be more
              differents.
            </Typography>

            <Typography variant="p" className="styled-link">
              First - we will accept 10 founders who will receive support from 2
              of the top operator VCs in Africa,{" "}
              <a href="https://www.linkedin.com/in/eaboyeji" target="_blank">
                Iyinoluwa Aboyeji
              </a>{" "}
              and{" "}
              <a
                href="https://www.linkedin.com/in/mia-von-koschitzky-kimani-796b913"
                target="_blank"
              >
                Mia von Koschitzky-Kimani
              </a>{" "}
              who have built, advised, invested in and exited multiple
              successful businesses in Africa.
            </Typography>

            <Typography variant="p">
              Second - Our program is designed to meet your needs as a founder
              in Africa, whether it be workshops across our 5 core areas,
              coaching sessions from our top advisors, or tech, legal, and
              finance clinics support through our clinics and office hours.
              Build community with other founders in our weekly Lagos / Nairobi
              meet ups, and for the last two weeks of the program, we will be
              together to prepare for the demo day taking place at the end of
              May, 2024.
            </Typography>

            <Typography variant="p">
              Finally, unlike most accelerators, we don’t offer funding or take
              equity upon admittance. There is an opportunity that our fund
              Future Africa may invest alongside our other incredible investor
              network, to write you a pre-seed or seed stage check of $250,000 -
              $500,000 after the program, following our standard investment
              process including due diligence and an IC vote.
            </Typography>
          </motion.div>

          <div className="flex flex-wrap mt-10 sm:mt-14 gap-4">
            <a
              href={process.env.NEXT_PUBLIC_APPLICATION_FORM_LINK}
              target="_blank"
            >
              <Button size="lg" className="w-36 sm:w-48">
                Apply Now
              </Button>
            </a>

            <a
              href={process.env.NEXT_PUBLIC_NOMINATION_FORM_LINK}
              target="_blank"
            >
              <Button
                size="lg"
                variant="outline"
                color="primary"
                className="w-36 sm:w-48"
              >
                Nominate a Startup
              </Button>
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default HomeBenefits;
