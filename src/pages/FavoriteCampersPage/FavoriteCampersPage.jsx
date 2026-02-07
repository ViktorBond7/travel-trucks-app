import { useDispatch, useSelector } from "react-redux";
import CamperList from "../../components/CamperList/CamperList";
import css from "./FavoriteCampersPage.module.css";
import Container from "../../components/Container/Container";
import Button from "../../components/Button/Button";
import { useEffect } from "react";
import { fetchCamperByIdIds } from "../../redux/favorite/operations";
import {
  selectCampersFavIds,
  selectFavoriteCampers,
  selectIsErrorFav,
  selectIsLoadingFav,
} from "../../redux/favorite/favoriteSlice";
import Loader from "../../components/Loader/Loader";

const FavoriteCampersPage = () => {
  const favIds = useSelector(selectCampersFavIds);
  const isLoading = useSelector(selectIsLoadingFav);
  const isError = useSelector(selectIsErrorFav);

  // const favoriteItems = useSelector(selectCampersFav);
  const favoriteItems = useSelector(selectFavoriteCampers);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCamperByIdIds(favIds));
  }, [dispatch, favIds]);

  return (
    <Container className={css.box}>
      {favoriteItems.length > 0 && <CamperList campers={favoriteItems} />}
      {favoriteItems.length === 0 && !isLoading && (
        <div className={css.emptyMessage}>
          <h2>Your favorites list is empty!</h2>
          <p>Go back to the catalog to find your perfect camper.</p>
          <Button to="/catalog">Go to Catalog</Button>
        </div>
      )}
      {isLoading && <Loader />}
      {isError && (
        <p className={css.error}>Something went wrong, please try again</p>
      )}
    </Container>
  );
};

export default FavoriteCampersPage;
