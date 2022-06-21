import Area from "../Area";

const Others = () => {
  const allSkills = [
    { time: "2014", txt: "時報金犢獎 平面廣告 優勝" },
    { time: "2013", txt: "時報金犢獎 平面廣告 入圍" },
    { time: "2018", txt: "為”轉”一書(秀威出版社)繪製隨書插畫" },
  ];
  return (
    <Area title="Others">
      <>
        {allSkills.map((i, idx) => (
          <div key={i.txt} className="mb-1 flex text-sm text-darkText">
            <p className="mr-2">{i.time}</p>
            <p>{i.txt}</p>
          </div>
        ))}
      </>
    </Area>
  );
};

export default Others;
