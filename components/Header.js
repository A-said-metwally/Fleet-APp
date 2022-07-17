import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <div className=' bg-black flex p-3 '>
        <div className='container flex justify-between pl-5 pr-5'>
            {/* left header */}
            <div className=''>
            <img src="/logo.gif"  alt="logo" className=' h-16 w-32'/>  
            <p className='text-white h-0 pl-2'>som text</p>
            <p className='text-white h-0 pl-2'>som text</p>
            </div>

            {/* right header */}
            <div className=' flex flex-col items-end justify-between'>
                {/* top right header */}
                <div className='flex space-x-4'>
                    <button 
                        className=' pr-4 font-semibold px-4 p-1  rounded-full bg-gray-50
                         text-ColorOne hover:bg-ColorOne hover:text-gray-50 
                         transition duration-200 ease-out cursor-pointer'
                    >
                        CONTACT US
                    </button>
                    <button
                        className=' pr-4 font-semibold px-4  rounded-full text-gray-50
                         bg-ColorOne hover:text-ColorOne hover:bg-white
                         transition duration-200 ease-out cursor-pointer'
                    >
                        Get A DEMO
                    </button>
                </div>
                {/* bottom right header */}
                <div className='flex space-x-8'>
                    <div className=' relative group p-2 pb-8 link'>
                        <Link href="" className="" >
                           <a className="text-gray-50 font-bold capitalize font-mono no-underline  group-hover:text-ColorOne
                           group-hover:no-underline  transition
                            duration-150 ease-in-out cursor-pointer">
                            solutions
                            </a>
                        </Link>
                        <div className='dropOne hidden  group-hover:flex absolute z-10 '>
                            <div className=' flex mt-8 rounded-xl overflow-hidden shadow-md shadow-ColorOne'>
                            {/* left menu */}
                                <div className=' w-1/2 bg-black h-full p-4'>
                                    <div className='mb-5 pt-6'>
                                        <h1 className=' text-white font-bold capitalize cursor-pointer'>norma <span className='text-blue-600'>Go</span></h1>
                                        <p className='text-sm text-gray-300 leading-6 '>Intelligent Route Optimizer enabling you to optimize your daily delivery routes with Artificial Intelligence.
                                        Ensure compliance with time windows and business rules at lowest cost. </p>
                                </div>
                                <div>
                                        <h1 className=' text-white font-bold capitalize cursor-pointer'>norma <span className='text-green-600'>Live</span></h1>
                                        <p className='text-sm text-gray-300 leading-6 '>Intelligent Route Optimizer enabling you to optimize your daily delivery routes with Artificial Intelligence.
                                        Ensure compliance with time windows and business rules at lowest cost. </p>
                                </div>
                                <div className=' text-gray-300 mt-5 text-right text-2xl pr-3 hover:translate-x-2 cursor-pointer'>
                                    <i className="fa-solid fa-angle-right"></i>
                                    </div>
                                </div>
                                {/* right menu */}
                                <div className=' w-1/2 bg-ColorFive h-full '>
                                    <div className='mb-5 pt-6'>
                                        <img src="/img3.PNG" alt="lgo" className=' h-10 w-full cursor-pointer'  />
                                        <p className='text-sm text-gray-800 leading-6 p-4 '>
                                            Intelligent Route Optimizer enabling you to optimize your daily delivery routes with Artificial Intelligence.
                                        </p>
                                    </div>
                                    <div className='mb-5'>
                                        <img src="/img3.PNG" alt="lgo" className=' h-10 w-full cursor-pointer'  />
                                        <p className='text-sm text-gray-800 leading-6 p-4 '>Intelligent Route Optimizer enabling you to optimize your daily delivery routes with Artificial Intelligence.
                                        Ensure compliance with time windows and business rules at lowest cost. </p>
                                    </div>
                                    <div className=' text-gray-600 p-4 pt-2 text-right text-2xl pr-3 hover:translate-x-2 cursor-pointer'>
                                        <i className="fa-solid fa-angle-right"></i>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className=' capitalize font-bold font-mono p-2
                     text-gray-50 hover:text-ColorOne transition duration-150 ease-in-out cursor-pointer'>Industries</div>
                    <div className=' capitalize font-bold font-mono p-2
                     text-gray-50 hover:text-ColorOne transition duration-150 ease-in-out cursor-pointer'>resources</div>
                    <div className=' capitalize font-bold font-mono p-2
                     text-gray-50 hover:text-ColorOne transition duration-150 ease-in-out cursor-pointer'>corporation</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header