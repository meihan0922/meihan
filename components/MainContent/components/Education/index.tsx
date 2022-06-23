import Area from "../Area";

const Education = () => {
  return (
    <Area title="Education">
      <div className="flex flex-col gap-3 text-xs text-darkText md:text-sm">
        <div className="flex gap-3 items-center md:gap-4">
          <div className="w-9 h-9 md:w-10 md:h-10">
            <img src="/university.png" alt="university" />
          </div>
          <div className="">
            <p className="inline-block sm:block">私立輔仁大學</p>
            <p className="inline-block ml-2 sm:block sm:m-0 ">
              應用美術系視覺傳達組
            </p>
            <p className="text-xs">2012 / 09 - 2015 / 07</p>
          </div>
        </div>
        <div className="flex gap-3 items-center md:gap-4">
          <div className="w-9 h-9 md:w-10 md:h-10">
            <img src="/industry.png" alt="university" />
          </div>
          <div>
            <p className="inline-block sm:block">資訊工業策進會</p>
            <p className="inline-block ml-2 sm:block sm:m-0">
              互動式網站設計班
            </p>
            <p className="text-xs">2018 / 04 - 2018 / 09</p>
          </div>
        </div>
      </div>
    </Area>
  );
};

export default Education;
