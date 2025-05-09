import React from 'react';
import PopularDes from '../component/PopularDes';
import Services from '../component/Services';
import Client from '../component/Client';



const Home = () => {
  return (
<>
<div className='relative h-screen bg-cover bg-center'
           style={{backgroundImage:"url('/images/bg1.jfif')"}}>

        <div className='absolute inset-0  flex flex-col items-center justify-center'>
            <h1 className='text-4x1 md:text-6xl font-bold text-white mb-4'>Explore the world with us </h1>
            <p className='text-lg md:text-2xl text-white font-bold mb-8'>
                Discover amazing places at exclusoives deals
            </p>
            <button className='border text-white px-6 py-2 rounded-full text-lg md:text-x1 hover:bg-blue-500
            transform transition duration-300 hover:scale-105'> Get started</button>
        </div>
    </div>
    <PopularDes />
    <Services />
    <Client />
    
</>
   


  )
}

export default Home
