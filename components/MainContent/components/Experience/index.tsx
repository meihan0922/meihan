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
        "React, Next.js, typescript 開發前台",
        "stomp訂閱處理體育比賽即時資訊串流",
        "graphql data fetching、SWR api data cache",
        "reachUI, tailwind元件開發封裝",
        "zustand、immutableHelper for state update 渲染效能優化",
        "framer-motion動畫特效製作",
        "react-intl多語系",
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
      desc: `雄獅集團為國際旅遊上市公司，致力於旅遊產業垂直整合，導入資訊化與知識管理系統，提供旅遊、餐飲、媒體、社群的服務。在職期間，經手元件庫、新品牌-欣傳媒前後台整合、搜尋引擎優化、機票產品群改版、旅天下＋欣聯航等品牌開發。各專案大都以react/typescript為基礎進行開發。`,
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
    },
  ];

  return (
    <div className="">
      <Area title="Experience">
        <div className="">
          {frontend.map((i, idx) => (
            <div
              key={i.company}
              className={cx({ "mb-12": idx !== frontend.length - 1 })}
            >
              <div className="grid grid-cols-7 gap-4 text-sm text-darkText mb-6">
                <div className="gap-4 flex col-span-2 items-center">
                  <div className="w-10 h-10">
                    <img src={i.img} alt={i.company} />
                  </div>
                  <div>
                    <p className="text-lg font-medium leading-6 mb-1.5">
                      {i.company}
                      <span className="text-sm ml-1">{i.englishCompany}</span>
                    </p>

                    <p className="mb-0.5">{i.role}</p>
                    <p className="text-xs">{i.time}</p>
                  </div>
                </div>
                <p className="text-sm leading-6 col-span-5 tracking-tighter text-justify">
                  {i.desc}
                </p>
              </div>
              <div className="flex items-center">
                <div className="text-sm leading-5 w-[600px] h-[340px]">
                  <Slider images={i.images} />
                </div>
                <ul className="text-[13px] flex-1 text-darkText py-4 pl-8">
                  {i.work.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex gap-2 leading-5 mb-2 tracking-tight"
                    >
                      <span>{idx + 1}. </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Area>
    </div>
  );
};

export default Experience;
