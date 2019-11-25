import React from "react";
import { PathName } from '../../routes/PathName'
import { NavLink } from "react-router-dom";

import style from "./Header.module.css";

const Header = () => {
  return (
    <div className={style.options}>

      <NavLink 
        exact
        activeClassName={style.isActive} 
        to={PathName.HomePage}
        className={style.option}
      >
        Home
      </NavLink>
      <NavLink
        activeClassName={style.isActive}
        to={PathName.AboutPage}
        className={style.option}
      >
        About
      </NavLink>
      <NavLink
        activeClassName={style.isActive}
        to={PathName.ContactPage}
        className={style.option}
      >
        Contact
      </NavLink>
    </div>
  );
};

export default Header;
