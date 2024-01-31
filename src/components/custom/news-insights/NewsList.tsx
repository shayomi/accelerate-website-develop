"use client";

import React, { useState } from "react";
import NewsInsightsCard from "@/components/custom/common/NewsInsightsCard";
import { fadeIn } from "@/Variants";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { fetchArticles } from "@/services/api";
import SortAndFilterArticles from "@/components/custom/news-insights/SortAndFilterArticles";
import { Skeleton } from "@/components/ui/skeleton";

const NewsList = () => {
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("desc");

  const {
    isPending,
    error,
    data: articles,
  } = useQuery({
    queryKey: ["fetchArticles", sort, filter],
    queryFn: fetchArticles,
  });

  return (
    <motion.section className="container py-20">
      <SortAndFilterArticles
        setFilterArticle={setFilter}
        setSortArticle={setSort}
      />

      <motion.div
        initial="hidden"
        whileInView={"show"}
        variants={fadeIn("up", "tween", 0.2, 0.4)}
        className="grid gap-x-3 gap-y-6 sm:gap-x-5 sm:gap-y-10 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 mt-8"
      >
        {/* Display skeleton loader while data is loading */}
        {isPending &&
          Array.from({ length: 4 }).map((_, index) => (
            <Skeleton key={index} className="h-64" />
          ))}

        {/* Display articles if available */}
        {articles?.data?.map((item: any) => (
          <NewsInsightsCard key={item.id} article={item.attributes} />
        ))}
      </motion.div>

      {/*TODO: Add pagination*/}

      {/*<div className="flex justify-center mt-16">*/}
      {/*  <Button className="text-xs h-12 w-48">Load More</Button>*/}
      {/*</div>*/}
    </motion.section>
  );
};

export default NewsList;
