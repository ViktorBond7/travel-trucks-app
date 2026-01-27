import css from "./Button.module.css";

const Button = ({ children, onClick, type = "button" }) => {
  return (
    <button className={css.button} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
