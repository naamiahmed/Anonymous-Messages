import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { MessageForm } from './components/MessageForm';
import { Messages } from './components/MessagePage';
import { MessageCircle, Send, Mail } from 'lucide-react';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex flex-col">
        <Toaster position="top-right" />
        
        <nav className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <MessageCircle size={24} className="text-blue-600" />
                <span className="text-xl font-bold text-gray-900">Anonymous Messages</span>
              </div>
              <div className="flex gap-4">
                <Link to="/" className="flex items-center gap-2 text-blue-600 hover:text-blue-800">
                  <Send size={20} />
                  <span>Send</span>
                </Link>
              </div>
            </div>
          </div>
        </nav>

        <div className="flex flex-col items-center py-12 px-4 flex-grow">
          <Routes>
            <Route path="/" element={
              <>
                <div className="w-full max-w-lg text-center mb-12">
                  <p className="text-gray-600">
                    Share your thoughts freely. Your message will be stored anonymously.
                  </p>
                </div>
                <MessageForm />
              </>
            } />
            <Route path="/messages" element={<Messages />} />
          </Routes>
        </div>

        <footer className="w-full py-4 bg-white shadow-sm mt-auto">
            <div className="max-w-7xl mx-auto px-4 text-center flex items-center justify-center gap-2 text-gray-600">
            <span>Developed by <b>Naami Ahmed</b></span>
            <a href="mailto:naamiahmed27@gmail.com" className="flex items-center gap-1 text-blue-600 hover:text-blue-800">
              <Mail size={16} className="text-blue-600" />
            </a>
            </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;