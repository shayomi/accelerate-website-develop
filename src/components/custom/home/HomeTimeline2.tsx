import React from "react";
import { Typography } from "@/components/ui/typography";
import { Separator } from "@/components/ui/separator";
import { timeline } from "@/utils/data/timeline";
import { clsx } from "clsx";

const HomeTimeline = () => {
  return (
    <section>
      <div className="container">
        <div>
          <h1 className="background-text sm:text-[6rem] xl:text-[7.2rem]">
            TIMELINE
          </h1>

          <Typography variant="h6" className="z-20 -mt-4">
            The Accelerate Africa Timeline
          </Typography>
        </div>

        <div className="h-[300px] w-full flex items-center relative">
          <Separator className="h-1 rounded w-full z-0 absolute" />

          <div className="z-10 flex justify-evenly">
            {timeline.map((item, index) => (
              <div key={index} className="grid grid-rows-2">
                <div
                  className={clsx(
                    item.direction == "top" ? "order-first" : "order-last",
                    "max-w-[200px]",
                  )}
                >
                  <div className="flex">
                    <div className="bg-gray-100 p-3">
                      <Typography variant="h6" className="text-sm">
                        {item.title}
                      </Typography>
                    </div>

                    <div className="bg-white border p-3">
                      <Typography variant="div">{item.date.month}</Typography>
                      <Typography variant="h6">{item.date.day}</Typography>
                      <Typography variant="div">{item.date.year}</Typography>
                    </div>
                  </div>
                </div>

                <div
                  className={clsx(
                    item.direction == "bottom" ? "order-first" : "order-last",
                  )}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeTimeline;
