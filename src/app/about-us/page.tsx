import Link from "next/link"
import image2 from "../../../public/image2.jpg"

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

        <div className="lg:py-4 lg:pb-10">
            <div className="h-2 w-full bg-gray-300 mb-5"></div>
            <div className="w-full lg:my-10 lg:px-28">
                <div className="flex lg:flex-row flex-col lg:px-0 px-4 md:px-28 lg:space-x-9">
                    <div className="flex flex-col space-y-4">
                        <img src={image2.src}
                            alt=""
                            className='lg:h-[500px] lg:w-[750px]' />

                        <div className="flex flex-col space-y-4 lg:space-y-3">
                            <div className="flex flex-col justify-center items-start lg:py-2">
                                <h1 className="text-black/60 text-[1rem] lg:text-[1.4rem] font-monts tracking-wider font-bold">About Us</h1>
                                <div className="h-[2px] w-[60px] bg-black/80 my-3"></div>
                                <p className="font-ptSans text-black/60 lg:mt-0 text-[1rem]">At Pioneer Construction Services, we offer a comprehensive suite of services designed to meet the diverse needs of our clients. Our commitment to excellence and innovation is reflected in every aspect of our service offerings.</p>
                            </div>
                            <div>
                                <p className="font-ptSans text-black/60 text-[1rem]">At Dynamic Construction Solutions, our journey is marked by a relentless pursuit of perfection. Our team of seasoned professionals, architects, and engineers is dedicated to translating your dreams into reality. From concept to completion, we pride ourselves on precision, quality, and a forward-thinking approach.</p>
                            </div>
                            <div>
                                <p className="font-ptSans text-black/60 text-[1rem]">What sets us apart is our unwavering commitment to pushing boundaries. We embrace the latest technologies and sustainable practices, ensuring that every project reflects our dedication to environmental responsibility.</p>
                            </div>
                            <div>
                                <p className="font-ptSans text-black/60 text-[1rem]">Our portfolio showcases a diverse range of projects, from residential marvels to commercial landmarks. Each structure tells a unique story of collaboration, creativity, and attention to detail. We believe in creating spaces that not only meet functional needs but also inspire and endure.</p>
                            </div>
                            <div>
                                <p className="font-ptSans text-black/60 text-[1rem]">Dynamic Construction Solutions is not just a construction company; we are partners in your vision. Our transparent communication, reliability, and client-centric approach form the foundation of lasting relationships. As we continue to evolve, we invite you to join us on this exciting journey of shaping the landscapes of tomorrow.</p>
                            </div>
                            <div>
                                <p className="font-ptSans text-black/60 text-[1rem]">Experience the difference with Dynamic Construction Solutions – Where Innovation Meets Craftsmanship.</p>
                            </div>
                           
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