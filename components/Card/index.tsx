import { motion, AnimatePresence } from "framer-motion";

const Card = () => {
  return (
    <>
      <div className="h-full relative col-span-12 text-base text-center bg-transparent lg:col-span-2">
        <motion.div
          initial={{ opacity: 0, clipPath: "inset(0 0 0 100%)" }}
          animate={{
            opacity: 1,
            clipPath: "inset(0 0 0 0%)",
            transition: {
              delay: 6.5,
              type: "spring",
              duration: 0.7,
              //   stiffness: 600,
              //   damping: 40,
            },
          }}
          className="z-20 min-w-[200px] w-[135%] lg:absolute lg:bg-black lg:right-0 lg:top-0 h-64"
        >
          <div className="w-full h-full mx-auto bg-gradient-to-r p-[3px] from-stone via-metal to-stone">
            <div className="flex items-center flex-col justify-between h-full bg-white p-4 gap-2">
              <div className="max-w-[145px] max-h-[145px] rounded-full bg-center bg-no-repeat bg-contain bg-[url('/photo.jpg')] w-full h-full"></div>
              <div>
                <p className="text-darkText mb-1 font-semibold text-lg">
                  黃媺涵<span className="text-darkText text-sm ml-1">Mei</span>
                </p>
                <p className="text-darkText text-xs">Front-end engineer</p>
                <p className="text-darkText text-xs">meihen0922@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="absolute w-10 top-0 right-0 border-l-[48px] border-l-transparent border-t-[48px] border-t-metal border-r-0 border-r-transparent"></div>
          <div className="absolute w-8 top-0 right-0 border-l-[44px] border-l-transparent border-t-[44px] border-t-white border-r-0 border-r-transparent"></div>
        </motion.div>
        <div className="h-64"></div>
        <motion.p className="text-justify mt-4 text-[13px] leading-5 text-left text-darkText">
          前端開發三年六個月的資 歷。喜歡程式，從設計轉職 為工程師，在角色的轉換
          中，建立良好的溝通與合 作模式。目前持續鑽研前 端技術，希望朝全端邁進。
        </motion.p>
      </div>
    </>
  );
};

export default Card;
