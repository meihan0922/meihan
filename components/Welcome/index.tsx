import { motion, Variants } from "framer-motion";

const Welcome = ({ text }: { text: string }) => {
  const container: Variants = {
    hidden: {
      opacity: 0,
      x: "-50%",
      y: "-50%",
    },
    visible: {
      opacity: 1,
      x: "-50%",
      y: "-50%",
      transition: {
        repeat: 1,
        repeatType: "reverse",
        duration: 0.7,
        delayChildren: 0.35,
        staggerChildren: 0.1,
        staggerDirection: -1,
      },
    },
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.17,
        ease: [0.6, 0.01, -0.05, 0.9],
      },
    },
    hidden: {
      opacity: 0.7,
      y: 100,
    },
  };

  return (
    <motion.h1
      variants={container}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="flex absolute top-1/2 left-1/2 overflow-hidden z-30"
    >
      {Array.from(text).map((letter, index) => (
        <motion.span
          key={index}
          variants={child}
          className="inline-block text-slate-700 text-4xl sm:text-7xl  lg:text-8xl"
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.h1>
  );
};

export default Welcome;
