import React from "react";
import { IonContent, IonButton, IonPage, IonText } from "@ionic/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { IntroProps } from "@/interface/Interface";


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";





const Intro: React.FC<IntroProps> = ({ onFinish }) => {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="IntroBanners"
      >
        <SwiperSlide className= "introBanner">
          {" "}
          <img src="images/sliders/slider1.png" alt="" />
          <h1>Enjoy your best anime</h1>
        </SwiperSlide>
        <SwiperSlide className= "introBanner">
          <img src="images/sliders/slider2.png" alt="" />
          <h1>Free With this App</h1>
        </SwiperSlide >
        <SwiperSlide className= "introBanner">
          <img src="images/sliders/slider3.png" alt="" />
          <h1>Start you journey</h1>
          <IonButton color={"dark"} shape={"round"} onClick={()=>onFinish()}>
            Start
          </IonButton>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Intro;
