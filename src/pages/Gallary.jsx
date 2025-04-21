import React from 'react'
import Footer from '../component/Footer';

const images = [
    '/images/gal2.jpg',
    '/images/gal3.jpg',
    '/images/gal5.jpg',
    '/images/gal6.jfif',
    '/images/gal1.png',
    '/images/gal4.jfif',
    '/images/cpt.jpg',
    '/images/bg1.jfif'
];

const Gallary = () => {
  return (

    <div className="">
     <div className='relative  bg-cover bg-center h-96'
            style={{backgroundImage:"url('/images/image1.jpg')"}}>

                <div className='absolute inset-0  flex flex-col items-center justify-center'>
                    <h4 className='text-4x1 md:text-6xl font-bold text-white mb-4'>Gallary </h4>   
                </div>
        </div>
        <div className="container mx-auto px-4 py-12">
            <div className="gap-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
                {images.map(image =>(
                    <div className='rounded-lg overflow-hidden shadow-md transform transition duration-300 hover:scale-110'>
                        <img src={image} className='w-full h-full object-cover ' />
                    </div>
                ))}
            </div>
        </div>
       
    </div>
  )
}

export default Gallary