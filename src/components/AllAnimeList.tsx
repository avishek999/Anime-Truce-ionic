import AllApis from "@/utils/AllApis";
import { IonRouterLink } from "@ionic/react";
import React, { useState } from "react";
import { IAllAnimeList } from "@/interface/Interface";


const AllAnimeList: React.FC<IAllAnimeList> = ({url}) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [allAnime, setAllAnime] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1); 
  const itemsPerPage = 10;

  // Calculate paginated data
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = allAnime.slice(startIndex, endIndex);

  // Calculate the total number of pages
  const totalPages = Math.ceil(allAnime.length / itemsPerPage);

  // Handle page change
  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  // Render loading state or anime images
  return (
    <div className="overflow-auto">
      <AllApis
        url={`${url}`}
        setData={setAllAnime}
        setLoading={setLoading}
        limit={100000}
      />
      {loading ? (
        <p>Loading...</p> // Loading feedback
      ) : (
        <div>
          <div className="grid grid-cols-2 gap-2 p-0 mt-6">
            {paginatedData.map((item, index) => (
              <IonRouterLink
                key={index}
                routerLink={`/anime/${item.id}`}
                routerDirection="forward"
              >
                <div className="m-2 flex flex-col items-center p-2 bg-black/30 rounded-2xl border border-white/40">
                  <img
                    className="rounded-2xl h-[250px] w-full object-cover"
                    src={item.image}
                    alt={`Anime: ${item.title}`}
                  />
                  <h4 className="text-center text-white font-medium mt-2">
                    {item.title}
                  </h4>
                </div>
              </IonRouterLink>
            ))}
          </div>

          {/* Pagination controls */}
          <div className="flex justify-center mt-4 space-x-4">
            <button
              className="bg-gray-600/40 text-white px-4 py-2 rounded-3xl border border-white disabled:opacity-50"
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
            >
              Previous
            </button>

            <button
              className="bg-gray-600/40 text-white px-4 py-2 border rounded-3xl disabled:opacity-50"
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllAnimeList;
