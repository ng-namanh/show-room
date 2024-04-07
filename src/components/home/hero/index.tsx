import Image from 'next/image'

const Hero = () => {
  return (
    <section className='flex flex-col items-center justify-center w-full flex-1  max-w-[1740px]'>
      <div className='flex justify-center items-center'>
        <div className='grid grid-cols-6 gap-5 relative mt-[15rem] mx-auto '>
          <div className='w-full container absolute z-50 -top-[15rem] lg:right-0 md:left-0 mx-auto my-0'>
            <h1 className='text-[190px] text-[#557967] font-extralight'>
              CURTAINS
            </h1>
            <h1 className='text-[190px] text-right text-[#557967] font-extralight -mt-16'>
              & BLINDS
            </h1>
          </div>
          <div className='flex flex-col items-center justify-end col-span-2'>
            <p className='uppercase w-[323px] mb-8'>
              MAKE YOUR HOME LOOK IT VERY BEST, NO COMPROMISE. YOU DESERVED IT.
            </p>
            <Image
              src='/hero/image43.png'
              alt='Next.js logo'
              width={419}
              height={523}
            />
          </div>
          <div className='col-span-3 flex items-start justify-start pb-32'>
            <Image
              src='/hero/image44.png'
              alt='Next.js logo'
              width={819}
              height={809}
            />
          </div>
          <div className='flex flex-col items-end justify-end md:mr-0'>
            <Image
              src='/hero/ornament.png'
              alt='Next.js logo'
              width={226}
              height={389}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
export default Hero
