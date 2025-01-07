import axios from 'axios';

const API_URL = 'https://anonymous-messages.onrender.com';

export const submitMessage = async (message: string) => {
  const response = await axios.post(`${API_URL}/api/messages`, { message });
  return response.data;
};


export const getMessages = async () => {
  const response = await fetch('https://anonymous-messages.onrender.com/api/messages');
  if (!response.ok) {
    throw new Error('Failed to fetch messages');
  }
  return response.json();
};