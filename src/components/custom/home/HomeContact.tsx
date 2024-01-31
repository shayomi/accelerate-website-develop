"use client";

import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { fadeIn } from "../../../Variants";
import Link from "next/link";

const HomeContact = () => {
  return (
    <motion.section className="container flex flex-wrap sm:flex-nowrap gap-8 sm:gap-14 justify-between">
      <motion.div
        variants={fadeIn("down", "tween", 0.1, 0.4)}
        initial="hidden"
        whileInView={"show"}
        exit={"show"}
        className="max-w-[400px]"
      >
        <Typography variant="h3">
          Have any question about Accelerate Africa yet?
        </Typography>

        <Typography variant="p" className="mb-4">
          Send all your enquiries and questions to the email address below:
        </Typography>

        <Typography variant="p" className="font-bold">
          hello@acceler8.africa
        </Typography>
      </motion.div>

      <motion.div
        variants={fadeIn("down", "tween", 0.1, 0.4)}
        initial="hidden"
        whileInView={"show"}
        exit={"show"}
        className="max-w-[400px]"
      >
        <Typography variant="p" className="mb-7">
          We have articulated series of questions we think you might have and
          the responses to them.
        </Typography>

        <Link href="/faq">
          <Button variant="outline" color="primary" size="lg">
            Go to FAQ
          </Button>
        </Link>
      </motion.div>
    </motion.section>
  );
};

export default HomeContact;
