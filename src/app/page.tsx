import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Home() {
  return <>
    <section className='w-full h-screen pb-16'>
      <div className="flex flex-col-reverse justify-center lg:pt-8 items-center lg:flex-row w-full">
        <div className='w-full lg:w-1/2 ml-20'>
          <div className='flex items-center'>
            <div className='h-1 w-8 rounded-xl bg-yellow-500'></div>
            <h1 className='text-yellow-500 text-[1rem] font-nunito lg:text-xl font-bold'>SMART SOLUTIONS</h1>
          </div>
          <div>
            <h1 className=' font-play leading-tight font-extrabold text-[2rem] lg:text-[4rem]'>Building The Spaces Where Memories Are Made</h1>
            <p className='line-clamp-3 font-pop text-black/60'>Embark on a Journey of Innovation: Building Tomorrow, Sustainably Today with Our Pioneering Construction Techniques and Eco-Friendly Practices.</p>
          </div>
          <Button className='py-6 mb-8 px-7 font-semibold mt-10 bg-yellow-500'>Read More</Button>
        </div>
        <div className='w-full lg:w-1/2 flex items-center justify-center mt-20'>
          <div className='h-[400px] w-[400px] lg:h-[500px] lg:w-[500px]'>
            <img src="https://cdnassets.hw.net/dims4/GG/69e0795/2147483647/resize/480x%3E/quality/90/?url=https%3A%2F%2Fcdnassets.hw.net%2Fe3%2F76%2F1244c96b48fa9a1f23ade5d0e34b%2Flead-carpenter.jpg"
              alt="image"
              className='object-cover lg:h-[500px] lg:w-[500px] h-[400px] w-[400px] rounded-full'
            />
          </div>
        </div>
      </div>
    </section>

    <section className='flex flex-col lg:flex-row h-screen w-full mt-36 lg:mt-20'>
      <div className='lg:h-[570px] h-[300px] w-full lg:w-1/3 lg:ml-20 mt-32 lg:mt-26'>
        <img src='https://www.chitkara.edu.in/blogs/wp-content/uploads/2022/05/Civil-Engineering-banner.jpg'
          alt='image'
          className='object-cover lg:h-[570px] lg:w-[400px] lg:rounded-[2rem]'

        />
      </div>
      <div className='lg:w-2/3 pl-10 lg:pr-20 lg:pt-14 pt-32 lg:mt-36 w-full'>
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

  </>
}
