import React from 'react';

const Loading = () => {
  return (
    <div className="container mx-auto grid grid-cols-12 gap-6 my-10">
      <div className="col-span-3 space-y-4">
        <div className="h-8 w-3/4 bg-gray-200 animate-pulse rounded"></div>
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="h-12 w-full bg-gray-100 animate-pulse rounded-md"></div>
        ))}
      </div>

      <div className="col-span-6 space-y-8">
        <div className="h-8 w-1/2 bg-gray-200 animate-pulse rounded mb-6"></div>
        {[1, 2].map((i) => (
          <div key={i} className="border border-gray-300 rounded-none overflow-hidden">
            <div className="h-16 bg-gray-100 animate-pulse"></div>
            <div className="p-5 space-y-4">
              <div className="h-6 w-full bg-gray-200 animate-pulse"></div>
              <div className="h-6 w-2/3 bg-gray-200 animate-pulse"></div>
              <div className="h-60 w-full bg-gray-100 animate-pulse rounded-lg"></div>
              <div className="h-4 w-full bg-gray-200 animate-pulse"></div>
              <div className="h-4 w-5/6 bg-gray-200 animate-pulse"></div>
            </div>
          </div>
        ))}
      </div>

      <div className="col-span-3 space-y-8">
        <div className="h-32 w-full bg-gray-100 animate-pulse rounded-lg"></div>
        <div className="h-48 w-full bg-gray-100 animate-pulse rounded-lg"></div>
      </div>
    </div>
  );
};

export default Loading;