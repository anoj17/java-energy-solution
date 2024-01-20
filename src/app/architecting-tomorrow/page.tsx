import Link from "next/link"
import dozer from "../../../public/dozer.avif"
import { FaUser } from "react-icons/fa";
import { BiSolidMessageRounded } from "react-icons/bi";
import { FaGreaterThan } from "react-icons/fa";
import { FaLessThan } from "react-icons/fa";

interface iAPPpara {
    heading: string,
}

const BoldLetter = ({ heading }: iAPPpara) => {
    return (
        <div>
            <div className="flex flex-col justify-center items-start py-2">
                <h1 className="text-yellow-500 font-ptSans tracking-wider font-semibold">{heading}</h1>
                <div className="h-[2px] w-[40px] bg-yellow-500 lg:mt-4 mt-2"></div>
            </div>
        </div>
    )
}

export default function Services() {
    return <>

        <div className="lg:py-4 py-6 lg:pb-10">
            <div className="h-2 w-full bg-gray-300 mb-4"></div>
            <div className="w-full lg:my-10 lg:px-28">
                <div className="flex lg:flex-row flex-col lg:px-0 px-4 md:px-28 lg:space-x-9">
                    <div>
                        <div className="flex flex-col pb-10 space-y-4 border">
                            <div className="relative">
                                <img src={dozer.src}
                                    alt=""
                                    className='object-cover lg:h-[400px] lg:w-[750px]' />
                                <button className="bg-yellow-500 px-5 py-2 text-white absolute top-8 left-0">BLOG</button>
                            </div>

                            <div className="flex flex-col space-y-4 lg:space-y-3 px-8">
                                <div className="flex flex-col lg:pb-4 justify-center items-start lg:py-2">
                                    <Link href="/" className="text-black/60 text-[1rem] lg:text-[.7rem] font-monts hover:text-yellow-500 tracking-wider font-bold">December 1, 2023</Link>
                                    <div className="h-[2px] w-[60px] bg-black/80 my-3"></div>
                                    <h1 className="text-black/60 text-[1rem] lg:text-[1.3rem] font-monts hover:text-yellow-500 font-bold">Architecting Tomorrow: Summit Construction Solutions</h1>
                                    <p className="font-ptSans text-black/60 lg:mt-3 text-[1rem]">Discover excellence in construction with Summit Construction Solutions. Our team of skilled professionals is dedicated to turning visions into reality. From groundbreaking designs to the final touches, we take pride in delivering projects that stand the test of time. Explore the synergy of creativity and precision as we redefine the art of construction. Join us on a journey where each structure becomes a masterpiece, showcasing our commitment to quality and innovation. Summit Construction Solutions – Building Dreams, Building Futures.</p>
                                </div>
                                <div className="h-[1px] w-full bg-gray-300 lg:mt-6"></div>
                                <div className="flex justify-between items-center lg:pt-3">
                                    <div className="flex space-x-2 text-black/60 items-center justify-center">
                                        <FaUser size={20} />
                                        <p>java8945</p>
                                    </div>
                                    <div className="flex space-x-2 text-black/60 items-center justify-center">
                                        <BiSolidMessageRounded size={20} />
                                        <p>0</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="flex lg:space-x-7 w-full justify-between items-center space-y-4 lgLspace-y-0 mt-10 flex-col lg:flex-row">
                            <Link href="/" className="pl-2 flex justify-start items-start pr-5 w-full lg:w-[400px] hover:text-yellow-500 border-2 border-black/60 hover:border-yellow-500">
                                <div className="flex space-x-3 justify-start items-start py-2">
                                    <div className="py-2">
                                        <FaLessThan size={10} />
                                    </div>
                                    <p className="text-black/60 hover:text-yellow-500">Elevate Your Vision: Stellar Construction Innovations</p>
                                </div>
                            </Link>
                            <Link href="/" className="pl-2 pr-5 w-full lg:w-[150px] hover:text-yellow-500 border-2 border-black/60 hover:border-yellow-500">
                                <div className="flex space-x-3 hover:text-yellow-500 justify-end items-center py-2">
                                    <p className="text-black/60 hover:text-yellow-500">Hello World!</p>
                                    <div className="py-2">
                                        <FaGreaterThan size={10} />
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-col lg:py-0 py-10">
                        <div>
                            <BoldLetter heading="ARCHIVES" />
                            <div className="flex flex-col py-5 lg:py-4 space-y-1">
                                <Link href="/" className="hover:text-yellow-500 text-[.9rem] text-black/60">January 2024</Link>
                                <Link href="/" className="hover:text-yellow-500 text-[.9rem] text-black/60">December 2023</Link>
                            </div>
                        </div>
                        <div>
                            <BoldLetter heading="CATEGORIES" />
                            <div className="flex flex-col lg:py-4 py-5 space-y-1">
                                <Link href="/" className="hover:text-yellow-500 text-[.9rem] text-black/60">Blog</Link>
                                <Link href="/" className="hover:text-yellow-500 text-[.9rem] text-black/60">Uncategoried</Link>
                            </div>
                        </div>
                        <div>
                            <BoldLetter heading="SEARCH" />
                            <div className="flex lg:py-4 my-4 py-5 lg:my-0">
                                <input type="text"
                                    className="py-2 border w-[400px] lg:w-[300px]"
                                />
                                <button className="bg-yellow-500 text-white font-semibold py-1 px-3 text-[.9rem]">search</button>
                            </div>
                        </div>
                        <div>
                            <BoldLetter heading="RECENT POSTS" />
                            <div className="flex flex-col lg:py-4 space-y-1 py-5">
                                <p className="font-ptSans text-black/60 text-[1rem] hover:text-yellow-500 cursor-pointer">Hello World!</p>
                                <p className="font-ptSans text-black/60 text-[1rem] hover:text-yellow-500 cursor-pointer">Architecting Tomorrow: Summit Construction Solutions</p>
                                <p className="font-ptSans text-black/60 text-[1rem] hover:text-yellow-500 cursor-pointer">Elevate Your Vision: Stellar Construction Innovations</p>
                                <p className="font-ptSans text-black/60 text-[1rem] hover:text-yellow-500 cursor-pointer">Crafting Dreams: Pioneer Construction Services!</p>
                                <p className="font-ptSans text-black/60 text-[1rem] hover:text-yellow-500 cursor-pointer">Dynamic Construction Solutions: Building Tomorrow, Today</p>
                            </div>
                        </div>
                        <div>
                            <BoldLetter heading="RECENT COMMENTS" />
                            <div className="flex lg:py-4 py-3">
                                <p className="font-ptSans text-black/60 text-[1rem] hover:text-yellow-500 cursor-pointer">A WordPress Commenter on Hello world!</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    </>
}