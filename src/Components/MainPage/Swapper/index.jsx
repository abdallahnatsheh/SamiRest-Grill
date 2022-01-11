import React from "react";
import { useGetSwipperData } from "../../firebase/mainPageHooks/swapperHook";

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
//uses custom hook to
const Swipper = () => {
  const [documents] = useGetSwipperData();
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      className="mySwiper"
    >
      {documents.map((item) => (
        <SwiperSlide key={Math.random()}>
          <img src={item.image} key={Math.random()} alt="" link={item.link} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Swipper;
