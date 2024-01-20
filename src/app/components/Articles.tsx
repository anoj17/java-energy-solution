import Link from 'next/link';
import React from 'react'
import { FaArrowRight } from "react-icons/fa";

interface type {
    heading: string,
    para: string,
    href: string
}

const Articles = ({ heading, para, href}: type) => {
    return <>

        <div className='shadow-lg lg:px-5 px-3 mt-6 lg:mt-0 py-5 lg:w-[700px] flex w-full flex-col space-y-3'>
            <h1 className='font-bold text-[1.1rem]'>{heading}</h1>
            <p className='text-black/60 text-[1rem] lg:text-[.9rem] font-pop'>{para}</p>
            <Link href={href} className='flex items-center text-yellow-600 space-x-2'>
                <h1 className='text-yellow-500 text-[.8rem]'>Read More</h1>
                <FaArrowRight size={15} />
            </Link>
        </div>

    </>
}

export default Articles