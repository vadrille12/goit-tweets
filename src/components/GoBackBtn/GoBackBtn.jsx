import { Link } from "react-router-dom";
import { BsArrowLeftSquareFill } from "react-icons/bs";

import css from "./GoBackBtn.module.css";

export const GoBackButton = ({ to, children }) => {
  return (
    <Link className={css.link} to={to}>
      <BsArrowLeftSquareFill />
      {children}
    </Link>
  );
};
