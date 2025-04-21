import React from 'react'

const destination =[
{
 image: '/images/cpt.jpg',
 title: 'Capetown, South Africa',
 description: 'Cape Town is a stunning coastal city nestled at the southern tip of Africa, where the Atlantic and Indian Oceans meet. This vibrant metropolis is surrounded by breathtaking natural beauty, from the iconic Table Mountain to the picturesque coastline and pristine beaches.'   
},
{
    image: '/images/t1.avif',
    title:'Phuket,Thialand',
    description: 'Phuket is where tropical dreams come to life—white-sand beaches, turquoise waters, and adventure at every turn. Whether you’re island-hopping, diving into epic nightlife, or chasing waterfalls in the jungle, Phuket has it all.'
},
{
    image: '/images/gal5.jpg',
    title: 'Bali,Sanur',
    description: 'What do you think of when you picture Bali? Mesmerising sunsets, unique culture, awesome nightlife and delicious food? Whether you plan to go relax, explore, surf or party, our Bali packages will have you covered!'
},

{
    image: '/images/f1.jfif',
    title: 'Paris,France',
    description: 'France is a country in Western Europe known for its stunning landscapes, rich history, art, fashion, and cuisine. From the iconic Eiffel Tower to the picturesque countryside, France has something for every kind of traveler.'
}]

const PopularDes = () => {

    
  return (
    <div className='py-12 bg-gray-100'>
        <div className="container mx-auto px-4">
            <h3 className='text-3xl font-bold text-center mb-8'>Choose yor dream destinations</h3>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {destination.map((city,index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer">
                        <img src={city.image} alt="" className='w-full h-48 object-cover
                        transform transition duration-300 hover:scale-110' />
                        <div className="p-4">
                            <h4 className='text-xl font-bold mb-2'>{city.title}</h4>
                            <p className='text.gray-600'  >{city.description}</p>
                    </div>
                    </div>
                    
                ))}
            </div>
        </div>
    </div>
  )
}

export default PopularDes