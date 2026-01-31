import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./BookCamper.module.css";
import Button from "../Button/Button";
import BookingDatePicker from "../BookingDatePicker/BookingDatePicker";
import { ToastContainer, toast } from "react-toastify";

// Схема валідації
const BookingSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  bookingDate: Yup.date().required("Date is required"),
  comment: Yup.string(),
});

const BookCamper = () => {
  return (
    <div className={css.container}>
      <h2>Book your campervan now</h2>
      <p>Stay connected! We are always ready to help you.</p>
      <Formik
        initialValues={{ name: "", email: "", bookingDate: "", comment: "" }}
        validationSchema={BookingSchema}
        onSubmit={(values, { resetForm }) => {
          toast.success("Successfully booked");
          console.log(values);
          resetForm();
        }}
      >
        <Form className={css.form}>
          <Field name="name" placeholder="Name*" className={css.input} />
          <ErrorMessage name="name" component="div" className={css.error} />

          <Field
            name="email"
            type="email"
            placeholder="Email*"
            className={css.input}
          />
          <ErrorMessage name="email" component="div" className={css.error} />

          <BookingDatePicker name="bookingDate" />
          <ErrorMessage
            name="bookingDate"
            component="div"
            className={css.error}
          />

          <Field
            name="comment"
            as="textarea"
            placeholder="Comment"
            className={css.textarea}
          />
          <Button type="submit" className={css.btn}>
            Send
          </Button>
        </Form>
      </Formik>
      <ToastContainer />
    </div>
  );
};

export default BookCamper;
