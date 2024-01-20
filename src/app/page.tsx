"use client";

import { Button } from '@/components/ui/button'
import AnimatedNum from "./components/AnimatedNum"
import { HiOutlineSortDescending } from "react-icons/hi";
import { GiBurningTree } from "react-icons/gi";
import { MdCoronavirus } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import image1 from "../../public/image1.jpg"
import Image from 'next/image';
import image2 from "../../public/image2.jpg"
import image3 from "../../public/image3.jpg"
import image4 from "../../public/image4.jpg"
import image5 from "../../public/image5.jpg"
import man from "../../public/man.png"
import image from "../../public/image.webp"
import image7 from "../../public/image7.png"
import joe from "../../public/joe.jpg"
import dozer from "../../public/dozer.avif"
import image6 from '../../public/download.jpg'
import company1 from "../../public/company1.png"
import company2 from "../../public/company2.png"
import company3 from "../../public/company3.png"
import company4 from "../../public/company4.png"
import company5 from "../../public/company5.png"
import company6 from "../../public/company6.png"
import signature from "../../public/signature.png"
import AnimatedImage from "./components/AnimatedImage"
import { useState } from 'react';
import Link from 'next/link';
import Articles from './components/Articles';

export default function Home() {

  const [adapt, setAdapt] = useState(false)
  const [global, setGlobal] = useState(false)
  const [green, setGreen] = useState(false)
  const [human, setHuman] = useState(false)
  const [source, setSource] = useState(false)

  const clickAdapt = () => {
    setAdapt(!adapt)
    setGlobal(false)
    setGreen(false)
    setHuman(false)
    setSource(false)
  }
  const clickGlobal = () => {
    setAdapt(false)
    setGlobal(!global)
    setGreen(false)
    setHuman(false)
    setSource(false)
  }
  const clickGreen = () => {
    setAdapt(false)
    setGlobal(false)
    setHuman(false)
    setGreen(!green)
    setSource(false)
  }
  const clickHuman = () => {
    setAdapt(false)
    setGlobal(false)
    setHuman(!human)
    setGreen(false)
    setSource(false)
  }
  const clickSource = () => {
    setAdapt(false)
    setGlobal(false)
    setHuman(false)
    setGreen(false)
    setSource(!source)
  }

  return <>
    <div className='flex flex-col gap-y-5'>
      <section className='w-full h-screen pb-16'>
        <div className="flex flex-col-reverse justify-center lg:pt-8 items-center lg:flex-row w-full">
          <div className='w-full lg:w-1/2 ml-10 lg:ml-16 px-5 lg:px-0 lg:mt-0 mt-10'>
            <div className='flex items-center'>
              <div className='h-1 w-8 rounded-xl bg-yellow-500'></div>
              <h1 className='text-yellow-500 text-[1rem] font-nunito lg:text-xl font-bold'>SMART SOLUTIONS</h1>
            </div>
            <div className=''>
              <h1 className=' font-play leading-tight font-extrabold text-[2rem] lg:text-[4rem]'>Building The Spaces Where Memories Are Made</h1>
              <p className='lg:line-clamp-3 font-pop text-black/60'>Embark on a Journey of Innovation: Building Tomorrow, Sustainably Today with Our Pioneering Construction Techniques and Eco-Friendly Practices.</p>
            </div>
            <Button className='py-6 mb-8 px-7 font-semibold mt-10 bg-yellow-500'>Read More</Button>
          </div>
          <div className='w-full lg:w-1/2 flex items-center justify-center mt-20'>
            <div className='h-[300px] w-[300px] md:h-[400px] md:w-[400px] lg:h-[500px] lg:w-[500px]'>
              <Image src={image1}
                alt="image"
                className='object-cover lg:h-[500px] lg:w-[500px] md:h-[400px] md:w-[400px] h-[300px] w-[300px] rounded-full'
              />
            </div>
          </div>
        </div>
      </section>

      <section className='flex flex-col lg:flex-row w-full mt-20 mb-14 lg:mb-14 lg:mt-20'>
        <div className='lg:h-[570px] h-[300px] w-full lg:w-1/3 lg:ml-20 md:mb-8 md:w-full mt-32 lg:mt-26 mb-14 lg:mb-0'>
          <Image src={image3}
            alt='image'
            className='object-cover lg:h-[570px] w-full h-[450px] lg:w-[400px] lg:rounded-[2rem]'

          />
        </div>
        <div className='lg:w-2/3 pl-10 lg:pr-20 md:mt-40 lg:pt-14 mt-32 lg:mt-36 w-full'>
          <div className='flex items-center'>
            <div className='h-1 w-8 rounded-xl bg-yellow-500'></div>
            <h1 className='text-yellow-500 text-[1rem] font-nunito lg:text-xl font-bold'>WELCOME TO COMPANY</h1>
          </div>
          <div>
            <h1 className=' font-play leading-tight font-extrabold text-[2rem] lg:text-[3rem]'>Construction Company With Strategy In Business Growth</h1>
            <p className='font-pop text-black/60 mt-5'>We have been the trusted name in heating, air conditioning and plumbing businesses. Throughout the years, our number one goal<br /><br />

              For over 80 years, We have been the trusted name in heating, air conditioning and plumbing businesses. Throughout the years, our number one goal has been to accurately . For over 80 years, We have been the trusted name in heating, air conditioning and plumbing businesses. Throughout the years, our number one goal has been to accurately .For over 80 years, We have been the trusted name in heating.</p>
          </div>
          <div className='lg:flex lg:mt-6 mt-14'>
            <img src={joe.src}
              alt="joe" className='lg:h-14 lg:w-14 h-[300px] w-[300px] rounded-full' />
            <div className='pl-4 mt-14 lg:mt-0 text-[1.4rem] lg:text-[1rem]'>
              <h1 className='font-ptSans'>Robert Joe Kerry</h1>
              <h1 className='text-black/60'>Founder</h1>
            </div>
            <img src={signature.src}
              alt="signature"
              className='h-14 w-[200px] ml-4 mt-8 lg:mt-0' />
          </div>
        </div>
      </section>

      <section className='w-full lg:h-[130vh] h-full mt-14 lg:mt-20'>
        <div className='h-full w-full bg-repeat py-16'
          style={{ backgroundImage: `url("${image.src}")` }}>
          <div>
            <div className='w-full flex flex-col items-center justify-center'>
              <div className='flex gap-x-2 items-center'>
                <div className='h-1 w-8 rounded-xl bg-yellow-500'></div>
                <h1 className='text-yellow-500 text-[1rem] font-nunito lg:text-xl font-bold'>WHAT WE DO</h1>
              </div>
              <div className='flex flex-col justify-center items-center px-5 space-y-2 mt-2'>
                <h1 className='text-white font-play lg:text-5xl md:text-4xl text-3xl font-bold mx-auto'>Our Services That We Provide</h1>
                <p className='text-semibold lg:mt-5 font-pop text-white lg:line-clamp-2 mx-auto'>If you to or your Plumbing system, call today and talk to one of our . They’ll
                  answer all your and arrange an at your convenience</p>
              </div>
            </div>
            <div className=' grid lg:grid-cols-4 md:grid-cols-2 lg:px-16 gap-16 lg:gap-3 items-center mt-10 lg:mt-9 justify-center px-5 lg:pl-28'>
              <div className='relative'>
                <Image
                  src={image2}
                  alt="image"
                  className='object-cover -z-10 lg:h-[300px] lg:w-[230px] h-[400px] w-full rounded-3xl'
                />
                <div className='absolute py-4 lg:py-3 px-2 w-[90%] -bottom-10 left-6 lg:w-[180px] rounded-2xl bg-yellow-500 font-bold lg:text-lg text-[1.3rem] hover:bg-black text-white'>
                  <h1 className='lg:px-8'>Building Renovation</h1>
                </div>

              </div>


              <div className='relative'>
                <Image
                  src={image3}
                  alt="image"
                  className='object-cover -z-10 lg:h-[300px] lg:w-[230px] h-[400px] w-full rounded-3xl'
                />
                <div className='absolute py-4 lg:py-3 px-2 w-[90%] -bottom-10 left-6 lg:w-[180px] flex flex-col items-center rounded-2xl justify-center bg-yellow-500 font-bold lg:text-lg text-[1.3rem] hover:bg-black text-white'>
                  <h1 className='mx-auto'>Building Renovation</h1>
                </div>
              </div>

              <div className='relative'>
                <Image
                  src={image1}
                  alt="image"
                  className='object-cover -z-10 lg:h-[300px] lg:w-[230px] h-[400px] w-full rounded-3xl'
                />
                <div className='absolute py-4 lg:py-3 px-2 w-[90%] -bottom-10 left-6 lg:w-[180px] flex flex-col items-center rounded-2xl justify-center bg-yellow-500 font-bold lg:text-lg text-[1.3rem] hover:bg-black text-white'>
                  <h1 className='mx-auto'>Building Renovation</h1>
                </div>
              </div>

              <div className='relative'>
                <Image
                  src={image4}
                  alt="image"
                  className='object-cover -z-10 lg:h-[300px] lg:w-[230px] h-[400px] w-full rounded-3xl'
                />
                <div className='absolute py-4 lg:py-3 px-2 w-[90%] -bottom-10 left-6 lg:w-[180px] flex flex-col items-center rounded-2xl justify-center bg-yellow-500 font-bold lg:text-lg text-[1.3rem] hover:bg-black text-white'>
                  <h1 className='mx-auto'>Building Renovation</h1>
                </div>
              </div>
            </div>
            <div className='flex justify-center mt-28 items-center gap-x-4'>
              <h1 className='text-white text-[.9rem]'>Need more services based on your demand?</h1>
              <Button className='px-9 py-6 hover:text-white bg-yellow-500 hover:bg-black'>Contact Us</Button>
            </div>
          </div>
        </div>
      </section >

      <section className='w-full my-20 py-14'>
        <AnimatedImage />
      </section>

      <section className='w-full relative mb-96 lg:mb-60'>
        <div className='bg-black/90 text-white lg:h-[450px] sm:justify-center lg:pb-20 flex flex-col lg:flex-row lg:flex lg:space-x-20 space-y-14 py-9 lg:py-0 lg:space-y-0'>
          <div className='flex flex-col items-center justify-center space-y-3 md:space-y-1'>
            <span className='text-7xl font-bold md:text-8xl'>
              <AnimatedNum value={'8'} />K+
            </span>
            <h1 className='text-[1.2rem] text-dark/75 dark:text-light/75 md:text-center'>Projects Completed</h1>
          </div>

          <div className='flex flex-col space-y-3 items-center justify-center md:space-y-1'>
            <span className='text-7xl font-bold md:text-8xl'>
              <AnimatedNum value={'3'} />K+
            </span>
            <h1 className='text-[1.2rem]  text-dark/75 dark:text-light/75 md:text-center'>Global Customers</h1>
          </div>

          <div className='flex flex-col space-y-3 items-center justify-center md:space-y-1'>
            <span className='text-7xl font-bold md:text-8xl'>
              <AnimatedNum value={'20'} />
            </span>
            <h1 className='text-[1.2rem]  text-dark/75 dark:text-light/75 md:text-center'>Years of Experience</h1>
          </div>

          <div className='flex flex-col items-center justify-center space-y-3 md:space-y-1'>
            <span className='text-7xl font-bold md:text-8xl'>
              <AnimatedNum value={'95'} />
            </span>
            <h1 className='text-[1.2rem]  text-dark/75 dark:text-light/75 md:text-center'>Team Engineers</h1>
          </div>

        </div>
        <div className=' flex shadow-2xl lg:flex-row flex-col-reverse absolute lg:top-[70%]  lg:mx-14 bg-white z-10'>
          <div className='lg:w-1/2 lg:pt-20 pl-16 pt-16 pb-10 lg:pb-0'>
            <div>
              <div className='flex items-center'>
                <div className='h-1 w-8 rounded-xl bg-yellow-500'></div>
                <h1 className='text-yellow-500 text-[1rem] font-nunito lg:text-xl font-extrabold'>ABOUT COMPANY</h1>
              </div>
              <h1 className='font-play text-4xl py-3 font-bold'>Check Out Our Credentials</h1>
            </div>
            <div className='flex flex-col space-y-10 lg:mt-14'>
              <div className='flex space-x-3'>
                <div className='bg-yellow-500 h-10 w-20 flex justify-center items-center rounded-full text-white'>
                  <HiOutlineSortDescending size={25} />
                </div>
                <div>
                  <h1 className='font-bold font-ptSans text-xl py-2'>Contemporary Design</h1>
                  <p className='line-clamp-3 text-black/60 font-pop'>Lorem ipsum dolor sit amet, consectetur adipisi cing elit, sed do eiusmod tempor incididunt ut abore et dolore magna</p>
                </div>
              </div>
              <div className='flex space-x-3'>
                <div className='bg-yellow-500 h-10 w-20 flex justify-center items-center rounded-full text-white'>
                  <GiBurningTree size={25} />
                </div>
                <div>
                  <h1 className='font-bold font-ptSans text-xl py-2'>Contemporary Design</h1>
                  <p className='line-clamp-3 text-black/60 font-pop'>Lorem ipsum dolor sit amet, consectetur adipisi cing elit, sed do eiusmod tempor incididunt ut abore et dolore magna</p>
                </div>
              </div>
              <div className='flex space-x-3'>
                <div className='bg-yellow-500 h-10 w-20 flex justify-center items-center rounded-full text-white'>
                  <MdCoronavirus size={25} />
                </div>
                <div>
                  <h1 className='font-bold font-ptSans text-xl py-2'>Contemporary Design</h1>
                  <p className='line-clamp-3 text-black/60 font-pop'>Lorem ipsum dolor sit amet, consectetur adipisi cing elit, sed do eiusmod tempor incididunt ut abore et dolore magna</p>
                </div>
              </div>
            </div>
          </div>

          <div className='lg:w-1/2 h-full bg-black'>
            <img src={image6.src}
              alt="image"
              className='object-cover lg:h-[600px] w-full h-[300px]'
            />
          </div>
        </div>
      </section>

      <section className='w-full lg:mt-80 mt-96'>
        <div className="w-full lg:flex flex py-16 lg:pt-16 lg:py-0 flex-col-reverse lg:flex-row bg-black lg:items-center justify-start items-start lg:justify-center space-x-10 px-32">
          <div className='lg:w-1/2 w-full mt-5 lg:mt-0'>
            <div className='flex items-center'>
              <div className='h-1 w-8 rounded-xl bg-yellow-500'></div>
              <h1 className='text-yellow-500 text-[1rem] font-nunito lg:text-xl font-bold'>SMART SOLUTIONS</h1>
            </div>
            <h1 className='text-white text-3xl lg:text-5xl font-bold font-play'>GET IN TOUCH</h1>
          </div>
          <div className='w-full lg:w-1/2 mt-20 lg:mt-0'>
            <img src={image7.src}
              alt='image'
              className='bg-transparent w-full'
            />
          </div>
        </div>
      </section>

      <section>
        <div className='lg:py-14'>
          <div className='w-full mt-5 lg:mt-0 flex flex-col items-center justify-center'>
            <div className='flex items-center'>
              <div className='h-1 w-8 rounded-xl bg-yellow-500'></div>
              <h1 className='text-yellow-500 text-[1rem] font-nunito lg:text-xl font-bold'>FREQUENTLY ASKED QUESTIONS</h1>
            </div>
            <h1 className=' text-4xl lg:text-5xl font-bold font-play'>What Customers Are Asking?</h1>
          </div>
          <div className=' flex lg:flex-row flex-col'>
            <div className='lg:w-1/2 lg:pt-20 lg:pl-16 pt-16 pb-10 px-7 lg:pb-0'>

              <div className='flex flex-col space-y-10'>
                <div className='flex space-x-3 lg:flex-row flex-col justify-center items-center'>
                  <div className='bg-yellow-500 p-6 flex justify-center items-center rounded-full text-white'>
                    <HiOutlineSortDescending size={30} />
                  </div>
                  <div className='flex px-auto mx-auto lg:py-0 flex-col items-center justify-center py-12'>
                    <h1 className='font-bold font-ptSans text-xl py-2'>Fundraising Community</h1>
                    <p className='line-clamp-3 text-black/60 font-pop'>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 oaorum eiusmodrunch 3 wolf moon tempor</p>
                  </div>
                </div>
                <div className='flex space-x-3 lg:flex-row flex-col justify-center items-center'>
                  <div className='bg-yellow-500 p-6 flex justify-center items-center rounded-full text-white'>
                    <HiOutlineSortDescending size={30} />
                  </div>
                  <div className='flex lg:py-0 flex-col items-center justify-center py-12'>
                    <h1 className='font-bold font-ptSans text-xl py-2'>Fundraising Community</h1>
                    <p className='line-clamp-3 text-black/60 font-pop'>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 oaorum eiusmodrunch 3 wolf moon tempor</p>
                  </div>
                </div>
                <div className='flex space-x-3 lg:flex-row flex-col justify-center items-center'>
                  <div className='bg-yellow-500 p-6 flex justify-center items-center rounded-full text-white'>
                    <HiOutlineSortDescending size={30} />
                  </div>
                  <div className='flex flex-col items-center lg:py-0 justify-center py-12'>
                    <h1 className='font-bold font-ptSans text-xl py-2'>Fundraising Community</h1>
                    <p className='line-clamp-3 text-black/60 font-pop'>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 oaorum eiusmodrunch 3 wolf moon tempor</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='lg:w-1/2 h-full flex flex-col space-y-1 lg:mt-20 px-8 lg:px-20'>
              <div>
                <div className='bg-yellow-500 py-3 w-full px-8 hover:cursor-pointer'>
                  <h1 className='font-bold text-white' onClick={clickAdapt}>What is adaptation?</h1>
                </div>
                <div className=' transform transition duration-500 ease-in-out'>
                  {
                    adapt &&
                    <p className='text-black/60 lg:m-2 font-pop text-[.8rem]'>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor</p>
                  }
                </div>
              </div>

              <div>
                <div className='bg-yellow-500 py-3 w-full px-8 hover:cursor-pointer'>
                  <h1 className='font-bold text-white' onClick={clickGlobal}>What is global warming?</h1>
                </div>
                <div className=' transition-opacity transform ease-in-out duration-500'>
                  {
                    global &&
                    <p className='text-black/60 lg:m-2 font-pop text-[.8rem]'>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor</p>
                  }
                </div>
              </div>


              <div>
                <div className='bg-yellow-500 py-3 w-full px-8 hover:cursor-pointer'>
                  <h1 className='font-bold text-white' onClick={clickGreen}>What is the greenhouse effect?</h1>
                </div>
                <div className=' transition-opacity transform ease-in-out duration-500'>
                  {
                    green &&
                    <p className='text-black/60 lg:m-2 font-pop text-[.8rem]'>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor</p>
                  }
                </div>
              </div>

              <div>
                <div className='bg-yellow-500 py-3 w-full px-8 hover:cursor-pointer'>
                  <h1 className='font-bold text-white' onClick={clickHuman}>How do human activities contribute to climate change and how do they compare with natural influences?</h1>
                </div>
                <div className=' transition-opacity transform ease-in-out duration-500'>
                  {
                    human &&
                    <p className='text-black/60 lg:m-2 font-pop text-[.8rem]'>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor</p>
                  }
                </div>
              </div>

              <div>
                <div className='bg-yellow-500 py-3 w-full px-8 hover:cursor-pointer'>
                  <h1 className='font-bold text-white' onClick={clickSource}>What are the main sources of greenhouse gas emissions which have led to increased concentration in the atmosphere?</h1>
                </div>
                <div className=' transition-opacity transform ease-in-out duration-500'>
                  {
                    source &&
                    <p className='text-black/60 lg:m-2 font-pop text-[.8rem]'>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor</p>
                  }
                </div>
              </div>
            </div>
          </div>

        </div>
      </section >

      <section className='w-full'>
        <div style={{ backgroundImage: `url("${dozer.src}")` }}
          className='lg:h-[90vh] w-full bg-no-repeat bg-cover bg-fixed'
        >
          <div className='bg-black backdrop-blur-sm opacity-90 flex lg:mb-14 lg:py-40 flex-col justify-center items-center -z-10 lg:px-40'>
            <div className='z-100 lg:mx-32 px-14 lg:px-0 py-28 lg:py-0'>
              <div className='w-full mt-5 lg:mt-0 flex flex-col items-center justify-center'>
                <div className='flex items-center'>
                  <div className='h-1 w-8 rounded-xl bg-yellow-500'></div>
                  <h1 className='text-yellow-500 text-[1rem] font-nunito lg:text-xl font-bold'>WORK WITH US</h1>
                </div>
                <h1 className=' text-4xl text-white lg:text-5xl font-bold font-play'>Have Any Upcoming Project</h1>
              </div>
              <div className='flex flex-col justify-center items-center space-y-5 my-3'>
                <p className='text-white font-pop text-[.8rem] font-bold'>There are many variations of passages of Lorem Ipsum available, but the have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                <button className='bg-yellow-500 px-6 py-4'>Get Started</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='w-full -mt-16 bg-white'>
        <div className='w-full flex-col lg:flex-row lg:px-32 pt-32 flex'>
          <div className='lg:w-1/2 '>
            <img src={man.src} alt="man" className='lg:h-[650px]' />
          </div>
          <div className='lg:w-1/2 lg:mt-14 lg:pl-12 flex flex-col justify-center items-start'>
            <div className='py-8 pl-5 lg:pl-0 lg:py-0 '>
              <div className='flex items-center'>
                <div className='h-1 w-8 rounded-xl bg-yellow-500'></div>
                <h1 className='text-yellow-500 text-[1rem] font-nunito lg:text-xl font-bold'>TESTIMONIALS</h1>
              </div>
              <h1 className=' text-4xl lg:text-5xl font-bold font-play'>Our Clients Reviews</h1>
            </div>
            <div className='p-7 lg:py-7 text-white lg:mt-3 mx-5 lg:mx-0 py-8 bg-yellow-500 flex flex-col space-y-5'>
              <p className='font-pop text-[1rem]'>If you are going to use a generators on the Interne passage predefined chunks as predefined chunks asof Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
              <p><span className='font-semibold'>Jen Johnson,</span>CEO</p>
              <div className='flex text-white'>
                <FaStar size={15} />
                <FaStar size={15} />
                <FaStar size={15} />
                <FaStar size={15} />
                <FaStar size={15} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className='lg:py-10'>
          <div className='grid gap-6 lg:gap-2 place-items-center lg:py-14 lg:grid-cols-6 md:grid-cols-3 grid-cols-2 w-full'>
            <img src={company1.src} alt="comp1"
              className='h-[80px]'
            />
            <img src={company2.src} alt="comp1"
              className='h-[80px]'
            />
            <img src={company3.src} alt="comp1"
              className='h-[80px]'
            />
            <img src={company4.src} alt="comp1"
              className='h-[80px]'
            />
            <img src={company5.src} alt="comp1"
              className='h-[80px]'
            />
            <img src={company6.src} alt="comp1"
              className='h-[80px]'
            />
          </div>
          <div className='flex flex-col py-20 items-center justify-center lg:py-5 w-full'>
            <div className='flex items-center'>
              <div className='h-1 w-8 rounded-xl bg-yellow-500'></div>
              <h1 className='text-yellow-500 text-[1rem] font-nunito lg:text-xl font-bold'>NEWS & BLOGS</h1>
            </div>
            <h1 className=' text-4xl lg:text-5xl font-bold font-play'>Our Latest News Post and Articles</h1>
          </div>
          <div>
            <div className='flex justify-center w-full flex-col lg:flex-row p-4 items-start lg:py-10 lg:space-x-7 lg:px-28'>

              <Articles heading='Hello world!'
                href='/hello-world'
                para='Welcome to WordPress. This is your first post. Edit or delete it, then start writing!'
              />
              <Articles heading='Architecting Tomorrow: Summit Construction Solutions'
                href='/construction-solution'
                para='Discover excellence in construction with Summit Construction Solutions. Our team of skilled professionals is dedicated to turning visions into reality. From groundbreaking designs to the final touches, we take pride…'
              />
              <Articles heading='Elevate Your Vision: Stellar Construction Innovations'
                href='construction-innovation'
                para='At Stellar Construction Innovations, we redefine the landscape of possibilities. With a blend of cutting-edge technology and skilled craftsmanship, we bring your dreams to life. From concept to completion, our…'
              />
            </div>
          </div>
        </div>
      </section>
    </div >

  </>
}
