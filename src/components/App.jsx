import { Route, Routes } from "react-router-dom";
import AppBar from "./AppBar/AppBar";
import HomePage from "../pages/HomePage/HomePage";
import CampersPage from "../pages/CampersPage/CampersPage";
import CamperDetailsPage from "../pages/CamperDetailsPage/CamperDetailsPage";
import Features from "./Features/Features";
import Reviews from "./Reviews/Reviews";

function App() {
  return (
    <>
      <AppBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CampersPage />} />
        <Route path="/catalog/:id" element={<CamperDetailsPage />}>
          <Route path="/catalog/:id/features" element={<Features />} />
          <Route path="/catalog/:id/reviews" element={<Reviews />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
