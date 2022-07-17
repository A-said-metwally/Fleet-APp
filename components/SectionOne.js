import React from 'react'

function SectionOne() {
  return (
    <div id="list-item-1" className='custombkg  w-full relative'>
        <img src="/bkg1.webp" alt="bkgimage" className='w-full h-full bg-no-repeat' />
        <div className=' absolute top-0 left-0 h-full w-full bg-black opacity-50'></div>
        <div className='absolute top-0 left-0  w-full h-full text-center pt-24 flex flex-col items-center'>
            <h1 className='text-justify text-4xl font-bold text-white'>Leverage Artificial <span className=' text-ColorOne'>Intelligence</span> for Route Planning & Optimization</h1>
            <p className='text-white pt-8 text-xl w-2/3'>Create the most efficient possible routes within minutes ​using Machine Learning & AI Solutions developed by logistics and AI experts at <span className=' text-ColorOne'>Softec Technologies</span></p>
           
            <div className='flex bg-ColorTow absolute bottom-4 '>
                <div className='break text-center p-8 relative'>
                    <div className=' text-ColorOne font-bold text-5xl'>5,000</div>
                    <div className='text-white capitalize text-lg'>customer across the global</div>
                </div>
                <div className='break text-center p-8 relative'>
                    <div className=' text-ColorOne font-bold text-5xl'>100,000</div>
                    <div className='text-white capitalize text-lg'>vehicles managed</div>
                </div>
                <div className=' text-center p-8'>
                    <div className=' text-ColorOne font-bold text-5xl'>15</div>
                    <div className='text-white capitalize text-lg'>years of experience</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SectionOne