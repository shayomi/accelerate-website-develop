"use client";

import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import NewsInsightsCard from "@/components/custom/common/NewsInsightsCard";
import { motion } from "framer-motion";
import { fadeIn } from "../../../Variants";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { fetchArticles } from "@/services/api";

const HomeNewsInsight = () => {
  const {
    isPending,
    error,
    data: articles,
  } = useQuery({
    queryKey: ["fetchArticles", "desc", "all"],
    queryFn: fetchArticles,
  });

  return (
    <motion.section className="py-24 bg-gradient-to-t from-faded-secondary to-white">
      <div className="container">
        <h1 className="background-text sm:text-[6rem] xl:text-[7.2rem]">
          LATEST
        </h1>

        <Typography variant="h6" className="z-20 -mt-4">
          News & Insights
        </Typography>

        <motion.div
          variants={fadeIn("down", "tween", 0.1, 0.4)}
          initial="hidden"
          whileInView={"show"}
          exit={"show"}
          className="mt-10 grid gap-3 sm:gap-5 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"
        >
          {articles?.data
            ?.slice(0, 4)
            .map((item: any) => (
              <NewsInsightsCard key={item.id} article={item.attributes} />
            ))}
        </motion.div>

        <div className="flex justify-center mt-16">
          <Link href="/news-insights">
            <Button size="lg">See More</Button>
          </Link>
        </div>
      </div>
    </motion.section>
  );
};

export default HomeNewsInsight;
