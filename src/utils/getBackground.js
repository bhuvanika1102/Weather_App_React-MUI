const getBackground = (condition) => {
  switch (condition?.toLowerCase()) {
    case "clear":
    case "sunny":
      return "linear-gradient(to top,rgb(255, 168, 55) 0%,rgb(243, 221, 149) 100%)";
    case "clouds":
    case "cloudy":
      return "linear-gradient(to top, #dfe9f3 0%, #ffffff 100%)";
    case "rain":
    case "drizzle":
      return "linear-gradient(to top, #89f7fe 0%, #66a6ff 100%)";
    case "thunderstorm":
      return "linear-gradient(to top, #3a6186 0%, #89253e 100%)";
    case "snow":
      return "linear-gradient(to top, #e6dada 0%, #274046 100%)";
    default:
      return "linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)";
  }
};

export default getBackground;
