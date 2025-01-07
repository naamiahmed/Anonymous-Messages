import React from 'react';
import { Link } from 'react-router-dom';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex justify-between">
            <Link to="/" className="text-blue-600 hover:text-blue-800 font-semibold">
              Send Message
            </Link>
            <Link to="/messages" className="text-blue-600 hover:text-blue-800 font-semibold">
              View Messages
            </Link>
          </div>
        </div>
      </nav>
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  );
};