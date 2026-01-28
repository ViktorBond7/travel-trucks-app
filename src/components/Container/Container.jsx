import clsx from "clsx";
import css from "./Container.module.css";

const Container = ({ children, align = "center" }) => {
  return <div className={clsx(css.container, css[align])}>{children}</div>;
};

export default Container;
