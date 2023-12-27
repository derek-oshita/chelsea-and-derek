
export const BackgroundImage = ({ children, image }) => {
  return (
    <div id="background-image" className={`bg-${image} h-screen w-screen z-0`} >
      {children}
    </div>
  );
};