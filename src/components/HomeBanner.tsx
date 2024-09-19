import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useRef } from 'react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './HomeBanner.css';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

interface Slide {
  image: string;
  title: string;
  url: string;
}

interface HomeBannerProps {
  slides: Slide[]; // Accept array of objects containing image and title
}

const HomeBanner: React.FC<HomeBannerProps> = ({ slides }) => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <>
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
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper HomeBanner"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="Banner">
            <a href={slide.url}>
            <img className='BannerImg' src={slide.image} alt={`Anime ${index}`} />
            <h4 className='BannerTitle' >{slide.title}</h4>
            </a>
          </SwiperSlide>
        ))}

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
};

export default HomeBanner;
