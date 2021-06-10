import { useState, useEffect } from "react";
import { getDailyWeather } from './weatherApi';


export default function useFetch() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function init() {
      try {
        const response = await getDailyWeather();
        setData(response);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    }
    init();
  }, []);

  return { data, error, loading };
}
