import React from "react";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";

import Search from "./components/Search";
import StyledInputBase from "./components/StyledInputBase";
import SearchIconWrapper from "./components/SearchIconWrapper";

interface Props {
  setCityName: React.Dispatch<React.SetStateAction<string>>;
}

export default function TopPart({ setCityName }: Props) {
  const [city, setCity] = React.useState<string>("");
  return (
    <>
      <Toolbar>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ display: { xs: "none", sm: "block" } }}
        >
          The Weather
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <Search onClick={() => setCityName(city)}>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search City or Zipe Code ..."
            inputProps={{ "aria-label": "search" }}
            onChange={(event) => setCity(event.target.value)}
          />
        </Search>
        <Box sx={{ flexGrow: 1 }} />

        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="open drawer"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </>
  );
}
