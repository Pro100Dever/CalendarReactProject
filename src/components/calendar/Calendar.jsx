import React from 'react';
import Navigation from '../navigation/Navigation';
import Week from '../week/Week';
import Sidebar from '../sidebar/Sidebar';

import './calendar.scss';

const Calendar = ({ weekDates, eventsList, removeEvent }) => (
  <section className="calendar">
    <Navigation weekDates={weekDates} />
    <div className="calendar__body">
      <div className="calendar__week-container">
        <Sidebar />
        <Week weekDates={weekDates} events={eventsList} removeEvent={removeEvent} />
      </div>
    </div>
  </section>
);

export default Calendar;