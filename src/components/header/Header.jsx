import React from "react";

import { months } from "../../utils/dateUtils.js";

import "./header.scss";

const Header = ({ weekDates, goPrevWeek, goNextWeek, goToday, showModal }) => {
  let displayedMonth;
  if (weekDates[0].getMonth() === weekDates[weekDates.length - 1].getMonth()) {
    displayedMonth = months[weekDates[0].getMonth()];
  } else {
    displayedMonth = `${months[weekDates[0].getMonth()]} - ${
      months[weekDates[weekDates.length - 1].getMonth()]
    }`;
  }

  return (
    <header className="header">
      <button className="button create-event-btn" onClick={showModal}>
        <i className="fas fa-plus create-event-btn__icon"></i>Create
      </button>
      <div className="navigation">
        <button className="navigation__today-btn button" onClick={goToday}>
          Today
        </button>
        <button
          className="icon-button navigation__nav-icon"
          onClick={goPrevWeek}
        >
          <i className="fas fa-chevron-left"></i>
        </button>
        <button
          className="icon-button navigation__nav-icon"
          onClick={goNextWeek}
        >
          <i className="fas fa-chevron-right"></i>
        </button>
        <span className="navigation__displayed-month">{displayedMonth}</span>
      </div>
    </header>
  );
};

export default Header;