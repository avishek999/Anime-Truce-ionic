import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';

import SwiperCore, { Autoplay, Pagination } from 'swiper';  // Correct modules import
import React, { useRef } from "react";
import { IonRouterLink } from "@ionic/react";
import { FaStar, FaSearch, FaUserCircle } from "react-icons/fa";
import { PiAndroidLogoDuotone } from "react-icons/pi";
import { HomeBannerProps } from "@/interface/Interface";
import 'swiper/swiper-bundle.min.css';  // Ensure correct CSS import
import 'swiper/swiper.min.css';

import "./HomeBanner.scss";

// Install Swiper modules
SwiperCore.use([Autoplay, Pagination]);  // Ensure global installation of modules

const HomeBanner: React.FC<HomeBannerProps> = ({ slides }) => {

  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      className="home-banner-swiper"
      slideClass="swiper-slide"        // Explicitly adding slideClass
      wrapperClass="swiper-wrapper"    // Adding wrapperClass for wrapper
    >
      {/* Icons */}
      <PiAndroidLogoDuotone className="z-50 absolute top-4 left-5" color="orange" size={30} />
      <FaSearch className="z-50 absolute top-4 right-14" color="#fff" size={30} />
      <FaUserCircle className="z-50 absolute top-4 right-4" color="#fff" size={30} />

      <div className="banner_container">
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="Banner">
            <IonRouterLink routerLink={`/anime/${slide.id}`} routerDirection="forward">
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
