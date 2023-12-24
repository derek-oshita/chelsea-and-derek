
export const BackgroundImage = ({ children }) => {
  return (
    <div className="bg-hero bg-cover h-screen w-screen z-0" >
      {{ ...children }}
    </div>
  );
};