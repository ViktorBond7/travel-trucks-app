import clsx from "clsx";
import Button from "../Button/Button";
import FeaturesList from "../FeaturesList/FeaturesList";
import MetaCamper from "../MetaCamper/MetaCamper";
import SvgIcon from "../SvgIcon/SvgIcon";
import css from "./CamperCard.module.css";
import { formatPrice } from "../../helpers/formatPrice";
import { useDispatch, useSelector } from "react-redux";
import { selectCampersFavIds } from "../../redux/favorite/favoriteSlice";

import { toggleFavorite } from "../../redux/favorite/favoriteSlice";

const CamperCard = ({ camper }) => {
  const dispatch = useDispatch();
  const favoriteIds = useSelector(selectCampersFavIds);
  const isActive = favoriteIds.includes(camper.id);

  return (
    <li className={css.camperCard}>
      <div className={css.imageWrapper}>
        <img
          className={css.image}
          src={camper.gallery[0].original}
          alt={name}
        />
      </div>

      <div className={css.info}>
        <div className={css.header}>
          <h2 className={css.name}>{name}</h2>
          <div className={css.priceWrapper}>
            <span className={css.price}>${formatPrice(camper.price)}</span>
            <button
              className={css.bookButton}
              onClick={() => dispatch(toggleFavorite(camper.id))}
            >
              <SvgIcon
                id="icon-favorite"
                width="26"
                height="26"
                className={clsx(isActive && css.iconFav)}
              />
            </button>
          </div>
        </div>
        <MetaCamper camper={{ ...camper }} />
        <p className={css.description}>{camper.description}</p>
        <FeaturesList camper={camper} className={css.marginBottom} shortList />

        <Button
          className={css.btn}
          to={`/catalog/${camper.id}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Show more
        </Button>
      </div>
    </li>
  );
};

export default CamperCard;
