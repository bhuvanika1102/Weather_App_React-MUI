import { useEffect, useState } from "react";
import { getWeatherByCity } from "../api/weatherApi";
import useWeather from "../hooks/useWeather";
import Loader from "../components/Loader";
import SearchBar from "../components/SearchBar";
import WeatherCard from "../components/WeatherCard";
import {
  Box,
  Typography,
  IconButton,
  Chip,
  Select,
  MenuItem,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import getBackground from "../utils/getBackground";

const Home = () => {
  const { weather, loading, error, setWeather } = useWeather();
  const [searchError, setSearchError] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [unit, setUnit] = useState("metric");

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const handleSearch = async (city, selectedUnit = unit) => {
    try {
      const data = await getWeatherByCity(city, selectedUnit);
      setWeather(data);
      setSearchError("");
    } catch {
      setSearchError("City not found");
    }
  };

  const toggleFavorite = () => {
    if (!weather?.name) return;

    const city = `${weather.name}, ${weather.sys.country}`;
    if (favorites.includes(city)) {
      setFavorites(favorites.filter((fav) => fav !== city));
    } else {
      setFavorites([...favorites, city]);
    }
  };

  const handleFavoriteClick = (city) => {
    handleSearch(city.split(",")[0]);
  };

  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  if (loading) return <Loader />;

  const condition = weather?.weather?.[0]?.main;
  const background = getBackground(condition);

  const currentCity = weather ? `${weather.name}, ${weather.sys.country}` : "";
  const isFavorite = favorites.includes(currentCity);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: background,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        p: 3,
        transition: "background 0.5s ease",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 15,
          left: 15,
          display: "flex",
          gap: 2,
        }}
      >
        <Select
          value={unit}
          onChange={(e) => {
            const newUnit = e.target.value;
            setUnit(newUnit);
            if (weather?.name) {
              handleSearch(weather.name, newUnit);
            }
          }}
          sx={{
            borderRadius: "20px",
            bgcolor: "white",
            px: 2,
            py: 0.5,
            boxShadow: 2,
          }}
        >
          <MenuItem value="metric">Celsius (°C)</MenuItem>
          <MenuItem value="imperial">Fahrenheit (°F)</MenuItem>
        </Select>
        {favorites.length > 0 && (
          <Select
            displayEmpty
            value=""
            onChange={(e) => handleFavoriteClick(e.target.value)}
            sx={{
              minWidth: 200,
              borderRadius: "20px",
              bgcolor: "white",
              boxShadow: 2,
            }}
          >
            <MenuItem value="" disabled>
              Select Favourite City
            </MenuItem>
            {favorites.map((city, index) => (
              <MenuItem key={index} value={city}>
                🌍 {city}
              </MenuItem>
            ))}
          </Select>
        )}
      </Box>

      <Box
        sx={{
          mt:"35px"
        }}
      ></Box>
      <Typography
        variant="h3"
        textAlign="center"
        my={3} //m=margin,y=y-axis
        color="black"
        sx={{ fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.5rem" } }}
      >
        Weather App
      </Typography>

      <Typography variant="subtitle1" color="text.secondary" gutterBottom>
        {today}
      </Typography>

      <SearchBar onSearch={handleSearch} />

      {error && <Typography color="error">{error}</Typography>}
      {searchError && <Typography color="error">{searchError}</Typography>}
      {weather && (
        <Box sx={{ position: "relative", mt: 2 }}>
          <WeatherCard weather={weather} unit={unit} />
          <IconButton
            onClick={toggleFavorite}
            sx={{
              position: "absolute",
              top: 10,
              right: 10,
              color: isFavorite ? "red" : "grey",
              bgcolor: "rgba(255,255,255,0.8)",
              "&:hover": { bgcolor: "rgba(255,255,255,1)" },
            }}
          >
            {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </IconButton>
        </Box>
      )}
    </Box>
  );
};

export default Home;
