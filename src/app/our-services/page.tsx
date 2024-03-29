import Link from "next/link"

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
                        <img src='https://java.neptekasolutions.com/wp-content/uploads/2023/12/pic3.jpg'
                            alt=""
                            className='lg:h-[760px] lg:w-[750px]' />

                        <div className="flex flex-col space-y-4 lg:space-y-3">
                            <div className="flex flex-col justify-center items-start lg:py-2">
                                <h1 className="text-black/60 text-[1rem] lg:text-[1.4rem] font-monts tracking-wider font-bold">Our Services</h1>
                                <div className="h-[2px] w-[60px] bg-black/80 mt-2 lg:mt-4"></div>
                                <p className="font-ptSans text-black/60 mt-3 lg:mt-0 text-[1rem]">At Pioneer Construction Services, we offer a comprehensive suite of services designed to meet the diverse needs of our clients. Our commitment to excellence and innovation is reflected in every aspect of our service offerings.</p>
                            </div>
                            <div>
                                <h1 className="text-black/60 text-[1.1rem] font-ptSans font-bold">1. Architectural Design:</h1>
                                <p className="font-ptSans text-black/60 text-[1rem]">Envision your dream space with our expert architects. From concept sketches to detailed blueprints, we bring creativity and functionality together, ensuring that every design is a unique reflection of your vision.</p>
                            </div>
                            <div>
                                <h1 className="text-black/60 text-[1.1rem] font-ptSans font-bold">2. Construction Management:</h1>
                                <p className="font-ptSans text-black/60 text-[1rem]">Our seasoned project managers oversee every aspect of construction, ensuring seamless coordination and timely delivery. We prioritize efficiency, cost-effectiveness, and quality control to bring your project to life on schedule and within budget.</p>
                            </div>
                            <div>
                                <h1 className="text-black/60 text-[1.1rem] font-ptSans font-bold">3. Renovation and Remodeling:</h1>
                                <p className="font-ptSans text-black/60 text-[1rem]">Transform existing spaces into modern marvels with our renovation expertise. Whether it’s revitalizing a home or revamping a commercial property, we breathe new life into structures with a keen eye for detail and contemporary design.</p>
                            </div>
                            <div>
                                <h1 className="text-black/60 text-[1.1rem] font-ptSans font-bold">4. Sustainable Practices:</h1>
                                <p className="font-ptSans text-black/60 text-[1rem]">As advocates for environmental responsibility, we integrate sustainable practices into our projects. From energy-efficient designs to eco-friendly materials, we strive to minimize our environmental footprint while maximizing the longevity of your investment.</p>
                            </div>
                            <div>
                                <h1 className="text-black/60 text-[1.1rem] font-ptSans font-bold">5. Quality Assurance:</h1>
                                <p className="font-ptSans text-black/60 text-[1rem]">Our commitment to quality is unwavering. Rigorous quality control measures are embedded into every stage of our projects to ensure that the final result not only meets but exceeds your expectations.</p>
                            </div>
                            <div>
                                <h1 className="text-black/60 text-[1.1rem] font-ptSans font-bold">6. Consultation Services:</h1>
                                <p className="font-ptSans text-black/60 text-[1rem]">Benefit from our industry expertise through our consultation services. Whether you need guidance on project feasibility, budgeting, or regulatory compliance, our knowledgeable consultants are here to assist you every step of the way.</p>
                            </div>
                            <div className="pt-2">
                                <p className="font-ptSans text-black/60 text-[1rem]">Pioneer Construction Services is more than a construction provider; we are your partners in realizing your vision. Explore the possibilities with us and experience construction services that go beyond expectations. Your dream project starts here.</p>
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