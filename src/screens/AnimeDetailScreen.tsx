import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonRouter,
} from "@ionic/react";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

interface AniDetails {
  title: string;
  image: string;
  description: string;
  totalEpisodes: number;
  genres: string[];
  episodes: Episode[];
}

interface Episode {
  id: string;
  number: number;
}

const AnimeDetailScreen: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [slideDetails, setSlideDetails] = useState<AniDetails | null>(null);
  const router = useIonRouter();

  useEffect(() => {
    fetch(`https://consumet-apis.vercel.app/anime/gogoanime/info/${id}`)
      .then((response) => response.json())
      .then((data) => setSlideDetails(data))
      .catch((error) => console.error("Error fetching anime details:", error));
  }, [id]);

  const handleEpisodeClick = (episodeId: string) => {
    router.push(`/animes/${episodeId}`);
    console.log(`Navigating to episode ${episodeId}`);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{slideDetails ? slideDetails.title : "Loading..."}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding" scrollY={true}>
        {slideDetails ? (
          <>
            <img
              src={slideDetails.image}
              alt={slideDetails.title}
              style={{ width: "100%", height: "auto" }}
            />
            <h1>{slideDetails.title}</h1>
            <p>{slideDetails.description}</p>
            <h3>Total Episodes: {slideDetails.totalEpisodes}</h3>
            <h4>Genres: {slideDetails.genres.join(", ")}</h4>

            <h5>Episodes:</h5>
            {slideDetails.episodes.map((episode: Episode) => (
              <p key={episode.id} onClick={() => handleEpisodeClick(episode.id)}>
                Episode no {episode.number}
              </p>
            ))}
          </>
        ) : (
          <p>Loading details...</p>
        )}
      </IonContent>
    </IonPage>
  );
};

export default AnimeDetailScreen;
