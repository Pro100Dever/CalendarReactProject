import React from 'react';

const TodayLine = () => {
  let currentHour = new Date().getHours();
  let currentMinute = new Date().getMinutes();

  const [lineHeight, setLineHeight] = React.useState({
    top: `${currentHour * 60 + currentMinute}px`,
  });

  React.useEffect(() => {
    const currentTimeout = setInterval(() => {
      currentHour = new Date().getHours();
      currentMinute = new Date().getMinutes();

      setLineHeight({ top: `${currentHour * 60 + currentMinute}px` });
    }, 60000);

    return () => {
      clearInterval(currentTimeout);
    };
  }, []);

  return (
    <div className="current-day-line" style={lineHeight}>
      <i className="fas fa-caret-right current-day-line__triangle"></i>
      <i className="fas fa-caret-left current-day-line__triangle"></i>
    </div>
  );
};

export default TodayLine;