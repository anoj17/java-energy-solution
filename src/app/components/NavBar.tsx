"use client";

import React, { useState } from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaMobileAlt } from "react-icons/fa";
import { FaRegCommentAlt } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";
import { usePathname } from 'next/navigation';
import { ImCross } from "react-icons/im";
import { IoSearch } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Navigation from './NavigationMenu';

interface linkProps {
    name: string,
    href: string
}
const links: linkProps[] = [
    { name: 'HOME', href: '/' },
    { name: 'OUR SERVICES', href: '/our-services' },
    { name: 'ABOUT US', href: '/about-us' },
]

const NavBar = () => {
    const pathName = usePathname()
    const [showNav, setShowNav] = useState(false)
    return <>

        <div>
            <div className='w-full hidden lg:flex text-white justify-between items-center overflow-hidden h-[40px] bg-yellow-500 px-14'>
                <div className='flex'>
                    <div className='flex group py-3 space-x-3 px-3 justify-center items-center cursor-pointer transition transform duration-400 hover:bg-gray-800'>
                        <FaFacebookF size={15} />
                        <div className='hidden group-hover:block text-[.7rem] font-semibold'>Facebook</div>
                    </div>
                    <div className='flex group py-3 space-x-3 px-3 justify-center items-center cursor-pointer transition transform duration-400 hover:bg-green-800'>
                        <FaTwitter size={15} />
                        <div className='hidden group-hover:block text-[.7rem] font-semibold'>Twitter</div>
                    </div>
                    <div className='flex group py-3 space-x-3 px-3 justify-center items-center cursor-pointer transition transform duration-400 hover:bg-red-800'>
                        <FaInstagram size={15} />
                        <div className='hidden group-hover:block text-[.7rem] font-semibold'>Instagram</div>
                    </div>
                    <div className='flex group py-3 space-x-3 px-3 justify-center items-center cursor-pointer transition transform duration-400 hover:bg-red-800'>
                        <FaYoutube size={15} />
                        <div className='hidden group-hover:block text-[.7rem] font-semibold'>Youtube</div>
                    </div>
                </div>
                <div className='flex space-x-3 '>
                    <div className='flex items-center space-x-1'>
                        <FaMobileAlt size={15} />
                        <div className='text-[.8rem]'>+123-456-7890</div>
                    </div>
                    <div className='flex items-center space-x-1'>
                        <FaRegCommentAlt size={15} />
                        <div className='text-[.8rem]'>info@example.com </div>
                    </div>
                    <div className='flex items-center space-x-1'>
                        <FaLocationPin size={15} />
                        <div className='text-[.8rem]'>1234 Elm Street</div>
                    </div>
                </div>
            </div>
            <div className='flex justify-between items-center mt-[1px] px-5 lg:px-20'>
                <div className='text-[1.4rem] font-mont font-semibold text-black/80'>JAVA ENERGY SOLUTION</div>
                <ul className='hidden lg:flex justify-center items-center ml-20'>
                    {
                        links.map((item) => (
                            pathName === item.href ? (
                                <li>
                                    <Link href={item.href} className='text-white flex items-center bg-yellow-500 py-6 text-[.7rem] border-t-4 border-black/30'>
                                        <div className='border-r px-4'>
                                            {item.name}
                                        </div>
                                    </Link>
                                </li>
                            ) : (
                                <li className='text-black/60 flex items-center border-t-4 border-white hover:border-t-4 hover:border-black/30 hover:bg-yellow-500 font-bold py-6 text-[.7rem]'>
                                    <Link href={item.href}>
                                        <div className='border-r px-4'>
                                            {item.name}
                                        </div>
                                    </Link>
                                </li>
                            )
                        ))
                    }
                    <Navigation />
                    <div className='flex gap-x-3 ml-4 items-center'>
                        <IoSearch size={20} />
                        <Button className='bg-yellow-500'>Buy Now</Button>
                    </div>
                </ul>

                <div className='flex lg:hidden items-center gap-x-4'>
                    <IoSearch size={20} />
                    <div onClick={() => setShowNav(!showNav)} className='flex'>
                        {
                            !showNav ?
                                <Button>
                                    <GiHamburgerMenu size={20} />
                                </Button>
                                :
                                <Button onClick={() => setShowNav(true)}>
                                    <ImCross size={20} />
                                </Button>
                        }

                    </div>
                </div>
            </div>

            {
                showNav &&
                <div className={`${showNav ? "flex " : "hidden"} lg:hidden w-full absolute bg-black/80 text-white items-center transform transition duration-300`}>
                    <ul className='flex flex-col w-full left-0 relative overflow-y-scroll text-white pb-2 items-center'>
                        {
                            links.map((item) => (
                                pathName === item.href ? (
                                    <li>
                                        <Link href={item.href} className='text-white left-0 bg-yellow-600 py-5 w-full block text-[.7rem]'>
                                            <div className=' px-4'>
                                                {item.name}
                                            </div>
                                        </Link>
                                    </li>
                                ) : (
                                    <li className='text-white font-bold left-0 py-3 w-full border-b text-[.8rem]'>
                                        <Link href={item.href}>
                                            <div className=' px-4'>
                                                {item.name}
                                            </div>
                                        </Link>
                                    </li>
                                )
                            ))
                        }
                        <div className='flex flex-col w-full justify-start items-start'>
                            <Navigation />
                        </div>
                    </ul>
                </div>
            }
        </div>

    </>
}

export default NavBar