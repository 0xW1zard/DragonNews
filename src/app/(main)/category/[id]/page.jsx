import LeftSideBar from '@/components/homepage/LeftSideBar';
import NewsCard from '@/components/homepage/NewsCard';
import RightSideBar from '@/components/homepage/RightSideBar';
import { category, newsByCategory } from '@/lib/data';
import Link from 'next/link';
import React from 'react';

export const metadata = {
    title: 'Dragon News - Category',
    description: 'Get The Latest News on Dragon News - Your Trusted Source for Breaking News, In-Depth Analysis, and Exclusive Stories. Stay Informed with Dragon News Today!',
  }
 
  
const newsCategory = async ({ params }) => {
    const Newsid = await params;
    const data = await category();
    const news = await newsByCategory(Newsid.id);
    
    return (
        <div className="container mx-auto grid grid-cols-12 gap-4 px-4 md:px-0">
            <div className="hidden md:block md:col-span-4 lg:col-span-3">
                <LeftSideBar data={data} activeId={Newsid.id} />
            </div>

            <div className="col-span-12 md:col-span-8 lg:col-span-6">
                <h2 className="text-[#403F3F] font-bold text-xl mb-6">Dragon News Home</h2>
                
                {/* Mobile Category Selector (Optional enhancement) */}
                <div className="md:hidden mb-6 overflow-x-auto">
                    <div className="flex gap-2 pb-2">
                        {data.news_category.map((cat) => (
                            <Link 
                                key={cat.category_id}
                                href={`/category/${cat.category_id}`}
                                className={`whitespace-nowrap px-4 py-2 rounded-none text-sm ${Newsid.id === cat.category_id ? 'bg-[#D72050] text-white' : 'bg-gray-100'}`}
                            >
                                {cat.category_name}
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="space-y-6">
                    {news.map((item) => <NewsCard key={item._id} news={item} />)}
                </div>
            </div>

            <div className="col-span-0 md:col-span-3 hidden md:block">
                    <RightSideBar></RightSideBar>
            </div>

        </div>
    );
};

export default newsCategory;