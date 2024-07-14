import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import './BannerCard.css';

// import required modules
import { EffectCards } from 'swiper/modules';
const BannerCard = () => {
  return (
    <div className='banner'><Swiper
    effect={'cards'}
    grabCursor={true}
    modules={[EffectCards]}
    className="mySwiper"
  >
    <SwiperSlide>Dress 1</SwiperSlide>
    <SwiperSlide>Dress 2</SwiperSlide>
    <SwiperSlide>Dress 3</SwiperSlide>
    <SwiperSlide>Dress 4</SwiperSlide>
    <SwiperSlide>Dress 5</SwiperSlide>
    
  </Swiper></div>
  )
}

export default BannerCard