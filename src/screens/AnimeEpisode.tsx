import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import Hls from "hls.js"; // Import HLS.js

interface Source {
  url: string;
  isM3U8: boolean;
  quality: string;
}

interface EpisodeDetail {
  headers: {
    Referer: string;
  };
  sources: Source[];
  download: string;
}

const AnimeEpisode: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [episodeDetail, setEpisodeDetail] = useState<EpisodeDetail | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    // Fetch episode details from API
    fetch(`https://consumet-apis.vercel.app/anime/gogoanime/watch/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("Full API Response:", data); // Log the API response for testing
        setEpisodeDetail(data);
      })
      .catch((error) => console.error("Error fetching episode details:", error));
  }, [id]);

  useEffect(() => {
    if (episodeDetail && episodeDetail.sources && videoRef.current) {
      // Find the best quality (e.g., 1080p or default) from the sources
      const bestSource = episodeDetail.sources.find(
        (source) => source.quality === "1080p" || source.quality === "default"
      );

      if (bestSource && Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(bestSource.url); // Load the best HLS video URL
        hls.attachMedia(videoRef.current);

        // Set Referer header for the HLS request
        hls.on(Hls.Events.MANIFEST_PARSED, () => {
          console.log("HLS Manifest parsed.");
        });
      } else if (bestSource && videoRef.current.canPlayType('application/vnd.apple.mpegurl')) {
        // For Safari native HLS support
        videoRef.current.src = bestSource.url;
      }
    }
  }, [episodeDetail]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{episodeDetail ? `Episode :${id}` : "Loading..."}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        {episodeDetail ? (
          <video
            ref={videoRef}
            id="player"
            playsInline
            controls
            style={{ width: "100%" }} // Ensure video takes the full width
          >
            <track
              kind="captions"
              label="English captions"
              src="/path/to/captions.vtt"
              srcLang="en"
              default
            />
          </video>
        ) : (
          <p>Loading episode...</p>
        )}
      </IonContent>
    </IonPage>
  );
};

export default AnimeEpisode;
