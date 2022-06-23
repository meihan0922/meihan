const Area = ({
  title,
  children,
}: {
  title: string;
  children: JSX.Element;
}) => {
  return (
    <div className="text-darkText">
      <div className="flex gap-2 items-center font-bold mb-1 sm:mb-2 md:text-lg md:mb-3 ">
        <img src="/dots.svg" alt="dots" className="w-3 h-3 md:w-4 md:h-4" />
        <p className="text-metal">{title}</p>
      </div>
      <div className="ml-3">{children}</div>
    </div>
  );
};

export default Area;
