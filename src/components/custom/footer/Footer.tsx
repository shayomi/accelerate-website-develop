import { Typography } from "@/components/ui/typography";
import Newsletter from "./Newsletter";
import FooterContact from "./FooterContact";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <section className="bg-[#1A1E25]">
      <div className="container pt-20">
        <div className="flex flex-col sm:flex-row gap-12 sm:gap-8 xl:gap-12 justify-between pb-12">
          <div className="sm:max-w-[220px] lg:max-w-[290px] xl:max-w-[350px]">
            <img
              src="/images/logo-white.svg"
              alt="Accelerate Africa's Logo"
              className="w-[130px]"
            />

            <Typography variant="p" className="text-white">
              We accelerate Africa’s bold and visionary founders in the earliest
              stages of building global businesses that solve Africa’s biggest
              challenges.
            </Typography>
          </div>

          <div>
            <Newsletter />
          </div>

          <div>
            <FooterContact />
          </div>
        </div>

        <Separator className="bg-[#9F9F9F]/40" />

        <div className="py-4">
          <Typography variant="smallText" className="text-white font-normal">
            2023 &#169; Accelerate Africa. All rights reserved
          </Typography>
        </div>
      </div>
    </section>
  );
};

export default Footer;
