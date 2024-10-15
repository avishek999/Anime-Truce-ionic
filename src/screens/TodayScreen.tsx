import SwiperCard2 from "@/components/swipperBannerCard/SwiperCard2";
import { IonPage } from "@ionic/react";
import React, { useState } from "react";

import "./TodayScreen.scss";
import { AllApis } from "@/utils/AllApis";
const TodayScreen: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [Topair, setTopair] = useState<any[]>([]);
  const [RecentData, setRecentData] = useState<any[]>([]);
  const today = new Date();
  const day = String(today.getDate()).padStart(2, "0");
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const year = today.getFullYear();
  const formattedDate = `${day}/${month}/${year}`;

  return (
    <IonPage>
      <AllApis
        url="/recent-episodes"
        setData={setRecentData}
        setLoading={setLoading}
        limit={10}
      />
      <div className="Today_Screen_Content overflow-y-auto overflow-x-hidden">
        <div className="flex justify-center flex-col items-center">
          <h1 className="text-4xl font-sans-sarif mt-10 font-bold">
            Released <span className="text-purple-100/40">Today</span>
          </h1>
          <p className="font-medium ">{formattedDate}</p>
        </div>
        <SwiperCard2
          slides={RecentData.map((anime) => ({
            image: anime.image,
            title: anime.title,
            id: anime.id,
          }))}
        />
      </div>
    </IonPage>
  );
};

export default TodayScreen;
