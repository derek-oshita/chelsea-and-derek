
// days will always maintain 3
// hours will always maintain 2
// minutes will always maintain 2
// seconds will always maintain length of 2


export const ClockFace = ({ type, currentValue }) => {
  const currentLength = currentValue.toString().length;
  const PERSISTED_LENGTH = {
    DAYS: 3,
    HOURS: 2,
    MINUTES: 2,
    SECONDS: 2,
  };
  const CLOCK = {
    [type]: {
      id: type,
      currentValue,
      currentLength,
      persistedStringLength: PERSISTED_LENGTH[type]
    },
  };

  const renderClockFaceByType = ({ id, currentValue, currentLength, persistedStringLength }) => {
    return (
      <div>
        <p>{id}</p>
        <p>{currentValue}</p>
      </div>
    );
    
  };

  return (
    <div>
      {renderClockFaceByType(CLOCK[type])}
    </div>
  );
};