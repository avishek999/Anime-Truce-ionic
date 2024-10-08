import { IonPage, useIonViewWillEnter } from "@ionic/react";
import React, { useState } from "react";

const AllAnimeList: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [Topair, setTopair] = useState<any[]>([]);

  const apiUrl = import.meta.env.VITE_API_CONSUMET_API;

  if (!apiUrl) {
    throw new Error("API URL is not defined in the environment variables.");
  }

  // Fetch top airing anime
  const ListApi = async () => {
    const response = await fetch(`${apiUrl}/anime-list`);
    const AllListApi = await response.json();
    return AllListApi;
  };

  useIonViewWillEnter(() => {
    const fetchTopAiring = async () => {
      try {
        const topAir = await ListApi();
        console.log("All Anime", topAir.results);
        setTopair(topAir.results.slice(0,10)); // Assuming topAir.results is the array you want
        setLoading(false);
      } catch (error) {
        console.error("Error fetching top airing:", error);
        setLoading(false); // Ensure loading is set to false on error
      }
    };

    fetchTopAiring();
  });

  // Render loading state or anime images
  return (
    <div className="overflow-auto">
      {loading ? (
        <p>Loading...</p> // Loading feedback
      ) : (
        <div className="grid grid-cols-2 gap-2 p-0 mt-6 ">
          {Topair.map((item, index) => (
            <div key={index} className="m-2 flex flex-col items-center p-2 bg-black/30 rounded-2xl border border-white/40">
              <img className="rounded-2xl" width={200} src={item.image} alt={`Anime: ${item.title}`} />
              <h4 className="text-center text-white  font-medium mt-2">{item.title}</h4>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllAnimeList;
