import { motion, AnimatePresence } from "framer-motion";

const Info = () => {
  return (
    <motion.div
      className="gap-1 absolute w-[calc(100%-170px)] right-4 bottom-0 py-4 flex h-full justify-end flex-col sm:justify-between sm:gap-0 sm:top-0 sm:py-6 sm:right-10 sm:w-1/3 md:py-5 lg:right-0 lg:py-0 lg:relative lg:w-full"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.2,
          type: "spring",
          duration: 0.5,
          //   stiffness: 600,
          //   damping: 40,
        },
      }}
    >
      <p className="text-justify text-xs leading-5 text-darkText md:text-[13px] lg:mt-4">
        前端開發三年六個月的資歷。喜歡程式，從設計轉職為工程師，在角色的轉換
        中，建立良好的溝通與合 作模式。目前持續鑽研前端技術，希望朝全端邁進。
      </p>
      <div className="w-5 self-end md:w-8 lg:self-auto lg:w-auto">
        <img src="/logo.svg" alt="logo" />
      </div>
    </motion.div>
  );
};
export default Info;
