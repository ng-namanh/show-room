import { Mail, Star } from 'lucide-react'
import Image from 'next/image'

function Contact() {
  return (
    <section className='w-full mt-12 flex flex-col items-center justify-center'>
      <div className=' max-w-[980px] mx-auto'>
        <div>
          <h1 className='text-[52px] font-bold text-center'>
            Subscribe to Our Newsletter <br /> for Design Insights
          </h1>
          <p className='text-center mt-8 text-xl text-[#545454]'>
            Be the first to discover trends, inspirations, and special offers as{' '}
            <br />
            we bring the world of design directly to your inbox
          </p>
        </div>
        <div className='rounded-md mt-20'>
          <form className='flex flex-col gap-4 mt-12'>
            <div className='bg-white shadow-md flex p-2 justify-center items-center rounded-md'>
              <div className='flex flex-1 items-center justify-start ml-6 '>
                <Mail className='text-[#4D604F]' />
                <input
                  type='email'
                  placeholder='Enter your email address'
                  className='border-none ring-0 focus:outline-none focus:ring-0 p-4 '
                />
              </div>
              <button className='bg-[#4D604F] text-white py-4 px-10 rounded-md font-bold'>
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
export default Contact
