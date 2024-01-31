"use client";
import { Typography } from "@/components/ui/typography";
import { motion } from "framer-motion";
import { fadeIn } from "../../../Variants";

const HomeAbout = () => {
  return (
    <motion.section className="py-24 bg-gradient-to-t from-faded-secondary to-white">
      <div className="container">
        <div className="flex flex-wrap md:flex-nowrap gap-10 sm:gap-8 lg:gap-14 items-end">
          <div className="basis-full sm:basis-6/12 sm:pr-8 order-last sm:order-first">
            <h1 className="background-text">ABOUT</h1>

            <motion.div
              variants={fadeIn("up", "tween", 0.2, 1.0)}
              initial="hidden"
              whileInView={"show"}
              exit={"show"}
              className="z-20 -mt-4"
            >
              <Typography variant="h6">About Us</Typography>

              <Typography variant="h3" className="text-accent mt-4">
                We accelerate Africa’s bold and visionary founders in the
                earliest stages of building global businesses that solve
                Africa’s biggest challenges
              </Typography>

              <Typography variant="p">
                We have hands-on operating experience in Africa to help you
                accelerate your business, plus the scars and stories to prove
                it. For over a decade, we have taken on various roles advising,
                coaching, and mentoring startups, including over 25+ who have
                been admitted to global accelerators.
              </Typography>

              <Typography variant="p" className="styled-link">
                Our founders{" "}
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
                have built, funded and advised hundreds of African founding
                teams like Andela, Flutterwave, Moove BV, Daystar Power,
                DukaConnect amongst others on how to build global businesses
                from Africa by solving our continent’s biggest challenges. Many
                of those businesses have grown to become billion dollar
                companies with hundreds of millions of dollars in revenues, or
                been acquired by global businesses like Mastercard and Shell.
              </Typography>
            </motion.div>
          </div>

          <motion.div
            variants={fadeIn("down", "tween", 0.2, 1.0)}
            initial="hidden"
            whileInView={"show"}
            exit={"show"}
            className="basis-full sm:basis-6/12 order-first sm:order-last"
          >
            <img
              src="/images/home-about.webp"
              alt="Home about image"
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default HomeAbout;
