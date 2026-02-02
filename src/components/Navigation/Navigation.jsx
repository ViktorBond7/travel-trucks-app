import clsx from "clsx";
import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import { useSelector } from "react-redux";

import { selectCampersFavIds } from "../../redux/favorite/favoriteSlice";

const Navigation = () => {
  const buildLinkClass = ({ isActive }) =>
    clsx(css.link, isActive && css.active);

  const favoriteIds = useSelector(selectCampersFavIds);

  return (
    <>
      <NavLink to="/" className={buildLinkClass}>
        Home
      </NavLink>
      <NavLink to="/catalog" className={buildLinkClass}>
        Catalog
      </NavLink>
      {favoriteIds.length > 0 && (
        <NavLink to="/favorite" className={buildLinkClass}>
          Favorite
        </NavLink>
      )}
    </>
  );
};

export default Navigation;
