import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { About } from "../pages/About";
import { RickMortyPage } from "../pages/RickMortyPage";

export const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/ricky" element={<RickMortyPage />} />
        <Route path="about" element={<About />} />

        {/* Ruta comodin */}
        <Route path="/" element={<Navigate to="ricky" />} />
      </Routes>
    </>
  );
};
