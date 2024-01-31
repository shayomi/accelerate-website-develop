export interface Partner {
  name: string;
  logo: string;
  url: string;
}

const partners: Partner[] = [
  {
    name: "Future Africa",
    logo: "/images/future-africa-logo.webp",
    url: "https://future.africa",
  },
  {
    name: "Prosper Africa",
    logo: "/images/prosper-africa-logo.webp",
    url: "https://www.prosperafrica.gov",
  },
];

export default partners;
