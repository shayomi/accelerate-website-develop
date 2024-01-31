export interface TeamMember {
  name: string;
  position: string;
  location: string;
  image: string;
  linkedin: string;
}

interface Team {
  founders: TeamMember[];
  advisors: TeamMember[];
}

export const teamMembers: Team = {
  founders: [
    {
      name: "Iyinoluwa Aboyeji",
      position: "Accelerate Founder",
      location: "Nigeria",
      image: "/images/e.webp",
      linkedin: "https://www.linkedin.com/in/eaboyeji/",
    },
    {
      name: "Mia von Koschitzky-Kimani",
      position: "Accelerate Founder",
      location: "Kenya",
      image: "/images/mia.webp",
      linkedin:
        "https://www.linkedin.com/in/mia-von-koschitzky-kimani-796b913/",
    },
  ],
  advisors: [
    {
      name: "V. Chinyere Inya",
      position: "Program Advisor",
      location: "Nigeria",
      image: "/images/chinyere.webp",
      linkedin: "https://www.linkedin.com/in/vchinyereinya/",
    },
    {
      name: "Mathew Saunders",
      position: "Investment Advisor",
      location: "South Africa",
      image: "/images/mathew.webp",
      linkedin: "https://www.linkedin.com/in/mathew-saunders-80210bab/",
    },
    {
      name: "Ismail Olasunkanmi",
      position: "Technical Advisor",
      location: "Nigeria",
      image: "/images/abbey.webp",
      linkedin: "https://www.linkedin.com/in/ismail-olasunkanmi-4b6283a7/",
    },
    {
      name: "Ifeoluwa Adepoju",
      position: "Legal Advisor",
      location: "Nigeria",
      image: "/images/ife.webp",
      linkedin:
        "https://www.linkedin.com/in/ifeoluwa-awodein-adepoju-4454a8b9/",
    },
    {
      name: "Jonathan Ruwanika",
      position: "Finance Advisor",
      location: "South Africa",
      image: "/images/jonathan.webp",
      linkedin: "https://www.linkedin.com/in/jonathan-ruwanika-ca-sa-b1b6b155/",
    },
  ],
};
