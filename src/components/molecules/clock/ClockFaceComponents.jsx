export const renderClockFaceCell = ({ val, color }) => {
  return (
    <div className="container md:text-left my-1">
      <p className={`font-primary xxs:text-2xl lg:text-4xl text-${color} tracking-widest`}>{val}</p>
    </div>
  );
};

export const renderClockFaceLabel = ({ label, color }) => {
  return (
    <div className="container md:text-left my-1">
      <p className={`font-primary xxs:text-xs lg:text-sm text-${color} tracking-widest`}>{label}</p>
    </div>
  );
};
