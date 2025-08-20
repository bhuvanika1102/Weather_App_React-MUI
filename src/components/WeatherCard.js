import { getWeatherIcon } from "../utils/weatherIcons";
import { Card, CardContent, Typography, Box, Grid } from "@mui/material";

const WeatherCard = ({ weather }) => {
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
            {Math.round(weather.main.temp)}°C
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

        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={6}>
            <Typography>💧 Humidity: {weather.main.humidity}%</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography>🌬️ Wind: {weather.wind.speed} m/s</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
export default WeatherCard;
