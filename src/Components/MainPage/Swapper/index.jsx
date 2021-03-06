import React from "react";
// Import Swiper React components , the admin can edit it as he wants

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);
const Swipper = React.memo(function Swipper(props) {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 7000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      className="mySwiper"
    >
      {!props.swipers ? (
        <span>loading..</span>
      ) : (
        props.swipers.map((item) => (
          <SwiperSlide key={item.id}>
            <img src={item.data().image} key={item.id} alt="" />
          </SwiperSlide>
        ))
      )}
    </Swiper>
  );
});

export default Swipper;
