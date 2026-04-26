'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import User from '@/assets/user.png';
import NavLink from './NavLink';
import { authClient } from '@/lib/auth-client';

const Navbar = () => {

    const { data: session } = authClient.useSession();
    const user = session?.user;

    const link = <>
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
                            className="flex flex-col dropdown-content bg-base-100 rounded-box z-20 mt-3 w-28  p-4 space-y-1 shadow">
                            {link}
                        </ul>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex items-center gap-8 px-1">
                        {link}
                    </ul>
                </div>
                {
                    user ?

                        <div className="navbar-end flex items-center justify-end gap-2 md:gap-4 w-full">
                            <h2 className='hidden md:block text-sm lg:text-lg font-semibold text-gray-700 truncate max-w-25 lg:max-w-none'>
                                Hi, {user.name}
                            </h2>

                            <div className="shrink-0">
                                <Image
                                    src={user.image || User} 
                                    alt="User Profile"
                                    width={40}
                                    height={40}
                                    className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover border border-gray-200"
                                />
                            </div>
                            <Link
                                onClick={async () => await authClient.signOut()}
                                href="/"
                                className="btn btn-sm md:btn-md bg-[#403F3F] hover:bg-[#2b2a2a] text-white rounded-none px-4 md:px-10 text-xs md:text-base transition-all"
                            >
                                Log Out
                            </Link>
                        </div>
                        :
                        <div className="navbar-end flex">
                            <Link
                                href="/login"
                                className="btn btn-sm md:btn-md bg-[#403F3F] hover:bg-[#2b2a2a] text-white rounded-none px-4 md:px-10 text-xs md:text-base transition-all"
                            >
                                Login
                            </Link>
                        </div>
                }

            </div>
        </div>
    );
};

export default Navbar;