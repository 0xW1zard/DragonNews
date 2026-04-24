import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import User from '@/assets/user.png';
import NavLink from './NavLink';

const Navbar = () => {

    const link =<>
    <li><NavLink href="/">Home</NavLink></li>
    <li><NavLink href="/about">About</NavLink></li>
    <li><NavLink href="/career">Career</NavLink></li>
    </>
    return (
        <div className='container mx-auto my-3'>
            <div className="navbar ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {link}
                        </ul>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {link}
                    </ul>
                </div>
                <div className="navbar-end flex">
                    <div>
                        <Image src={User} alt="User" className="w-10 h-10 rounded-full" />
                    </div>
                    <button><Link href="/login" className="btn bg-[#403F3F] text-white rounded-none px-10 ml-2 -mr-2">Login</Link></button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;