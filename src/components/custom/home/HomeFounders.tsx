"use client";
import { Typography } from "@/components/ui/typography";
import { motion } from "framer-motion";
import { fadeIn } from "../../../Variants";

const HomeFounders = () => {
  return (
    <section className="container styled-link">
      <motion.section>
        <div className="flex flex-wrap md:flex-nowrap gap-14 sm:gap-8 lg:gap-14">
          <div className="basis-full sm:basis-6/12 lg:basis-5/12">
            <motion.div
              variants={fadeIn("up", "tween", 0.2, 1.0)}
              initial="hidden"
              whileInView={"show"}
              exit={"show"}
            >
              <img
                src="/images/home-founder-section.webp"
                alt="Home founder section"
                className="w-full max-w-sm h-auto"
              />
            </motion.div>
          </div>

          <div className="basis-full sm:basis-6/12 lg:basis-7/12">
            <motion.div
              variants={fadeIn("down", "tween", 0.2, 1.0)}
              initial="hidden"
              whileInView={"show"}
              exit={"show"}
            >
              <div>
                {/*<Typography variant="h6">Accelerate Africa</Typography>*/}

                <Typography variant="h3" className="text-accent mt-4">
                  Finding ‘Hard to Find Founders’ is important to us:
                </Typography>

                <Typography variant="p">
                  We believe founders who can turn Africa’s biggest challenges
                  into global businesses come in a variety of backgrounds,
                  abilities, languages, genders, ages, ethnicities, and more.
                  This is why 40% of founders we have worked with are women,
                  range in age from their 20’s to their 60’s, and come from and
                  work in over 10 African countries.
                </Typography>

                <Typography variant="p">
                  The founders we back have some consistent features
                </Typography>

                <Typography variant="ul" className="max-w-lg text-sm leading-6">
                  <li>
                    Passionate about solving a real problem and have the track
                    record or traction to prove it
                  </li>
                  <li>
                    Deep understanding of their customers and consider it their
                    life's work to serve them
                  </li>
                  <li>
                    Lived experience of the problem, driving them to build a
                    business that seems impossible until it’s done
                  </li>
                </Typography>

                <Typography variant="p">
                  We do too. If this describes you,{" "}
                  <a
                    href={process.env.NEXT_PUBLIC_APPLICATION_FORM_LINK}
                    target="_blank"
                  >
                    apply now
                  </a>
                  . If this describes a founder you know,{" "}
                  <a
                    href={process.env.NEXT_PUBLIC_NOMINATION_FORM_LINK}
                    target="_blank"
                  >
                    nominate a startup
                  </a>
                  .
                </Typography>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </section>
  );
};

export default HomeFounders;
