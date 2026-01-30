import Button from "../Button/Button";
import MetaCamper from "../MetaCamper/MetaCamper";
import SvgIcon from "../SvgIcon/SvgIcon";
import css from "./CamperCard.module.css";

const CamperCard = ({
  gallery,
  name,
  price,
  rating,
  location,
  description,
  reviews,
  id,
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
            <span className={css.price}>${price}</span>
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
        <ul className={css.categories}>
          <li className={css.categoriesItem}>
            <SvgIcon id="icon-automatic" width="20" height="20" /> Automatic
          </li>
          <li className={css.categoriesItem}>
            <SvgIcon id="icon-petrol" width="20" height="20" />
            Petrol
          </li>
          <li className={css.categoriesItem}>
            <SvgIcon id="icon-kitchen" width="20" height="20" />
            Kitchen
          </li>
          <li className={css.categoriesItem}>
            <SvgIcon id="icon-ac" width="20" height="20" />
            AC
          </li>
        </ul>
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
