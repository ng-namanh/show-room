import { Star } from 'lucide-react'
import Image from 'next/image'

function Testimonial() {
  return (
    <section className='w-full bg-[#D2DFD8] mt-20 py-20'>
      <div className=' max-w-[1500px] mx-auto'>
        <div className='flex items-center justify-center flex-col gap-2 mx-auto'>
          <div className='w-[222px] py-2 px-4 bg-[#F5F5F5] rounded-2xl flex justify-center items-center'>
            <p className='text-[#7F4810]/75 font-semibold'>
              Tesinomial Section
            </p>
          </div>
          <h1 className='text-5xl my-4'>What Our Customer Say</h1>
          <p className='text-xl text-center text-[#505050]'>
            Discover the Stories and Experiences of Our Delighted <br />{' '}
            Customers
          </p>
        </div>
        <div className='grid grid-cols-3 gap-10 mt-16'>
          <div className='bg-white p-4 rounded-md'>
            <Image
              src='/testimonial/quote.png'
              alt='Next.js logo'
              width={419}
              height={523}
              className='object-contains w-auto h-auto'
            />
            <div className='my-6'>
              <p>
                I am genuinely impressed with the quality of the recliner chair
                I bought. The comfort it provides is beyond compare, and the
                design perfectly complements our living room. What sets apart is
                not just their exceptional products but also their commitment to
                customer satisfaction. They went the extra mile to ensure I was
                completely satisfied with my purchase, which is a rarity in
                today&apos;s market.
              </p>
            </div>
          </div>
          <div className='bg-white py-4 px-2 scale-125 mx-12 rounded-md'>
            <Image
              src='/testimonial/quote.png'
              alt='Next.js logo'
              width={419}
              height={523}
              className='object-contains w-auto h-auto'
            />
            <div className='my-6'>
              <p>
                I recently purchased a beautiful dining table and it has
                completely transformed our dining area. The craftsmanship and
                attention to detail are truly remarkable. The table is not only
                a functional piece of furniture but also a work of art that our
                family and guests admire. The process from selection to delivery
                was smooth, and the customer support team was incredibly helpful
                throughout.
              </p>
            </div>
            <div className='flex justify-between'>
              <div className='flex items-center justify-center gap-4'>
                <Image
                  src='/testimonial/avatar.png'
                  alt='Next.js logo'
                  width={419}
                  height={523}
                  className='object-contains w-auto h-auto'
                />
                <p>Micheal Roberts</p>
              </div>
              <div className='flex justify-start items-center'>
                <Star fill='#F2A156' color='#F2A156' size={20} />
                <Star fill='#F2A156' color='#F2A156' size={20} />
                <Star fill='#F2A156' color='#F2A156' size={20} />
                <Star fill='#F2A156' color='#F2A156' size={20} />
                <Star fill='#F2A156' color='#F2A156' size={20} />
              </div>
            </div>
          </div>
          <div className='bg-white py-4 px-2 rounded-md'>
            <Image
              src='/testimonial/quote.png'
              alt='Next.js logo'
              width={419}
              height={523}
              className='object-contains w-auto h-auto rounded-full'
            />
            <div className='my-6'>
              <p>
                My experience has been consistently outstanding. I&apos;ve
                furnished my entire home with their products, and every piece
                has exceeded my expectations. From the bedroom to the home
                office, offers a wide range of stylish and well-crafted
                furniture. What truly sets them apart is their dedicated
                customer support.
              </p>
            </div>
            <div className='flex justify-between'>
              <div className='flex items-center justify-center gap-4'>
                <Image
                  src='/testimonial/avatar2.png'
                  alt='Next.js logo'
                  width={419}
                  height={523}
                  className='object-contains w-auto h-auto rounded-full'
                />
                <p>Marta Brown</p>
              </div>
              <div className='flex justify-start items-center'>
                <Star fill='#F2A156' color='#F2A156' size={20} />
                <Star fill='#F2A156' color='#F2A156' size={20} />
                <Star fill='#F2A156' color='#F2A156' size={20} />
                <Star fill='#F2A156' color='#F2A156' size={20} />
                <Star fill='#F2A156' color='#F2A156' size={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Testimonial
