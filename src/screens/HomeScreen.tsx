import { IonPage, useIonViewWillEnter } from "@ionic/react";
import React, { useEffect, useState } from "react";
import HomeBanner from "../components/HomeBanner";
import "./HomeScreen.scss";

import RecentEpisode from "../components/RecentEpisode";
import dotenv from "dotenv";
import DiscoverList from "./DiscoverList";
import GenreList from "./GenreList";

const HomeScreen: React.FC = () => {
  const animeHeadings = [
    "Stream Epic Anime Adventures",
    "Discover Your Anime Universe",
    "Endless Anime Streaming Hub",
    "Unleash Ultimate Anime Worlds",
    "Watch Legendary Anime Now",
    "Dive Into Anime Realms",
  ];

  const [currentHeadingIndex, setCurrentHeadingIndex] = useState(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [Topair, setTopair] = useState<any[]>([]);
  const [RecentData, setRecentData] = useState<any[]>([]);
  const [fade, setFade] = useState(true);
  const [selected, setSelected] = useState<'discover' | 'genre'>('discover')

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

    fetchTopAiring(); 
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
        setRecentData(ReEpi.results.slice(0, 10)); 
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

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);

      const timeout = setTimeout(() => {
        setCurrentHeadingIndex((prevIndex) => (prevIndex + 1) % animeHeadings.length);
        setFade(true); // Start fading in
      }, 500); // Match this duration with the transition duration

      return () => clearTimeout(timeout); // Cleanup timeout
    }, 2500);

    return () => clearInterval(interval); 
  }, [animeHeadings.length]);

  const currentHeading = animeHeadings[currentHeadingIndex].split(" ");

  return (
    <IonPage>
      <div className="Home_Screen_Content overflow-y-auto overflow-x-hidden">
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

        <div className="relative w-100 flex justify-center mt-20 items-center ">
          <img
            height={30}
            width={50}
            className="absolute right-24 animate-random1  "
            src="https://png.pngtree.com/png-vector/20221208/ourmid/pngtree-4-dragon-ball-icon-vector-drgon-illustrtion-png-image_6515607.png"
            alt=""
            loading="lazy"
          />
          <img
            height={30}
            width={240}
            className="absolute left-[-0px] top=[-120px]  animate-pulse"
            src="https://www.pngplay.com/wp-content/uploads/12/Shenron-PNG-Clipart-Background.png"
            alt=""
            loading="lazy"
          />

          <img
            height={30}
            width={50}
            className="absolute top-[-20px] left-[0] z-[1] animate-random2 "
            src="https://png.pngtree.com/png-vector/20221208/ourmid/pngtree-4-dragon-ball-icon-vector-drgon-illustrtion-png-image_6515607.png"
            alt=""
            loading="lazy"
          />
          <img
            height={30}
            width={50}
            className="absolute top-[-30px] right-40 animate-random3 "
            src="https://png.pngtree.com/png-vector/20230303/ourmid/pngtree-dragon-ball-z-vector-super-illustration-png-image_6627050.png"
            alt=""
            loading="lazy"
          />

          <div className="backdrop-blur-sm sticky   bg-white/20 border border-neutral-500 h-20  w-96 rounded-xl ">
            <div className="flex relative items-center ">
             
              <div className={`text-lg abosolute pt-7 pl-3 font-bold  transition-all duration-200 ease-in-out ${fade ? 'opacity-100' : 'opacity-0'}`}>
                {currentHeading.map((word, index) =>
                  word.toLowerCase() === "anime" ? (
                    <span
                      key={index}
                      className="text-purple-200 mx-1  transition-all duration-200 ease-in-out"
                    >
                      {word}
                    </span>
                  ) : (
                    <span key={index}>{word} </span>
                  )
                )}
              </div>

              <img
                className="absolute bottom-[-22px] right-0 "
                height={20}
                width={130}
                src="https://www.pngarts.com/files/18/Goku-PNG-Image-HQ.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-16 items-center">
        <div className="py-1 px-5   backdrop-blur-sm bg-black/30 rounded-full shadow-lg  border inline-flex relative">
        <img width={80} className="absolute right-[-40px] rotate-[35deg] top-[-25px]" src="https://i.pinimg.com/originals/ae/5f/a0/ae5fa0333af0103ed4df666a4381fc8b.png" alt="" />

      <div className="flex">
        <button
          className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ease-in-out relative z-10 ${
            selected === 'discover' ? 'text-black' : 'text-white-foreground'
          }`}
          onClick={() => setSelected('discover')}
        >
          Discover
        </button>
        <button
          className={`px-4 py-2 text-sm font-medium rounded-full transition-all  duration-300 ease-in-out relative z-10 ${
            selected === 'genre' ? 'text-black' : 'text-white-foreground'
          }`}
          onClick={() => setSelected('genre')}
        >
          Genre
        </button>
      </div>
      <div
        className={`absolute top-1 bottom-1 w-1/2 bg-white rounded-full transition-all duration-300 ease-in-out ${
          selected === 'discover' ? 'left-1' : 'left-[calc(50%_-_0.25rem)]'
        }`}
      ></div>
    </div>
    </div>
    <div>
        {selected === 'discover' ? <DiscoverList />: <GenreList />}
      </div>

    

    
      </div>
    </IonPage>
  );
};

export default HomeScreen;
