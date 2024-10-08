import { useIonViewWillEnter } from "@ionic/react";
import React from "react";
import { AllApiComponentProps } from "../interface/Interface";


const AllApis: React.FC<AllApiComponentProps> = ({ url,limit, setData, setLoading }) => {
  const apiUrl = import.meta.env.VITE_API_CONSUMET_API;

  if (!apiUrl) {
    throw new Error("API URL is not defined in the environment variables.");
  }

  useIonViewWillEnter(() => {
    const fetchApiData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${apiUrl}${url}`);
        const result = await response.json();
        setData(result.results.slice(0, `${limit}`)); 
        setLoading(false);
      } catch (error) {
        console.error("Error fetching API data:", error);
        setLoading(false);
      }
    };

    fetchApiData();
  });

  return null; // This component handles the logic, so no JSX is needed here.
};

export default AllApis;
