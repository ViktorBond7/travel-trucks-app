import { use, useEffect } from "react";
import CamperList from "../../components/CamperList/CamperList";
import Container from "../../components/Container/Container";
import LocationInput from "../../components/LocationInput/LocationInput";
import VehicleFilters from "../../components/VehicleFilters/VehicleFilters";
import css from "./CampersPage.module.css";
import { fetchCampers } from "../../redux/campers/operations";
import { useDispatch, useSelector } from "react-redux";
import {
  incrementPage,
  selectCampers,
  selectIsError,
  selectIsLoading,
  selectPage,
  selectTotal,
} from "../../redux/campers/campersSlice";
import Loader from "../../components/Loader/Loader";

const CampersPage = () => {
  const campers = useSelector(selectCampers);
  const isLoading = useSelector(selectIsLoading);
  const page = useSelector(selectPage);
  const totalCampers = useSelector(selectTotal);
  const isError = useSelector(selectIsError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCampers({ page }));
  }, [dispatch, page]);

  const handleLoadMore = () => {
    dispatch(incrementPage());
  };

  return (
    <Container className={css.box}>
      <main className={css.catalogContainer}>
        <aside>
          <VehicleFilters />
        </aside>
        <section className={css.boxList}>
          {isError && (
            <p className={css.error}>Something went wrong, please try again</p>
          )}
          {campers ? (
            <CamperList campers={campers} />
          ) : (
            <p className={css.error}>Something went wrong, please try again</p>
          )}
          {isLoading && <Loader />}
          {!isLoading && campers.length < totalCampers && (
            <button type="submit" className={css.btn} onClick={handleLoadMore}>
              Load more
            </button>
          )}
        </section>
      </main>
    </Container>
  );
};

export default CampersPage;
