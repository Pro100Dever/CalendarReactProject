import React from "react";
import "./event.scss";

const EventDeleteModal = ({ removeEvent, id }) => (
  <button className="delete-event-btn" onClick={() => removeEvent(id)}>
    Delete
  </button>
);

export default EventDeleteModal;