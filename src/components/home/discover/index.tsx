import { Check } from 'lucide-react'
import Image from 'next/image'

const Discover = () => {
  return (
    <section className='mt-20 w-full'>
      <div className='max-w-[1320px] mx-auto flex justify-between items-center'>
        <div className='relative'>
          <Image
            src='/discover/discover.png'
            alt='Next.js logo'
            width={1000}
            height={1000}
            className='object-contains w-auto h-auto'
          />
          <div className='absolute bottom-0 -right-16 w-[249px] bg-[#1E1E1E] flex items-center justify-center py-12 px-4 leading-8'>
            <p className='text-[28px] text-white'>
              We make your home a perfect place for living
            </p>
          </div>
        </div>
        <div className='max-w-[489px]'>
          <h1 className='font-bold text-4xl'>
            Discover Our New Cozy Collection
          </h1>
          <p className='mt-10 mb-6 text-[15px] leading-6 text-[#4F4F4F]'>
            Your surroundings have a profound impact on your mood. Discover how
            our high-quality furniture can transform your space into a haven of
            comfort and happiness. Create an environment that nurtures your
            well-being and elevates your spirits with the perfect blend of style
            and coziness.
          </p>
          <ul className='flex flex-col gap-3'>
            <li className='flex items-center gap-4'>
              <div className='rounded-full bg-[#D9D9D9] flex items-center justify-center p-2'>
                <Check size={20} className='font-bold text-white' />
              </div>
              <p className='font-bold'>Unmatched Comfort</p>
            </li>
            <li className='flex items-center gap-4'>
              <div className='rounded-full bg-[#D9D9D9] flex items-center justify-center p-2'>
                <Check size={20} className='font-bold text-white' />
              </div>
              <p className='font-bold'> Crafted for Quality</p>
            </li>
            <li className='flex items-center gap-4'>
              <div className='rounded-full bg-[#D9D9D9] flex items-center justify-center p-2'>
                <Check size={20} className='font-bold text-white' />
              </div>
              <p className='font-bold'>Stylish Elegance</p>
            </li>
          </ul>
          <button className='mt-6 px-8 py-3 text-white bg-[#4D604F] flex justify-center items-center'>
            xxxxxxxxx
          </button>
        </div>
      </div>
    </section>
  )
}
export default Discover
