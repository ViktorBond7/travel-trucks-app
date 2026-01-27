import { Link } from "react-router-dom";
import SvgIcon from "../SvgIcon/SvgIcon";

const Logo = () => {
  return (
    <>
      <Link to="/">
        <SvgIcon id="logo" width="136" height="16" />
      </Link>
    </>
  );
};

export default Logo;
