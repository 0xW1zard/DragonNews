import React from 'react';
import Marquee from 'react-fast-marquee';

const BreakingNews = () => {
    return (
        <div className='flex items-center gap-3 container mx-auto p-4 bg-base-300 my-2.5'>
            <button className='btn bg-pink-600 text-white'>Latest</button>
            <Marquee speed={65} pauseOnHover={true} >
                <p className='font-semibold text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed eos esse voluptate dolorum totam repellendus ipsa fugiat perspiciatis debitis maxime? Mollitia earum necessitatibus repudiandae ea officiis minus explicabo delectus quia.</p>
            </Marquee>
        </div>
    );
};

export default BreakingNews;