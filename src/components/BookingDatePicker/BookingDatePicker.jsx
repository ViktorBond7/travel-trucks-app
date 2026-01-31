import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useFormikContext } from "formik";
import css from "./BookingDatePicker.module.css";
import * as Yup from "yup";

const BookingSchema = Yup.object().shape({
  bookingDate: Yup.date()
    .nullable() // Дозволяємо початковий null
    .required("Please select a date") // Текст помилки
    .min(new Date(), "Date cannot be in the past"), // Валідація на майбутній час
});

const BookingDatePicker = ({ name }) => {
  const { setFieldValue, values } = useFormikContext();

  return (
    <DatePicker
      selected={values[name]}
      onChange={(date) => setFieldValue(name, date)}
      placeholderText="Booking date*"
      dateFormat="dd.MM.yyyy"
      className={css.dateInput} // Твій клас для стилізації
      minDate={new Date()} // Не даємо вибирати минулі дати
    />
  );
};

export default BookingDatePicker;
