
export const BackgroundImage = ({ children }) => {
  return (
    <div id="background-image" className="bg-hero bg-cover h-screen w-screen z-0" >
      {children}
    </div>
  );
};