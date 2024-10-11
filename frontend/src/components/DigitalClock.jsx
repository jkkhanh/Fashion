import React, { useState, useEffect } from 'react';

const DigitalClock = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        ngày: Math.floor(difference / (1000 * 60 * 60 * 24)),
        giờ: Math.floor((difference / (1000 * 60 * 60)) % 24),
        phút: Math.floor((difference / 1000 / 60) % 60),
        giây: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = { ngày: 0, giờ: 0, phút: 0, giây: 0 };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const formatTime = (value) => {
    // Đảm bảo luôn hiển thị 2 chữ số, ví dụ: 01, 02, 09, 10, 59
    return String(value).padStart(2, '0');
  };

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    timerComponents.push(
      <span key={interval} className={`mx-1 flex flex-col items-center`}>
        <span
          className={`text-2xl font-semibold flex justify-center items-center 
            ${interval === 'ngày' ? 'bg-red-500' : 
              interval === 'giờ' ? 'bg-blue-500' : 
              interval === 'phút' ? 'bg-green-500' : 'bg-yellow-500'} 
            text-white w-14 h-14 rounded-full text-center`}
        >
          {formatTime(timeLeft[interval])}
        </span>
        <span className="text-base font-semibold mt-2">{interval}</span>
      </span>
    );
  });

  return (
    <div className="flex justify-center items-center gap-2 p-2 rounded-lg shadow-md">
      {timerComponents.length ? timerComponents : <span>Đã hết thời gian, sự kiện kết thúc!</span>}
    </div>
  );
};

export default DigitalClock;
