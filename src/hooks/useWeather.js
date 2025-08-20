import { useState, useEffect } from "react";
import { getWeatherByCoords } from "../api/weatherApi";

const useWeather = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (pos) => {
          try {
            const data = await getWeatherByCoords(
              pos.coords.latitude,
              pos.coords.longitude
            );
            setWeather(data);
          } catch (err) {
            setError("Failed to fetch weather");
          } finally {
            setLoading(false);
          }
        },
        () => {
          setError("Geolocation not available");
          setLoading(false);
        }
      );
    }
  }, []);
  return { weather, loading, error, setWeather };
};
export default useWeather;
