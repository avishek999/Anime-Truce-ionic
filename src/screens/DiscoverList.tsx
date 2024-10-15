
import AllAnimeList from "@/components/AllAnimeList";
import React, { useState } from "react";


const categories = ['All', 'Popular', 'Trending', 'Movies','Upcoming', 'Top Rated'];
const colors = ['bg-purple-400/20', 'bg-blue-400/20', 'bg-green-400/20', 'bg-red-400/20', 'bg-yellow-400/20'];

const DiscoverList: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState('All'); 
  
  return (
    <>
    <ul className="flex items-center gap-4 w-full mt-4 overflow-x-auto whitespace-nowrap">
    {categories.map((category, index) => (
      <li 
        key={index}
        onClick={() => setSelectedCategory(category)} 
        className={` px-4 py-1 rounded-full backdrop-blur-xl cursor-pointer transition-all duration-300 
       
          ${selectedCategory === category ? ' border-2 border-purple-500  text-black bg-white' : 'border bg-white/20 '}`} 
      >
        {category}
      </li>
    ))}
  </ul> 
  
  { selectedCategory === 'All' && <AllAnimeList  url="/anime-list"/>}
  { selectedCategory === 'Popular' && <AllAnimeList  url="/top-airing"/>}
  { selectedCategory === 'Trending' && <AllAnimeList  url="/trending"/>}
  { selectedCategory === 'Movies' && <AllAnimeList  url="/movies"/>}
  { selectedCategory === 'Upcoming' && <AllAnimeList  url="/tv"/>}
  { selectedCategory === 'Top Rated' && <AllAnimeList  url="/top"/>}

  




 
 </>
  );
};

export default DiscoverList;
