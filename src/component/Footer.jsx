import React from 'react'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='bg-gray-800 p-4 text-white py-8'>
      <div className='container mx-auto px-4 '>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 '>
            <div>
                <h2 className='text-2x1 font-bold mb-4' >Wexplore Travel Agency</h2>
                <p className='mb-4'> Your travel partner for unforgatable travel experience.Explore our wide travel destinations</p>
            </div>
      
        <div className="flex flex-col md:items-center"> 
            <h4 className='text-lg font-semibold'>Quick links</h4>
            <div className="flex flex-col mt-4 space-y-2">
                <Link to="/">Home</Link>
                <Link  to="/"> Gallary</Link>
                <Link to="/" >about us</Link>
                <Link  to="/">contact</Link>
            </div>
        </div>

        <div>
            <h2 className='text-xl font-bold mb-4'>Follw us </h2>
            <div className="flex space-x-4 mb-4">
                <FaFacebook   size={24}/>
                <FaInstagram  size={24}/>
                <FaYoutube  size={24}/>
            </div>

            <form className='flex items-center justify-center mt-8'>
                <input 
                type="email"
                 placeholder='Enter your email'
                 className='w-full p-2 rounded-1-lg bg-gray-800 border border-gray-600' />
                <button 
                type='submit'
                 className='bg-blue-600 text-white px-4 py-2 rounded-r-lg border border-blue-600' >Subscribe</button>
            </form>
        </div>
      </div>

      <div className='flex justify-between mt-8  border-t border-gray-700 pt-4'>
        <p>@ 2025 travel Agency. All rights reserved. Makito</p>
        <div className="">
     
                <Link  to="/">Private polies</Link>
                <Link to="/" >Term and condition</Link>
             
        </div>
      </div>
      </div>
    </div>
  )
}

export default Footer