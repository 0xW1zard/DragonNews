import LeftSideBar from '@/components/homepage/LeftSideBar';
import NewsCard from '@/components/homepage/NewsCard';
import RightSideBar from '@/components/homepage/RightSideBar';
import { catagory, newsByCategory } from '@/lib/data';
import React from 'react';

const newsCategory = async ({ params }) => {
    const Newsid = await params;
    const data = await catagory();
    const news = await newsByCategory(Newsid.id);
    
    return (
        <div className="container mx-auto grid grid-cols-12 gap-4">
            <div className="col-span-3">
                <LeftSideBar data={data} activeId={Newsid.id} />
            </div>

            <div className="col-span-6">
                <h2 className="text-[#403F3F] font-bold text-xl mb-4">Dragon News Home</h2>
                <div>
                    {
                        news.map((item) => <NewsCard key={item._id} news={item} />)
                    }
                </div>
            </div>

            <div className="col-span-3">
                <div>
                    <RightSideBar></RightSideBar>
                </div>
            </div>

        </div>
    );
};

export default newsCategory;