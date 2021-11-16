import React, { useState } from 'react';

import './event.scss';

const Event = ({ height, marginTop, title, time, id, removeEvent }) => {
  const eventStyle = {
    height,
    marginTop,
  };
  const [isShowModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(!isShowModal);
  };

  return (
    <div style={eventStyle} className="event" onClick={toggleModal}>
      <div className="event__title">{title}</div>
      <div className="event__time">{time}</div>
      {isShowModal && (
        <button className="delete-event-btn" onClick={() => removeEvent(id)}>
          Delete
        </button>
      )}
    </div>
  );
};

export default Event;
