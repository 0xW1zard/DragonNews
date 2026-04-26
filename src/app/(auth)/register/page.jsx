'use client';
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { use, useState } from 'react';
import { useForm } from 'react-hook-form';

const RegisterPage = () => {

    const [authError, setAuthError] = useState("");
    const [isSuccess, setIsSuccess] = useState(false);
    const router = useRouter();

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        const { name, photo, email, password } = data;

        const { data: res, error } = await authClient.signUp.email({
            name: name,
            email: email,
            password: password,
            image: photo,
            callbackURL: "/",
        });

        console.log(res, error); 

        if (error) {
            setAuthError(error.message || "Something went wrong. Please try again.");
            return;
        }

        if (res) {
            setIsSuccess(true);
            setTimeout(() => router.push("/"), 2000);
        }
    }

    return (
        <div className='min-h-screen flex items-center justify-center bg-[#F3F3F3] py-4 px-4'>

            <div className='bg-white p-6 md:p-10 w-full max-w-150 rounded-sm shadow-sm'>
                <h1 className='text-2xl font-bold text-[#403F3F] text-center mb-4'>
                    Register your account
                </h1>

                {authError && (
                    <div className="alert alert-warning rounded-none mb-4 py-2">
                        <span className="text-sm font-medium">{authError}</span>
                    </div>
                )}
                {isSuccess && (
                    <div className="alert alert-success rounded-none mb-4 py-2">
                        <span className="text-sm font-medium">Signup Successful! Redirecting...</span>
                    </div>
                )}

                <hr className='border-gray-200 mb-6' />

                <form className='space-y-3' onSubmit={handleSubmit(onSubmit)}>

                    <fieldset className="fieldset p-0 border-none">
                        <legend className="fieldset-legend text-lg font-semibold text-[#403F3F] mb-1 px-0">Your Name</legend>
                        <input
                            type="text"
                            className="input w-full bg-[#F3F3F3] border-none rounded-none h-11 px-4 focus:outline-none text-sm"
                            placeholder="Enter your name"
                            {...register("name", { required: "Name is required" })}
                        />
                        {
                            errors.text && (
                                <p className='text-red-500 text-sm mt-1'>
                                    {errors.text.message}
                                </p>
                            )
                        }
                    </fieldset>

                    <fieldset className="fieldset p-0 border-none">
                        <legend className="fieldset-legend text-lg font-semibold text-[#403F3F] mb-1 px-0">Photo URL</legend>
                        <input
                            type="text"
                            className="input w-full bg-[#F3F3F3] border-none rounded-none h-11 px-4 focus:outline-none text-sm"
                            placeholder="Enter your photo URL"
                            {...register("photo")}
                        />
                    </fieldset>

                    <fieldset className="fieldset p-0 border-none">
                        <legend className="fieldset-legend text-lg font-semibold text-[#403F3F] mb-1 px-0">Email</legend>
                        <input
                            type="email"
                            className="input w-full bg-[#F3F3F3] border-none rounded-none h-11 px-4 focus:outline-none text-sm"
                            placeholder="Enter your email address"
                            {...register("email", { required: "Email is required" })}
                        />
                        {
                            errors.email && (
                                <p className='text-red-500 text-sm mt-1'>
                                    {errors.email.message}
                                </p>
                            )
                        }
                    </fieldset>

                    <fieldset className="fieldset p-0 border-none">
                        <legend className="fieldset-legend text-lg font-semibold text-[#403F3F] mb-1 px-0">Password</legend>
                        <input
                            type="password"
                            className="input w-full bg-[#F3F3F3] border-none rounded-none h-11 px-4 focus:outline-none text-sm"
                            placeholder="Enter your password"
                            {...register("password", { required: "Password is required" })}
                        />
                        {
                            errors.password && (
                                <p className='text-red-500 text-sm mt-1'>
                                    {errors.password.message}
                                </p>
                            )
                        }
                    </fieldset>

                    <div className="flex items-center gap-3 mt-2">
                        <input
                            type="checkbox"
                            name="terms"
                            className="checkbox checkbox-xs rounded-none border-gray-400"
                            id="terms"
                        />
                        <label htmlFor="terms" className="text-[#706F6F] text-xs font-medium cursor-pointer">Accept <span className='font-bold'>Term & Conditions</span></label>
                    </div>

                    <div className="pt-2">
                        <button className="btn w-full bg-[#403F3F] hover:bg-[#2b2a2a] text-white rounded-none border-none h-12 text-md font-semibold">
                            Register
                        </button>
                    </div>
                </form>

                <p className='text-center mt-4 text-sm font-semibold text-[#706F6F]'>
                    Already Have An Account?
                    <Link href="/login" className='text-[#F75B5F] ml-1 hover:underline'>
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default RegisterPage;