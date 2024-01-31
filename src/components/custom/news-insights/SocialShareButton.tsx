import React from "react";

interface SocialShareButtonProps {
  platform: "twitter" | "linkedin" | "facebook";
  route: string;
  title: string;
  summary?: string;
  source?: string;
}

const SocialShareButton: React.FC<SocialShareButtonProps> = ({
  platform,
  route,
  title,
  summary = "",
  source = "Accelerate Africa",
}) => {
  let shareUrl;
  const url = `${process.env.NEXT_PUBLIC_WEBSITE_URL}/${route}`;

  switch (platform) {
    case "twitter":
      shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
        url,
      )}&text=${encodeURIComponent(title)}`;
      break;
    case "linkedin":
      shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
        url,
      )}&title=${encodeURIComponent(title)}&summary=${encodeURIComponent(
        summary,
      )}&source=${encodeURIComponent(source)}`;
      break;
    case "facebook":
      shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        url,
      )}`;
      break;
    default:
      shareUrl = "#";
      break;
  }

  const getIcon = () => {
    switch (platform) {
      case "twitter":
        return "x2.svg";
      case "linkedin":
        return "linkedin2.svg";
      case "facebook":
        return "facebook.svg";
      default:
        return null;
    }
  };

  return (
    <a href={shareUrl} target="_blank" rel="noopener noreferrer">
      <img
        src={`/images/${getIcon()}`}
        alt={`${platform} logo`}
        width={30}
        height={30}
      />
    </a>
  );
};

export default SocialShareButton;
