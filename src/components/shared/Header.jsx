import React from 'react';
import logo from '@/assets/logo.png';
import Image from 'next/image';
import { format } from "date-fns";


const Header = () => {
    return (
        <div className='py-6 space-y-3'>
            <div className='w-fit text-center mx-auto'>
                <Image src={logo} alt="Logo" width={300} height={200} className='mx-auto' />
                <p className='text-gray-600'>Journalism Without Fear or Favour</p>
                <h3>{format(new Date(), "EEEE, MMM dd, yyy")}</h3>
            </div>
        </div>

    );
};

export default Header;