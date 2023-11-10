import React from 'react'
import Blog from '../components/Blog'
import MyFooter from '../components/Footer'
import Home from '../components/Home'
import Navbar from '../components/Navbar'
import Services from '../components/Services'
import About from '../components/About'

const Beranda = () => {
    return (
        <>
            <Navbar />
            <Home />
            <Services />
            <About />
            <Blog />
            <MyFooter />
        </>
    )
}

export default Beranda