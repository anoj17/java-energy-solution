"use client";

import React, { useState } from 'react'
import data from "./Data"
import { TbBrandTorchain } from "react-icons/tb";

const AnimatedImage = () => {

    const [datas, setDatas] = useState(() => data.filter((item) => item.category === 'all'))

    const allData = (allItems) => {
        const result = data.filter((curData) => {
            return curData.category === allItems
        });
        setDatas(result)
    }

    return <>
        <div>
            <div className='flex flex-col w-full justify-center items-center'>
                <div className='flex items-center space-x-2'>
                    <div className='h-1 w-8 rounded-xl bg-yellow-500'></div>
                    <h1 className='text-yellow-500 text-[1rem] font-nunito lg:text-[1rem] font-bold'>LATETST PROJECTS</h1>
                </div>
                <h1 className='lg:text-5xl text-4xl font-extrabold font-play'>Explore Recent Projects</h1>
            </div>
            <div>
                <div className='flex font-monts lg:text-[.9rem]  text-[.8rem] px-4 lg:px-8 space-x-2 lg:space-x-5 w-full justify-center mt-10 items-center'>
                    <button
                        className={` py-2 px-4 mx-5 hover:bg-yellow-500`}
                        onClick={() => allData("all")}
                    >ALL
                    </button>
                    <button
                        className={` py-2 px-4 mx-5 hover:bg-yellow-500`}
                        onClick={() => allData("house")}
                    >HOUSE
                    </button>
                    <button
                        className={` py-2 px-4 mx-5 hover:bg-yellow-500`}
                        onClick={() => allData("building")}
                    >BUILDING
                    </button>
                    <button
                        className={` py-2 px-4 mx-5 hover:bg-yellow-500`}
                        onClick={() => allData("office")}
                    >OFFICE
                    </button>
                    <button
                        className={` py-2 px-4 mx-5 hover:bg-yellow-500`}
                        onClick={() => allData("garden")}
                    >GARDEN
                    </button>
                    <button
                        className={` py-2 px-4 mx-5 hover:bg-yellow-500`}
                        onClick={() => allData("interior")}
                    >INTERIOR
                    </button>
                </div>
                <div className="grid lg:px-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:mt-9">
                    {datas.map((items) => (
                        <div key={items.id} className="mb-1 pl-2 group lg:h-[480px] lg:w-[350px] flex flex-col justify-center items-center bg-black text-white mt-10 md:mt-2 sm:w-full">
                            <div className='lg:h-[200px] relative lg:w-[350px]'>
                                <img
                                    src={items.imageString}
                                    alt="image"
                                    height={300}
                                    width={300}
                                    className="object-cover  mb-2 h-full w-full"
                                />
                                <div className='text-yellow-white absolute top-0 h-full bg-black/80 w-full opacity-0 flex justify-center items-center left-0'>
                                    <div className='bg-yellow-500 p-4 rounded-full flex justify-center items-center'>
                                        <TbBrandTorchain size={25} />
                                    </div>
                                </div>

                            </div>
                            <div className="text-center flex flex-col py-2 justify-center items-center">
                                <h1 className="font-bold text-xl">{items.title}</h1>
                                <p className="text-sm mt-1 text-gray-600">{items.para}</p>
                            </div>

                        </div>
                    ))}
                </div>


            </div>
        </div >

    </>

}

export default AnimatedImage