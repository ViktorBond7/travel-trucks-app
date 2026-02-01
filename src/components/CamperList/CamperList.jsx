import Button from "../Button/Button";
import CamperCard from "../CamperCard/CamperCard";
import css from "./CamperList.module.css";

const CamperList = ({ campers }) => {
  return (
    <ul className={css.camperList}>
      {campers.map((camper) => (
        <CamperCard key={camper.id} camper={camper} />
      ))}
    </ul>
  );
};

export default CamperList;
