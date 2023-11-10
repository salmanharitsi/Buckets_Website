import React from 'react'
import CardProduct from './CardProduct'
import balon1 from '../assets/produk-asset/balon/balon1.jpeg'
import balon2 from '../assets/produk-asset/balon/balon2.jpeg'
import balon3 from '../assets/produk-asset/balon/balon3.jpeg'
import boneka1 from '../assets/produk-asset/boneka/boneka-l1.jpeg'
import boneka2 from '../assets/produk-asset/boneka/boneka-l2.jpeg'
import boneka3 from '../assets/produk-asset/boneka/boneka-l3.jpeg'
import boneka4 from '../assets/produk-asset/boneka/boneka-m1.jpeg'
import boneka5 from '../assets/produk-asset/boneka/boneka-m2.jpeg'
import boneka6 from '../assets/produk-asset/boneka/boneka-s1.jpeg'
import boneka7 from '../assets/produk-asset/boneka/boneka-s2.jpeg'
import boneka8 from '../assets/produk-asset/boneka/boneka-s3.jpeg'
import bunga1 from '../assets/produk-asset/bunga/bunga-l1.jpeg'
import bunga2 from '../assets/produk-asset/bunga/bunga-m1.jpeg'
import bunga3 from '../assets/produk-asset/bunga/bunga-m2.jpeg'
import bunga4 from '../assets/produk-asset/bunga/bunga-s1.jpeg'
import bunga5 from '../assets/produk-asset/bunga/bunga-s2.jpeg'
import snack1 from '../assets/produk-asset/snack/snack1.jpeg'
import snack2 from '../assets/produk-asset/snack/snack2.jpeg'
import snack3 from '../assets/produk-asset/snack/snack3.jpeg'
import snack4 from '../assets/produk-asset/snack/snack4.jpeg'
import uang1 from '../assets/produk-asset/uang/uang-l1.jpeg'
import uang2 from '../assets/produk-asset/uang/uang-l2.jpeg'
import uang3 from '../assets/produk-asset/uang/uang-m1.jpeg'
import uang4 from '../assets/produk-asset/uang/uang-m2.jpeg'
import uang5 from '../assets/produk-asset/uang/uang-s1.jpeg'
import uang6 from '../assets/produk-asset/uang/uang-s2.jpeg'
import kategori1 from '../assets/kategori-asset/balloon.png'
import kategori2 from '../assets/kategori-asset/appetizer.png'
import kategori3 from '../assets/kategori-asset/flower.png'
import kategori4 from '../assets/kategori-asset/money.png'
import kategori5 from '../assets/kategori-asset/teddy-bear.png'


