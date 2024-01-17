import { Button } from '@/components/ui/button'
import AnimatedNum from "./components/AnimatedNum"
import { HiOutlineSortDescending } from "react-icons/hi";
import { GiBurningTree } from "react-icons/gi";
import { MdCoronavirus } from "react-icons/md";

export default function Home() {
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
              <img src="https://as2.ftcdn.net/v2/jpg/04/29/27/19/1000_F_429271974_vnkmOsGh88vKhEx01uEOCkTiw4EKbQrN.jpg"
                alt="image"
                className='object-cover lg:h-[500px] lg:w-[500px] md:h-[400px] md:w-[400px] h-[300px] w-[300px] rounded-full'
              />
            </div>
          </div>
        </div>
      </section>

      <section className='flex flex-col lg:flex-row w-full mt-20 mb-14 lg:mb-14 lg:mt-20'>
        <div className='lg:h-[570px] h-[300px] w-full lg:w-1/3 lg:ml-20 md:mb-8 md:w-full mt-32 lg:mt-26 mb-14 lg:mb-0'>
          <img src='https://www.chitkara.edu.in/blogs/wp-content/uploads/2022/05/Civil-Engineering-banner.jpg'
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
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3eAutxfUTNw1a6lwjFP6t-6SJy2CjKKeJgA&usqp=CAU"
              alt="joe" className='lg:h-14 lg:w-14 h-[300px] w-[300px] rounded-full' />
            <div className='pl-4 mt-14 lg:mt-0 text-[1.4rem] lg:text-[1rem]'>
              <h1 className='font-ptSans'>Robert Joe Kerry</h1>
              <h1 className='text-black/60'>Founder</h1>
            </div>
            <img src="https://skidrowceo.com/wp-content/uploads/2023/07/Joe-Roberts-Final-Logo-7-7.png"
              alt="signature"
              className='h-14 w-[200px] ml-4 mt-8 lg:mt-0' />
          </div>
        </div>
      </section>

      <section className='w-full lg:h-[130vh] h-full mt-14 lg:mt-20'>
        <div className='h-full w-full bg-repeat py-16'
          style={{ backgroundImage: `url("https://media.discordapp.net/attachments/1123093580479746048/1196336122641522698/image.png?ex=65b741d6&is=65a4ccd6&hm=40c9022bfaba0ff59013c9599a562c5609ddb0f77f7ede12971d092e2e39521d&=&format=webp&quality=lossless")` }}>
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
                <img
                  src="https://www.chitkara.edu.in/blogs/wp-content/uploads/2022/05/Civil-Engineering-banner.jpg"
                  alt="image"
                  className='object-cover -z-10 lg:h-[300px] lg:w-[230px] h-[400px] w-full rounded-3xl'
                />
                <div className='absolute py-4 lg:py-3 px-2 w-[90%] -bottom-10 left-6 lg:w-[180px] rounded-2xl bg-yellow-500 font-bold lg:text-lg text-[1.3rem] hover:bg-black text-white'>
                  <h1 className='lg:px-8'>Building Renovation</h1>
                </div>

              </div>


              <div className='relative'>
                <img
                  src="https://as2.ftcdn.net/v2/jpg/04/29/27/19/1000_F_429271974_vnkmOsGh88vKhEx01uEOCkTiw4EKbQrN.jpg"
                  alt="image"
                  className='object-cover -z-10 lg:h-[300px] lg:w-[230px] h-[400px] w-full rounded-3xl'
                />
                <div className='absolute py-4 lg:py-3 px-2 w-[90%] -bottom-10 left-6 lg:w-[180px] flex flex-col items-center rounded-2xl justify-center bg-yellow-500 font-bold lg:text-lg text-[1.3rem] hover:bg-black text-white'>
                  <h1 className='mx-auto'>Building Renovation</h1>
                </div>
              </div>

              <div className='relative'>
                <img
                  src="https://www.shutterstock.com/image-photo/handsome-engineer-man-architect-working-600nw-2140387349.jpg"
                  alt="image"
                  className='object-cover -z-10 lg:h-[300px] lg:w-[230px] h-[400px] w-full rounded-3xl'
                />
                <div className='absolute py-4 lg:py-3 px-2 w-[90%] -bottom-10 left-6 lg:w-[180px] flex flex-col items-center rounded-2xl justify-center bg-yellow-500 font-bold lg:text-lg text-[1.3rem] hover:bg-black text-white'>
                  <h1 className='mx-auto'>Building Renovation</h1>
                </div>
              </div>

              <div className='relative'>
                <img
                  src="https://img.freepik.com/premium-photo/engineer-architect-discussing-building-plan-construction-sitegroup-builders-having-conversation-about-building-planbusinessbuildingindustrypeople-concept_64073-1351.jpg"
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

      <section className='w-full h-screen'>

      </section>

      <section className='w-full h-screen relative'>
        <div className='bg-black/90 text-white -z-10 lg:h-[450px] sm:justify-center lg:pb-20 flex flex-col lg:flex-row lg:flex lg:space-x-20 space-y-14 py-9 lg:py-0 lg:space-y-0'> 
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
        {/* <div className='px-32'> */}
          <div className=' flex shadow-2xl lg:flex-row flex-col-reverse absolute lg:top-[58%] lg:mx-14 bg-white z-10'>
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
              <img src="https://img.freepik.com/premium-photo/civil-engineer-woman-working-wearing-yellow-cap-her-head-digital-art_932772-270.jpg"
                alt="image"
                className='object-cover lg:h-[600px] w-full h-[300px]'
              />
            </div>
          </div>
        {/* </div> */}
      </section>
    </div >

  </>
}
