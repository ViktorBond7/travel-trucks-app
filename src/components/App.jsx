import { Navigate, Route, Routes } from "react-router-dom";
import AppBar from "./AppBar/AppBar";
import HomePage from "../pages/HomePage/HomePage";
import { lazy, Suspense } from "react";
const CampersPage = lazy(() => import("../pages/CampersPage/CampersPage"));

const CamperDetailsPage = lazy(
  () => import("../pages/CamperDetailsPage/CamperDetailsPage"),
);
const Features = lazy(() => import("./Features/Features"));
const Reviews = lazy(() => import("./Reviews/Reviews"));
const FavoriteCampersPage = lazy(
  () => import("../pages/FavoriteCampersPage/FavoriteCampersPage"),
);

function App() {
  return (
    <>
      <AppBar />
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CampersPage />} />
          <Route path="/catalog/:id" element={<CamperDetailsPage />}>
            <Route index element={<></>} />
            <Route path="features" element={<Features />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="/favorite" element={<FavoriteCampersPage />} />
          <Route path="*" element={<Navigate to={"/"} />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
