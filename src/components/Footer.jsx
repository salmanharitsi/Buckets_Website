import React from 'react'
import { Footer } from 'flowbite-react';
import logo from '../assets/bucketLogo.png'
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';

const MyFooter = () => {
    return (
        <Footer container className='bg-[#263238] rounded-none md:px-28'>
            <div className="w-full">
                <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
                    <div className='space-y-4 mb-1'>
                        <a href="" className='text-2xl font-semibold flex items-center space-x-0'><img src={logo} alt="" className='w-14 inline-block items-center' /><span className='text-neutralSilver text-4xl'>BUCKETS</span></a>
                        <div className='ml-5'> 
                            <p className='mb-1 text-neutralSilver'>Copyright &copy; 2023 Buckets</p>
                            <p className='text-neutralSilver mb-10'>All right reserved</p>
                        </div>
                        <div className="mt-4 ml-5 flex space-x-6 sm:mt-0 sm:justify-start">
                            <Footer.Icon href="#" icon={BsFacebook} />
                            <Footer.Icon href="#" icon={BsInstagram} />
                            <Footer.Icon href="#" icon={BsTwitter} />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
                        <div>
                            <Footer.Title title="Profil" className='text-neutralSilver' />
                            <Footer.LinkGroup col>
                                <Footer.Link href="#">Tentang kami</Footer.Link>
                                <Footer.Link href="#">Kontak</Footer.Link>
                                <Footer.Link href="#">Kemanusiaan</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title="Legalitas" className='text-neutralSilver' />
                            <Footer.LinkGroup col>
                                <Footer.Link href="#">Privacy Policy</Footer.Link>
                                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                    </div>
                </div>
            </div>
        </Footer>

    )
}

export default MyFooter