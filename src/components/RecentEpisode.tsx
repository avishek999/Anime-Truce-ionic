import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./RecentEpisode.scss";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import SwipperCard from "./swipperBannerCard/SwipperCard";

interface Slide {
  image: string;
  title: string;
  id: string;
}

interface RecentEpisodeProps {
  slides: Slide[];
}

const RecentEpisode: React.FC<RecentEpisodeProps> = ({ slides }) => {
  return (
    <>
    <h1 className='mt-4 text-2xl font-bold ml-2'>Recent Episode</h1>

    <SwipperCard
      slides={slides.map((anime) => ({
        image: anime.image,
        title: anime.title,
        id: anime.id,
      }))}
    />
    </>
  );
};

export default RecentEpisode;
