import { motion } from "framer-motion";
import { useState, useLayoutEffect, useEffect } from "react";
const responsive: { [key in KeyType]: number[] } = {
  sm: [0, 640],
  md: [641, 768],
  lg: [769, 1024],
  xl: [1023, 1280],
  "2xl": [1281, 3000],
};
type KeyType = "sm" | "md" | "lg" | "xl" | "2xl";
type mix = string | number;
const svgSize: { [key in KeyType]: mix[] } = {
  sm: ["120%", "140%"],
  md: ["170%", "200%"],
  lg: ["170%", "200%"],
  xl: ["180%", "200%"],
  "2xl": ["180%", "200%"],
};
const svgPos: { [key in KeyType]: mix[] } = {
  sm: ["-left-32 -top-24", "-right-20 top-[20%]"],
  md: ["-left-0 -top-24", "-right-20 top-[20%]"],
  lg: ["left-10 -top-24", "-right-20 top-[20%]"],
  xl: ["left-2 -top-24", "-right-20 top-[16%]"],
  "2xl": ["left-12 -top-20", "-right-20 top-[18%]"],
};
const between = (n: number) => {
  const obj = Object.entries(responsive).find(([key, [min, max]]) => {
    if (n >= min && n <= max) return key;
  });
  return obj?.[0];
};
const SvgBg = () => {
  const [device, setDevice] = useState<KeyType>("xl");
  const handleResize = () => {
    const width = document.querySelector("body")?.clientWidth;
    if (width) {
      const deviceSize = between(width) as KeyType;
      if (deviceSize) setDevice(deviceSize);
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
    <>
      <motion.div
        initial={{ opacity: 0.3, rotate: 170, y: 40, x: 10, scale: 1.4 }}
        animate={{
          opacity: 0.6,
          rotate: 180,
          y: 0,
          x: 0,
          scale: 1.2,
          transition: {
            // delay: 0.2,
            duration: 1,
          },
        }}
        className={`absolute -z-10  ${svgPos[device][0]}`}
      >
        <SvgComponent
          width={svgSize[device][0] || 300}
          height={svgSize[device][0] || 300}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0.7, rotate: 95, y: 150, x: 0, scale: 1.6 }}
        animate={{
          opacity: 1,
          rotate: 105,
          y: 0,
          x: 0,
          scale: 1,
          transition: {
            duration: 1,
          },
        }}
        className={`absolute -z-10 ${svgPos[device][1]}`}
      >
        <SvgComponent
          width={svgSize[device][1] || 300}
          height={svgSize[device][1] || 300}
        />
      </motion.div>
    </>
  );
};
const container = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.8,
      staggerChildren: 0.8,
      staggerDirection: 1,
    },
  },
};

