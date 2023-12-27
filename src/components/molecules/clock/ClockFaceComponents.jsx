export const renderClockFaceCell = ({ val, color }) => {
  return (
    <div className="container md:text-left m-1">
      <p className={`font-primary xxs:text-4xl lg:text-8xl text-${color} tracking-widest`}>{val}</p>
    </div>
  );
};

export const renderClockFaceLabel = ({ label, color }) => {
  return (
    <div className="container md:text-left m-1">
      <p className={`font-primary xxs:text-sm lg:text-lg text-${color} tracking-widest`}>{label}</p>
    </div>
  );
};
