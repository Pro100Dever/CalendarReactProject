const baseUrl = 'https://61442ecc411c860017d25316.mockapi.io/api/v1/users/Calendar';

export const sendEventToApi = eventData =>
  fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(eventData),
  }).then(response => {
    if (!response.ok) {
      throw new Error("Internal Server Error. Can't display events");
    }
  });

export const fetchEvents = () =>
  fetch(baseUrl).then(res => {
    if (res.ok) {
      return res.json();
    }
    return res;
  });

export const deleteEvent = eventId =>
  fetch(`${baseUrl}/${eventId}`, {
    method: 'DELETE',
  }).then(response => {
    if (!response.ok) {
      throw new Error("Internal Server Error. Can't delete event");
    }
  });