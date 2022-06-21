import { motion } from "framer-motion";
import Skill from "./components/Skill";
import Education from "./components/Education";
import Others from "./components/Others";
import Experience from "./components/Experience";
import SideProject from "./components/SideProject";

const MainContent = () => {
  return (
    <div className="relative h-full flex flex-col col-span-12 shadow-custom-light pt-10 lg:col-span-10">
      <motion.div
        initial={{ opacity: 0, clipPath: "circle(0px at 0px -100%)" }}
        animate={{
          opacity: 1,
          clipPath: "circle(2600px at 260px 30px)",
          transition: {
            delay: 5,
            type: "spring",
            duration: 5,
            // stiffness: 700,
            // damping: 40,
          },
        }}
        className="z-10 w-full h-full mx-auto bg-gradient-to-r p-[3px] from-stone via-metal to-stone"
      >
        <div className=" flex flex-col h-full bg-white p-8 pr-10 gap-12">
          <div className="grid grid-cols-3 gap-10 pr-10">
            <Skill />
            <Education />
            <Others />
          </div>
          <Experience />
          <SideProject />
        </div>
      </motion.div>
    </div>
  );
};

export default MainContent;
