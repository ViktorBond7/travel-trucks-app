import { useEffect } from "react";
import CamperList from "../../components/CamperList/CamperList";
import Container from "../../components/Container/Container";
import LocationInput from "../../components/LocationInput/LocationInput";
import VehicleFilters from "../../components/VehicleFilters/VehicleFilters";
import css from "./CampersPage.module.css";
import { fetchCampers } from "../../redux/campers/operations";
import { useDispatch } from "react-redux";

const CampersPage = () => {
  // fetchCampers();
  const params = {
    location: "Kyiv",
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCampers(params));
  }, [dispatch]);

  return (
    <Container>
      <main className={css.catalogContainer}>
        <aside>
          <VehicleFilters />
        </aside>
        <section>
          <CamperList />
        </section>
      </main>
    </Container>
  );
};

export default CampersPage;
