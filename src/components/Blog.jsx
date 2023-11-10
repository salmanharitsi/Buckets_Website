import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6';
import { motion } from "framer-motion"
import { fadeIn } from '../variants'
import { useNavigate } from 'react-router-dom';
import bs1 from '../assets/blog-asset/bungaboneka.jpeg'
import bs2 from '../assets/blog-asset/bungaduit.jpeg'
import bs3 from '../assets/blog-asset/bunga.jpeg'

function Blog() {
    const blogs = [
        { id: 1, title: "Bucket boneka", image: bs1 },
        { id: 2, title: "Bucket uang", image: bs2 },
        { id: 3, title: "Bucket bunga", image: bs3 }
    ]

    const navigate = useNavigate();

    return (
        <div className='px-4 lg:px-14 max-w-screen-2x1 mx-auto my-12'>
            <motion.div 
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once:false, amount:0.7}}
            className='text-center md:w-1/2 mx-auto'>
                <h2 className='text-4xl font-semibold mb-4 text-neutralDGrey'>Best seller dari kami</h2>
                <p className='text-sm text-neutralGrey mb-8 md:w-3/4 mx-auto'>produk dibawah ini adalah beberapa produk yang banyak disukai oleh pelanggan kami, dan menjadi nominasi top product, top product akan berganti setiap bulannya sesuai permintaan terbanyak</p>
            </motion.div>
            {/* all blogs */}
            <div 
            className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 items-center justify-between'>
                {
                    blogs.map(blog => <div key={blog.id} className='mx-auto relative mb-12 cursor-pointer'>
                        <img src={blog.image} alt="" className='hover:scale-95 transition-all duration-300' />
                        <div className='text-center px-4 py-8 bg-white shadow-lg rounded-md md:w-3/4 mx-auto absolute left-0 right-0 -bottom-12'>
                            <h3 className='mb-3 text-neutralGrey font-semibold'>{blog.title}</h3>
                            <div className='flex items-center  justify-center gap-8'>
                                <a onClick={() => navigate('/produk')} className='flex items-center font-bold text-brandPrimary hover:text-neutral-700'>Baca Selanjutnya <h3 className='inline-block ml-2'><FaArrowRightLong /></h3> </a>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    )
}

export default Blog