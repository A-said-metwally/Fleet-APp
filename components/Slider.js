import React from 'react'

function Slider() {
  return (
    <div className=' bg-ColorOne'>
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active " aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2" ></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3" ></button>
          </div>
          <div className="carousel-inner h-96">
            <div className="carousel-item active p-5  ">
              <div className="carousel-caption h-full d-md-block  ">
                <h1 className='text-black font-bold'>What <span className='text-white'>Our Customers</span> Are Saying</h1>
                <p className='text-white mt-10 pr-28 pl-28 text-lg leadings-2'>Our relationship with our fleet vehicles was cut off the moment they departed the factory, but with the essential
                   capabilities Altair FMS provides, now we have full visibility over our vehicles, and we are capable to do lots with
                   the data we gain! What sets Softec apart from all competition, is that team is highly responsive to the clients `&#39;` 
                   needs and that they
                </p>
                <b>Ahmed Said</b><br/>
                <b>Danone, Fleet Manager</b>
              </div>
            </div>

            <div className="carousel-item p-5">
              <div className="carousel-caption d-none h-full d-md-block">
              <h1 className='text-black font-bold'>What <span className='text-white'>Our Customers</span> Are Saying</h1>
                <p className='text-white mt-10 pr-28 pl-28 text-lg leadings-2'>Our relationship with our fleet vehicles was cut off the moment they departed the factory, but with the essential
                   capabilities Altair FMS provides, now we have full visibility over our vehicles, and we are capable to do lots with
                   the data we gain! What sets Softec apart from all competition, is that team is highly responsive to the clients`&#39;`
                   needs and that they
                </p>
                <b>Muhammad</b><br/>
                <b>Juhaina, Fleet Manager</b>
              </div>
            </div>

            <div className="carousel-item p-5">
              <div className="carousel-caption d-none h-full d-md-block">
              <h1 className='text-black font-bold'>What <span className='text-white'>Our Customers</span> Are Saying</h1>
                <p className='text-white mt-10 pr-28 pl-28 text-lg leadings-2'>Our relationship with our fleet vehicles was cut off the moment they departed the factory, but with the essential
                   capabilities Altair FMS provides, now we have full visibility over our vehicles, and we are capable to do lots with
                   the data we gain! What sets Softec apart from all competition, is that team is highly responsive to the clients`&#39;` 
                   needs and that they
                </p>
                <b>Jory</b><br/>
                <b>Juhaina, Fleet Manager</b>
              </div>
            </div>

          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
    </div>
  )
}

export default Slider