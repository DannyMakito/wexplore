import React from 'react'
import { FaConciergeBell, FaHotel, FaPlane, FaUmbrellaBeach } from 'react-icons/fa'

const testimonials =[
{
name:'Leisure',
 image:'/images/gal2.jpg',
 text: 'From chillin’ in a hammock, to beachside vibes!',
location: 'We provid easy and quick flight booking'   
},
{
    name:'Lifestyle',
    image:'/images/gal3.jpg',
    text: 'Start doing those things you truly love to do!',
   location: 'Book hotel at the best prices' 
},
{   
    name:'Learning',
    image: '/images/13.webp',
    text: 'Go on a working holiday, or learn to surf!',
   location: 'We provid easy and quick flight bookig' 
}]

const Client = () => {

    
  return (
    <div className='py-12 bg-gray-100'>
        <div className="container mx-auto px-4">
            <h3 className='text-3xl font-bold text-center mb-8'>Choose yor travel style  </h3>
            <div className='grid gap-9 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 '>
                {testimonials.map((testimonial,index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md text-center cursor-pointer
                    transform transition duration-300 hover:scale-110">
                     <img  src={testimonial.image} alt='image' className='w-full mx-auto mb-4'/>
                        
                            <h4 className='text-xl font-bold mb-2'>{testimonial.name}</h4>
                            <p className='text.gray-600 italic mb-2'  >{testimonial.text}</p>
                            <button className='border bg-gray-800 text-white px-6 py-2 mb-2 mt-6 rounded-full text-lg md:text-x1 hover:bg-blue-500
            transform transition duration-300 hover:scale-105'>More info</button>
                            
                    </div>
                    
                ))}
            </div>
        </div>
    </div>
  )
}

export default Client