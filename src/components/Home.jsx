import { Carousel } from 'flowbite-react'
import React from 'react'
import home1 from "../assets/home-asset/home1.jpeg"
import home2 from "../assets/home-asset/home2.jpeg"
import { useNavigate } from 'react-router-dom'

const myHome = () => {

  const navigate = useNavigate();

  return (
    <div className='bg-neutralSilver' id='beranda'>
      <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen'>
        <Carousel className='w-full mx-auto'>
          <div className="my-2 md:my-8 py-12 flex flex-col lg:flex-row-reverse items-center justify-between gap-5">
            {/* <div className='flex justify-center  w-3/3 p-20'> */}
            <div className='flex justify-center w-[320px] sm:w-[70%] md:w-3/3 md:p-20'>
              <img src={home1} alt="" className='w-full'/>
            </div>
            {/* hero text */}
            <div className='md:w-4/5 md:pl-20 text-center md:text-start'>
              <h1 className='text-3xl md:text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug'>Berpengalaman lebih <span className='text-brandPrimary '>dari 3 tahun</span></h1>
              <p className='text-neutralGrey text-base mb-8'>bahagiakan teman dan kerabat dengan bucket yang kamu berikan</p>
              <button onClick={() => navigate('/produk')} className='btn-primary'>Produk kami</button>
            </div>
          </div>
          <div className="my-2 md:my-8 py-12 flex flex-col lg:flex-row-reverse items-center justify-between gap-5">
            <div className='flex justify-center w-[400px] sm:w-[70%] md:w-3/3 md:p-20'>
              <img src={home2} alt="" className='w-3/4'/>
            </div>
            {/* hero text */}
            <div className='md:w-4/5 md:pl-20 text-center md:text-start'>
              <h1 className='text-3xl md:text-5xl font-semibold mb-4 text-neutralDGrey md:w-full leading-snug'>Menggunakan bahan yang <span className='text-brandPrimary '>berkualitas</span></h1>
              <p className='text-neutralGrey text-base mb-8'>semua pasti senang dengan yang berkualitas</p>
              <button onClick={() => navigate('/produk')} className='btn-primary'>Produk kami</button>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  )
}

export default myHome