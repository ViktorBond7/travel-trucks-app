import { Field, Form, Formik } from "formik";
import css from "./VehicleFilters.module.css";
import Button from "../Button/Button";
import SvgIcon from "../SvgIcon/SvgIcon";

const initialState = {
  location: "",
  vehicleType: "",
  equipment: {
    ac: false,
    kitchen: false,
    automatic: false,
    tv: false,
    bathroom: false,
  },
};

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
  return (
    <Formik
      initialValues={initialState}
      enableReinitialize
      onSubmit={(values) => {
        console.log("Vehicle Filters Submitted", values);
      }}
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
          <EquipmentCheckbox name="equipment.ac" label="AC" iconId="icon-ac" />
          <EquipmentCheckbox
            name="equipment.automatic"
            label="Automatic"
            iconId="icon-automatic"
          />
          <EquipmentCheckbox
            name="equipment.kitchen"
            label="Kitchen"
            iconId="icon-kitchen"
          />
          <EquipmentCheckbox name="equipment.tv" label="TV" iconId="icon-tv" />
          <EquipmentCheckbox
            name="equipment.bathroom"
            label="Bathroom"
            iconId="icon-shower"
          />
        </div>

        <h3>Vehicle type</h3>
        <div className={css.grid}>
          <VehicleTypeRadio
            name="vehicleType"
            value="van"
            label="Van"
            iconId="icon-van"
          />
          <VehicleTypeRadio
            name="vehicleType"
            value="fullyIntegrated"
            label="Fully Integrated"
            iconId="icon-fully-integrated"
          />
          <VehicleTypeRadio
            name="vehicleType"
            value="alcove"
            label="Alcove"
            iconId="icon-alcove"
          />
        </div>
        <Button type="submit" className={css.btn}>
          Search
        </Button>
      </Form>
    </Formik>
  );
};

export default VehicleFilters;