const SvgComponent = ({
  width = 300,
  height = 300,
}: {
  width?: number | string;
  height?: number | string;
}) => (
  <motion.svg
    width={width}
    height={height}
    viewBox="0 0 491.15 405.62"
    initial="hidden"
    animate="visible"
    variants={container}
  >
    <defs>
      <linearGradient
        id="a"
        x1={788.98}
        y1={1907.43}
        x2={1321.64}
        y2={1907.43}
        gradientTransform=""
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#b5b5b6" />
        <stop offset={1} stopColor="#be9461" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={765.25}
        y1={1984.61}
        x2={1299.82}
        y2={1984.61}
        gradientTransform="rotate(8.79 11597.59 -3791.703) scale(.95)"
        xlinkHref="#a"
      />
      <linearGradient
        id="c"
        x1={734.84}
        y1={2067.91}
        x2={1269.97}
        y2={2067.91}
        gradientTransform="rotate(6.89 14476.439 -4532.83) scale(.91)"
        xlinkHref="#a"
      />
      <linearGradient
        id="d"
        x1={695.68}
        y1={2157.38}
        x2={1230.43}
        y2={2157.38}
        gradientTransform="rotate(4.8 20324.616 -6053.35) scale(.86)"
        xlinkHref="#a"
      />
      <linearGradient
        id="e"
        x1={645.75}
        y1={2252.78}
        x2={1179.47}
        y2={2252.78}
        gradientTransform="rotate(2.48 38464.99 -10799.394) scale(.82)"
        xlinkHref="#a"
      />
      <linearGradient
        id="f"
        x1={582.64}
        y1={2353.35}
        x2={1113.95}
        y2={2353.35}
        gradientTransform="matrix(.78 -.00123 .00123 .78 -427.29 -1627.1)"
        xlinkHref="#a"
      />
      <linearGradient
        id="g"
        x1={503.58}
        y1={2457.64}
        x2={1029.84}
        y2={2457.64}
        gradientTransform="rotate(-2.96 -30782.024 7402.22) scale(.74)"
        xlinkHref="#a"
      />
      <linearGradient
        id="h"
        x1={405.54}
        y1={2562.51}
        x2={923.01}
        y2={2562.51}
        gradientTransform="rotate(-6.14 -14494.169 3143.138) scale(.7)"
        xlinkHref="#a"
      />
      <linearGradient
        id="i"
        x1={285.62}
        y1={2664.12}
        x2={789.29}
        y2={2664.12}
        gradientTransform="rotate(-9.67 -8984.498 1712.739) scale(.66)"
        xlinkHref="#a"
      />
      <linearGradient
        id="j"
        x1={141.21}
        y1={2758.59}
        x2={625}
        y2={2758.59}
        gradientTransform="rotate(-13.59 -6237.32 1007.512) scale(.63)"
        xlinkHref="#a"
      />
      <linearGradient
        id="k"
        x1={-39.49}
        y1={2837.11}
        x2={431.15}
        y2={2837.11}
        gradientTransform="rotate(-18.2 -4728.222 569.93) scale(.6)"
        xlinkHref="#a"
      />
      <linearGradient
        id="l"
        x1={-255}
        y1={2890.55}
        x2={216.09}
        y2={2890.55}
        gradientTransform="rotate(-22.68 -3548.92 334.51) scale(.57)"
        xlinkHref="#a"
      />
      <linearGradient
        id="m"
        x1={-492.19}
        y1={2907.98}
        x2={-27.71}
        y2={2907.98}
        gradientTransform="rotate(-27.83 -2813.429 158.55) scale(.55)"
        xlinkHref="#a"
      />
      <linearGradient
        id="n"
        x1={-741.29}
        y1={2878.01}
        x2={-292.1}
        y2={2878.01}
        gradientTransform="rotate(-33.36 -2279.749 36.044) scale(.54)"
        xlinkHref="#a"
      />
      <linearGradient
        id="o"
        x1={-988.28}
        y1={2793.46}
        x2={-563.64}
        y2={2793.46}
        gradientTransform="matrix(.41 -.33 .33 .41 -391.47 -1200.26)"
        xlinkHref="#a"
      />
      <linearGradient
        id="p"
        x1={-1216.57}
        y1={2653.1}
        x2={-824.93}
        y2={2653.1}
        gradientTransform="matrix(.37 -.37 .37 .37 -387.49 -1152.83)"
        xlinkHref="#a"
      />
      <linearGradient
        id="q"
        x1={-1412.69}
        y1={2462.63}
        x2={-1057.55}
        y2={2462.63}
        gradientTransform="rotate(-51.3 -1342.76 -153.376) scale(.52)"
        xlinkHref="#a"
      />
      <linearGradient
        id="r"
        x1={-1566.12}
        y1={2234.61}
        x2={-1245.44}
        y2={2234.61}
        gradientTransform="matrix(.28 -.44 .44 .28 -379.53 -1057.98)"
        xlinkHref="#a"
      />
      <linearGradient
        id="s"
        x1={-1669.94}
        y1={1985.74}
        x2={-1368.6}
        y2={1985.74}
        gradientTransform="rotate(-63.14 -1010.06 -199.698) scale(.54)"
        xlinkHref="#a"
      />
      <linearGradient
        id="t"
        x1={-1715.84}
        y1={1733.36}
        x2={-1436.76}
        y2={1733.36}
        gradientTransform="rotate(-68.67 -890.807 -209.571) scale(.55)"
        xlinkHref="#a"
      />
      <linearGradient
        id="u"
        x1={-1710.8}
        y1={1492.04}
        x2={-1458.45}
        y2={1492.04}
        gradientTransform="rotate(-73.83 -793.262 -213.191) scale(.57)"
        xlinkHref="#a"
      />
      <linearGradient
        id="v"
        x1={-1665.41}
        y1={1271.86}
        x2={-1440.86}
        y2={1271.86}
        gradientTransform="rotate(-78.58 -712.41 -211.939) scale(.6)"
        xlinkHref="#a"
      />
      <linearGradient
        id="w"
        x1={-1591.05}
        y1={1078.35}
        x2={-1395.18}
        y2={1078.35}
        gradientTransform="rotate(-82.91 -644.45 -206.86) scale(.63)"
        xlinkHref="#a"
      />
      <linearGradient
        id="x"
        x1={-1498.37}
        y1={913.39}
        x2={-1330.37}
        y2={913.39}
        gradientTransform="rotate(-86.83 -586.545 -198.764) scale(.66)"
        xlinkHref="#a"
      />
      <linearGradient
        id="y"
        x1={-1395.51}
        y1={774.86}
        x2={-1253.87}
        y2={774.86}
        gradientTransform="rotate(-90.37 -536.498 -188.297) scale(.7)"
        xlinkHref="#a"
      />
      <linearGradient
        id="z"
        x1={-1289.42}
        y1={660.22}
        x2={-1171.34}
        y2={660.22}
        gradientTransform="rotate(-93.55 -492.734 -175.89) scale(.74)"
        xlinkHref="#a"
      />
      <linearGradient
        id="A"
        x1={-1184.36}
        y1={566.49}
        x2={-1086.78}
        y2={566.49}
        gradientTransform="rotate(-96.41 -453.962 -161.946) scale(.78)"
        xlinkHref="#a"
      />
      <linearGradient
        id="B"
        x1={-1081.77}
        y1={490.55}
        x2={-1002.57}
        y2={490.55}
        gradientTransform="rotate(-98.98 -419.225 -146.73) scale(.82)"
        xlinkHref="#a"
      />
      <linearGradient
        id="C"
        x1={-983.1}
        y1={429.51}
        x2={-921.48}
        y2={429.51}
        gradientTransform="matrix(-.17 -.85 .85 -.17 -335.75 -536.29)"
        xlinkHref="#a"
      />
      <linearGradient
        id="D"
        x1={-889.43}
        y1={380.5}
        x2={-844.86}
        y2={380.5}
        gradientTransform="rotate(-103.4 -358.928 -113.427) scale(.91)"
        xlinkHref="#a"
      />
      <linearGradient
        id="E"
        x1={-801.37}
        y1={341.58}
        x2={-773.09}
        y2={341.58}
        gradientTransform="rotate(-105.29 -332.374 -95.617) scale(.95)"
        xlinkHref="#a"
      />
      <linearGradient
        id="F"
        x1={-719.11}
        y1={310.56}
        x2={-705.67}
        y2={310.56}
        gradientTransform="rotate(-90 -322.51 -193.53)"
        xlinkHref="#a"
      />
    </defs>
    <title>{"\u8CC7\u7522 3"}</title>
    <g data-name="\u5716\u5C64 2">
      <g data-name="\u5716\u5C64 1">
        <motion.path
          d="M7.34 31.75C2.14 41.31-.29 49.2.73 58.41s56 207.69 61.48 218 72.61 66.57 78.28 68.45 84.25 57.67 92.14 60.1S440.71 383.46 451 378s28.74-7.49 32.16-15.6 8.84-77.5 7.15-89.7-49.71-160.86-49.71-160.86S278.25 9.8 272 10.15 249.6 3.64 243.71.77 31.73 18.94 26 21.28 7.34 31.75 7.34 31.75Z"
          style={{
            stroke: "url(#a)",
            fill: "none",
            strokeMiterlimit: 10,
          }}
          variants={draw}
        />
        <motion.path
          d="M230.78 398.28c-7.63-2.4-83.69-56.38-89.17-58.21s-70.47-56.29-75.75-66.29S7.36 71.67 6.4 62.73s.31-17.21 6.4-25.8c0 0 12.45-7.87 18-10.14S235.92 4.11 241.65 6.88s21.42 9.4 27.45 9.07 163.33 98.45 163.36 98.55 46.47 144 48.06 155.86-3.66 79-7 86.87-21.17 9.82-31.17 15.11-203.9 28.35-211.57 25.94Z"
          style={{
            strokeWidth: ".99px",
            stroke: "url(#b)",
            fill: "none",
            strokeMiterlimit: 10,
          }}
          variants={draw}
        />
        <motion.path
          d="M228.94 391.61c-7.37-2.37-80.91-54.53-86.21-56.32S74.6 280.85 69.5 271.17 13 75.72 12.08 67.05s.31-16.65 6.2-25c0 0 12-7.61 17.44-9.81S234 10.31 239.58 13s20.74 9.08 26.58 8.76c6-.34 158.08 95.22 158.14 95.41S469.21 256.52 470.72 268s-3.61 76.42-6.88 84-20.49 9.53-30.18 14.61-197.27 27.39-204.72 25Z"
          style={{
            strokeWidth: ".98px",
            stroke: "url(#c)",
            fill: "none",
            strokeMiterlimit: 10,
          }}
          variants={draw}
        />
        <motion.path
          d="M227.09 384.94c-7.11-2.33-78.13-52.69-83.25-54.43s-65.77-52.6-70.69-62S18.64 79.77 17.75 71.37s.3-16.08 6-24.1c0 0 11.64-7.34 16.85-9.48s191.51-21.27 196.92-18.68 20.06 8.76 25.71 8.45c5.9-.34 152.83 92 152.91 92.28s43.35 134.7 44.77 145.88-3.56 73.83-6.74 81.2-19.8 9.22-29.17 14.08c-9.58 5-190.67 26.32-197.91 23.94Z"
          style={{
            strokeWidth: ".98px",
            stroke: "url(#d)",
            fill: "none",
            strokeMiterlimit: 10,
          }}
          variants={draw1}
        />
        <motion.path
          d="M225.25 378.28C218.4 376 149.9 327.43 145 325.73S81.52 275 76.8 265.93 24.27 83.82 23.42 75.69s.3-15.51 5.79-23.25c0 0 11.23-7.08 16.25-9.15s184.74-20.56 190-18.07 19.37 8.44 24.84 8.14c5.79-.36 147.57 88.76 147.7 89.14s41.79 130 43.13 140.88-3.5 71.25-6.6 78.37-19.12 8.92-28.2 13.62c-9.33 4.84-184.05 25.27-191.08 22.91Z"
          style={{
            strokeWidth: ".97px",
            stroke: "url(#e)",
            fill: "none",
            strokeMiterlimit: 10,
          }}
          variants={draw}
        />
        <motion.path
          d="M223.41 371.61c-6.59-2.27-72.57-49-77.32-50.66S85 272 80.45 263.31 29.9 87.87 29.1 80s.29-14.94 5.58-22.4c0 0 10.82-6.81 15.66-8.82s178-19.85 183.05-17.46 18.69 8.12 24 7.83c5.68-.33 142.32 85.54 142.46 86s40.23 125.4 41.48 135.89-3.45 68.66-6.47 75.54-18.44 8.61-27.2 13.13c-9.11 4.69-177.44 24.29-184.25 21.9Z"
          style={{
            strokeWidth: ".96px",
            stroke: "url(#f)",
            fill: "none",
            strokeMiterlimit: 10,
          }}
          variants={draw}
        />
        <motion.path
          d="M221.57 364.94c-6.33-2.24-69.78-47.15-74.36-48.77s-58.75-47.06-63.11-55.48S35.53 91.92 34.77 84.34s.29-14.34 5.38-21.55c0 0 10.41-6.55 15.06-8.49 4.8-2 171.18-19.15 176.11-16.85s18 7.8 23.1 7.51c5.58-.33 137.06 82.31 137.23 82.87s38.67 120.75 39.84 130.89-3.39 66.07-6.33 72.71-17.76 8.31-26.16 12.64c-8.88 4.52-170.84 23.2-177.43 20.87Z"
          style={{
            strokeWidth: ".95px",
            stroke: "url(#g)",
            fill: "none",
            strokeMiterlimit: 10,
          }}
          variants={draw}
        />
        <motion.path
          d="M219.72 358.27c-6.07-2.2-67-45.31-71.39-46.88s-56.41-45.21-60.58-53.32S41.16 96 40.45 88.66s.28-13.81 5.17-20.7c0 0 10-6.29 14.47-8.15 4.64-1.94 164.4-18.44 169.18-16.24s17.32 7.48 22.23 7.2c5.47-.32 131.81 79.08 132 79.73.15.49 37.12 116.1 38.19 125.9s-3.33 63.49-6.19 69.87-17.08 8-25.22 12.14c-8.59 4.37-164.17 22.17-170.56 19.86Z"
          style={{
            strokeWidth: ".94px",
            stroke: "url(#h)",
            fill: "none",
            strokeMiterlimit: 10,
          }}
          variants={draw}
        />
        <motion.path
          d="M217.88 351.6c-5.81-2.17-64.22-43.46-68.43-45s-54.06-43.36-58.05-51.15S46.79 100 46.12 93c-.65-6.87.28-13.24 5-19.85 0 0 9.59-6 13.87-7.82 4.48-1.88 157.62-17.73 162.24-15.63s16.63 7.16 21.36 6.89c5.36-.32 126.55 75.85 126.78 76.6.17.56 35.56 111.45 36.55 120.91 1 9.29-3.28 60.9-6.06 67s-16.4 7.69-24.23 11.64c-8.37 4.26-157.58 21.16-163.75 18.86Z"
          style={{
            strokeWidth: ".94px",
            stroke: "url(#i)",
            fill: "none",
            strokeMiterlimit: 10,
          }}
          variants={draw1}
        />
        <motion.path
          d="M216 344.93c-5.55-2.13-61.44-41.62-65.47-43.1s-51.72-41.52-55.52-49S52.42 104.07 51.79 97.3c-.61-6.58.27-12.68 4.76-19 0 0 9.18-5.77 13.28-7.49 4.32-1.82 150.84-17 155.3-15s15.95 6.84 20.49 6.58c5.26-.32 121.3 72.62 121.56 73.46.19.63 34 106.79 34.9 115.91.88 8.92-3.22 58.31-5.92 64.21s-15.72 7.38-23.24 11.15c-8.09 4.04-150.92 20.1-156.92 17.81Z"
          style={{
            strokeWidth: ".93px",
            stroke: "url(#j)",
            fill: "none",
            strokeMiterlimit: 10,
          }}
          variants={draw}
        />
        <motion.path
          d="M214.2 338.26c-5.29-2.09-58.66-39.78-62.5-41.21s-49.37-39.67-53-46.84-40.65-142.09-41.23-148.59c-.56-6.28.27-12.11 4.56-18.15 0 0 8.78-5.5 12.68-7.16C78.87 74.55 218.77 60 223.07 61.9s15.26 6.53 19.62 6.27c5.15-.3 116 69.39 116.33 70.32.22.7 32.45 102.14 33.25 110.92.79 8.56-3.17 55.73-5.78 61.37s-15 7.07-22.25 10.66c-7.85 3.91-144.29 19.09-150.04 16.82Z"
          style={{
            strokeWidth: ".92px",
            stroke: "url(#k)",
            fill: "none",
            strokeMiterlimit: 10,
          }}
          variants={draw}
        />
        <motion.path
          d="M212.35 331.59c-5-2.05-55.88-37.93-59.54-39.33s-47-37.83-50.47-44.68-38.66-135.41-39.2-141.63c-.52-6 .26-11.54 4.35-17.3 0 0 8.37-5.24 12.09-6.83C83.58 80.11 216.87 66.21 221 68c4 1.74 14.58 6.21 18.75 6 5-.3 110.79 66.16 111.11 67.19.24.77 30.89 97.49 31.61 105.92.7 8.19-3.11 53.14-5.65 58.54-2.46 5.24-14.36 6.76-21.26 10.16-7.56 3.72-137.66 18.04-143.21 15.78Z"
          style={{
            strokeWidth: ".91px",
            stroke: "url(#l)",
            fill: "none",
            strokeMiterlimit: 10,
          }}
          variants={draw1}
        />
        <motion.path
          d="M210.51 324.92c-4.77-2-53.1-36.09-56.58-37.44S109.25 251.5 106 245c-3.33-6.69-36.68-128.75-37.18-134.7-.47-5.7.26-11 4.15-16.45a128 128 0 0 1 11.5-6.5C88.3 85.67 215 72.42 218.94 74.13c3.81 1.64 13.9 5.89 17.88 5.65 4.94-.29 105.54 62.93 105.88 64.05.26.84 29.33 92.84 30 100.93.61 7.82-3.05 50.55-5.51 55.71-2.38 5-13.69 6.46-20.27 9.67-7.39 3.58-131.07 17.03-136.41 14.78Z"
          style={{
            strokeWidth: ".9px",
            stroke: "url(#m)",
            fill: "none",
            strokeMiterlimit: 10,
          }}
          variants={draw}
        />
        <motion.path
          d="M208.67 318.25c-4.51-2-50.31-34.24-53.61-35.55s-42.34-34.14-45.41-40.35c-3.15-6.39-34.7-122.08-35.16-127.76-.43-5.4.25-10.41 3.94-15.6a123.25 123.25 0 0 1 10.9-6.17C93 91.23 213.06 78.63 216.88 80.24c3.64 1.54 13.21 5.57 17 5.34 4.83-.29 100.28 59.7 100.65 60.92.28.92 27.78 88.19 28.32 95.94.52 7.46-3 48-5.37 52.87-2.29 4.72-13 6.14-19.27 9.17-7.11 3.43-124.41 16.01-129.54 13.77Z"
          style={{
            strokeWidth: ".9px",
            stroke: "url(#n)",
            fill: "none",
            strokeMiterlimit: 10,
          }}
          variants={draw}
        />
        <motion.path
          d="M206.83 311.58c-4.25-1.92-47.53-32.4-50.65-33.66s-40-32.29-42.88-38.19c-3-6.09-32.72-115.41-33.13-120.82-.39-5.11.25-9.84 3.74-14.75 0 0 7.14-4.46 10.31-5.84 3.52-1.54 116.94-13.49 120.6-12 3.46 1.44 12.53 5.25 16.13 5 4.72-.28 95 56.47 95.43 57.78.3 1 26.22 83.53 26.67 90.94.43 7.09-2.94 45.38-5.24 50-2.2 4.46-12.33 5.83-18.28 8.68-6.87 3.38-117.78 15.09-122.7 12.86Z"
          style={{
            strokeWidth: ".89px",
            stroke: "url(#o)",
            fill: "none",
            strokeMiterlimit: 10,
          }}
          variants={draw}
        />
        <motion.path
          d="M205 304.91c-4-1.88-44.75-30.55-47.69-31.77s-37.65-30.44-40.35-36c-2.8-5.79-30.74-108.74-31.11-113.88-.34-4.82.24-9.27 3.53-13.9 0 0 6.73-4.2 9.71-5.51 3.36-1.48 110.16-12.78 113.66-11.36 3.25 1.31 11.84 4.9 15.25 4.7 4.62-.28 89.77 53.24 90.2 54.64.32 1.06 24.66 78.88 25 85.95.35 6.72-2.88 42.79-5.1 47.21-2.11 4.2-11.65 5.52-17.29 8.18-6.58 3.12-111.11 13.96-115.81 11.74Z"
          style={{
            strokeWidth: ".88px",
            stroke: "url(#p)",
            fill: "none",
            strokeMiterlimit: 10,
          }}
          variants={draw1}
        />
        <motion.path
          d="M203.14 298.24c-3.73-1.83-42-28.72-44.72-29.89s-35.31-28.6-37.83-33.87C118 229 91.83 132.42 91.51 127.56c-.3-4.52.24-8.71 3.33-13 0 0 6.32-3.93 9.12-5.18 3.2-1.42 103.38-12.07 106.73-10.75 3.11 1.23 11.16 4.6 14.39 4.41 4.51-.28 84.52 50 85 51.51.34 1.13 23.11 74.23 23.38 81 .26 6.36-2.82 40.2-5 44.37-2 3.94-11 5.21-16.3 7.69-6.36 2.87-104.5 12.85-109.02 10.63Z"
          style={{
            strokeWidth: ".87px",
            stroke: "url(#q)",
            fill: "none",
            strokeMiterlimit: 10,
          }}
          variants={draw}
        />
        <motion.path
          d="M201.3 291.58c-3.47-1.78-39.19-26.87-41.76-28s-33-26.75-35.3-31.71c-2.44-5.18-26.78-95.39-27.06-100-.25-4.23.23-8.14 3.12-12.2 0 0 5.91-3.67 8.52-4.85 3-1.36 96.6-11.36 99.79-10.14 2.94 1.13 10.47 4.28 13.52 4.1 4.4-.27 79.26 46.78 79.75 48.37.37 1.2 21.55 69.57 21.74 76 .17 6-2.77 37.61-4.83 41.54-1.93 3.68-10.3 4.9-15.31 7.19-6.12 2.78-97.86 11.9-102.18 9.7Z"
          style={{
            strokeWidth: ".86px",
            stroke: "url(#r)",
            fill: "none",
            strokeMiterlimit: 10,
          }}
          variants={draw1}
        />
        <motion.path
          d="M199.46 284.91c-3.21-1.72-36.4-25-38.8-26.11s-30.66-24.91-32.77-29.55c-2.27-4.88-24.8-88.72-25-93.05-.21-3.93.23-7.57 2.92-11.35 0 0 5.51-3.41 7.93-4.52 2.88-1.31 89.82-10.66 92.85-9.53 2.76 1 9.79 4 12.65 3.78 4.3-.27 74 43.55 74.53 45.24.39 1.27 20 64.92 20.09 71 .09 5.62-2.71 35-4.69 38.71-1.84 3.42-9.62 4.58-14.32 6.7-5.92 2.62-91.28 10.88-95.39 8.68Z"
          style={{
            strokeWidth: ".85px",
            stroke: "url(#s)",
            fill: "none",
            strokeMiterlimit: 10,
          }}
          variants={draw}
        />
        <motion.path
          d="M197.62 278.24c-3-1.66-33.62-23.18-35.83-24.22s-28.28-23.02-30.25-27.39c-2.09-4.58-22.82-82-23-86.11-.17-3.64.22-7 2.71-10.5 0 0 5.1-3.15 7.34-4.18 2.72-1.25 83-9.95 85.91-8.92 2.59.93 9.1 3.64 11.78 3.47 4.19-.26 68.75 40.32 69.3 42.1.41 1.34 18.44 60.26 18.44 66 0 5.25-2.65 32.44-4.55 35.88-1.75 3.16-8.95 4.27-13.33 6.2-5.65 2.43-84.61 9.87-88.52 7.67Z"
          style={{
            strokeWidth: ".85px",
            stroke: "url(#t)",
            fill: "none",
            strokeMiterlimit: 10,
          }}
          variants={draw1}
        />
        <motion.path
          d="M195.77 271.57c-2.7-1.6-30.84-21.34-32.87-22.33S137 228 135.19 224c-1.91-4.28-20.84-75.38-21-79.17-.13-3.34.22-6.44 2.51-9.65 0-.05 4.69-2.89 6.74-3.85 2.56-1.19 76.25-9.24 79-8.31 2.41.83 8.42 3.32 10.91 3.16 4.09-.26 63.5 37.09 64.07 39 .43 1.41 16.89 55.61 16.8 61-.08 4.88-2.59 29.85-4.41 33-1.66 2.9-8.28 4-12.33 5.71-5.43 2.34-77.99 8.88-81.71 6.68Z"
          style={{
            strokeWidth: ".84px",
            stroke: "url(#u)",
            fill: "none",
            strokeMiterlimit: 10,
          }}
          variants={draw}
        />
        <motion.path
          d="M193.93 264.9c-2.44-1.53-28.06-19.5-29.91-20.45s-23.58-19.37-25.18-23.06c-1.73-4-18.86-68.7-19-72.22-.09-3.05.21-5.87 2.3-8.8 0-.05 4.28-2.64 6.15-3.52 2.4-1.14 69.47-8.53 72-7.69 2.24.73 7.73 3 10 2.85 4-.26 58.25 33.86 58.85 35.83.45 1.48 15.34 51 15.15 56-.16 4.51-2.53 27.26-4.28 30.21-1.56 2.64-7.6 3.63-11.34 5.21-5.05 2.16-71.21 7.85-74.74 5.64Z"
          style={{
            strokeWidth: ".83px",
            stroke: "url(#v)",
            fill: "none",
            strokeMiterlimit: 10,
          }}
          variants={draw}
        />
        <motion.path
          d="M192.09 258.23c-2.19-1.46-25.28-17.65-26.94-18.56s-21.23-17.53-22.65-20.9c-1.56-3.68-16.88-62-16.93-65.28a12.19 12.19 0 0 1 2.1-7.95c0-.06 3.87-2.38 5.55-3.19 2.24-1.08 62.68-7.82 65.09-7.08 2.06.63 7.05 2.68 9.17 2.54 3.87-.25 53 30.63 53.62 32.69.47 1.55 13.79 46.29 13.51 51-.24 4.14-2.47 24.67-4.14 27.38-1.47 2.38-6.93 3.31-10.35 4.72-4.94 2-64.7 6.85-68.03 4.63Z"
          style={{
            strokeWidth: ".82px",
            stroke: "url(#w)",
            fill: "none",
            strokeMiterlimit: 10,
          }}
          variants={draw1}
        />
        <motion.path
          d="M190.25 251.56c-2.15-1-22.5-15.81-24-16.67s-18.88-15.69-20.13-18.74c-1.38-3.38-14.9-55.35-14.91-58.34a11.09 11.09 0 0 1 1.89-7.1c0-.06 3.46-2.12 5-2.86 2.08-1 55.9-7.11 58.15-6.47 1.88.53 6.37 2.36 8.3 2.23 3.77-.25 47.74 27.4 48.4 29.56.5 1.62 12.24 41.64 11.86 46-.32 3.77-2.41 22.08-4 24.54-1.37 2.12-6.26 3-9.36 4.22-4.71 1.86-58.52 6.39-61.2 3.63Z"
          style={{
            strokeWidth: ".81px",
            stroke: "url(#x)",
            fill: "none",
            strokeMiterlimit: 10,
          }}
          variants={draw}
        />
        <motion.path
          d="M188.4 244.89c-1.9-1-19.71-14-21-14.78s-16.53-13.84-17.6-16.58c-1.2-3.08-12.92-48.68-12.88-51.4a10 10 0 0 1 1.69-6.25c0-.06 3-1.87 4.36-2.53 1.92-1 49.11-6.4 51.21-5.86 1.7.44 5.68 2 7.43 1.92 3.66-.25 42.48 24.17 43.17 26.42.52 1.69 10.69 37 10.22 41-.4 3.4-2.34 19.49-3.87 21.71-1.28 1.86-5.59 2.66-8.37 3.73-4.46 1.73-51.89 5.39-54.36 2.62Z"
          style={{
            strokeWidth: ".81px",
            stroke: "url(#y)",
            fill: "none",
            strokeMiterlimit: 10,
          }}
          variants={draw1}
        />
        <motion.path
          d="M186.56 238.22c-1.65-.89-16.93-12.12-18.05-12.89s-14.19-12-15.07-14.42c-1-2.79-10.94-42-10.86-44.46a8.88 8.88 0 0 1 1.48-5.4c0-.06 2.64-1.61 3.77-2.2 1.76-.91 42.33-5.69 44.27-5.25 1.52.34 5 1.71 6.56 1.61 3.55-.24 37.23 20.94 37.94 23.28.54 1.76 9.14 32.31 8.57 36-.47 3-2.28 16.9-3.73 18.88-1.18 1.6-4.92 2.34-7.38 3.23-4.2 1.55-45.26 4.4-47.5 1.62Z"
          style={{
            strokeWidth: ".8px",
            stroke: "url(#z)",
            fill: "none",
            strokeMiterlimit: 10,
          }}
          variants={draw}
        />
        <motion.path
          d="M184.72 231.55c-1.41-.83-14.15-10.27-15.09-11s-11.83-10.16-12.54-12.26c-.84-2.49-9-35.32-8.84-37.52a7.78 7.78 0 0 1 1.28-4.55c0-.07 2.22-1.36 3.18-1.87 1.6-.86 35.54-5 37.34-4.64 1.34.25 4.31 1.39 5.69 1.3 3.45-.24 32 17.71 32.72 20.15.56 1.83 7.61 27.65 6.93 31-.54 2.66-2.21 14.31-3.59 16-1.07 1.34-4.26 2-6.39 2.74-4 1.43-38.68 3.45-40.69.65Z"
          style={{
            strokeWidth: ".79px",
            stroke: "url(#A)",
            fill: "none",
            strokeMiterlimit: 10,
          }}
          variants={draw}
        />
        <motion.path
          d="M182.88 224.88c-1.16-.77-11.37-8.43-12.13-9.12s-9.48-8.32-10-10.1c-.66-2.19-7-28.64-6.81-30.57a6.67 6.67 0 0 1 1.06-3.69c.05-.07 1.81-1.11 2.58-1.54 1.44-.81 28.75-4.26 30.4-4 1.16.16 3.63 1.07 4.82 1 3.34-.24 26.72 14.48 27.49 17 .58 1.9 6.07 23 5.28 26-.6 2.28-2.13 11.72-3.46 13.21-1 1.09-3.59 1.66-5.4 2.24-3.71 1.2-32.05 2.39-33.83-.43Z"
          style={{
            strokeWidth: ".78px",
            stroke: "url(#B)",
            fill: "none",
            strokeMiterlimit: 10,
          }}
          variants={draw}
        />
        <motion.path
          d="M181 218.21c-.91-.7-8.59-6.58-9.16-7.23s-7.12-6.49-7.48-7.94c-.47-1.9-5-22-4.79-23.63a5.55 5.55 0 0 1 .87-2.84c.05-.07 1.4-.86 2-1.21 1.28-.75 22-3.78 23.46-3.42a17.21 17.21 0 0 0 3.95.68c3.23-.23 21.46 11.25 22.27 13.88.6 2 4.55 18.33 3.64 21-.65 1.91-2.05 9.13-3.32 10.38-.85.83-2.93 1.32-4.4 1.75-3.52 1.04-25.45 1.37-27.04-1.42Z"
          style={{
            strokeWidth: ".77px",
            stroke: "url(#C)",
            fill: "none",
            strokeMiterlimit: 10,
          }}
          variants={draw}
        />
        <motion.path
          d="M179.19 211.54c-.66-.64-5.81-4.74-6.2-5.34s-4.76-4.65-5-5.77c-.28-1.61-3.3-15.34-2.76-16.69a3.27 3.27 0 0 1 .66-2c.05-.07 1-.62 1.39-.88 1.12-.71 15.18-3 16.52-2.81a17.45 17.45 0 0 0 3.07.36c3.13-.23 16.21 8 17 10.74.62 2 3 13.68 2 16-.69 1.55-2 6.56-3.18 7.54a10.37 10.37 0 0 1-3.41 1.25c-3.22.88-18.76.45-20.09-2.4Z"
          style={{
            strokeWidth: ".77px",
            stroke: "url(#D)",
            fill: "none",
            strokeMiterlimit: 10,
          }}
          variants={draw}
        />
        <motion.path
          d="M177.35 204.87c-.33-.63-3-2.89-3.24-3.45s-2.39-2.82-2.43-3.61c-.07-1.33-1.33-8.67-.74-9.75a2.24 2.24 0 0 1 .45-1.14c.06-.08.56-.38.8-.55 1-.68 8.38-2.06 9.58-2.2.62-.07 1.57.1 2.2.05 3-.24 11 4.79 11.82 7.6.65 2.11 1.56 9 .34 11-.73 1.19-1.86 4-3 4.71a8.43 8.43 0 0 1-2.42.76c-3.12.63-11.92-.71-13.36-3.42Z"
          style={{
            strokeWidth: ".76px",
            stroke: "url(#E)",
            fill: "none",
            strokeMiterlimit: 10,
          }}
          variants={draw1}
        />
        <motion.circle
          cx={181.57}
          cy={196.35}
          r={6.34}
          transform="matrix(.96 -.29 .29 .96 -49.5 61.71)"
          style={{
            strokeWidth: ".75px",
            stroke: "url(#F)",
            fill: "none",
            strokeMiterlimit: 10,
          }}
          variants={draw}
        />
      </g>
    </g>
  </motion.svg>
);

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => {
    const delay = 1 + i * 0.6;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.02 },
      },
    };
  },
};
const draw1 = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => {
    const delay = 1 + i * 1;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 2.1, bounce: 0 },
        opacity: { delay, duration: 0.07 },
      },
    };
  },
};

export default SvgBg;
