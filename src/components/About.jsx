import React from 'react'
import AboutImg from '../assets/about-asset/about1.jpeg'
import { FaChildren, FaMosque, FaMoneyBillWave } from 'react-icons/fa6';
import { MdHealthAndSafety } from 'react-icons/md';
import { motion } from "framer-motion"
import { fadeIn } from '../variants'

const About = () => {
    return (
        <div>
            {/* about text */}
            <div className='px-4 lg:px-14 max-w-screen-2x1 mx-auto my-8'>
                <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center'>
                    <motion.div 
                    variants={fadeIn("right", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{once:false, amount:0.9}}
                    className='flex justify-center w-3/3'>
                        <img src={AboutImg} alt="" className='w-96' />
                    </motion.div>
                    <motion.div 
                    id='tentangkami'
                    variants={fadeIn("left", 0.3)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{once:false, amount:0.7}}
                    className='mt-5 md:w-3/5 mx-auto text-center md:text-start'>
                        <h2 className='text-4xl font-semibold mb-4 text-neutralDGrey md:w-full'>Kenapa sih harus banget beli di <span className='text-brandPrimary'>Buckets</span>?</h2>
                        <p className='md:w-full text-neutralGrey mb-8'>Dengan lebih dari 3 tahun di industri ini, Buckets telah memahami kebutuhan pelanggan dengan sangat baik.
                            desain bucket yang ada di Buckets adalah yang paling unik dan menarik. Setiap detail diperhatikan dengan seksama, menciptakan karya seni yang tidak hanya mempesona mata tetapi juga menyentuh hati.
                            kualitas adalah prioritas utama di Buckets. Buckets menggunakan bahan-bahan berkualitas tinggi untuk setiap bucket yang dihasilkan.
                            <span className='text-[#FF3474]'>jika Anda mencari cara untuk membuat seseorang tersenyum, merasa dihargai, atau sekadar berbagi kebahagiaan, tak perlu ragu. Pilihlah Buckets, tempat di mana pengalaman, desain unik, dan kualitas menggabungkan keindahan dalam sebuah bucket yang tak terlupakan.</span></p>
                        <button className='btn-primary' >Selengkapnya</button>
                    </motion.div>
                </div>
            </div>
            {/* company stats */}
            <div className='px-4 lg:px-32 max-w-screen-2x1 mx-auto bg-neutralSilver py-16 md:mt-16'>
                <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
                    <motion.div 
                    variants={fadeIn("down", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{once:false, amount:0.7}}
                    className='md:w-1/2 text-center md:text-start'>
                        <h2 className='text-4xl font-semibold  text-neutralDGrey mb-4 md:w-full'>Beberapa persen penghasilan disumbangkan <br /><span className='text-brandPrimary'>untuk kemanusiaan</span></h2>
                        <p>memanusiakan manusia adalah akhlak mulia</p>
                    </motion.div>
                    {/* stats */}
                    <motion.div 
                    variants={fadeIn("up", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{once:false, amount:0.7}}
                    className='md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-12'>
                        <div className='space-y-8'>
                            <div className='flex items-center gap-4'>
                                <h1 className='text-5xl text-brandPrimary font-semibold'><FaChildren /></h1>
                                <div>
                                    <h4 className='text-2x1 text-neutralDGrey font-semibold'>5%</h4>
                                    <p>untuk anak yatim</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-4'>
                                <h1 className='text-5xl text-brandPrimary font-semibold'><FaMosque /></h1>
                                <div>
                                    <h4 className='text-2x1 text-neutralDGrey font-semibold'>5%</h4>
                                    <p>untuk masjid yang <br /> membutuhkan</p>
                                </div>
                            </div>
                        </div>
                        <div className='space-y-8'>
                            <div className='flex items-center gap-4'>
                                <h1 className='text-5xl text-brandPrimary font-semibold'><MdHealthAndSafety /></h1>
                                <div>
                                    <h4 className='text-2x1 text-neutralDGrey font-semibold'>10%</h4>
                                    <p>obat-obatan untuk <br /> saudara di palestina</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-4'>
                                <h1 className='text-5xl text-brandPrimary font-semibold'><FaMoneyBillWave /></h1>
                                <div>
                                    <h4 className='text-2x1 text-neutralDGrey font-semibold'>5%</h4>
                                    <p>zakat kepada amil zakat</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

        </div>
    )
}

export default About