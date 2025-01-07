import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { MessageForm } from './components/MessageForm';
import { Messages } from './components/MessagePage';
import { MessageCircle, Send,  } from 'lucide-react';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
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
                {/* <Link to="/messages" className="flex items-center gap-2 text-blue-600 hover:text-blue-800">
                  <List size={20} />
                  <span>View messages</span>
                </Link> */}
              </div>
            </div>
          </div>
        </nav>

        <div className="flex flex-col items-center py-12 px-4">
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
      </div>
    </BrowserRouter>
  );
}

export default App;