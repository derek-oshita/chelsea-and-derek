import { renderClockFaceCell, renderClockFaceLabel } from "@/components/molecules/clock/ClockFaceComponents";

export const ClockFace = ({ type, currentValue }) => {
  const CLOCK = { [type]: { label: type, val: currentValue, }, };
  const color = 'black';

  const renderClockFace = ({ label, val }) => {
    return (
      <div>
        {renderClockFaceCell({ val, color })}
        {renderClockFaceLabel({ label, color })}
      </div>
    );
  };

  return renderClockFace(CLOCK[type]);
};