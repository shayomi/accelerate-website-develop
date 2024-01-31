"use client";
import { homeStats } from "@/utils/data/homeStats";
import { Typography } from "@/components/ui/typography";

const HomeStatsCard = () => {
  return (
    <section>
      <div className="bg-white max-w-[90%] lg:max-w-4xl w-full card-shadow rounded-lg mx-auto px-4 sm:px-8 lg:px-20 py-12 grid grid-cols-3 gap-3 sm:gap-10 items-start">
        {homeStats.map((item, index) => (
          <div key={index} className="text-center max-w-[200px] mx-auto">
            <Typography variant="h2" className="text-[1.8rem] sm:text-4xl">
              {item.number}
            </Typography>

            <Typography
              variant="h6"
              className="text-[0.7rem] sm:text-base sm:max-w-[150px] font-normal sm:mt-1"
            >
              {item.title}
            </Typography>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeStatsCard;
