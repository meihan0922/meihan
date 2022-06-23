import Area from "../Area";
import Slider from "@/components/Slider";
import cx from "classnames";

const Experience = () => {
  const projects = [
    {
      name: "Ui Kit Storybook",
      desc: "參考behance上ATOM設計稿design system樣式製作元件庫，使用Framer-Motion、TypeScript、tailwind。",
      images: ["/uikit/uikit1.jpg", "/uikit/uikit2.jpg"],
      demo: "https://62b1df8c95542b865b181c3c-uacrjzemwa.chromatic.com/",
      code: "https://github.com/meihan0922/ui-kit-storybook",
      ref: "https://www.behance.net/gallery/89976895/ATOM-Wireframe-UI-KIT",
    },
    {
      name: "Ecommerce",
      desc: "參照JavaScript Mastery，channel的ecommerce專案，使用Sanity schema託管後台製作及時的api（做了兩支處理商品基本資訊），並搭配Stripe建立自有品牌的金流服務。完成首頁-商品頁-購物車-完成刷卡的簡易流程。",
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
        <div className="flex flex-col divide-y">
          {projects.map((project, idx) => {
            return (
              <div
                key={project.name}
                className="flex flex-col justify-between gap-3 py-5 first:pt-0 last:pb-0 items-center sm:items-start md:py-6 lg:items-center lg:flex-row lg:gap-6 xl:gap-8 xl:py-10"
              >
                <div className="flex-1 flex flex-col justify-between w-full">
                  <div>
                    <p className="text-sm mb-1 font-semibold md:text-lg md:mb-2">
                      {project.name}
                    </p>
                    <a
                      href={project.ref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm inline-block text-center flex-1 hover:text-metal text-stone font-bold md:text-base"
                    >
                      design&reference
                    </a>
                    <p className="text-xs text-justify leading-5 tracking-tight md:text-sm">
                      {project.desc}
                    </p>
                  </div>
                  <div className="flex justify-end divide-x mt-3 lg:mt-3 lg:w-full">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs w-1/4 inline-block text-center hover:text-metal text-stone font-bold sm:w-1/6 md:text-sm lg:w-full xl:text-base"
                    >
                      DEMO
                    </a>
                    <a
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs w-1/4 inline-block text-center hover:text-metal text-stone font-bold sm:w-1/6 md:text-sm lg:w-full xl:text-base"
                    >
                      CODE
                    </a>
                  </div>
                </div>
                <div className="text-sm leading-5">
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
