"use client";

import { clsx } from "clsx";
import { Typography } from "@/components/ui/typography";
import { Separator } from "@/components/ui/separator";
import { Clock, User } from "lucide-react";
import HtmlContentParser from "@/components/custom/common/HtmlContentParser";
import { useQuery } from "@tanstack/react-query";
import { fetchArticle } from "@/services/api";
import moment from "moment";
import SocialShareButton from "@/components/custom/news-insights/SocialShareButton";

const sharingPlatforms: Array<"twitter" | "linkedin" | "facebook"> = [
  "linkedin",
  "twitter",
  "facebook",
];

const NewsInsightDetailPage = ({ params }: { params: { slug: string } }) => {
  const { isPending, error, data } = useQuery({
    queryKey: ["articleDetail", params.slug],
    queryFn: ({ queryKey }) => fetchArticle(queryKey[1]),
  });

  const article = data?.data[0].attributes;

  return (
    <main className="container pb-20">
      <div className="mt-12 relative">
        <img
          src={article?.image?.data?.attributes?.url}
          alt="Article image"
          className="w-full h-[200px] bg-gray-100 sm:h-auto max-h-[500px] object-cover object-top rounded-lg"
        />

        <div
          className={clsx(
            article?.articleType == "Insights" ? "bg-secondary" : "bg-white",
            "px-4 py-2 sm:px-6 sm:py-2.5 rounded absolute bottom-4 left-4 sm:bottom-6 sm:left-6",
          )}
        >
          <Typography
            variant="h6"
            className="capitalize font-medium text-[0.75rem] tracking-wide"
          >
            {article?.articleType}
          </Typography>
        </div>
      </div>

      <section className="flex flex-wrap sm:flex-nowrap justify-between mt-8 sm:mt-12">
        <section className="w-full lg:max-w-[80%]">
          <Typography
            variant="h2"
            className="max-w-3xl font-medium text-xl sm:text-2xl/[2.3rem] lg:text-3xl/[2.8rem] tracking-wide"
          >
            {article?.title}
          </Typography>

          <div>
            <Separator className="mt-6 mb-3.5 bg-gray-300/85" />

            <div className="flex gap-5 items-center text-gray-400">
              {article?.author?.data && (
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <Typography
                    variant="smallText"
                    className="font-normal text-gray-400"
                  >
                    {`${article?.author?.data?.attributes?.firstName} ${article?.author?.data?.attributes?.lastName}`}
                  </Typography>
                </div>
              )}

              {article?.author?.data && (
                <Separator
                  orientation="vertical"
                  className="bg-gray-300/85 h-3.5"
                />
              )}

              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <Typography
                  variant="smallText"
                  className="font-normal text-gray-400"
                >
                  {moment(article?.publicationDate).format("ll")}
                </Typography>
              </div>
            </div>

            <Separator className="mt-3.5 mb-6 bg-gray-300/85" />
          </div>

          <div className="mt-10">
            <HtmlContentParser htmlContent={article?.content} />
          </div>
        </section>

        <section className="mt-8 sm:mt-0 sm:text-right">
          <Typography variant="p" className="text-base">
            Share this article:
          </Typography>

          <div className="flex sm:flex-col items-end gap-5 mt-4">
            {sharingPlatforms.map((platform, index) => (
              <SocialShareButton
                key={index}
                platform={platform}
                route={`news-insights/${article?.slug}`}
                title={article?.title}
              />
            ))}
          </div>
        </section>
      </section>
    </main>
  );
};

export default NewsInsightDetailPage;
