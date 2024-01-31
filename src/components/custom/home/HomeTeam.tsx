"use client";

import { Typography } from "@/components/ui/typography";
import { TeamMember, teamMembers } from "@/utils/data/teamMembers";
import { motion } from "framer-motion";
import { fadeIn } from "../../../Variants";
import { transition1 } from "@/Transition";

const HomeTeam = () => {
  const renderTeamMembers = (title: string, members: TeamMember[]) => (
    <div className="mt-14">
      <Typography variant="h5">{title}</Typography>

      <motion.div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-5 mt-6">
        {members.map((member, index: number) => (
          <div key={index}>
            <motion.img
              initial="hidden"
              whileInView={"show"}
              whileHover={{ scale: 1.05 }}
              transition={transition1}
              variants={fadeIn("up", "tween", index * 0.1, 0.6)}
              src={member.image}
              alt={member.name}
              className="w-full h-[170px] sm:h-[225px] object-cover rounded-[4px] object-top"
            />

            <div className="mt-5">
              <Typography variant="h6" className="mt-5 font-medium inline">
                {member.name}
              </Typography>

              <a href={member.linkedin} target="_blank">
                <img
                  src="/images/linkedin-colored.svg"
                  alt="LinkedIn Logo"
                  className="w-5 h-5 inline ml-1"
                />
              </a>
            </div>

            <Typography variant="mutedText">{member.position}</Typography>

            <Typography variant="mutedText" className="font-light">
              {member.location}
            </Typography>
          </div>
        ))}
      </motion.div>
    </div>
  );

  return (
    <motion.section className="py-24 bg-gradient-to-t from-faded-secondary to-white">
      <div className="container">
        <h1 className="background-text sm:text-[6rem] xl:text-[7.2rem] sm:text-left">
          TEAM
        </h1>

        <motion.div
          initial="hidden"
          whileInView={"show"}
          variants={fadeIn("up", "tween", 0.2, 0.4)}
          className="max-w-xl lg:max-w-2xl mx-auto z-20 -mt-4 sm:-mt-14 xl:-mt-24 text-center"
        >
          <Typography variant="h6">Accelerate Team</Typography>

          <Typography variant="h3" className="text-accent mt-4">
            Meet our team of operators and visionaries driving the accelerators
            success
          </Typography>
        </motion.div>

        <div className="mt-14">
          {renderTeamMembers("Founders", teamMembers.founders)}
          {renderTeamMembers("Advisors", teamMembers.advisors)}
        </div>
      </div>
    </motion.section>
  );
};

export default HomeTeam;
