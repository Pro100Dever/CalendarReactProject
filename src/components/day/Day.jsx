import React from 'react';
import Hour from '../hour/Hour';
import TodayLine from './TodayLine';

import './day.scss';

const Day = ({ dataDay, dayEvents, removeEvent }) => {
  const hours = Array(24)
    .fill()
    .map((val, index) => index);

  const isToday = dataDay === new Date().getDate();
  return (
    <div className="calendar__day" data-day={dataDay}>
      {isToday && <TodayLine />}
      {hours.map(hour => {
        const hourEvents = dayEvents.filter(event => event.dateFrom.getHours() === hour);

        return (
          <Hour
            key={dataDay + hour}
            dataHour={hour}
            hourEvents={hourEvents}
            removeEvent={removeEvent}
          />
        );
      })}
    </div>
  );
};

export default Day;
