export const ContentWrapper = ({ children }) => {
  return (
    <div id="content-wrapper" className="h-screen w-screen xxs:bg-none md:bg-leaves-lg bg-cover">
      {children}
    </div>
  );
};