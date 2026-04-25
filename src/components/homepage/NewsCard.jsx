import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaRegBookmark, FaShareAlt, FaStar, FaEye } from 'react-icons/fa';

const NewsCard = ({ news }) => {
  const { title, author, image_url, details, rating, total_view } = news;

  return (
    <div className="card bg-base-100 border border-gray-300 rounded-none mb-8">
      <div className="flex justify-between items-center bg-gray-100 p-4">
        <div className="flex items-center gap-3">
          <Image
            src={author?.img}
            alt={author?.name || "Author Image"}
            width={100}
            height={100}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <p className="font-semibold text-gray-800 text-sm">{author?.name || "Unknown Author"}</p>
            <p className="text-xs text-gray-500">{author?.published_date || "2022-08-21"}</p>
          </div>
        </div>
        <div className="flex gap-3 text-gray-500">
          <FaRegBookmark className="cursor-pointer hover:text-blue-600" />
          <FaShareAlt className="cursor-pointer hover:text-blue-600" />
        </div>
      </div>


      <div className="p-5 space-y-4">
        <h2 className="card-title font-bold text-xl text-gray-800 leading-7">
          {title}
        </h2>

        <figure className="relative h-fit w-full">
          <Image
            src={image_url}
            alt="News Thumbnail"
            width={500}
            height={500}
            className="w-full h-full object-cover rounded-md"
          />
        </figure>

        <p className="text-gray-600 text-sm leading-6 line-clamp-3">
          {details}
        </p>
        <Link href={`/news/${news._id}`} className="inline-block">
          <button className="btn bg-transparent text-[#FF8C47] border-[#FF8C47] hover:bg-[#FF8C47] hover:text-white">
            Read More
          </button>
        </Link>

        <hr className="border-gray-200" />

        <div className="flex justify-between items-center py-2">
          <div className="flex items-center gap-2">
            <div className="flex text-orange-400">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <span className="text-gray-600 font-medium text-sm">{rating?.number}</span>
          </div>

          <div className="flex items-center gap-2 text-gray-500">
            <FaEye />
            <span className="text-sm font-medium">{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;