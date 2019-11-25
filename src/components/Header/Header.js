import React from "react";
import { NavLink } from "react-router-dom";

import style from "./Header.module.css";

const Header = () => {
  return (
    <div className={style.options}>

      <NavLink 
        exact
        activeClassName={style.isActive} 
        to="/"
        className={style.option}
      >
        Home
      </NavLink>
      <NavLink
        activeClassName={style.isActive}
        to="/about"
        className={style.option}
      >
        About
      </NavLink>
      <NavLink
        activeClassName={style.isActive}
        to="/contact"
        className={style.option}
      >
        Contact
      </NavLink>
    </div>
  );
};

export default Header;
