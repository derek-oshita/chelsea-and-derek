export const ContentWrapper = ({ children }) => {
  return (
    <div id="content-wrapper" className="h-screen w-screen xxs:bg-none md:bg-leaves-lg 3xl:bg-leaves-3xl bg-no-repeat">
      {children}
    </div>
  );
};