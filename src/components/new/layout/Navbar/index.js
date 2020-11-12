import React from "react";
import { Link } from "gatsby";
import style from "./Navbar.module.scss";

export const Navbar = () => (
  <nav className={style.navigation}>
    <Link partiallyActive={style.active} className={style.link} to={"/"}>
      Pagrindinis
    </Link>
    <Link
      partiallyActive={style.active}
      activeClassName={style.active}
      className={style.link}
      to={"/blog"}
    >
      Blogas
    </Link>
    <Link
      partiallyActive={style.active}
      activeClassName={style.active}
      className={style.link}
      to={"/podcast"}
    >
      Puodkastai
    </Link>
    <Link activeClassName={style.active} className={style.link} to={"about"}>
      Apie
    </Link>
  </nav>
);
