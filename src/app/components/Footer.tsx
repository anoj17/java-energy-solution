import Link from 'next/link';
import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";

const Footer = () => {
    return <>

        <div className='bg-black/90 py-7 lg:py-10'>
            <div className='flex items-center space-x-5 justify-center flex-col'>
                <div className='flex items-center space-x-5 justify-center'>
                    <div className='p-1 rounded-full bg-yellow-500 text-white'>
                        <FaFacebookF size={20} />
                    </div>
                    <div className='p-1 rounded-full bg-yellow-500 text-white'>
                        <FaTwitter size={20} />
                    </div>
                    <div className='p-1 rounded-full bg-yellow-500 text-white'>
                        <FaYoutube size={20} />
                    </div>
                    <div className='p-1 rounded-full bg-yellow-500 text-white'>
                        <FaLinkedinIn size={20} />
                    </div>
                </div>
                <div className='flex items-center justify-center space-x-2 lg:space-x-6 py-5'>
                    <div className='flex items-center justify-center space-x-3'>

                        <Link href="/" className='block text-white border-b border-dotte text-[.7rem] lg:text-[.8rem] font-monts'>
                            About Us
                        </Link>
                        <div className='h-3 w-[2px] bg-white transform -skew-x-12'></div>
                    </div>
                    <div className='flex items-center justify-center space-x-3'>

                        <Link href="/" className='text-white border-b border-dotted text-[.7rem]  lg:text-[.8rem] font-monts'>
                            Construction Solutions Homepage
                        </Link>
                        <div className='h-3 w-[2px] bg-white transform -skew-x-12'></div>
                    </div>
                    <div className='flex items-center justify-center space-x-3'>

                        <Link href="/" className='text-white border-b border-dotted text-[.7rem]  lg:text-[.8rem] font-monts'>
                            Our Services
                        </Link>
                        <div className='h-3 w-[2px] bg-white transform -skew-x-12'></div>
                    </div>
                    <div className='flex items-center justify-center'>

                        <Link href="/" className='text-white border-b border-dotted text-[.7rem]  lg:text-[.8rem] font-monts'>
                            Sample Page
                        </Link>
                    </div>
                </div>
                <div className='text-white text-[.8rem] font-monts'>
                    <h1>Copyright &copy; 2024 Java Energy Solution . All rights reserved. Powered by
                        <span className='border-b border-doted'> WordPress</span> & Designed by <span className='border-b border-doted'>Bizberg Themes</span>
                    </h1>
                </div>
            </div>
        </div>

    </>
}

export default Footer