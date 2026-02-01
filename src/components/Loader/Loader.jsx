import { FadeLoader } from "react-spinners";
import css from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={css.container}>
      <FadeLoader color="#e44848" />
    </div>
  );
};

export default Loader;
