import Image from 'next/image'

const Collection = () => {
  return (
    <section className='mt-20 w-full flex flex-col items-center justify-center'>
      <div className='max-w-[1248px] mx-auto flex flex-col justify-between items-center'>
        <div className='flex items-center justify-center flex-col gap-2'>
          <div className='w-[222px] py-2 px-4 bg-[#F5F5F5] rounded-2xl flex justify-center items-center'>
            <p className='text-[#F73308] font-semibold'>Check out Collection</p>
          </div>
          <h1 className='text-[46px]'>Out Favourite Gallery</h1>
          <p className='text-lg'>Explore Our Gallery of Inspiring Designs</p>
        </div>
        <div className='flex flex-col gap-4 mt-12'>
          <div className='flex gap-4'>
            <Image
              src='/collection/grid1.png'
              alt='Next.js logo'
              width={1000}
              height={1000}
              className='object-contains w-auto h-auto'
            />
            <Image
              src='/collection/grid2.png'
              alt='Next.js logo'
              width={1000}
              height={1000}
              className='object-contains w-auto h-full'
            />
            <div className=' col-span-2'>
              <Image
                src='/collection/grid3.png'
                alt='Next.js logo'
                width={1000}
                height={1000}
                className='object-contains w-auto h-auto'
              />
            </div>
          </div>
          <div className='flex gap-4'>
            <div className='col-span-2'>
              <Image
                src='/collection/grid4.png'
                alt='Next.js logo'
                width={1000}
                height={1000}
                className='object-contains w-full h-auto'
              />
            </div>
            <Image
              src='/collection/grid5.png'
              alt='Next.js logo'
              width={1000}
              height={1000}
              className='object-contains w-auto h-full'
            />

            <Image
              src='/collection/grid6.png'
              alt='Next.js logo'
              width={1000}
              height={1000}
              className='object-contains w-auto h-full'
            />
          </div>
          <div></div>
        </div>
      </div>
    </section>
  )
}
export default Collection
