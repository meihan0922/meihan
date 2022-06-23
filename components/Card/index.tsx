import { motion, AnimatePresence } from "framer-motion";
import Info from "./components/Info";

const Card = () => {
  return (
    <>
      <div className="relative -order-1 flex-col h-full col-span-12 text-base lg:order-1 lg:pt-64 lg:text-center bg-transparent lg:col-span-2">
        <motion.div
          initial={{ opacity: 0, clipPath: "inset(0 0 0 100%)" }}
          animate={{
            opacity: 1,
            clipPath: "inset(0 0 0 0%)",
            transition: {
              delay: 2,
              type: "spring",
              duration: 0.4,
              //   stiffness: 600,
              //   damping: 40,
            },
          }}
          className="z-20 h-64 sm:h-40 md:h-44 lg:h-64 lg:right-0 lg:top-0 lg:min-w-[200px] lg:w-[135%] lg:absolute"
        >
          <div className="w-full h-full mx-auto bg-gradient-to-r p-[3px] from-stone via-metal to-stone">
            <div className="px-3 py-3 flex items-start h-full bg-white gap-5 sm:gap-2 sm:px-5 sm:items-center md:gap-6 md:px-5 lg:flex-col lg:justify-between lg:p-4 lg:gap-2">
              <div className="w-[120px] h-[120px] rounded-full border  bg-no-repeat bg-top bg-contain bg-[url('/photo.jpg')] border-stone sm:bg-bottom md:w-[140px] md:h-[140px] md:max-w-[145px] lg:max-w-[145px] lg:max-h-[145px] lg:rounded-full lg:bg-center"></div>
              <div className="mt-5 sm:mt-0">
                <p className="text-darkText mb-1 font-semibold text-lg">
                  黃媺涵<span className="text-darkText text-sm ml-1">Mei</span>
                </p>
                <p className="text-darkText text-xs">Front-end engineer</p>
                <p className="text-darkText text-xs">meihen0922@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="absolute w-7 top-0 right-0 border-t-metal border-r-0 border-r-transparent border-l-transparent border-l-[30px] border-t-[30px] md:w-10 md:border-l-[40px] md:border-t-[40px] lg:border-l-[48px] lg:border-t-[48px]"></div>
          <div className="absolute w-5 top-0 right-0 border-t-white border-r-0 border-r-transparent border-l-transparent border-l-[25px] border-t-[25px] md:w-8 md:border-l-[37px] md:border-t-[37px] lg:border-l-[44px] lg:border-t-[44px]"></div>
        </motion.div>
        <Info />
      </div>
    </>
  );
};

export default Card;
