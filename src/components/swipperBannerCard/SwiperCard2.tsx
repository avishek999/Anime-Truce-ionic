import {
  IonContent,
  IonHeader,
  IonPage,
  IonRouterLink,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "./SwiperCard2.scss";
import { HomeBannerProps } from "@/interface/Interface";

// import required modules
import { EffectCards } from "swiper/modules";
const SwiperCard2: React.FC<HomeBannerProps> = ({ slides }) => {
  return (
    <div className="SwiperCard2">
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper mt-10"
      >
        {slides.map((slide, index) => (
          <>
            <SwiperSlide key={index} className="relatve">
            <IonRouterLink
              routerLink={`/anime/${slide.id}`}
              routerDirection="forward"
            >
              <img
                width="250"
                height={250}
                className="bg-cover rounded-xl"
                src={slide.image}
                alt=""
              />
              <h1 className="sliderText absolute bottom-0 text-[18px] px-6 py-5 text-white">
                {slide.title}
              </h1>
              </IonRouterLink>
            </SwiperSlide>  
          </>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperCard2;
