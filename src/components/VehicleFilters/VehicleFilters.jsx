import { Field, Form, Formik } from "formik";
import css from "./VehicleFilters.module.css";
import Button from "../Button/Button";
import SvgIcon from "../SvgIcon/SvgIcon";
import { useDispatch, useSelector } from "react-redux";
import {
  resetFilters,
  selectFilters,
  setAllFilters,
} from "../../redux/filters/filtersSlice";
import { fetchCampers } from "../../redux/campers/operations";
import { prepareForNewSearch } from "../../redux/campers/campersSlice";
import { transformFiltersToParams } from "../../helpers/transformFiltersToParams.js";

const VehicleTypeRadio = ({ name, value, label, iconId }) => (
  <label className={css.filterBtn}>
    <Field type="radio" name={name} value={value} />
    <span>
      <SvgIcon id={iconId} height="32" width="32" />
      {label}
    </span>
  </label>
);

const EquipmentCheckbox = ({ name, label, iconId }) => (
  <label className={css.filterBtn}>
    <Field type="checkbox" name={name} />
    <span>
      <SvgIcon id={iconId} height="32" width="32" />
      {label}
    </span>
  </label>
);

const VehicleFilters = () => {
  const filterFromStore = useSelector(selectFilters);
  const dispatch = useDispatch();

  const valueFromStorage = Object.values(
    transformFiltersToParams(filterFromStore),
  ).slice(0, -1);

  const handleSubmit = (values) => {
    const cleanParams = transformFiltersToParams(values);

    dispatch(setAllFilters(values)); // Зберігаємо оригінальні значення для форми
    dispatch(prepareForNewSearch()); // Очищуємо стейт перед новим пошуком
    dispatch(fetchCampers({ page: 1, params: cleanParams })); // Відправляємо запит
  };

  return (
    <Formik
      initialValues={filterFromStore}
      enableReinitialize
      onSubmit={handleSubmit}
    >
      <Form>
        <label className={css.labelInput} htmlFor="location">
          Location
        </label>
        <div className={css.inputWrapper}>
          <SvgIcon id="icon-map" height="20" width="20" className={css.icon} />
          <Field
            className={css.field}
            name="location"
            placeholder="Kyiv, Ukraine"
            id="location"
          />
        </div>
        <p className={css.title}>Filters</p>
        <h3>Vehicle equipment</h3>
        <div className={css.grid}>
          <EquipmentCheckbox name="ac" label="AC" iconId="icon-ac" />
          <EquipmentCheckbox
            name="transmission"
            label="Automatic"
            iconId="icon-automatic"
          />
          <EquipmentCheckbox
            name="kitchen"
            label="Kitchen"
            iconId="icon-kitchen"
          />
          <EquipmentCheckbox name="tv" label="TV" iconId="icon-tv" />
          <EquipmentCheckbox
            name="bathroom"
            label="Bathroom"
            iconId="icon-shower"
          />
        </div>

        <h3>Vehicle type</h3>
        <div className={css.grid}>
          <VehicleTypeRadio
            name="form"
            value="van"
            label="Van"
            iconId="icon-van"
          />
          <VehicleTypeRadio
            name="form"
            value="fullyIntegrated"
            label="Fully Integrated"
            iconId="icon-fully-integrated"
          />
          <VehicleTypeRadio
            name="form"
            value="alcove"
            label="Alcove"
            iconId="icon-alcove"
          />
        </div>

        <div className={css.btnWrapper}>
          <Button type="submit">Search</Button>

          {valueFromStorage.length > 0 && (
            <Button
              onClick={() => {
                // 2. Скидаємо фільтри в Redux (це оновить і LocalStorage)
                dispatch(resetFilters());

                // 3. Очищуємо список кемперів і сторінку
                dispatch(prepareForNewSearch());

                // 4. Завантажуємо початковий список без фільтрів
                // dispatch(fetchCampers({ page: 1, params: {} }));
              }}
            >
              Reset
            </Button>
          )}
        </div>
      </Form>
    </Formik>
  );
};

export default VehicleFilters;
