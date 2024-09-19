import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState,useEffect } from 'react';
import { useParams } from 'react-router';



interface AniDetails{
    title:string,
    image:string,
    description:string,
    totalEpisodes:number,
    genres:[],
}

const AniDetails: React.FC = () => {
  const {id} = useParams<{id:string}>();
  const [slideDetails, setSlideDetails] = useState<AniDetails | null>(null);



  useEffect(() => {
    // Fetch the slide details from the API using the id from the URL
    fetch(`https://consumet-apis.vercel.app/anime/gogoanime/info/${id}`)
      .then((response) => response.json())
      .then((data) => setSlideDetails(data))
      .catch((error) => console.error('Error fetching slide details:', error));
  }, [id]);

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>{slideDetails ? slideDetails.title : 'Loading...'}</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
            {slideDetails ? (
          <>
            <img src={slideDetails.image} alt={slideDetails.title} />
            <h1>{slideDetails.title}</h1>
            <p>{slideDetails.description}</p>
            <h3>{slideDetails.totalEpisodes}</h3>
            <h4>{slideDetails.genres}</h4>
          </>
        ) : (
          <p>Loading details...</p>
        )}
            </IonContent>
        </IonPage>
    );
};

export default AniDetails;