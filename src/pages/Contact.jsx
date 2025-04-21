import React from 'react'
import Footer from '../component/Footer';
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import { FaMapLocation } from 'react-icons/fa6';

const Contact = () => {
  return (
    <div className=" bg-gray-100">
     <div className='relative  bg-cover bg-center h-96'
            style={{backgroundImage:"url('/images/c2.jfif')"}}>

                <div className='absolute inset-0  flex flex-col items-center justify-center'>
                    <h4 className='text-4x1 md:text-6xl font-bold text-white mb-4'>Contact</h4>   
                    <p className='text-white'>
                    At Wexplore we want to make sure that your trip is the ultimate experience.<br/> Whether you want inspiration and guidance in planning your next big adventure or need help with an existing booking, we are here to help.
                    </p>
                </div>
              

        </div>
       <div className='container mx-auto px-4 py-12'>
            <div className='grid gap-8 sm:grid-cols-1 md:grid-cols-2'>
                <div className='bg-white rounded-lg shadow-md p-6'> 
                    <h3 className='text-xl font-bold mb-4'>Contact details</h3>
                    <div className="flex items-center mb-4">
                        <FaEnvelope className='text-blue-500 mr-2'/>
                        <p>Emails: info@wexploreagency</p>
                    </div>

                    <div className="flex items-center mb-4">
                        <FaPhone  className='text-blue-500 mr-2'/>
                        <p>+27 834 578 956</p>
                    </div>

                    <div className="flex items-center mb-4">
                        <FaMapLocation  className='text-blue-500 mr-2'/>
                        <p>157 Troy street RSA</p>
                    </div>
                </div>
                


                <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className='text-xl font-bold mb-4'>Get in touch</h3>
                    <form>
                        <div className="mb-4">
                            <label htmlFor="Name" className='block text-gray-700 mb-2'> Name:</label>
                            <input 
                            type="text"
                             placeholder='Enter your name'
                             className='w-full p-2  border border-gray-300 rounded' />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="Name" className='block text-gray-700 mb-2'> Email:</label>
                            <input type="text" 
                            placeholder='Enter your email'
                            className='w-full p-2  border border-gray-300 rounded' />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="Name" className='block text-gray-700 mb-2'>Message:</label>
                            <textarea name="" id="" placeholder='Write message'
                           className=' w-full p-2  border border-gray-300 rounded'></textarea>
                        </div>
                        <button type='submit' className='py-2 px-4 bg-blue-500 text-white rounded'>Send message</button>
                    </form>
                </div>
              
            </div>

       </div>
    </div>
  )
}

export default Contact