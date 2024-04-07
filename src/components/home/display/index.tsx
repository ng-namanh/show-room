import Image from 'next/image'

const Display = () => {
  return (
    <section className='mt-10 w-full grid grid-cols-4 mx-auto'>
      <div>
        <div className='relative h-full cursor-pointer'>
          <Image
            src='/display/drape.png'
            alt='Next.js logo'
            width={419}
            height={523}
            className='object-cover w-full h-full border rounded-md'
            quality={100}
          />
          <p className='absolute bottom-1 right-0 z-50 text-white font-medium text-2xl'>
            Drape
          </p>
        </div>
      </div>

      <div>
        <div className='relative h-full cursor-pointer'>
          <Image
            src='/display/curtain.png'
            alt='Next.js logo'
            width={419}
            height={523}
            className='object-cover w-full h-full border rounded-md'
            quality={100}
          />
          <p className='absolute bottom-1 right-0 z-50 text-white font-medium text-2xl'>
            Curtain
          </p>
        </div>
      </div>
      <div>
        <div className='relative h-full cursor-pointer'>
          <Image
            src='/display/blind.png'
            alt='Next.js logo'
            width={419}
            height={523}
            className='object-cover w-full h-full border rounded-md'
            quality={100}
          />
          <p className='absolute bottom-1 right-0 z-50 text-white font-medium text-2xl'>
            Blind
          </p>
        </div>
      </div>
      <div>
        <div className='relative h-full cursor-pointer'>
          <Image
            src='/display/culting-blind.png'
            alt='Next.js logo'
            width={419}
            height={523}
            className='object-cover w-full h-full border rounded-md'
            quality={100}
          />
          <p className='absolute bottom-1 right-0 z-50 text-white font-medium text-2xl'>
            Culting blind
          </p>
        </div>
      </div>
    </section>
  )
}

export default Display
