import React from 'react'

function SectionFour() {
  return (
    <div id="list-item-4" className=' bg-ColorFive flex justify-center p-2'>
        <div className='w-5/6 flex justify-center'>
          
            {/* left section */}
            <div className='w-1/2 flex justify-center items-center'>
                <img src="/img2.PNG" alt="" className=' w-3/4'/>
            </div>

            {/* right section */}
            <div className=' flex flex-col items-center w-1/2 pt-4'>
                <h1 className=' text-TextColor3 text-5xl '>VISIBILITY</h1>
                <img src="/img3.PNG" alt="" className=' w-56 h-24' />
                <h1 className=' text-ColorThree text-xl '>You cannot control what you cannot see.</h1>
                <p className='text-ColorThree text-center font-semibold w-4/4'>
                    <span className='text-TextColor3 '>ALTAIR </span>
                    is a suite of visibility solutions for commercial fleets providing end-to-end visibility and command
                     & control over B2B logistics, home delivery, transportation and mobility operations.
                </p>
                <h1 className=' text-ColorThree text-2xl font-semibold text-center'>
                    <span className='text-TextColor3 '>ALTAIR </span>
                    works hand in hand with <span className=' text-TextColor2'>NORMA</span>  for a unified streamlined experience.
                </h1>
                <button className=' mt-3 pl-10 pr-10 pt-2 pb-2 rounded-full font-bold
                  bg-ColorTow text-ColorFive hover:bg-ColorOne hover:text-slate-50
                  transition duration-300 ease-in-out'
                 >
                    LEARN MORE
                </button>
                
            </div>

            

        </div>
    </div>
  )
}

export default SectionFour