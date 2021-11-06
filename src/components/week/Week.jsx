import React from 'react';
import Day from '../day/Day';

import './week.scss';

const Week = ({ weekDates, events, removeEvent }) => (
  <div className="calendar__week">
    {weekDates.map(dayStart => {
      const dayEnd = new Date(dayStart.getTime()).setHours(dayStart.getHours() + 24);

      const dayEvents = events.filter(
        event => event.dateFrom >= dayStart && event.dateTo <= dayEnd,
      );

      return (
        <Day
          key={dayStart.getDate()}
          dataDay={dayStart.getDate()}
          dayEvents={dayEvents}
          removeEvent={removeEvent}
        />
      );
    })}
  </div>
);

export default Week;