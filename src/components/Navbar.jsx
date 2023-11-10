import React, { useEffect, useState } from 'react'
import logo from '../assets/bucketLogo.png'
import { Link } from 'react-scroll';
import { useNavigate } from 'react-router-dom';

//react icon
import { FaXmark, FaBars } from 'react-icons/fa6'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const navigate = useNavigate();

    //set toogle menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true);
            }
            else {
                setIsSticky(false);
            }
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.addEventListener('scroll', handleScroll);
        }
    });

    //nav item
    const navItems = [
        { link: "Beranda", path: "beranda" },
        { link: "Tentang Kami", path: "tentangkami" },
        { link: "Produk", to: "/produk" },
        { link: "Layanan", path: "layanan" },
    ];

    return (
        <header className='w-full bg-white md:bg-transparent fixed top-0 left-0 right-0'>
            <nav className={`py-4 lg:px-14 px-4 ${isSticky ? "sticky top-0 left-0 right-0 border-b bg-white duration-300" : ""}`}>
                <div className='flex justify-between items-center text-base gap-8'>
                    <a href="" className='text-2xl font-semibold flex items-center space-x-0'><img src={logo} alt="" className='w-9 inline-block items-center' /><span className='text-[#263238]'>BUCKETS</span></a>

                    <ul className='md:flex space-x-12 hidden'>
                        {
                            navItems.map(({ link, path, to }) => <Link to={path} spy={true} smooth={true} offset={-100} key={path} onClick={() => navigate(to)} className='block cursor-pointer text-base text text-grey900 hover:text-brandPrimary first:font-medium'>{link}</Link>)
                        }
                    </ul>

                    <div className='space-x-10 hidden lg:flex items-center'>
                        <a href="/" className='hidden lg:flex items-center text-brandPrimary hover:text-grey900'>Login</a>
                        <button onClick={() => navigate('/produk')} className='bg-brandPrimary text-white py-2 px-4 transition-all duration-300 rounded hover:bg-neutralDGrey'>Sign up</button>
                    </div>

                    <div className='md:hidden'>
                        <button
                            onClick={toggleMenu}
                            className='text-neutralDGrey focus:outline-none focus:text-gray-500'>
                            {
                                isMenuOpen ? (<FaXmark className='h-6 w-6' />) : (<FaBars className='h-6 w-6' />)
                            }
                        </button>
                    </div>
                </div>

                {/* items for mobile devices */}
                <div className={`space-y-4 px-4 mt-16 py-7 bg-brandPrimary ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
                    {
                        navItems.map(({ link, path }) => <Link to={path} spy={true} smooth={true} offset={-100} key={path} className='block text-base text text-white text-center hover:text-brandPrimary first:font-medium'>{link}</Link>)
                    }
                </div>
            </nav>
        </header>
    )
}

export default Navbar