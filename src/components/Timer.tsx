import React, { useEffect, useState } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const eventDate = new Date('2024-10-19T00:00:00Z').getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = eventDate - now;

      if (distance <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center py-12 bg-red-600 text-white">
      <h2 className="text-3xl font-bold">The Big Day is Almost Here!</h2>
      <p className="mt-4 text-lg">Get ready for UFC 308. The countdown has begun!</p>
      <div className="mt-8 flex justify-center space-x-4">
        <div className="bg-white text-red-600 px-4 py-2 rounded-lg">
          <span className="text-2xl font-bold">{timeLeft.days}</span>
          <p className="text-sm">Days</p>
        </div>
        <div className="bg-white text-red-600 px-4 py-2 rounded-lg">
          <span className="text-2xl font-bold">{timeLeft.hours}</span>
          <p className="text-sm">Hours</p>
        </div>
        <div className="bg-white text-red-600 px-4 py-2 rounded-lg">
          <span className="text-2xl font-bold">{timeLeft.minutes}</span>
          <p className="text-sm">Minutes</p>
        </div>
        <div className="bg-white text-red-600 px-4 py-2 rounded-lg">
          <span className="text-2xl font-bold">{timeLeft.seconds}</span>
          <p className="text-sm">Seconds</p>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
