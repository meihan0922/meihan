import Area from "../Area";
import Slider from "@/components/Slider";
import cx from "classnames";

const Experience = () => {
  const projects = [
    {
      name: "Ui Kit Storybook",
      desc: "參考behance上設計稿design system樣式，使用TypeScript、Framer-Motion、tailwind做一個虛擬的元件庫。",
      images: ["/uikit/uikit1.jpg", "/uikit/uikit2.jpg"],
      demo: "https://62b1df8c95542b865b181c3c-uacrjzemwa.chromatic.com/",
      code: "https://github.com/meihan0922/ui-kit-storybook",
      ref: "https://www.behance.net/gallery/89976895/ATOM-Wireframe-UI-KIT",
    },
    {
      name: "Ecommerce",
      desc: "參考JavaScript Mastery channel的ecommerce專案的ui與api，另用zustand, tailwind改寫架構)，使用Sanity寫schema託管後台，製作及時的api（這個專案做了兩支，處理商品基本資訊），並搭配Stripe建立自有品牌的金流服務。完成首頁-商品頁-購物車-完成刷卡的簡易流程。",
      images: [
        "/ecommerce/ecommerce1.jpg",
        "/ecommerce/ecommerce2.jpg",
        "/ecommerce/ecommerce3.jpg",
        "/ecommerce/ecommerce4.jpg",
      ],
      demo: "https://62b1df8c95542b865b181c3c-bjwsmtrwuc.chromatic.com/?path=/story/example-all--all-story",
      code: "https://github.com/meihan0922/ecommerce",
      ref: "https://github.com/adrianhajdin/ecommerce_sanity_stripe",
    },
  ];

  return (
    <div className="">
      <Area title="Side Projects">
        <div className="">
          {projects.map((project, idx) => {
            return (
              <div
                key={project.name}
                className={cx("flex justify-between gap-8", {
                  "mb-12": projects.length - 1 !== idx,
                })}
              >
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-lg font-semibold mb-2">{project.name}</p>
                    <p className="text-sm text-justify leading-5 tracking-tight">
                      {project.desc}
                    </p>
                    <a
                      href={project.ref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-center flex-1 hover:text-metal text-stone font-bold"
                    >
                      design&reference
                    </a>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-center flex-1 hover:text-metal text-stone font-bold"
                    >
                      DEMO
                    </a>
                    <div className="h-4/5 w-[1px] bg-stone m-auto"></div>

                    <a
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-center flex-1 hover:text-metal text-stone font-bold"
                    >
                      CODE
                    </a>
                  </div>
                </div>
                <div className="text-sm leading-5 w-[680px] h-[340px]">
                  <Slider images={project.images} />
                </div>
              </div>
            );
          })}
        </div>
      </Area>
    </div>
  );
};

export default Experience;
