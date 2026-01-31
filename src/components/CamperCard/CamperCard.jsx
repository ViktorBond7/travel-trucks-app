import clsx from "clsx";
import Button from "../Button/Button";
import FeaturesList from "../FeaturesList/FeaturesList";
import MetaCamper from "../MetaCamper/MetaCamper";
import SvgIcon from "../SvgIcon/SvgIcon";
import css from "./CamperCard.module.css";
import { formatPrice } from "../../helpers/formatPrice";

const CamperCard = ({
  gallery,
  name,
  price,
  rating,
  location,
  description,
  reviews,
  id,
  ...rest
}) => {
  return (
    <li className={css.camperCard}>
      <div className={css.imageWrapper}>
        <img className={css.image} src={gallery[0].original} alt={name} />
      </div>

      <div className={css.info}>
        <div className={css.header}>
          <h2 className={css.name}>{name}</h2>
          <div className={css.priceWrapper}>
            <span className={css.price}>${formatPrice(price)}</span>
            <button className={css.bookButton}>
              <SvgIcon
                id="icon-favorite"
                width="26"
                height="26"
                className={css.iconFav}
              />
            </button>
          </div>
        </div>
        <MetaCamper camper={{ rating, reviews, location }} />
        <p className={css.description}>{description}</p>
        <FeaturesList camper={rest} className={css.marginBottom} shortList />

        <Button
          className={css.btn}
          to={`/catalog/${id}`}
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
