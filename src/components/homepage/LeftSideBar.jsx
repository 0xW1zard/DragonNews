import Link from 'next/link';
import React from 'react';

const LeftSideBar = ({ data , activeId}) => {
  console.log(data);

    return (
        <div>
            <h2 className="font-semibold text-xl text-gray-700 mb-3">All Categories</h2>
            <ul className="space-y-2">
                {data.news_category.map((category) => (
                    <li className={`${activeId === category.category_id && 'bg-gray-300'} bg-base-200 text-center font-semibold text-md text-gray-600 rounded-md hover:bg-gray-200 transition duration-300`} key={category.category_id}>
                        <Link className='block p-3.5' href={`/category/${category.category_id}`}>{category.category_name}</Link>
                    </li>
                ))}
            </ul>
            
        </div>
    );
};

export default LeftSideBar;