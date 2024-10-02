import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, useIonViewWillEnter,IonIcon, IonSkeletonText } from '@ionic/react';
import React, { useState } from 'react';
import HomeBanner from '../components/HomeBanner';
import './HomeScreen.scss'
import { person, search } from 'ionicons/icons';
import RecentEpisode from '../components/RecentEpisode';
import { Button } from '@/components/ui/button';


const HomeScreen: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [Topair, setTopair] = useState<any[]>([]);
  const [RecentData, setRecentData] = useState<any[]>([]);


  useIonViewWillEnter(() => {
    const fetchTopAiring = async () => {
      try {
        const topAir = await topAiring();
        console.log('top Airing', topAir.results);
        setTopair(topAir.results.slice(0, 10)); // Limit to 10 results
        setLoading(false);
      } catch (error) {
        console.error('Error fetching top airing:', error);
      }
    };

    fetchTopAiring(); // Call the async function inside
  });




  const topAiring = async () => {
    const data = await fetch('https://consumet-apis.vercel.app/anime/gogoanime/top-airing');
    const topAir = await data.json();
    return topAir;
  };

  useIonViewWillEnter(() => {
    const RecentEpi = async () => {
      try {
        const ReEpi = await recentEpisode();
        setRecentData(ReEpi.results.slice(0, 10)); // Limit to 10 results
        console.log('Recent epi', ReEpi.results);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching top airing:', error);
      }
    };

    RecentEpi(); // Call the async function inside
  });




  const recentEpisode = async () => {
    const Data = await fetch('https://consumet-apis.vercel.app/anime/gogoanime/recent-episodes');
    const recentEp = await Data.json();
    console.log("ReData",recentEp);
    return recentEp;
  }

  return (
    <IonPage>
      <IonHeader>
        {/* <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonButtons slot="end" >
          <IonIcon slot='end'  icon={search}/>
          </IonButtons>
          <IonTitle>Anime Truce</IonTitle>
        </IonToolbar> */}
      </IonHeader>
      <div className="Home_Screen_Content" >
        
        {!loading && (
          <HomeBanner 
            slides={Topair.map(anime => ({
              image: anime.image,
              title: anime.title,
              url: anime.url,
              id: anime.id,
            }))}
          />
        )}
        
       {!loading && <RecentEpisode slides={RecentData.map(anime => ({image: anime.image, title: anime.title,id: anime.id}))}  />}
       {/* {!loading && <RecentEpisode slides={RecentData.map(anime => ({image: anime.image, title: anime.title,id: anime.id}))}  />} */}
        


     
       {/* <IonSkeletonText animated={true} style={{ width: '80px' }}></IonSkeletonText> */}
       </div>
  
    </IonPage>
  );
};

export default HomeScreen;
