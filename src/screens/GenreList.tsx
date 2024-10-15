import AllAnimeList from "@/components/AllAnimeList";
import React, { useEffect, useState } from "react";
import { fetchGenreList } from "@/utils/AllApis";

const GenreList: React.FC = () => {
  const [selectedGenre, setSelectedGenre] = useState("Action");
  const [genreList, setGenreList] = useState<{ title: string }[]>([]);

  const apiUrl = import.meta.env.VITE_API_CONSUMET_API;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchGenreList(apiUrl);
        console.log("old data", data);
        setGenreList(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [apiUrl]);

  return (
    <div>
      <ul className="flex flex-row gap-5 mt-4 overflow-x-auto whitespace-nowrap">
        {genreList.map((item, id) => (
          <li
            key={id}
            onClick={() => setSelectedGenre(item.title)}
            className={`px-4 py-1 rounded-full backdrop-blur-xl cursor-pointer transition-all duration-300 
                ${
                  selectedGenre === item.title
                    ? "border-2 border-purple-500 text-black bg-white"
                    : "border bg-white/20"
                }`}
          >
            {item.title}
          </li>
        ))}
      </ul>

      {selectedGenre && (
        <AllAnimeList url={`/genre/${selectedGenre.toLowerCase()}`} />
      )}
    </div>
  );
};

export default GenreList;
