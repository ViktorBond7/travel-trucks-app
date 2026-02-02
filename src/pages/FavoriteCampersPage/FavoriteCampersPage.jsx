import { useDispatch, useSelector } from "react-redux";

import CamperList from "../../components/CamperList/CamperList";
import { Link, Navigate } from "react-router-dom";
import css from "./FavoriteCampersPage.module.css";
import Container from "../../components/Container/Container";
import Button from "../../components/Button/Button";
import { useEffect } from "react";
import { fetchCamperByIdIds } from "../../redux/favorite/operations";
import {
  selectCampersFav,
  selectCampersFavIds,
  selectFavoriteCampers,
} from "../../redux/favorite/favoriteSlice";

const FavoriteCampersPage = () => {
  const favIds = useSelector(selectCampersFavIds);

  // const favoriteItems = useSelector(selectCampersFav);
  const favoriteItems = useSelector(selectFavoriteCampers);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCamperByIdIds(favIds));
  }, [dispatch, favIds]);

  return (
    <Container className={css.box}>
      {favoriteItems.length > 0 ? (
        <CamperList campers={favoriteItems} />
      ) : (
        <div className={css.emptyMessage}>
          <h2>Your favorites list is empty!</h2>
          <p>Go back to the catalog to find your perfect camper.</p>
          <Button to="/catalog">Go to Catalog</Button>
        </div>
      )}
    </Container>
  );
};

export default FavoriteCampersPage;
