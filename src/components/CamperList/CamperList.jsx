import CamperCard from "../CamperCard/CamperCard";
import css from "./CamperList.module.css";

const CamperList = ({ campers }) => {
  return (
    <ul className={css.camperList}>
      {campers.map((camper) => (
        <CamperCard key={camper.id} {...camper} />
      ))}
    </ul>
  );
};

export default CamperList;
