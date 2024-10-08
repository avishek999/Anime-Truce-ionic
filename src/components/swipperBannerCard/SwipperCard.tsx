import { IonRouterLink } from "@ionic/react";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./SwippereCard.scss";
import { HomeBannerProps } from "@/interface/Interface";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

const SwipperCard: React.FC<HomeBannerProps> = ({ slides }) => {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={10}
        modules={[Pagination, Navigation]}
        className="SwiperCardContainer"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="SwiperCard p-4  ">
            <IonRouterLink
              routerLink={`/anime/${slide.id}`}
              routerDirection="forward"
            >
              <img
                className="SwiperCardImg "
                src={slide.image}
                alt="Episode Loading.."
                loading="lazy"
              />
              <p className="SwiperCardTitle">{slide.title}</p>
            </IonRouterLink>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SwipperCard;
