import React from 'react'

function SectionSix() {
  return (
    <div className=' flex flex-col items-center bg-gradient-to-r from-black via-gray-900 to-gray-500 '>
        <h1 className='text-4xl text-white font-bold mt-12'>Schedule a <span className=' text-ColorOne'>Live Demo</span></h1>
        <p className='text-ColorFour text-center font-semibold w-2/4 leading-8 pt-8 font-serif'>
            Complete the form below to schedule a live demo with our expert to find out how we can help you to optimize and control 
            your daily fleet routes and reduce operation costs.
        </p>
        <button className=' mt-3 pl-20 pr-20 pt-3 pb-3 mb-10 rounded-full font-bold
                  bg-ColorOne text-ColorTow hover:bg-ColorTow hover:text-ColorOne
                  transition duration-300 ease-in-out'
                 >
            GET A DEMO NOW
        </button>

    </div>
  )
}

export default SectionSix