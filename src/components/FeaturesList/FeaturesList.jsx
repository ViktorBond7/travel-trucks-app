import clsx from "clsx";
import { featuresConfig } from "../../helpers/featuresConfig";
import SvgIcon from "../SvgIcon/SvgIcon";
import css from "./FeaturesList.module.css";

const MAX_ITEMS = 7;

const FeaturesList = ({ camper, className, shortList = false }) => {
  // сначала фильтруем доступные фичи
  const visibleList = featuresConfig.filter(
    ({ key, alwaysShow }) => alwaysShow || camper[key],
  );
  // если shortList — обрезаем
  const listToRender = shortList
    ? visibleList.slice(0, MAX_ITEMS)
    : visibleList;

  return (
    <ul className={clsx(css.featuresList, className)}>
      {listToRender.map(({ key, label, idIcon, alwaysShow }) => {
        const value = camper?.[key];

        if (!alwaysShow && !value) return null;

        return (
          <li key={key} className={css.featureItem}>
            <SvgIcon id={idIcon} width="20" height="20" className={css.icon} />
            {label(value)}
          </li>
        );
      })}
      {shortList && visibleList.length > MAX_ITEMS && (
        <li className={css.featureItemEnd}>…</li>
      )}
    </ul>
  );
};

export default FeaturesList;
