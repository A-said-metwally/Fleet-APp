import React from 'react'

function SectionSeven() {
  return (
    <div className=' flex flex-col items-center '>

        <h1 className='text-4xl text-ColorOne font-bold mt-12'>Softec Blog</h1>
        <p className=' text-ColorThree text-center font-semibold w-2/4 leading-8 pt-2 f'>
         Stay up to date on the latest technologies and trends in Logistics.
        </p>

        <div className=' w-9/12 flex justify-between'>
          {/* card 1 */}
          <div className=' w-1/3 p-3'>
            <div className='border'>
              <img src="/img4.PNG" alt="" className='h-56 w-full'/>
              <div className='p-3 pb-1'>
                <b className=' text-gray-700 text-lg'>
                  Grocery Manager? Here are 4 Logistics Challenges and How to Solve them
                </b>
                <p className='pt-3'>
                  In 2021, it was reported that worldwide supermarkets and neighborhood stores
                  recorded a total of $1.38 million in grocery sales. It is...
                </p>
              </div>
            </div>
          </div>
          {/* end card */}
          {/* card 2 */}
          <div className=' w-1/3 p-3'>
            <div className='border'>
              <img src="/img5.PNG" alt="" className='h-56 w-full'/>
              <div className='p-3 pb-1'>
                <b className=' text-gray-700 text-lg'>
                  Grocery Manager? Here are 4 Logistics Challenges and How to Solve them
                </b>
                <p className='pt-3'>
                  In 2021, it was reported that worldwide supermarkets and neighborhood stores
                  recorded a total of $1.38 million in grocery sales. It is...
                </p>
              </div>
            </div>
          </div>
          {/* end card */}
          {/* card 3 */}
          <div className=' w-1/3 p-3'>
            <div className='border'>
              <img src="/img6.PNG" alt="" className='h-56 w-full'/>
              <div className='p-3 pb-1'>
                <b className=' text-gray-700 text-lg'>
                  Grocery Manager? Here are 4 Logistics Challenges and How to Solve them
                </b>
                <p className='pt-3'>
                  In 2021, it was reported that worldwide supermarkets and neighborhood stores
                  recorded a total of $1.38 million in grocery sales. It is...
                </p>
              </div>
            </div>
          </div>
          {/* end card */}


        </div>

    </div>
  )
}

export default SectionSeven