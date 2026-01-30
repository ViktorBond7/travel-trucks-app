import clsx from "clsx";
import css from "./Button.module.css";
import { Link } from "react-router-dom";

const Button = ({
  children,
  to,
  type = "button",
  onClick,
  className,
  ...rest
}) => {
  // Спільні стилі для обох випадків
  const classNames = clsx(css.button, className);

  // Якщо є проп "to", повертаємо посилання
  if (to) {
    return (
      <Link to={to} className={classNames} {...rest}>
        {children}
      </Link>
    );
  }

  // В іншому випадку повертаємо звичайну кнопку
  return (
    <button type={type} onClick={onClick} className={classNames} {...rest}>
      {children}
    </button>
  );
};

export default Button;
