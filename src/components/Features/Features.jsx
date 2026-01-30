import { useOutletContext } from "react-router-dom";
import css from "./Features.module.css";
import SvgIcon from "../SvgIcon/SvgIcon";

const featuresConfig = [
  {
    key: "transmission",
    label: (value) => (value === "automatic" ? "Automatic" : "Manual"),
    alwaysShow: true,
    idIcon: "icon-automatic",
  },
  {
    key: "engine",
    label: (value) => value,
    alwaysShow: true,
    idIcon: "icon-petrol",
  },
  { key: "AC", label: () => "AC", idIcon: "icon-ac" },
  { key: "bathroom", label: () => "Bathroom", idIcon: "icon-shower" },
  { key: "kitchen", label: () => "Kitchen", idIcon: "icon-kitchen" },
  { key: "TV", label: () => "TV", idIcon: "icon-tv" },
  { key: "radio", label: () => "Radio", idIcon: "icon-radios" },
  { key: "refrigerator", label: () => "Refrigerator", idIcon: "icon-fridge" },
  { key: "microwave", label: () => "Microwave", idIcon: "icon-microwave" },
  { key: "gas", label: () => "Gas", idIcon: "icon-gas" },
  { key: "water", label: () => "Water", idIcon: "icon-water" },
];

const Features = () => {
  const camper = useOutletContext();
  console.log("camper", camper);

  return (
    <>
      {camper && (
        <div className={css.containerFeatures}>
          <div className={css.description}>
            <ul className={css.featuresList}>
              {featuresConfig.map(({ key, label, idIcon, alwaysShow }) => {
                const value = camper?.[key];

                if (!alwaysShow && !value) return null;

                return (
                  <li key={key} className={css.featureItem}>
                    <SvgIcon
                      id={idIcon}
                      width="20"
                      height="20"
                      className={css.icon}
                    />
                    {label(value)}
                  </li>
                );
              })}
            </ul>
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
          <div></div>
        </div>
      )}
    </>
  );
};

export default Features;
