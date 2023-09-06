import React from 'react'
import './Works.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import Sidebar from '../../img/sidebar.png'
import Ecommerce from '../../img/ecommerce.png'
import HOC from '../../img/hoc.png'
import MusicApp from '../../img/musicapp.png'
import 'swiper/css'

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
      <img src={Sidebar} alt="" />
     </SwiperSlide>
     <SwiperSlide>
      <img src={Ecommerce} alt="" />
     </SwiperSlide>
     <SwiperSlide>
      <img src={MusicApp} alt="" />
     </SwiperSlide>
     <SwiperSlide>
      <img src={HOC} alt="" />
     </SwiperSlide>
    </Swiper>


{/* test */}



    

   </div>
   
  )
}

export default Works