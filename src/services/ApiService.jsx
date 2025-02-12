import axios from "axios";
import { useEffect, useState } from "react";

export function useApiService(currency) {
  const [data, setData] = useState(null);
  const API_URL = import.meta.env.VITE_API_URL;
  const API_KEY = import.meta.env.VITE_API_KEY;

  const fetchData = async () => {
    try {
      const response = await axios.get(
          `${API_URL}${API_KEY}&currencies=&base_currency=${currency}`
      );
      setData(response.data.data);
    } catch (error) {
      console.error("API Hatası:", error);
    }
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 10000);

    return () => clearInterval(interval);
  }, [currency]);

  return data;
}
