import React from 'react'

function SectionThree() {
  return (
    <div id="list-item-3" className=' bg-black flex justify-center '>
        <div className='w-5/6 flex justify-center'>
            {/* left section */}
            <div className=' flex flex-col items-center w-1/2 pt-4'>
                <h1 className=' text-TextColor2 text-6xl '>INTELEGENCE</h1>
                <img src="/norma.gif" alt="" className=' w-56 h-46' />
                {/* <h1 className=' text-white text-3xl '>Norma</h1> */}
                <h6 className=' font-semibold text-ColorFive'>Achieve more today and be ready for the future. </h6>
                <p className='text-ColorFive text-center'>
                    <span className='text-TextColor2 font-semibold'>NORMA </span>
                    is an AI based digital route planner combining scientific evolutionary computing 
                    with machine learning to help transportation, logistics, last mile and home delivery
                     operations automate, optimize and streamline their processes. 
                </p>
                <p className=' w-3/4 pl-4 pr-4 font-semibold text-ColorFive text-center'>
                    <span className='text-TextColor2 font-semibold'>NORMA </span>
                    helps its users to improve, achieve more, save more and scale. 
                </p>
                <button className=' mt-3 pl-10 pr-10 pt-2 pb-2 rounded-full font-bold
                 bg-TextColor2 text-gray-900 hover:bg-ColorOne hover:text-slate-50
                  transition duration-300 ease-in-out'
                 >
                    LEARN MORE
                </button>
                
            </div>
            
            {/* right section */}
            <div className='w-1/2'>
                <img src="/Capture.PNG" alt="" className=' w-full h-full'/>
            </div>
        </div>
    </div>
  )
}

export default SectionThree