import { motion, AnimatePresence } from "framer-motion";

const Info = () => {
  return (
    <motion.div
      className="flex h-full w-full justify-between flex-col"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 5.5,
          type: "spring",
          duration: 0.7,
          //   stiffness: 600,
          //   damping: 40,
        },
      }}
    >
      <p className="text-justify mt-4 text-[13px] leading-5 text-darkText">
        前端開發三年六個月的資 歷。喜歡程式，從設計轉職 為工程師，在角色的轉換
        中，建立良好的溝通與合 作模式。目前持續鑽研前 端技術，希望朝全端邁進。
      </p>
      <img src="/logo.svg" alt="logo" />
    </motion.div>
  );
};
export default Info;
