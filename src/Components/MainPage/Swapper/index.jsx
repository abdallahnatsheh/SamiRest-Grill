import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"

import "./styles.css";


// import Swiper core and required modules
import SwiperCore, {
  Autoplay,Pagination,Navigation
} from 'swiper';
// install Swiper modules
SwiperCore.use([Autoplay,Pagination,Navigation]);


const Swipper =() => (
  
    <Swiper  spaceBetween={30} centeredSlides={true} autoplay={{
  "delay": 2500,
  "disableOnInteraction": false
}} pagination={{
  "clickable": true
}} navigation={true} className="mySwiper">
  <SwiperSlide><img src='./assets/img/coverpic.jpg' alt="" /></SwiperSlide>
  <SwiperSlide><img src='./assets/img/coverpic.jpg' alt=""/></SwiperSlide>
  <SwiperSlide><img src='./assets/img/coverpic.jpg' alt=""/></SwiperSlide>
  </Swiper>
  );

export default Swipper;