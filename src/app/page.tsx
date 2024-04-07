import Collection from '@/components/home/collection'
import Contact from '@/components/home/contact'
import Discover from '@/components/home/discover'
import Display from '@/components/home/display'
import Hero from '@/components/home/hero'
import ProductGrid from '@/components/home/products-grid'
import Tailor from '@/components/home/tailor'
import Testimonial from '@/components/home/testimonial'
import { LiaFacebookF } from 'react-icons/lia'
import Image from 'next/image'
import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between pt-6'>
      <header className='flex items-center justify-between container mx-auto my-0'>
        <div className='flex gap-2'>
          <Image
            src='/header/logo.png'
            alt='Next.js logo'
            width={71}
            height={61}
            className='object-contains w-auto h-auto'
          />
          <Image
            src='/header/HoangYen.png'
            alt='Next.js logo'
            width={310}
            height={100}
            className='object-contains w-auto h-auto mt-2'
          />
        </div>
        <ul className='text-xl font-medium flex gap-16'>
          <li>Home</li>
          <li>Product</li>
          <li>Services</li>
          <li>News</li>
          <li>Contact</li>
        </ul>
      </header>

      <Hero />
      <Tailor />
      <Display />
      <ProductGrid />
      <Discover />
      <Collection />
      <Testimonial />
      <Contact />
      <footer className='flex flex-col items-center justify-center w-full bg-[#1F1F1F] mt-12'>
        <div className='py-20 flex justify-evenly container'>
          <h1 className='text-white text-3xl'>
            We develop & create <br /> modern textiles
          </h1>
          <div className='text-white flex justify-between gap-24'>
            <div className='w-[192px] '>
              <p className='text-xl mb-4'>Address</p>
              <p className='text-[#D1D1D1]'>
                Germany — <br /> 785 15h Street, <br /> Office 478 <br />{' '}
                Berlin, De 81566
              </p>
            </div>
            <div className='w-[241px] '>
              <p className='text-xl mb-4'>Say hello</p>
              <div className='text-[#D1D1D1]'>
                <p>info@vivadecor.com</p>
                <p className='my-2'>+ )xxxxxxxxxx</p>
              </div>
              <div className='flex gap-4'>
                <LiaFacebookF className='cursor-pointer' />
                <FaTwitter className='cursor-pointer' />
                <FaInstagram className='cursor-pointer' />
                <FaLinkedin className='cursor-pointer' />
              </div>
            </div>
          </div>
        </div>
        <div className='bg-[#000000] w-full py-6 px-6 '>
          <div className='container text-white flex justify-start items-center gap-10 text-xl'>
            <p className='cursor-pointer'>Our Services</p>
            <p className='cursor-pointer'>Contact</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
