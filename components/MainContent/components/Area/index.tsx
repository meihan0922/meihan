const Area = ({
  title,
  children,
}: {
  title: string;
  children: JSX.Element;
}) => {
  return (
    <div className="text-darkText">
      <div className="flex gap-2 text-lg mb-2.5 font-bold">
        <img src="/dots.svg" alt="dots" width={20} height={20} />
        <p className="text-metal">{title}</p>
      </div>
      <div className="ml-3">{children}</div>
    </div>
  );
};

export default Area;
