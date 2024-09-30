import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useRef } from 'react';
import { useHistory } from 'react-router';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './HomeBanner.css';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { IonRouterLink, useIonRouter } from '@ionic/react';

interface Slide {
  image: string;
  title: string;
  url: string;
  id: string;
}

interface HomeBannerProps {
  slides: Slide[];
}

const HomeBanner: React.FC<HomeBannerProps> = ({ slides }) => {

const router = useIonRouter()
  const history = useHistory();
  // Define the types for the refs
  const progressCircle = useRef<SVGElement | null>(null);
  const progressContent = useRef<HTMLSpanElement | null>(null);

  const onAutoplayTimeLeft = (s: any, time: number, progress: number) => {
    if (progressCircle.current && progressContent.current) {
      // Check that the refs are not null before modifying them
      progressCircle.current.style.setProperty('--progress', (1 - progress).toString());
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  function show(id: number) {
    console.log("Slide ID:", id); // Logs the slide's ID when clicked
  }


  const handleSlideClick = (id: number) => {
    // Navigate to the detail page with the selected slide's ID
    router.push(`/anime/${id}`);
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
          <SwiperSlide key={slide.id} className="Banner" onClick={() => handleSlideClick(slide.id)}>
            <a >
              <img className="BannerImg" src={slide.image} alt={`Anime ${index}`} />
              <h4 className="BannerTitle">{slide.title}</h4>
              
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
