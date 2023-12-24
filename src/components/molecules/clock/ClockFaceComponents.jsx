import Image from "next/image";

export const renderClockFaceCell = ({ val }) => {
  return (
    <div className="container text-center">
      <p className="font-primary text-4xl text-white tracking-widest">{val}</p>
    </div>
  );
};

export const renderClockFaceLabel = ({ label }) => {
  return (
    <div className="container text-center">
      <p className="font-primary text-xs text-white tracking-widest">{label}</p>
    </div>
  );
};

export const renderClockFaceDivider = () => {
  return(
    <div className="container text-center w-1/2">
      <Image src="/geometric-divider.svg"
        alt="geometric-divider"
        style={{ width: '100%', height: 'auto' }}
        width={0}
        height={0}
      />
    </div>
  );
};
