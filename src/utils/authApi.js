import api from "../axios/api";

export const registerUser = async (data) => {
  try {
    const res = await api.post("/users/register", data);

    return res.data; 
  } catch (error) {
    throw error; 
  }
};

export const loginUser = async(data) => {
    try {
        const res = await api.post("/users/login", data)
        return res.data; 
    } catch (error) {
        throw error;
    }
}

export const logoutUser = async(data) => {
    try {
        const res = await api.post("/users/logout", data) 
    } catch (error) {
        throw error;
    }
}

export const getUser = async() => {
    try {
        const res = await api.get("/users/me") 
        
        return res.data;
    } catch (error) {
        throw error;
    }
}