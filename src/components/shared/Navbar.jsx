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
        <div className='container mx-auto my-3 px-4 md:px-0'>
            <div className="navbar flex justify-between items-center min-h-16 relative">
                
                {/* 1. LEFT SIDE: Dropdown on Mobile, Empty "Ghost" div on Desktop */}
                <div className="flex-1 lg:flex-none">
                    <div className="dropdown lg:hidden">
                        <div tabIndex={0} role="button" className="btn btn-ghost p-0">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> 
                            </svg>
                        </div>
                        <ul tabIndex="-1" className="flex flex-col dropdown-content bg-base-100 rounded-box z-20 mt-3 w-40 p-4 space-y-1 shadow">
                            {link}
                        </ul>
                    </div>
                    {/* This empty div helps maintain the flex balance on desktop if needed */}
                    <div className="hidden lg:block w-10"></div>
                </div>

                {/* 2. CENTER: Links (Absolutely Centered) */}
                <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2">
                    <ul className="flex items-center gap-8">
                        {link}
                    </ul>
                </div>

                {/* 3. RIGHT SIDE: User / Login (Pushed to the end) */}
                <div className="flex-1 lg:flex-none flex justify-end">
                    {user ? (
                        <div className="flex items-center gap-2 md:gap-4">
                            <h2 className='hidden md:block text-sm font-semibold text-gray-700'>
                                Hi, {user.name}
                            </h2>
                            <div className="shrink-0">
                                <Image
                                    src={user.image || User}
                                    alt="User Profile"
                                    width={40}
                                    height={40}
                                    className="w-10 h-10 rounded-full object-cover border border-gray-200"
                                />
                            </div>
                            <button 
                                onClick={async () => await authClient.signOut()} 
                                className="btn btn-sm md:btn-md bg-[#403F3F] hover:bg-[#2b2a2a] text-white rounded-none px-4 md:px-8 text-xs md:text-base font-semibold"
                            >
                                Log Out
                            </button>
                        </div>
                    ) : (
                        <div className="flex items-center gap-3">
                            <Link
                                href="/login"
                                className="btn btn-sm md:btn-md bg-[#403F3F] hover:bg-[#2b2a2a] text-white rounded-none px-10 font-semibold"
                            >
                                Login
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;