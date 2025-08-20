import { useState } from "react";
import { TextField, IconButton, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState("");

  const handleSearch = () => {
    if (city.trim()) {
      onSearch(city);
      setCity("");
    }
  };

  return (
    <Box display="flex" justifyContent="center" my={2}>
      <TextField
        label="Search City"
        variant="outlined"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <IconButton onClick={handleSearch} color="primary">
        <SearchIcon />
      </IconButton>
    </Box>
  );
};

export default SearchBar;
