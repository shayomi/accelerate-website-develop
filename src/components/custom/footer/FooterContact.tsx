import React from "react";
import { Typography } from "@/components/ui/typography";

const FooterContact = () => {
  return (
    <div className="flex flex-col gap-y-8 ">
      <div className="flex flex-col gap-y-2  ">
        <div>
          <Typography variant="h4" className="text-white font-bold">
            CONTACT US
          </Typography>
        </div>

        <div>
          <Typography variant="p" className="text-white font-bold">
            Email:{" "}
            <a href="mailto:hello@acceler8.africa" className="font-normal">
              hello@acceler8.africa
            </a>
          </Typography>
        </div>
      </div>

      <div className="flex flex-col gap-y-2 ">
        <div>
          <Typography variant="h4" className="text-white font-bold">
            FOLLOW US
          </Typography>
        </div>

        <div className="flex flex-row gap-x-2 items-center">
          <div className="bg-[#5F6267] rounded-sm p-1">
            <a
              href="https://linkedin.com/company/acceler8-africa"
              target="_blank"
            >
              <img
                src="/images/linkedin.svg"
                alt="Linkedin logo"
                width="27"
                height="27"
              />
            </a>
          </div>

          <div className="bg-[#5F6267] rounded-sm p-1">
            <a href="https://twitter.com/acceler_8africa" target="_blank">
              <img
                src="/images/x.svg"
                alt="Twitter (X) logo"
                width="27"
                height="27"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterContact;