function Produk() {
    const balon = [
        {
            id: 1,
            imgAlt: "Bucket boneka",
            imgSrc: balon1,
            title: "Cepasa flower balon (small)",
            ratingNum: "5.0",
            price: "55.000"
        },
        {
            id: 2,
            imgAlt: "Bucket boneka",
            imgSrc: balon2,
            title: "Umraniye flower balon (small)",
            ratingNum: "5.0",
            price: "50.000"
        },
        {
            id: 3,
            imgAlt: "Bucket boneka",
            imgSrc: balon3,
            title: "Lavender flower balon (small)",
            ratingNum: "5.0",
            price: "60.000"
        },
    ]

    const boneka = [
        {
            id: 1,
            imgAlt: "Bucket boneka",
            imgSrc: boneka1,
            title: "Pinky teddy bear (large)",
            ratingNum: "5.0",
            price: "95.000"
        },
        {
            id: 2,
            imgAlt: "Bucket boneka",
            imgSrc: boneka2,
            title: "Black teddy bear (large)",
            ratingNum: "5.0",
            price: "90.000"
        },
        {
            id: 3,
            imgAlt: "Bucket boneka",
            imgSrc: boneka3,
            title: "Royal blacky blue teddy (large)",
            ratingNum: "5.0",
            price: "100.000"
        },
        {
            id: 4,
            imgAlt: "Bucket boneka",
            imgSrc: boneka4,
            title: "Royal alum blue teddy (medium)",
            ratingNum: "5.0",
            price: "80.000"
        },
        {
            id: 5,
            imgAlt: "Bucket boneka",
            imgSrc: boneka5,
            title: "Golden teddy bear (medium)",
            ratingNum: "5.0",
            price: "80.000"
        },
        {
            id: 6,
            imgAlt: "Bucket boneka",
            imgSrc: boneka6,
            title: "Smooth grape teddy (small)",
            ratingNum: "5.0",
            price: "50.000"
        },
        {
            id: 7,
            imgAlt: "Bucket boneka",
            imgSrc: boneka7,
            title: "Cutie teddy bear (small)",
            ratingNum: "5.0",
            price: "50.000"
        },
        {
            id: 8,
            imgAlt: "Bucket boneka",
            imgSrc: boneka8,
            title: "Royal green teddy (small)",
            ratingNum: "5.0",
            price: "50.000"
        },
    ]

    const bunga = [
        {
            id: 1,
            imgAlt: "Bucket boneka",
            imgSrc: bunga1,
            title: "Royal paldeium white flower (large)",
            ratingNum: "5.0",
            price: "115.000"
        },
        {
            id: 2,
            imgAlt: "Bucket boneka",
            imgSrc: bunga2,
            title: "Royal black tiruna flower (medium)",
            ratingNum: "5.0",
            price: "80.000"
        },
        {
            id: 3,
            imgAlt: "Bucket boneka",
            imgSrc: bunga3,
            title: "Golden pacese flower (medium)",
            ratingNum: "5.0",
            price: "75.000"
        },
        {
            id: 4,
            imgAlt: "Bucket boneka",
            imgSrc: bunga4,
            title: "Miruni flower (small)",
            ratingNum: "5.0",
            price: "80.000"
        },
        {
            id: 5,
            imgAlt: "Bucket boneka",
            imgSrc: bunga5,
            title: "Malareo flower (small)",
            ratingNum: "5.0",
            price: "80.000"
        },
    ]

    const snack = [
        {
            id: 1,
            imgAlt: "Bucket boneka",
            imgSrc: snack1,
            title: "Blacky dairy milk (medium)",
            ratingNum: "5.0",
            price: "75.000"
        },
        {
            id: 2,
            imgAlt: "Bucket boneka",
            imgSrc: snack2,
            title: "Golden chocolatos (medium)",
            ratingNum: "5.0",
            price: "80.000"
        },
        {
            id: 3,
            imgAlt: "Bucket boneka",
            imgSrc: snack3,
            title: "Pinky silver queen (medium)",
            ratingNum: "5.0",
            price: "75.000"
        },
        {
            id: 4,
            imgAlt: "Bucket boneka",
            imgSrc: snack4,
            title: "Grapy silver queen x pocky (medium)",
            ratingNum: "5.0",
            price: "80.000"
        },
    ]

    const uang = [
        {
            id: 1,
            imgAlt: "Bucket boneka",
            imgSrc: uang1,
            title: "Pinky royal money (large)",
            ratingNum: "5.0",
            price: "115.000"
        },
        {
            id: 2,
            imgAlt: "Bucket boneka",
            imgSrc: uang2,
            title: "Black ladeon money (large)",
            ratingNum: "5.0",
            price: "110.000"
        },
        {
            id: 3,
            imgAlt: "Bucket boneka",
            imgSrc: uang3,
            title: "Golden miru money (medium)",
            ratingNum: "5.0",
            price: "75.000"
        },
        {
            id: 4,
            imgAlt: "Bucket boneka",
            imgSrc: uang4,
            title: "Blue rainy money (medium)",
            ratingNum: "5.0",
            price: "80.000"
        },
        {
            id: 5,
            imgAlt: "Bucket boneka",
            imgSrc: uang5,
            title: "Golden filar money (small)",
            ratingNum: "5.0",
            price: "50.000"
        },
        {
            id: 6,
            imgAlt: "Bucket boneka",
            imgSrc: uang6,
            title: "Golden blue laru money (small)",
            ratingNum: "5.0",
            price: "60.000"
        },
    ]
    return (
        <div className='px-4 lg:px-14 max-w-screen-2x1 mx-auto my-12 md:mt-32'>
            {/* kategori logo */}
            <div className='text-center m-8'>
                <h2 className='text-4xl text-neutralDGrey font-semibold mb-2'>Kategori Produk Kami</h2>
            </div>
            <div className='my-12 flex flex-wrap justify-center items-center gap-10 md:gap-36 border-2 rounded-lg p-5'>
                <a href="#balon" className='flex justify-center items-center gap-4 p-5 rounded-md flex-col hover:bg-brandPrimary transition-all duration-300'>
                    <img src={kategori1} alt="" className='w-12' />
                    <p>Bucket balon</p>
                </a>
                <a href="#snack" className='flex justify-center items-center gap-4 p-5 rounded-md flex-col hover:bg-brandPrimary transition-all duration-300'>
                    <img src={kategori2} alt="" className='w-12' />
                    <p>Bucket snacks</p>
                </a>
                <a href="#bunga" className='flex justify-center items-center gap-4 p-5 rounded-md flex-col hover:bg-brandPrimary transition-all duration-300'>
                    <img src={kategori3} alt="" className='w-12' />
                    <p>Bucket bunga</p>
                </a>
                <a href="#uang" className='flex justify-center items-center gap-4 p-5 rounded-md flex-col hover:bg-brandPrimary transition-all duration-300'>
                    <img src={kategori4} alt="" className='w-12' />
                    <p>Bucket uang</p>
                </a>
                <a href="#boneka" className='flex justify-center items-center gap-4 p-5 rounded-md flex-col hover:bg-brandPrimary transition-all duration-300'>
                    <img src={kategori5} alt="" className='w-12' />
                    <p>Bucket boneka</p>
                </a>
            </div>
            {/* balon */}
            <div className='text-start m-8 md:mt-24' id='balon'>
                <h2 className='text-4xl text-neutralDGrey font-semibold mb-2'>Bucket Balon</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {balon.map((product, id) => (
                    <CardProduct
                        key={id}
                        imgAlt={product.imgAlt}
                        imgSrc={product.imgSrc}
                        title={product.title}
                        ratingNum={product.ratingNum}
                        price={product.price}
                    />
                ))}
            </div>

            {/* snack */}
            <div className='text-start m-8 md:mt-16' id='snack'>
                <h2 className='text-4xl text-neutralDGrey font-semibold mb-2'>Bucket Snack</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {snack.map((product, id) => (
                    <CardProduct
                        key={id}
                        imgAlt={product.imgAlt}
                        imgSrc={product.imgSrc}
                        title={product.title}
                        ratingNum={product.ratingNum}
                        price={product.price}
                    />
                ))}
            </div>

            {/* bunga */}
            <div className='text-start m-8 md:mt-16' id='bunga'>
                <h2 className='text-4xl text-neutralDGrey font-semibold mb-2'>Bucket Bunga</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {bunga.map((product, id) => (
                    <CardProduct
                        key={id}
                        imgAlt={product.imgAlt}
                        imgSrc={product.imgSrc}
                        title={product.title}
                        ratingNum={product.ratingNum}
                        price={product.price}
                    />
                ))}
            </div>

            {/* uang */}
            <div className='text-start m-8 md:mt-16' id='uang'>
                <h2 className='text-4xl text-neutralDGrey font-semibold mb-2'>Bucket Uang</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {uang.map((product, id) => (
                    <CardProduct
                        key={id}
                        imgAlt={product.imgAlt}
                        imgSrc={product.imgSrc}
                        title={product.title}
                        ratingNum={product.ratingNum}
                        price={product.price}
                    />
                ))}
            </div>

            {/* boneka */}
            <div className='text-start m-8 md:mt-16' id='boneka'>
                <h2 className='text-4xl text-neutralDGrey font-semibold mb-2'>Bucket Boneka</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {boneka.map((product, id) => (
                    <CardProduct
                        key={id}
                        imgAlt={product.imgAlt}
                        imgSrc={product.imgSrc}
                        title={product.title}
                        ratingNum={product.ratingNum}
                        price={product.price}
                    />
                ))}
            </div>
        </div>
    )
}

export default Produk