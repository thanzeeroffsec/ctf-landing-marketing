import React, { useState, useEffect } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownTimerProps {
  targetDate: Date;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex flex-row space-x-2 md:space-x-4 justify-center">
      <div className="timer-box">
        <div className="timer-number text-2xl md:text-5xl font-bold">
          {timeLeft.days}
        </div>
        <div className="timer-label text-xs md:text-base font-semibold">
          Days
        </div>
      </div>

      <div className="timer-box">
        <div className="timer-number text-2xl md:text-5xl font-bold">
          {timeLeft.hours}
        </div>
        <div className="timer-label text-xs md:text-base font-semibold">
          Hours
        </div>
      </div>

      <div className="timer-box">
        <div className="timer-number text-2xl md:text-5xl font-bold">
          {timeLeft.minutes}
        </div>
        <div className="timer-label text-xs md:text-base font-semibold">
          Minutes
        </div>
      </div>

      <div className="timer-box">
        <div className="timer-number text-2xl md:text-5xl font-bold">
          {timeLeft.seconds}
        </div>
        <div className="timer-label text-xs md:text-base font-semibold">
          Seconds
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
