export const CardContainer = ({ children, id }) => {
  return (
    <div id={`${id}-card-container`} className="h-full w-full flex justify-center items-center">
      <div id={`${id}-card`} className="flex flex-col md:flex-row md:shadow-lg rounded overflow-hidden ">
        {children}
      </div>
    </div>
  );
};