import { MoveRight } from 'lucide-react'
import Image from 'next/image'

const Tailor = () => {
  return (
    <section className='mt-10 w-full'>
      <div className='max-w-[1387px] mx-auto'>
        <div className='flex justify-between w-full'>
          <div>
            <p>Individual tailoring</p>
            <h1 className='uppercase mt-6 text-2xl font-medium'>
              Measured, Made and <br /> Fitted by Us
            </h1>
            <div className='h-[0.73px] border border-t border-[#77532E] mt-6'></div>
          </div>
          <div className='w-[669.97px]'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo
            </p>
            <p className='mt-4'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo
            </p>
          </div>
        </div>
        <div className='grid grid-cols-4 mt-20'>
          <div className='border-r border-[#9C9C9C] p-4'>
            <div>
              <Image
                src='/tailor/image36.png'
                alt='Next.js logo'
                width={106}
                height={82}
                className='object-cover w-auto h-auto'
              />
              <div className='mt-8'>
                <p className='text-lg'>
                  Custom <br />
                  tailoring
                </p>
                <MoveRight className='mt-14' />
              </div>
            </div>
          </div>
          <div className='border-r border-[#9C9C9C] p-4'>
            <Image
              src='/tailor/image37.png'
              alt='Next.js logo'
              width={419}
              height={523}
              className='object-contains w-auto h-auto'
            />
            <div className='mt-8'>
              <p className='text-lg'>
                Custom <br />
                tailoring
              </p>
              <MoveRight className='mt-14' />
            </div>
          </div>
          <div className='border-r border-[#9C9C9C] p-4'>
            <Image
              src='/tailor/image38.png'
              alt='Next.js logo'
              width={419}
              height={523}
              className='object-contains w-auto h-auto'
            />
            <div className='mt-8'>
              <p className='text-lg'>
                Custom <br />
                tailoring
              </p>
              <MoveRight className='mt-14' />
            </div>
          </div>
          <div className='p-4'>
            <Image
              src='/tailor/image39.png'
              alt='Next.js logo'
              width={419}
              height={523}
              className='object-contains w-auto h-auto'
            />
            <div className='mt-8'>
              <p className='text-lg'>
                Custom <br />
                tailoring
              </p>
              <MoveRight className='mt-14' />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Tailor
