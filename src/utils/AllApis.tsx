import React, { useEffect } from "react";
import { AllApiComponentProps } from "../interface/Interface";

const AllApis: React.FC<AllApiComponentProps> = ({ url, limit, setData, setLoading }) => {
  const apiUrl = import.meta.env.VITE_API_CONSUMET_API;

  if (!apiUrl) {
    throw new Error("API URL is not defined in the environment variables.");
  }

  useEffect(() => {
    const fetchApiData = async () => {
      try {
        setLoading(true);

        const response = await fetch(`${apiUrl}${url}`);
        const result = await response.json();

        if (result && result.results) {
          // Ensure limit is a number and slice data accordingly
          const limitedData = result.results.slice(0, limit);
          console.log("Fetched Data: ", limitedData);
          setData(limitedData);
        } else {
          console.error("Unexpected API response structure: ", result);
        }
      } catch (error) {
        console.error("Error fetching API data:", error);
      } finally {
        setLoading(false); // Ensure loading is reset in both success and failure cases
      }
    };

    fetchApiData();
  }, [apiUrl, url, limit, setData, setLoading]); // Include necessary dependencies

  return null;
};

export default AllApis;
