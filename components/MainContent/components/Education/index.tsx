import Area from "../Area";

const Education = () => {
  return (
    <Area title="Education">
      <div className="flex flex-col gap-3 text-sm text-darkText">
        <div className="flex gap-4 items-center">
          <div className="w-10 h-10">
            <img src="/university.png" alt="university" />
          </div>
          <div>
            <p>私立輔仁大學</p>
            <p>應用美術系視覺傳達組</p>
            <p className="text-xs">2012 / 09 -- 2015 / 07</p>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <div className="w-10 h-10">
            <img src="/industry.png" alt="university" />
          </div>
          <div>
            <p>資訊工業策進會</p>
            <p>互動式網站設計班</p>
            <p className="text-xs">2018 / 04 -- 2018 / 09</p>
          </div>
        </div>
      </div>
    </Area>
  );
};

export default Education;
