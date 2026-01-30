import { NavLink, Outlet } from "react-router-dom";
import { formatPrice } from "../../helpers/formatPrice";
import Container from "../Container/Container";
import MetaCamper from "../MetaCamper/MetaCamper";
import css from "./DetailsCamper.module.css";
import clsx from "clsx";

const DetailsCamper = ({
  camper: { name, rating, location, price, description, reviews, gallery },
}) => {
  const buildLink = ({ isActive }) =>
    clsx(css.btnOutlet, isActive && css.active);

  return (
    <div className={css.detailsCamper}>
      <h2 className={css.camperName}>{name}</h2>
      <MetaCamper
        camper={{ rating, reviews, location }}
        className={css.metaCastom}
      />

      <p className={css.price}>€{formatPrice(price)}</p>
      <ul className={css.gallery}>
        {gallery.map((img, i) => (
          <li className={css.galleryItem} key={i}>
            <img
              className={css.galleryImage}
              src={img.original}
              alt={img.name}
            />
          </li>
        ))}
      </ul>
      <p className={css.description}>{description}</p>
      <div className={css.buttonWrapper}>
        <NavLink className={buildLink} to="features">
          Features
        </NavLink>
        <NavLink className={buildLink} to="reviews">
          Reviews
        </NavLink>
      </div>
    </div>
  );
};

export default DetailsCamper;
