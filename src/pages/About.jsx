import React from 'react'
import Footer from '../component/Footer'

const About= () => {
  return (
    <div className="">
             
      <div className='relative  bg-cover bg-center h-96'
            style={{backgroundImage:"url('/images/image1.jpg')"}}>

                <div className='absolute inset-0  flex flex-col items-center justify-center'>
                    <h4 className='text-4x1 md:text-6xl font-bold text-white mb-4'>About us  </h4>   
                </div>
        </div>

        <div className="container mx-auto px-4 py-12">
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <img src="/images/t1.avif" alt="" className='rounded-lg shadow-md w-full h-auto' />
                </div>

                <div className='flex flex-col justify-center'>
                    

                    <h3 className='text-2x1 font-bold mb-4'>Our mission </h3>
                    <p  className='text-gray-700 mb-4'>is to create affordable & unforgettable travel experiences for all South Africans and we’re here to help you achieve the jet-setter lifestyle you’ve always dreamed of.

Whether you travel for leisure, to enrich your lifestyle or simply to learn from new experiences – we’ve got you covered.

Life is short, but it’s what you make of it. Start today, not tomorrow </p>
                </div>
            </div>
        </div>
   </div>
  )
}

export default About;