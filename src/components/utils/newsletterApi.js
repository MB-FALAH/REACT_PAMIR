// src/utils/newsletterApi.js
import axios from "axios";

const API = "http://localhost:5000/api/v1/newsletter";

// CREATE
export const subscribeNewsletter = async (email) => {
  try {
    const response = await axios.post(API, { email });
    return response.data;
  } catch (error) {
    console.error("Error subscribing to newsletter:", error);
    throw error;
  }
};

// READ
export const getSubscribers = async () => {
  try {
    const response = await axios.get(API);
    return response.data;
  } catch (error) {
    console.error("Error fetching subscribers:", error);
    throw error;
  }
};

// DELETE
export const deleteSubscriber = async (id) => {
  try {
    const response = await axios.delete(`${API}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting subscriber:", error);
    throw error;
  }
};
