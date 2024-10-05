import { Swiper, SwiperSlide } from "swiper/react";
import React from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "./HomeBanner.scss";

// Skeleton Loader Component
const HomeBannerSkeleton: React.FC = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      navigation={false}
      className="home-banner-swiper"
    >
      <div className="banner_container">
        {Array.from({ length: 3 }).map((_, index) => (
          <SwiperSlide key={index} className="Banner relative">
            <div className="h-[300px] bg-gray-900 animate-pulse rounded-lg">
              {/* Placeholder for the image */}
            </div>
            <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-between p-4">
              <div className="h-4 bg-gray-600 animate-pulse rounded w-1/2 mb-2" />
              <div className="h-6 bg-gray-600 animate-pulse rounded w-3/4 mb-4" />
              <div className="flex items-center gap-2 text-yellow-500">
                <div className="h-5 w-5 bg-yellow-400 rounded-full animate-pulse" />
                <div className="h-4 bg-gray-600 animate-pulse rounded w-10" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </div>
    </Swiper>
  );
};

export default HomeBannerSkeleton;
