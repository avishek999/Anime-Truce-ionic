import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import React, { useRef, useState } from "react";
import { IonRouterLink, useIonRouter } from "@ionic/react";
import { FaStar } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { PiAndroidLogoDuotone } from "react-icons/pi";
import { FaUserCircle } from "react-icons/fa";
import { HomeBannerProps } from "@/interface/Interface";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";

import "./HomeBanner.scss";


// Types for the Slide and HomeBannerProps


// Main component function
const HomeBanner: React.FC<HomeBannerProps> = ({ slides }) => {
 
  const router = useIonRouter();



  // Handlers and refs
  const progressCircleRef = useRef<SVGElement | null>(null);
  const progressContentRef = useRef<HTMLSpanElement | null>(null);



  return (
  
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      navigation={false}
      modules={[Autoplay, Pagination]}
      className="home-banner-swiper"
      
    >
      <PiAndroidLogoDuotone   className="z-50 absolute top-4 left-5 " color="orange
      " size={30}/>
      <FaSearch  className="z-50 absolute top-4 right-14 " color="#fff" size={30}  />
      <FaUserCircle className="z-50 absolute top-4 right-4 " color="#fff" size={30} />

      <div className="banner_container">

        {slides.map((slide) => (
       
          <SwiperSlide
            key={slide.id}
            className="Banner"
          >
          <IonRouterLink  routerLink={`/anime/${slide.id}`} routerDirection="forward"> 
              <img
                className="BannerImg"
                src={slide.image}
                alt="Loading Your fav anime"
                loading="lazy"
              />
              <p className="BannerHeading z-10">Top Airing</p>
              <h4 className="BannerTitle">{slide.title}</h4>
              <div className="text-yellow-500 flex items-center gap-2 absolute bottom-[20px] text-sm left-[12px] z-10">
                <FaStar className="text-yellow-400 z-30" />
                2.5k
              </div>
            </IonRouterLink>
          </SwiperSlide>
        ))}
      </div>
    </Swiper>
  );
};

export default HomeBanner;
