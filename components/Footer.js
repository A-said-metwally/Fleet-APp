import React from 'react'

function Footer() {
  return (
    <div className=' bg-black p-3'>
        <div className=' container flex h-64 '> 
            <div className='w-1/3 h-full flex flex-col justify-between pl-24'>
                <div>
                    <p className=' text-lg text-ColorOne font-bold'>Follow Us</p>
                    <div className=' flex space-x-3'>
                        <div className=' w-8 h-8 bg-white text-xl text-ColorTow flex items-center justify-center rounded-full'>        
                            <i className="fa-brands fa-facebook-f  "></i>
                        </div>
                        <div className=' w-8 h-8 bg-white text-xl text-ColorTow flex items-center justify-center rounded-full'>
                            <i className="fa-brands fa-linkedin-in  "></i>
                        </div>
                        <div className=' w-8 h-8 bg-white text-xl text-ColorTow flex items-center justify-center rounded-full'>
                            <i className="fa-brands fa-youtube  "></i>
                        </div>
                        <div className=' w-8 h-8 bg-white text-xl text-ColorTow flex items-center justify-center rounded-full'>
                            <i className="fa-brands fa-twitter  "></i>
                        </div>
                    </div>
                </div>
                <img src="/logo.gif" loading='easy' alt="logo" height={80} width={150} className="p-2" />
                <p className=' text-white font-semibold'><i className="fa-regular fa-copyright"></i> 2020 by Softec Technologies </p>
            </div>
            <div className='w-1/3 h-full flex flex-col justify-between pl-24'>
                <div>
                    <p className=' text-lg text-ColorOne font-bold'>Amsterdam</p>
                    <p className=' text-md text-white font-semibold w-2/4'>Tupolevlaan 65-751119 PA Schiphol-Rijk</p>
                </div>
                <p className=' text-lg text-ColorOne font-bold'>Cairo</p>
                <p className=' text-md text-white font-semibold'>24, Road 270 Maadi</p>
            </div>
            <div className='w-1/3 h-full flex flex-col justify-between pl-24'>
                <div>
                    <p className=' text-lg text-ColorOne font-bold'>Dubai</p>
                    <p className=' text-md text-white font-semibold w-2/4'>DMCC Business Centre Jewellery & Gemplex</p>
                    </div>
                    <p className=' text-lg text-ColorOne font-bold'>Abu Dhabi</p>
                    <p className=' text-md text-white font-semibold w-2/4'>Level 03, Building 03, POB 742259, Masdar City</p>
                </div>        
        </div>
    </div>
  )
}

export default Footer