import React, { useState, useEffect } from 'react';
import { Send } from 'lucide-react';
import toast from 'react-hot-toast';
import { submitMessage } from '../services/api';

export const MessageForm = () => {
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [timeLeft, setTimeLeft] = useState<string | null>(null);

  useEffect(() => {
    checkSubmissionStatus();
    const interval = setInterval(checkSubmissionStatus, 60000); // Update every minute
    return () => clearInterval(interval);
  }, []);

  const checkSubmissionStatus = () => {
    const lastSubmission = localStorage.getItem('lastSubmission');
    if (lastSubmission) {
      const now = Date.now();
      const timeDiff = now - Number(lastSubmission);
      const waitTime = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

      if (timeDiff < waitTime) {
        const hoursLeft = Math.ceil((waitTime - timeDiff) / (1000 * 60 * 60));
        setTimeLeft(`You can submit again in ${hoursLeft} hours`);
      } else {
        setTimeLeft(null);
        localStorage.removeItem('lastSubmission');
      }
    } else {
      setTimeLeft(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) {
      toast.error('Please enter a message');
      return;
    }

    if (timeLeft) {
      toast.error(timeLeft);
      return;
    }

    setIsSubmitting(true);
    try {
      await submitMessage(message);
      localStorage.setItem('lastSubmission', Date.now().toString());
      toast.success('Message sent successfully!');
      setMessage('');
      checkSubmissionStatus();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg">
      {timeLeft && (
        <div className="mb-4 p-4 bg-yellow-50 text-yellow-800 rounded-lg">
          {timeLeft}
        </div>
      )}
      <div className="mb-4">
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none h-32"
          placeholder="Type your anonymous message here..."
          disabled={isSubmitting || !!timeLeft}
        />
      </div>
      <button
        type="submit"
        disabled={isSubmitting || !!timeLeft}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
        <Send size={20} />
      </button>
        <div className="w-full max-w-lg text-center mb-12">
          <p>
           <b> Once you send the message, you can again send a message after 24 hours.
           </b>
          </p>
        </div>
                  
      
    </form>
  );
};