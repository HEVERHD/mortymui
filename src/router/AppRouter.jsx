import { Box, Grid } from "@mui/material";
import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { About } from "../pages/About";
import { Details } from "../pages/Details";
import { RickMortyPage } from "../pages/RickMortyPage";

export const AppRouter = () => {
  return (
    <>
      {/* <main>
        {/* Hero unit */}
      <Box
        sx={{
          bgcolor: "background.paper",
          pt: 0.5,
          pb: 3,
        }}
      >
        <Grid>
          <Navbar />
          <Routes>
            <Route path="/ricky" element={<RickMortyPage />} />
            <Route path="about" element={<About />} />
            <Route path="details" element={<Details />} />

            {/* Ruta comodin */}
            <Route path="/" element={<Navigate to="ricky" />} />
          </Routes>
        </Grid>
      </Box>
    </>
  );
};
