'use client';
import { useTimer } from 'react-timer-hook';
import { useState } from "react";
import { ClockFace } from "@/components/molecules/clock/ClockFace";

export const Clock = ({ expireOn }) => {
  const [isCountDownOver, setIsCountDownOver] = useState(false);

  const UNIT = {
    DAYS: 'DAYS',
    HOURS: 'HOURS',
    MINUTES: 'MINUTES',
    SECONDS: 'SECONDS',
  };

  const {
    days: IN_DAYS,
    hours: IN_HOURS,
    minutes: IN_MINUTES,
    seconds: IN_SECONDS,
  } = useTimer({ autoStart: true, expiryTimestamp: expireOn, onExpire: () => setIsCountDownOver(true) });

  return (
    <>
      { isCountDownOver ? (
        <>it be over</>
      ) : (
        <div id="clock-container" className="text-center flex justify-center md:justify-start p-8">
          <div className="flex md:gap-2 md:flex-col">
            <ClockFace currentValue={IN_DAYS} type={UNIT.DAYS}></ClockFace>
            <ClockFace currentValue={IN_HOURS} type={UNIT.HOURS}></ClockFace>
            <ClockFace currentValue={IN_MINUTES} type={UNIT.MINUTES}></ClockFace>
            <ClockFace currentValue={IN_SECONDS} type={UNIT.SECONDS}></ClockFace>
          </div>
        </div>
      )}
    </>
  );
};
