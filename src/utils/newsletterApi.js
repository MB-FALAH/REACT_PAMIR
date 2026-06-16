import axios from "axios";

const API = "http://localhost:5000/api/v1/newsletter";

// CREATE
export const subscribeNewsletter = async (email) => {
  const { data } = await axios.post(
    `${API}/subscribe`,
    { email }
  );

  return data;
};

// GET
export const getSubscribers = async () => {
  const { data } = await axios.get(
    `${API}/subscribers`
  );

  return data;
};

// DELETE ALL
export const clearSubscribers = async () => {
  const { data } = await axios.delete(
    `${API}/clear-subscribers`
  );

  return data;
};