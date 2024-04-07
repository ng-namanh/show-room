import { Ellipsis, ShoppingCart } from 'lucide-react'
import Image from 'next/image'

const productGrid = [
  {
    id: 1,
    image: '/product-grid/grid1.png',
    title: 'White drapes',
    price: 105,
    discountPrice: 95
  },
  {
    id: 2,
    image: '/product-grid/grid2.png',
    title: 'Golden drapes',
    price: 105,
    discountPrice: 95
  },
  {
    id: 3,
    image: '/product-grid/grid3.png',
    title: 'Blind X size',
    price: 105,
    discountPrice: 95
  },
  {
    id: 4,
    image: '/product-grid/grid4.png',
    title: 'xxxx',
    price: 105,
    discountPrice: 95
  },
  {
    id: 5,
    image: '/product-grid/grid5.png',
    title: 'xxxx',
    price: 105,
    discountPrice: 95
  },
  {
    id: 6,
    image: '/product-grid/grid6.png',
    title: 'xxxx',
    price: 105,
    discountPrice: 95
  },
  {
    id: 7,
    image: '/product-grid/grid7.png',
    title: 'xxxx',
    price: 105,
    discountPrice: 95
  },
  {
    id: 8,
    image: '/product-grid/grid8.png',
    title: 'xxxx',
    price: 105,
    discountPrice: 95
  }
]

const ProductGrid = () => {
  return (
    <section className='flex flex-col items-center justify-center w-full flex-1 mt-10'>
      <div className='w-[1248px]'>
        <div className='flex justify-between items-center w-full'>
          <div>
            <div className=' py-2 bg-[#F5F5F5] rounded-2xl flex justify-center items-center'>
              <p className='text-[#F73308]'>Discover our products</p>
            </div>
            <h1 className='uppercase mt-4 text-xl font-medium'>
              Popular Right Now
            </h1>
          </div>
          <ul className='flex justify-center items-center gap-8 '>
            <li className='border rounded-full border-black px-6 py-3'>
              Best Seller
            </li>
            <li>Curtain fabric</li>
            <li>Vertical blinds</li>
            <li>
              <Ellipsis />
            </li>
          </ul>
        </div>
        <div className='grid grid-cols-4 grid-rows-2 mt-20 gap-x-6 gap-y-14'>
          {productGrid.map((product) => (
            <div key={product.id}>
              <div>
                <Image
                  src={product.image}
                  alt='Next.js logo'
                  width={419}
                  height={523}
                  className='object-contains w-full h-auto'
                />
              </div>
              <div className='flex flex-col gap-2 p-4 bg-[#D2DFD8]'>
                <p className='text-[#505050] font-bold text-xl'>
                  {product.title}
                </p>
                <div className='flex items-center justify-between'>
                  <div className='flex gap-3'>
                    <p className='text-[#9C9C9C] font-semibold line-through text-lg'>
                      ${product.discountPrice}
                    </p>
                    <p className=' font-semibold text-lg'>${product.price}</p>
                  </div>
                  <div className='rounded-full bg-[#EDEDED] flex items-center justify-center p-2'>
                    <ShoppingCart />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default ProductGrid
