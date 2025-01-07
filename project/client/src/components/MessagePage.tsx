import React, { useEffect, useState } from 'react';
import { getMessages } from '../services/api';
import toast from 'react-hot-toast';

interface Message {
  _id: string;
  content: string;
  timestamp: string;
}

export const Messages = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const data = await getMessages();
        setMessages(data);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
        toast.error('Failed to fetch messages');
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-xl">Loading messages...</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Anonymous Messages</h1>
      <div className="space-y-4">
        {messages.map((message) => (
          <div
            key={message._id}
            className="bg-white p-4 rounded-lg shadow"
          >
            <p className="text-gray-800">{message.content}</p>
            <p className="text-sm text-gray-500 mt-2">
              {new Date(message.timestamp).toLocaleString()}
            </p>
          </div>
        ))}
        {messages.length === 0 && (
          <p className="text-gray-500 text-center">No messages yet</p>
        )}
      </div>
    </div>
  );
};