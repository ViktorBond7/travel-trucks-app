import clsx from "clsx";
import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";

const Navigation = () => {
  const buildLinkClass = ({ isActive }) =>
    clsx(css.link, isActive && css.active);

  return (
    <>
      <NavLink to="/" className={buildLinkClass}>
        Home
      </NavLink>
      <NavLink to="/catalog" className={buildLinkClass}>
        Catalog
      </NavLink>
    </>
  );
};

export default Navigation;
