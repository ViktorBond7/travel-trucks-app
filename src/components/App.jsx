import { Route, Routes } from "react-router-dom";
import AppBar from "./AppBar/AppBar";
import HomePage from "../pages/HomePage/HomePage";
import CampersPage from "../pages/CampersPage/CampersPage";

function App() {
  return (
    <>
      <AppBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CampersPage />} />
      </Routes>
    </>
  );
}

export default App;
