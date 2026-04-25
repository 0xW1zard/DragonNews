import React from 'react';

const DetailsSkeleton = () => {
  return (
    <div className='grid grid-cols-12 gap-4 container mx-auto'>
      <div className="card bg-base-100 border border-gray-300 p-8 rounded-none animate-pulse col-span-9">
        {/* Image Skeleton */}
        <div className="w-full h-100 bg-gray-200 rounded-md"></div>

        <div className="mt-8 space-y-6">
          {/* Title Skeleton */}
          <div className="h-8 bg-gray-200 w-3/4 rounded"></div>

          {/* Text Paragraph Skeletons */}
          <div className="space-y-3">
            <div className="h-4 bg-gray-100 w-full rounded"></div>
            <div className="h-4 bg-gray-100 w-full rounded"></div>
            <div className="h-4 bg-gray-100 w-5/6 rounded"></div>
            <div className="h-4 bg-gray-100 w-full rounded"></div>
            <div className="h-4 bg-gray-100 w-4/6 rounded"></div>
          </div>

          <div className="space-y-3">
            <div className="h-4 bg-gray-100 w-full rounded"></div>
            <div className="h-4 bg-gray-100 w-full rounded"></div>
            <div className="h-4 bg-gray-100 w-3/4 rounded"></div>
          </div>

          {/* Button Skeleton */}
          <div className="h-12 w-48 bg-gray-200 rounded mt-4"></div>
        </div>
      </div>
      <div className="col-span-3 space-y-8">
        <div className="h-32 w-full bg-gray-100 animate-pulse rounded-lg"></div>
        <div className="h-48 w-full bg-gray-100 animate-pulse rounded-lg"></div>
      </div>
    </div>
  );
};

export default DetailsSkeleton;