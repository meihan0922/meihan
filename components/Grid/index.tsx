const Grid = ({ children }: { children: JSX.Element }) => {
  return (
    <div className="grid min-h-screen grid-cols-12 gap-6 px-5 py-8 md:pb-8 sm:px-5 md:px-14 lg:px-16 lg:mx-auto md:max-w-7xl">
      {children}
    </div>
  );
};

export default Grid;
