import { IonPage, useIonViewWillEnter } from "@ionic/react";
import React, { useState } from "react";
import HomeBanner from "../components/HomeBanner";
import "./HomeScreen.scss";

import RecentEpisode from "../components/RecentEpisode";
import dotenv from "dotenv";

const HomeScreen: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [Topair, setTopair] = useState<any[]>([]);
  const [RecentData, setRecentData] = useState<any[]>([]);

  const apiUrl = import.meta.env.VITE_API_CONSUMET_API;

  if (!apiUrl) {
    throw new Error("API URL is not defined in the environment variables.");
  }
  useIonViewWillEnter(() => {
    const fetchTopAiring = async () => {
      try {
        const topAir = await topAiring();
        console.log("top Airing", topAir.results);
        setTopair(topAir.results.slice(0, 10));
        setLoading(false);
      } catch (error) {
        console.error("Error fetching top airing:", error);
      }
    };

    fetchTopAiring(); // Call the async function inside
  });

  const topAiring = async () => {
    const data = await fetch(`${apiUrl}/top-airing`);
    const topAir = await data.json();
    return topAir;
  };

  useIonViewWillEnter(() => {
    const RecentEpi = async () => {
      try {
        const ReEpi = await recentEpisode();
        setRecentData(ReEpi.results.slice(0, 10)); // Limit to 10 results
        console.log("Recent epi", ReEpi.results);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching top airing:", error);
      }
    };

    RecentEpi();
  });

  const recentEpisode = async () => {
    const Data = await fetch(`${apiUrl}/recent-episodes`);
    const recentEp = await Data.json();
    console.log("ReData", recentEp);
    return recentEp;
  };

  return (
    <IonPage>
      <div className="Home_Screen_Content overflow-auto">
        {!loading && (
          <HomeBanner
            slides={Topair.map((anime) => ({
              image: anime.image,
              title: anime.title,
              url: anime.url,
              id: anime.id,
            }))}
          />
        )}

        {!loading && (
          <RecentEpisode
            slides={RecentData.map((anime) => ({
              image: anime.image,
              title: anime.title,
              id: anime.id,
            }))}
          />
          
        )}
      
       
        
      </div>
    </IonPage>
  );
};

export default HomeScreen;
