import React from 'react'
import { motion } from "framer-motion"
import { fadeIn } from '../variants'
import kategori1 from '../assets/kategori-asset/balloon.png'
import kategori2 from '../assets/kategori-asset/appetizer.png'
import kategori3 from '../assets/kategori-asset/flower.png'
import kategori4 from '../assets/kategori-asset/money.png'
import kategori5 from '../assets/kategori-asset/teddy-bear.png'
import layanan1 from '../assets/kategori-asset/flowers.png'
import layanan2 from '../assets/kategori-asset/order.png'
import layanan3 from '../assets/kategori-asset/booking.png'

const Services = () => {
    const services = [
        {id: 1, title: "Custom bentuk bucket mu", description: "Kamu bisa membuat desain mu sendiri sesuai keinginanmu, dan akan kami realisasikan", image: layanan1},
        {id: 2, title: "Pesan buat teman, kerabat jauh", description: "Kamu bisa memesan bucket untuk teman atau kerabat mu yang ada di luar kota", image: layanan2},
        {id: 3, title: "Booking order duluan biar ga kehabisan", description: "Booking bucket duluan aja, biar ga kehabisan jenis bucket yang diinginkan, dan ada yang limited juga lo", image: layanan3}
    ]
    return (
        <div className='md:px-14 px-4 py-16 max-w-screen-2xl mx-auto'>
            <motion.div
             variants={fadeIn("down", 0.2)}
             initial="hidden"
             whileInView={"show"}
             viewport={{once:false, amount:0.7}}
             className='text-center m-8'>
                <h2 className='text-4xl text-neutralDGrey font-semibold mb-2'>Kategori Produk Kami</h2>
                <p className='text-neutralDGrey'>Kami memiliki 5 kategori produk</p>
            </motion.div>

            {/* kategori logo */}
            <motion.div 
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once:false, amount:0.7}}
            className='my-12 flex flex-wrap justify-center items-center gap-10 md:gap-36'>
                <div className='flex justify-center items-center gap-4 p-5 rounded-md flex-col hover:bg-brandPrimary transition-all duration-300'>
                    <img src={kategori1} alt="" className='w-12' />
                    <p>Bucket balon</p>
                </div>
                <div className='flex justify-center items-center gap-4 p-5 rounded-md flex-col hover:bg-brandPrimary transition-all duration-300'>
                    <img src={kategori2} alt="" className='w-12' />
                    <p>Bucket snacks</p>
                </div>
                <div className='flex justify-center items-center gap-4 p-5 rounded-md flex-col hover:bg-brandPrimary transition-all duration-300'>
                    <img src={kategori3} alt="" className='w-12' />
                    <p>Bucket bunga</p>
                </div>
                <div className='flex justify-center items-center gap-4 p-5 rounded-md flex-col hover:bg-brandPrimary transition-all duration-300'>
                    <img src={kategori4} alt="" className='w-12' />
                    <p>Bucket uang</p>
                </div>
                <div className='flex justify-center items-center gap-4 p-5 rounded-md flex-col hover:bg-brandPrimary transition-all duration-300'>
                    <img src={kategori5} alt="" className='w-12' />
                    <p>Bucket boneka</p>
                </div>
            </motion.div>

            {/* Services card */}
            <motion.div 
            id='layanan'
            variants={fadeIn("down", 0.9)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once:false, amount:0.7}}
            className='mt-20 md:w-1/2 mx-auto text-center'>
                <h2 className='text-4xl text-neutralDGrey font-semibold mb-2'>Rancang rencana bucket mu dengan beberapa layanan kami</h2>
                <p className='text-neutralDGrey'>apalagi yang kamu tunggu?</p>
            </motion.div>

            {/* Cards */}
            <motion.div
             variants={fadeIn("up", 0.2)}
             initial="hidden"
             whileInView={"show"}
             viewport={{once:false, amount:0.7,}}
             className='mt-14 grid lg:grid-cols-3 md:grid-cols-2 gird-cols-1 md:w-11/12 mx-auto gap-12'>
                {
                    services.map(service => <div key={service.id} className='px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md 
                    shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-[#FF3474] transition-all duration-300 flex 
                    items-center justify-center h-full'>
                        <div>
                            <div className='bg-[#FEACC6] h-14 w-14 mx-auto rounded-tl-3xl rounded-br-3xl'><img src={service.image} alt="" className='-ml-6' /></div>
                            <h4 className='text-2xl font-bold text-neutralDGrey mb-2 px-2'>{service.title}</h4>
                            <p className='text-sm text-neutralGrey'>{service.description}</p>
                        </div>
                    </div>)
                }
            </motion.div>
        </div>
    )
}

export default Services