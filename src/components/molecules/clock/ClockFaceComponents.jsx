export const renderClockFaceCell = ({ val, color }) => {
  return (
    <div className="container min-w-4 md:text-left my-1">
      <p className={`font-primary xxs:text-lg sm:text-2xl md:text-3xl lg:text-4xl text-${color} tracking-widest`}>{val}</p>
    </div>
  );
};

export const renderClockFaceLabel = ({ label, color }) => {
  return (
    <div className="container min-w-4 md:text-left my-1">
      <p className={`font-primary xxs:text-xs sm:text-xs lg:text-sm text-${color} tracking-widest`}>{label}</p>
    </div>
  );
};
