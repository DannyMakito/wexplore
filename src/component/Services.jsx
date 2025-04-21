import React from 'react'
import { FaConciergeBell, FaHotel, FaPlane, FaUmbrellaBeach } from 'react-icons/fa'

const services =[
{
 icon: <FaPlane  size={30} className='text-4x1 text-blue-500' />,
 title: 'Flight booking',
 description: 'Suited to the budget-minded traveller who pictures themselves exploring the destination more than staying in a resort.'   
},
{
    icon: <FaHotel  size={30} className='text-4x1 text-blue-500' />,
    title: 'Hotel booking',
    description: 'Book hotel at the best prices. The hotels include all the essentials, are usually up to 3* rating, and are not too far from top locations ' 
},
{icon: <FaUmbrellaBeach  size={30}  className='text-4x1 text-blue-500'/>,
    title: 'Beach Tours booking',
    description: 'We provid easy and quick flight booking with no hustle but just personalized services' 
},
{icon: <FaConciergeBell size={30} className='text-4x1 text-blue-500' />,
    title: 'Concierge Service',
    description: 'We enrich the lives of our members through authentic and personalized services that transform their day-to-day aspirations and bucket-list dreams into reality.' 
}]

const Services = () => {

    
  return (
    <div className='py-12 bg-gray-100'>
        <div className="container mx-auto px-4">
            <h3 className='text-3xl font-bold text-center mb-8'>Our Services</h3>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {services.map((services,index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md  flex flex-col p-4 items-center cursor-pointer
                    transform transition duration-300 hover:scale-110">
                        <div className="mb-4">{services.icon}</div>
                        
                            <h4 className='text-xl font-bold mb-2'>{services.title}</h4>
                            <p className='text.gray-600'  >{services.description}</p>
                            
                    </div>
                    
                ))}
            </div>
        </div>
    </div>
  )
}

export default Services