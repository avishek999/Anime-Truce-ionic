import { Swiper, SwiperSlide } from "swiper/react";
import React, { useRef } from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { IonRouterLink, useIonRouter } from "@ionic/react";
import { FaStar } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "./HomeBanner.scss";

// Types for the Slide and HomeBannerProps
interface Slide {
  image: string;
  title: string;
  url: string;
  id: string;
}

interface HomeBannerProps {
  slides: Slide[];
}

// Main component function
const HomeBanner: React.FC<HomeBannerProps> = ({ slides }) => {
  const router = useIonRouter();

  // Handlers and refs
  const progressCircleRef = useRef<SVGElement | null>(null);
  const progressContentRef = useRef<HTMLSpanElement | null>(null);

  const handleSlideClick = (id: string) => {
    router.push(`/anime/${id}`);
  };

  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      navigation={true}
      modules={[Autoplay, Pagination]}
      className="home-banner-swiper"
    >
      {slides.map((slide) => (
        <SwiperSlide
          key={slide.id}
          className="Banner"
          onClick={() => handleSlideClick(slide.id)}
        >
          <IonRouterLink>
            <p className="BannerHeading">Top Airing</p>
            <h4 className="BannerTitle">{slide.title}</h4>
            <div className="text-white flex items-center gap-2 absolute bottom-[20px] text-sm left-[12px]">
              <FaStar className="text-yellow-400" />
              2.5k
            </div>
            <img
              className="BannerImg"
              src={slide.image}
              alt={`Anime ${slide.title}`}
              loading="lazy"
            />
          </IonRouterLink>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HomeBanner;
