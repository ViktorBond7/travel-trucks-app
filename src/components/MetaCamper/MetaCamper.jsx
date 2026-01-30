import clsx from "clsx";
import SvgIcon from "../SvgIcon/SvgIcon";
import css from "./MetaCamper.module.css";

const MetaCamper = ({ camper: { rating, reviews, location }, className }) => {
  return (
    <div className={clsx(css.meta, className)}>
      <span className={css.rating}>
        <SvgIcon
          id="icon-rating"
          width="16"
          height="16"
          className={css.iconRat}
        />
        {rating}({reviews.length} Reviews)
      </span>
      <span className={css.location}>
        <SvgIcon id="icon-map" width="16" height="16" className={css.iconRat} />
        {location}
      </span>
    </div>
  );
};
export default MetaCamper;
