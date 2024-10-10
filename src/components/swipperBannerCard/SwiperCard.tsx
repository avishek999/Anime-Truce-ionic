import { IonRouterLink } from "@ionic/react";
import React from "react";
// import { Swiper, SwiperSlide } from 'swiper/react'; 
// import { Autoplay, Navigation, Pagination } from "swiper/modules";
// import "./SwippereCard.scss"
import { HomeBannerProps } from "@/interface/Interface";

// Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

const SwiperCard: React.FC<HomeBannerProps> = ({ slides }) => {
  return (
    // <Swiper
    //   slidesPerView={4}
    //   spaceBetween={10}
    //   modules={[Pagination, Navigation, Autoplay]} 
    //   autoplay={{ delay: 3000, disableOnInteraction: false }} 
    //   className="SwiperCardContainer"
    // >
    //   {slides.map((slide) => (
    //     <SwiperSlide key={slide.id} className="SwiperCard p-4">
    //       <IonRouterLink
    //         routerLink={`/anime/${slide.id}`}
    //         routerDirection="forward"
    //       >
    //         <img
    //           className="SwiperCardImg"
    //           src={slide.image}
    //           alt="Episode Loading.."
    //           loading="lazy"
    //         />
    //         <p className="SwiperCardTitle">{slide.title}</p>
    //       </IonRouterLink>
    //     </SwiperSlide>
    //   ))}
    // </Swiper>
    <></>
  );
};

export default SwiperCard;
