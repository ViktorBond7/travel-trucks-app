import { useSelector } from "react-redux";
import { selectFavoriteCampers } from "../../redux/campers/campersSlice";

import CamperList from "../../components/CamperList/CamperList";
import { Link, Navigate } from "react-router-dom";
import css from "./FavoriteCampersPage.module.css";
import Container from "../../components/Container/Container";
import Button from "../../components/Button/Button";

const FavoriteCampersPage = () => {
  const favoriteCampers = useSelector(selectFavoriteCampers);
  console.log(favoriteCampers);

  return (
    <Container className={css.box}>
      {favoriteCampers.length > 0 ? (
        <CamperList campers={favoriteCampers} />
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
