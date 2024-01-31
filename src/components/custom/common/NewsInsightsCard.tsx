import { Typography } from "@/components/ui/typography";
import { clsx } from "clsx/lite";
import { motion } from "framer-motion";
import { transition1 } from "@/Transition";
import { fadeIn } from "@/Variants";
import moment from "moment";
import { useRouter } from "next/navigation";

const NewsInsightsCard = ({ article }: any) => {
  const router = useRouter();

  const handleClick = () => {
    if (article.externalLink) {
      window.open(article.externalLink, "_blank");
    } else {
      router.push(`/news-insights/${article.slug}`);
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView={"show"}
      variants={fadeIn("up", "tween", 0.1, 0.6)}
      whileHover={{ scale: 1.05 }}
      transition={transition1}
      onClick={handleClick}
      className="cursor-pointer bg-white card-shadow rounded-md flex flex-col justify-between px-2 pt-2 sm:px-3 sm:pt-3 pb-4 w-full relative"
    >
      <img
        src={article?.image?.data?.attributes?.formats?.small?.url}
        alt={article?.title}
        className="w-full h-[100px] sm:h-[150px] object-cover object-top rounded-md"
      />

      <div
        className={clsx(
          article?.articleType == "Insights" ? "bg-secondary" : "bg-white",
          "px-2 py-1 sm:px-3.5 sm:py-1.5 rounded absolute top-[75px] left-4 sm:top-[122px] sm:left-6",
        )}
      >
        <Typography
          variant="h6"
          className="capitalize font-medium text-[0.65rem] sm:text-[0.75rem] tracking-wide"
        >
          {article?.articleType}
        </Typography>
      </div>

      <Typography
        variant="h6"
        className="text-[0.8rem] sm:text-[0.9rem] font-medium mt-5"
      >
        {article?.title}
      </Typography>

      <Typography
        variant="mutedText"
        className="text-[0.65rem] sm:text-[0.75rem] mt-4 sm:mt-6"
      >
        {moment(article?.publicationDate).format("ll")}
      </Typography>
    </motion.div>
  );
};

export default NewsInsightsCard;
