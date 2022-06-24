import { motion } from "framer-motion";
import { useRef, useLayoutEffect, useState, useEffect } from "react";
import Skill from "./components/Skill";
import Education from "./components/Education";
import Others from "./components/Others";
import Experience from "./components/Experience";
import SideProject from "./components/SideProject";

const MainContent = () => {
  const [height, setHeight] = useState(2000);
  const ele = useRef<HTMLDivElement>(null);
  const handleResize = () => {
    if (ele.current) {
      setHeight(ele.current.clientHeight);
    }
  };

  useLayoutEffect(() => {
    handleResize();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative h-full flex flex-col col-span-12 shadow-custom-light lg:pt-10 lg:col-span-10">
      <motion.div
        initial={{ opacity: 0, clipPath: "circle(0px at 0px -100%)" }}
        animate={{
          opacity: 1,
          clipPath: `circle(${height * 1.2}px at 260px 30px)`,
          transition: {
            delay: 2.1,
            type: "spring",
            duration: 2.6,
            // stiffness: 700,
            // damping: 40,
          },
        }}
        className="z-10 w-full h-full mx-auto bg-gradient-to-r p-[3px] from-stone via-metal to-stone"
      >
        <div
          ref={ele}
          className=" flex flex-col h-full bg-white p-3 gap-5 sm:p-5 sm:gap-8 md:p-5 md:gap-10 lg:pr-10 xl:gap-14"
        >
          <div className="grid grid-cols-4 gap-5 sm:gap-8 md:gap-10 md:pr-10 lg:grid-cols-3">
            <div className="col-span-4 lg:col-span-1">
              <Skill />
            </div>
            <div className="col-span-4 sm:col-span-2 lg:col-span-1">
              <Education />
            </div>
            <div className="col-span-4 sm:col-span-2 lg:col-span-1">
              <Others />
            </div>
          </div>
          <Experience />
          <SideProject />
        </div>
      </motion.div>
    </div>
  );
};

export default MainContent;
