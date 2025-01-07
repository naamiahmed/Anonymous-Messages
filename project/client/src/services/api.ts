import axios from 'axios';

const API_URL = 'http://localhost:3000';

export const submitMessage = async (message: string) => {
  const response = await axios.post(`${API_URL}/api/messages`, { message });
  return response.data;
};


export const getMessages = async () => {
  const response = await fetch('http://localhost:3000/api/messages');
  if (!response.ok) {
    throw new Error('Failed to fetch messages');
  }
  return response.json();
};