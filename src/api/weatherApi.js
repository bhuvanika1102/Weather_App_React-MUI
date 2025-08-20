import axios from "axios";

const API_KEY = "d010a42187c35088eb0b6161ed95379a";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

export const getWeatherByCoords = async (lat, lon, unit = "metric") => {
  const res = await axios.get(`${BASE_URL}/weather`, {
    params: { lat, lon, appid: API_KEY, units: unit },
  });
  return res.data;
};

export const getWeatherByCity = async (city, unit = "metric") => {
  const res = await axios.get(`${BASE_URL}/weather`, {
    params: { q: city, appid: API_KEY, units: unit },
  });
  return res.data;
};
