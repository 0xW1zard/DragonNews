import Image from 'next/image';
import React from 'react';
import { FaGoogle, FaGithub, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import swimming from '@/assets/swimming.png';
import classImg from '@/assets/class.png';
import playground from '@/assets/playground.png';
import bg from '@/assets/bg.png';



const RightSideBar = () => {
    return (
        <aside className="space-y-8">
            {/* Login Section */}
            <div>
                <h2 className="font-bold text-xl mb-4 text-gray-800">Login With</h2>
                <div className="space-y-2">
                    <button className="btn btn-primary btn-outline w-full normal-case flex items-center gap-2">
                        <FaGoogle /> Login with Google
                    </button>
                    <button className="btn btn-outline w-full normal-case flex items-center gap-2">
                        <FaGithub /> Login with Github
                    </button>
                </div>
            </div>

            {/* Find Us On Section */}
            <div>
                <h2 className="font-bold text-xl mb-4 text-[#403F3F]">Find Us On</h2>
                <div className="flex flex-col border border-gray-300 rounded-md">
                    <a href="#" className="flex items-center gap-3 p-4 border-b border-b-gray-300 hover:bg-gray-50 transition">
                        <span className="bg-gray-100 p-2 rounded-full text-blue-600"><FaFacebookF /></span>
                        <span className="text-gray-600 font-medium">Facebook</span>
                    </a>
                    <a href="#" className="flex items-center gap-3 p-4 border-b border-b-gray-300 hover:bg-gray-50 transition">
                        <span className="bg-gray-100 p-2 rounded-full text-sky-400"><FaTwitter /></span>
                        <span className="text-gray-600 font-medium">Twitter</span>
                    </a>
                    <a href="#" className="flex items-center gap-3 p-4 hover:bg-gray-50 transition">
                        <span className="bg-gray-100 p-2 rounded-full text-pink-500"><FaInstagram /></span>
                        <span className="text-gray-600 font-medium">Instagram</span>
                    </a>
                </div>
            </div>

            {/* Q-Zone Section */}
            <div className="bg-gray-100 p-4 rounded-lg">
                <h2 className="font-bold text-xl mb-6 text-gray-800">Q-Zone</h2>
                <div className="space-y-8">
                    <div className="text-center">
                        <Image src={swimming} alt="Swimming" className="mx-auto w-full" />
                        <p className="mt-2 font-semibold text-gray-600">Swimming</p>
                    </div>
                    <div className="text-center">
                        <Image src={classImg} alt="Class" className="mx-auto w-full" />
                        <p className="mt-2 font-semibold text-gray-600">Class</p>
                    </div>
                    <div className="text-center">
                        <Image src={playground} alt="Playground" className="mx-auto w-full" />
                        <p className="mt-2 font-semibold text-gray-600">Playground</p>
                    </div>
                </div>
            </div>

            {/* Promo Banner Section */}
            <div>
                <Image className='mx-auto w-full' src={bg} alt="Promo Banner" />
            </div>
        </aside>
    );
};

export default RightSideBar;