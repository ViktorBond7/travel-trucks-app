import { useOutletContext } from "react-router-dom";
import css from "./Features.module.css";
import FeaturesList from "../FeaturesList/FeaturesList";
import BookCamper from "../BookCamper/BookCamper";

const Features = () => {
  const camper = useOutletContext();

  return (
    <>
      {camper && (
        <div className={css.containerFeatures}>
          <div className={css.description}>
            <FeaturesList camper={camper} />

            <p className={css.title}>Vehicle details</p>
            <ul className={css.list}>
              <li className={css.item}>
                <span>Form:</span> <span>{camper.form}</span>
              </li>
              <li className={css.item}>
                <span>Length:</span> <span>{camper.length}</span>
              </li>
              <li className={css.item}>
                <span>Width:</span> <span>{camper.width}</span>
              </li>
              <li className={css.item}>
                <span>Height:</span> <span>{camper.height}</span>
              </li>
              <li className={css.item}>
                <span>Tank:</span> <span>{camper.tank}</span>
              </li>
              <li className={css.item}>
                <span>Consumption:</span> <span>{camper.consumption}</span>
              </li>
            </ul>
          </div>
          <div>
            <BookCamper />
          </div>
        </div>
      )}
    </>
  );
};

export default Features;
