import Area from "../Area";
import Slider from "@/components/Slider";
import cx from "classnames";

const Experience = () => {
  const frontend = [
    {
      time: "2021/05 - 至今",
      company: "伊諾科技",
      englishCompany: "INNO TECH",
      role: "前端工程師",
      img: "/inno.png",
      desc: `伊諾科技為遊戲開發公司，致力於跨國的遊戲平台與軟體研發，提供多平台、多語系的服務。
      在職期間，參與重構線上遊戲平台、維護後台與代理後台等四個專案。經手體育比賽即時資訊串流、前台會員服務、後台會員管理與金流。`,
      work: [
        "React, Next.js, typescript",
        "stomp訂閱處理體育比賽即時資訊串流",
        "graphql data fetching、SWR api data cache",
        "zustand、immutableHelper for state update",
        "reachUI, tailwind元件開發封裝",
        "framer-motion動畫特效製作",
        "react-intl 多語系",
        "redux, sass維護後台專案",
      ],
      images: [
        "/inno/inno1.jpg",
        "/inno/inno2.jpg",
        "/inno/inno3.jpg",
        "/inno/inno4.jpg",
      ],
    },
    {
      time: "2018/12 - 2021/04",
      company: "雄獅旅遊",
      englishCompany: "LION TRAVEL",
      role: "前端工程師",
      img: "/lion.png",
      desc: `雄獅集團為國際旅遊上市公司，致力於旅遊產業垂直整合，導入資訊化與知識管理系統，提供旅遊、餐飲、媒體、社群的服務。在職期間，經手元件庫、新品牌-欣傳媒前後台整合、搜尋引擎優化、機票產品群改版、旅天下＋欣聯航等品牌專案。大都以react/typescript為基礎進行開發。`,
      work: [
        "共用模組庫開發(styled-component, storybook), Unit-testing(Jest)",
        "雄獅旅遊網搜尋引擎開發(css-modules, i18next, Redux), E2E testing(Cypress)",
        "新品牌-欣傳媒、欣講堂、欣嚴選，前後台的開發(Ant Design, nextJS, Graphql, lerna)",
        "雄獅機票網優化(jquery to React)",
        "協助處理產品SEO Lighthouse評分優化",
      ],
      images: [
        "/lion/lion1.jpg",
        "/lion/lion_mobile.jpg",
        "/lion/lion3.jpg",
        "/lion/lion2.jpg",
      ],
      ref: {
        雄獅旅遊: "https://www.liontravel.com/category/zh-tw/index",
        薪傳媒: "https://www.xinmedia.com/",
        旅天下: "https://www.uplantravel.com/category/zh-tw/index",
      },
    },
  ];
  const early = [
    {
      time: "2018/10 - 2018/12",
      company: "佳綸生技",
      role: "UI設計師",
      img: "/yonglin.svg",
      desc: `鴻海集團佳綸生技，在職期間，為
        臺大癌醫中心的病房專用平板製作ui及icon。`,
    },
    {
      time: "2016/01 - 2017/6",
      company: "砌禾數位動畫",
      role: "3D動畫師",
      img: "/cheer.jpeg",
      desc: `在職期間完成愛奇藝<無敵小鹿>、<靈石冒險王>等多項3D動畫專案。`,
    },
  ];

  return (
    <div className="">
      <Area title="Experience">
        <div className="flex flex-col divide-y">
          <div className="flex flex-col divide-y py-5 first:pt-0 last:pb-0 md:py-8 xl:py-10">
            {frontend.map((i, idx) => (
              <div
                key={i.company}
                className="py-4 first:pt-0 last:pb-0 md:py-6 xl:py-10"
              >
                <div className="grid grid-cols-7 gap-2 text-sm text-darkText mb-3 sm:gap-3 xl:gap-4 sm:mb-4 xl:mb-6">
                  <div className="col-span-7 gap-3 flex md:gap-4 xl:col-span-2 items-center">
                    <div className="w-9 h-9flex items-center md:w-10 md:h-10  xl:items-start">
                      <img src={i.img} alt={i.company} />
                    </div>
                    <div className="flex flex-col xl:gap-1.5">
                      <p className="text-sm font-medium leading-6 md:text-lg">
                        {i.company}
                        <span className="text-sm ml-1">{i.englishCompany}</span>
                      </p>
                      <div className="flex gap-1 items-center xl:gap-0.5 xl:flex-col xl:items-start">
                        <p className="">{i.role}</p>
                        <p className="text-xs">{i.time}</p>
                      </div>
                    </div>
                  </div>
                  <p className=" col-span-7 tracking-tighter text-justify text-[13px] leading-6 row-span-2 sm:pl-2 md:text-sm md:leading-6 xl:p-0 xl:row-span-1 xl:col-span-5">
                    {i.desc}
                  </p>
                </div>
                <div className="flex items-center gap-4 pl-4 pr-3 sm:pr-4 md:p-0 xl:gap-8 flex-col-reverse xl:flex-row">
                  <div className="text-sm leading-5">
                    <Slider images={i.images} />
                  </div>
                  <div>
                    <ul className="lg:min-w-[220px] md:mr-5 md:ml-8 xl:mx-0 text-[13px] gap-1 flex flex-wrap md:gap-1.5 xl:gap-2 xl:mb-0 xl:flex-nowrap xl:flex-col text-darkText xl:flex-1">
                      {i.work.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex before:content-['▪︎'] before:mr-2.5 pr-2 xl:pr-0  tracking-tight sm:w-[calc(50%-6px)] xl:w-full"
                        >
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    {i?.ref && (
                      <div className="flex mt-5 sm:mt-3 xl:mt-10 w-full divide-x-2 text-sm justify-end xl:justify-center">
                        {Object.entries(i.ref).map(([key, url], idx) => (
                          <a
                            key={key}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block w-1/3 sm:w-1/6 xl:w-full text-center hover:text-metal text-stone font-bold"
                          >
                            {key}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col divide-y sm:flex-row sm:divide-y-0 sm:divide-x py-5 md:py-6 xl:py-10 sm:first:pt-0 sm:last:pb-0">
            {early.map((i, idx) => (
              <div
                key={i.company}
                className="flex-1 flex-col items-center lg:flex-row py-4 first:pt-0 last:pb-0 sm:py-0 sm:px-5 md:px-8 first:pl-0 last:pr-0 flex text-sm text-darkText gap-3 lg:gap-4"
              >
                <div className="gap-3 md:gap-4 flex items-center w-full lg:min-w-[165px]">
                  <div className="w-9 h-9 md:w-10 md:h-10">
                    <img src={i.img} alt={i.company} />
                  </div>
                  <div>
                    <p className="font-medium xl:leading-6 md:mb-1">
                      {i.company}
                    </p>
                    <div className="flex md:flex-row lg:flex-col md:items-center gap-1 md:gap-2 lg:items-start lg:gap-0">
                      <p className=" md:mb-0.5">{i.role}</p>
                      <p className="text-xs">{i.time}</p>
                    </div>
                  </div>
                </div>
                <p className="md:leading-6 tracking-tighter text-justify sm:pl-2 lg:p-0 text-xs leading-5 ">
                  {i.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Area>
    </div>
  );
};

export default Experience;
