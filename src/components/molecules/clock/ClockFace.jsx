import { renderClockFaceCell, renderClockFaceLabel } from "@/components/molecules/clock/ClockFaceComponents";

export const ClockFace = ({ type, currentValue }) => {
  const CLOCK = { [type]: { id: type, val: currentValue, }, };

  const renderClockFace = ({ id, val }) => {
    return (
      <div className="bg-clock-border clock-face-container">
        {renderClockFaceCell({ val })}
        {renderClockFaceLabel({ label: id })}
      </div>
    );
  };

  return renderClockFace(CLOCK[type]);
};