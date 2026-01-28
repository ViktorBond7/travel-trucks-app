import CamperList from "../../components/CamperList/CamperList";
import Container from "../../components/Container/Container";
import LocationInput from "../../components/LocationInput/LocationInput";
import VehicleFilters from "../../components/VehicleFilters/VehicleFilters";
import css from "./CampersPage.module.css";

const CampersPage = () => {
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
