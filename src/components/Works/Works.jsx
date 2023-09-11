import React from 'react'
import './Works.css'
import { Swiper, SwiperSlide } from 'swiper/react'

import Tiny from '../../img/Tiny.png'
import Med from '../../img/Med.png'

import 'swiper/css'
import Sri from '../../img/Sripng.png'
import Doc from '../../img/Docpng.png'
import My from '../../img/MyPort.png'


const Works = () => {
  return (
   <div className="portfolio">
    
    {/* Heading */}

    <h1>Recent Projects</h1>

    {/* Slider */}
    
    <Swiper
    spaceBetween={30}
    slidesPerView={3}
    grabCursor={true}
    className='portfolio-slider'

    >
     <SwiperSlide>
     <div className="card">
  <img src={Med} alt="" style={{ width:550 }}/>
  <div className="card__content">
    <p className="card__title">Card Title</p>
    <p className="card__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
  </div>
</div>
     </SwiperSlide>
     <SwiperSlide>
     <div className="card">
  <img src={My} alt="" style={{ width:550 }}/>
  <div className="card__content">
    <p className="card__title">Card Title</p>
    <p className="card__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
  </div>
</div>
     </SwiperSlide>
     <SwiperSlide>
     <div className="card">
  <img src={Doc} alt="" style={{ width:550 }}/>
  <div className="card__content">
    <p className="card__title">Card Title</p>
    <p className="card__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
  </div>
</div>
     </SwiperSlide>
     <SwiperSlide>
     <div className="card">
  <img src={Tiny} alt="" style={{ width:550 }}/>
  <div className="card__content">
    <p className="card__title">Card Title</p>
    <p className="card__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
  </div>
</div>
     </SwiperSlide>
     <SwiperSlide>
     <div className="card">
  <img src={Sri} alt="" style={{ width:550 }}/>
  <div className="card__content">
    <p className="card__title">Card Title</p>
    <p className="card__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
  </div>
</div>

     </SwiperSlide>
    </Swiper>


{/* test */}



    

   </div>
   
  )
}

export default Works