import { use, useEffect } from "react";
import CamperList from "../../components/CamperList/CamperList";
import Container from "../../components/Container/Container";
import LocationInput from "../../components/LocationInput/LocationInput";
import VehicleFilters from "../../components/VehicleFilters/VehicleFilters";
import css from "./CampersPage.module.css";
import { fetchCampers } from "../../redux/campers/operations";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCampers,
  selectIsLoading,
} from "../../redux/campers/campersSlice";

const CampersPage = () => {
  const campers = useSelector(selectCampers);
  const isLoading = useSelector(selectIsLoading);

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
          <CamperList campers={campers} />
        </section>
      </main>
    </Container>
  );
};

export default CampersPage;
