import { getWeatherIcon } from "../utils/weatherIcons";
import { Card, CardContent, Typography, Box, Grid } from "@mui/material";
import OpacityIcon from "@mui/icons-material/Opacity";
import AirIcon from "@mui/icons-material/Air";
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import SpeedIcon from "@mui/icons-material/Speed";
const WeatherCard = ({ weather, unit }) => {
  if (!weather) return null;

  const icon = getWeatherIcon(
    weather.weather[0].main,
    weather.weather[0].description
  );
  return (
    <Card
      sx={{
        width: { xs: "90%", sm: "70%", md: "500px" },
        margin: "auto",
        textAlign: "center",
        mt: 3,
        p: { xs: 2, sm: 3 },
        borderRadius: 3,
        boxShadow: 4,
      }}
    >
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {weather.name}, {weather.sys.country}
        </Typography>

        <Box display="flex" justifyContent="center" alignItems="center" mb={2}>
          {icon}
          <Typography
            variant="h2"
            ml={2}
            sx={{ fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4rem" } }}
          >
            {Math.round(weather.main.temp)}°{unit === "metric" ? "C" : "F"}
          </Typography>
        </Box>

        <Typography
          variant="h6"
          textTransform="capitalize"
          gutterBottom
          sx={{ fontSize: { xs: "1rem", sm: "1.2rem", md: "1.4rem" } }}
        >
          {weather.weather[0].description}
        </Typography>

        <Grid container spacing={2} justifyContent="center" mt={2}>
          <Grid item xs={6}>
            <Box display="flex" alignItems="center">
              <DeviceThermostatIcon sx={{ mr: 1, color: "orange" }} />
              <Typography variant="body2">
                Feels Like: {Math.round(weather.main.feels_like)}°
                {unit === "metric" ? "C" : "F"}
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={6}>
            <Box display="flex" alignItems="center">
              <ArrowDownwardIcon sx={{ mr: 1, color: "blue" }} />
              <Typography variant="body2">
                Min: {Math.round(weather.main.temp_min)}°
                {unit === "metric" ? "C" : "F"}
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={6}>
            <Box display="flex" alignItems="center">
              <ArrowUpwardIcon sx={{ mr: 1, color: "red" }} />
              <Typography variant="body2">
                Max: {Math.round(weather.main.temp_max)}°
                {unit === "metric" ? "C" : "F"}
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={6}>
            <Box display="flex" alignItems="center">
              <SpeedIcon sx={{ mr: 1, color: "green" }} />
              <Typography variant="body2">
                Pressure: {weather.main.pressure} hPa
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={6}>
            <Box display="flex" alignItems="center">
              <OpacityIcon sx={{ mr: 1, color: "skyblue" }} />
              <Typography variant="body2">
                Humidity: {weather.main.humidity}%
              </Typography>
            </Box>
          </Grid>
          <br />
          <Grid item xs={6}>
            <Box display="flex" alignItems="center">
              <AirIcon sx={{ mr: 1, color: "gray" }} />
              <Typography variant="body2">
                Wind: {weather.wind.speed} {unit === "metric" ? "m/s" : "mph"}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
export default WeatherCard;
