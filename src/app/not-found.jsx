import Link from 'next/link';
import React from 'react';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4 text-center">
      <div className="max-w-md">
        <h1 className="text-9xl font-extrabold text-gray-200">404</h1>
        
        <div className="relative mt-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Oops! This story hasn't been written yet.
          </h2>
          <p className="text-gray-500 mb-8">
            The news article or category you are looking for doesn't exist or has been moved to our archives.
          </p>
          
          <Link 
            href="/" 
            className="btn bg-pink-600 text-white px-8 rounded-none normal-case text-lg shadow-lg hover:shadow-xl transition-all"
          >
            Return to Homepage
          </Link>
        </div>

        <div className="mt-12 flex justify-center gap-4 opacity-20">
          <div className="h-1 w-20 bg-gray-400"></div>
          <div className="h-1 w-4 bg-gray-400"></div>
          <div className="h-1 w-1 bg-gray-400"></div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;