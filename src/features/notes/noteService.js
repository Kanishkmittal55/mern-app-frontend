import axios from "axios";

const API_URL = "https://mern-task-app-api-d5py.onrender.com/api/tickets/";

// Get ticket Notes
const getNotes = async (ticketId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };

  const response = await axios.get(API_URL + ticketId + "/notes", config);

  return response.data;
};

// create ticket note service
const createNote = async (noteText, ticketId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };

  const response = await axios.post(
    API_URL + ticketId + "/notes",
    { text: noteText },
    config
  );

  return response.data;
};

const noteService = {
  getNotes,
  createNote
};

export default noteService;
