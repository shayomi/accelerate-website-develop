import axiosInstance from "@/services/axios";

// Get the list of articles
export const fetchArticles = async ({ queryKey }: any) => {
  const sortData = queryKey[1];
  let url = `/articles?sort[0]=publicationDate:${sortData}&populate=image`;

  if (queryKey[2] !== "all") {
    const filterQuery = `filters[articleType][$eq]=${queryKey[2]}`;
    url += `&${filterQuery}`;
  }

  const { data } = await axiosInstance.get(url);

  return data;
};

// Fetch a single article based on slug
export const fetchArticle = async (slug: string) => {
  const { data } = await axiosInstance.get(
    `/articles?filters[slug][$eq]=${slug}&populate=image&populate=author`,
  );
  return data;
};

// Create newsletter contact
export const createNewsletterContact = async (contactData: any) => {
  const { data } = await axiosInstance.post("/contacts", {
    data: contactData,
  });
  return data;
};
