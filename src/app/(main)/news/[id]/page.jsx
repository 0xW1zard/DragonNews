import RightSideBar from '@/components/homepage/RightSideBar';
import { newsDetails } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';

export async function generateMetadata({ params }) {
    const slug = (await params)
   
    const post = await fetch(`https://openapi.programming-hero.com/api/news/${slug.id}`)
    const data = await post.json();
    const postData = data.data[0];
   
    return {
      title: postData.title,
      description: postData.description,
    }
  }

const NewsDetailsCard = async ({ params }) => {
    const { id } = await params;
    const newsItem = await newsDetails(id);
    const { title, image_url, details, category_id } = newsItem;

    return (
        <div className='container mx-auto grid grid-cols-12 gap-4'>
            <div className="card bg-base-100 p-8 rounded-none col-span-12 lg:col-span-9">
                <figure className="w-full">
                    <Image
                        src={image_url}
                        alt={title}
                        width={500}
                        height={500}
                        className="w-full rounded-md object-cover"
                    />
                </figure>
                <div className="mt-8 space-y-5">
                    <h2 className="text-2xl font-bold text-gray-800 leading-tight">
                        {title}
                    </h2>
                    <p className="text-gray-600 leading-7 text-justify whitespace-pre-line">
                        {details}
                    </p>
                    <div className="card-actions justify-start pt-4">
                        <Link
                            href={`/category/${category_id}`}
                            className="btn btn-secondary rounded-none bg-[#D72050] border-none text-white normal-case flex items-center gap-2 px-6"
                        >
                            <FaArrowLeft /> All news in this category
                        </Link>
                    </div>
                </div>
            </div>
            <div className="col-span-0 lg:col-span-3 hidden md:block">
                <RightSideBar></RightSideBar>
            </div>
        </div>
    );
};

export default NewsDetailsCard;