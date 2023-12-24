'use client';

import { useTimer } from 'react-timer-hook';
import { useState } from "react";
import { ClockFace } from "@/components/molecules/ClockFace";

export const Countdown = ({ expireOn }) => {
  const [isCountDownOver, setIsCountDownOver] = useState(false);

  const UNIT = {
    DAYS: 'DAYS',
    HOURS: 'HOURS',
    MINUTES: 'MINUTES',
    SECONDS: 'SECONDS',
  };

  const {
    totalSeconds,
    seconds,
    minutes,
    hours,
    days,
  } = useTimer({ autoStart: true, expiryTimestamp: expireOn, onExpire: () => setIsCountDownOver(true) });

  return (
    <div className="grid-item-container bg-white">
      { isCountDownOver ? (
        <>it be over</>
      ) : (
        <div>
          <ClockFace currentValue={days} type={UNIT.DAYS}></ClockFace>
          <ClockFace currentValue={seconds} type={UNIT.SECONDS}></ClockFace>
        </div>
      )}
    </div>
  );
};


