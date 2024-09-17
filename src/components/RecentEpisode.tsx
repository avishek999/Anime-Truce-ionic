import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './RecentEpisode.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

interface Slide {
    image: string;
    title: string;
  }
  
  interface RecentEpisodeProps {
    slides: Slide[]; // Accept array of objects containing image and title
  }
  

const RecentEpisode: React.FC <RecentEpisodeProps> = ({ slides }) => {
  return (
    <>
        <h1>Recent Episode</h1>
        <Swiper
          slidesPerView={2}
          centeredSlides={true}
          spaceBetween={10}
         
          
          modules={[Pagination, Navigation]}
          className="RecentEpi"
        >
           {slides.map((slide, index) => (
          <SwiperSlide key={index} className="RecentEpiBanner">
            <img className='RecentEpiBannerImg' src={slide.image} alt={`Anime ${index}`} />
            <p className='RecentEpiBannerTitle' >{slide.title}</p>
          </SwiperSlide>
    
        
        ))}
        </Swiper>
       
        </>
  );
};

export default RecentEpisode;
