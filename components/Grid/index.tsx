const Grid = ({ children }: { children: JSX.Element }) => {
  return (
    <div className="grid min-h-screen grid-cols-12 gap-3 p-4 sm:px-5 sm:py-5 md:gap-3 md:py-6 md:px-6 md:pb-8 md:max-w-7xl lg:px-16 lg:mx-auto">
      {children}
    </div>
  );
};

export default Grid;
