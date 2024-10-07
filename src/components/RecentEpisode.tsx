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
    <h1 className='mt-4 text-2xl font-bold ml-2 flex items-center gap-2'>
    Recent Episode
      <img width={40} src="https://cdn3d.iconscout.com/3d/premium/thumb/new-3d-icon-download-in-png-blend-fbx-gltf-file-formats--logo-sticker-discount-sale-sales-pack-icons-6240934.png?f=webp" alt="" />
     
      </h1>

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
