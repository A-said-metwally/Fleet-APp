import React from 'react'

function SectionTow() {
  return (
    <div id="list-item-2" className='flex justify-center items-center bg-ColorFour p-4'>
        <div className=' flex w-3/5 space-x-7 justify-center'>
            <div className=' mt-10 '>
                <img src="/logo2.webp" alt="logo2" className='secTowImg' />
            </div>
            <div className='flex flex-col items-center '>
                    <div className=' justify-start'>
                        <p className=' text-ColorTow text-justify leading-5'>
                            We are a globally recognized award-winning technology company specialized in 
                            Artificial Intelligence and Visibility solutions for 
                            transportation, mobility, logistics and command & control,
                            with offices in Amsterdam, Abu Dhabi, Dubai and Cairo,
                        </p>
                        <p className=' text-ColorTow text-justify leading-5'>
                            We help more than 5.000 
                            organizations achieve more with our cloud platforms and on-premise deployments. 
                        </p>
                        <p className=' text-ColorTow text-justify leading-5'>
                            We received numerous awards for our contribution to significant nationwide digital
                            transformation projects in logistics, public safety & national security and motor insurance.
                        </p>
                    </div>
                    <button className='mt-6 w-52 p-2 pr-5 pl-5 bg-ColorOne rounded-full text-gray-900
                        font-semibold hover:bg-ColorTow hover:text-ColorOne transitio duration-300 ease-in-out'
                    >
                        LEARN OUR IMPACT
                    </button>
            </div>
        </div>
    </div>
  )
}

export default SectionTow