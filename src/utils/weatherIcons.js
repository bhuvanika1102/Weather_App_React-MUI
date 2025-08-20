import WbSunnyIcon from "@mui/icons-material/WbSunny";
import CloudIcon from "@mui/icons-material/Cloud";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import UmbrellaIcon from "@mui/icons-material/Umbrella";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import GrainIcon from "@mui/icons-material/Grain";
import FoggyIcon from "@mui/icons-material/CloudQueue"; 

export const getWeatherIcon = (main, description) => {
  switch (main.toLowerCase()) {
    case "clear":
      return <WbSunnyIcon sx={{ fontSize: 80, color: "orange" }} />;

    case "clouds":
      if (description.includes("broken") || description.includes("scattered")) {
        return <CloudIcon sx={{ fontSize: 80, color: "gray" }} />;
      }
      return <CloudIcon sx={{ fontSize: 80, color: "darkgray" }} />;

    case "rain":
    case "drizzle":
      return <UmbrellaIcon sx={{ fontSize: 80, color: "blue" }} />;

    case "thunderstorm":
      return <ThunderstormIcon sx={{ fontSize: 80, color: "purple" }} />;

    case "snow":
      return <AcUnitIcon sx={{ fontSize: 80, color: "lightblue" }} />;

    case "mist":
    case "haze":
    case "fog":
      return <FoggyIcon sx={{ fontSize: 80, color: "lightgray" }} />;

    default:
      return <GrainIcon sx={{ fontSize: 80, color: "green" }} />;
  }
};
