import React from "react";
import { Link } from "gatsby";
import style from "./Navbar.module.scss";

export const Navbar = () => (
  <nav className={style.navigation}>
    <Link className={style.link} to={"/"}>
      Pagrindinis
    </Link>
    <Link className={style.link} to={"/blog"}>
      Blogas
    </Link>
    <Link className={style.link} to={"/podcast"}>
      Puodkastai
    </Link>
    <Link className={style.link} to={"about"}>
      Apie
    </Link>
  </nav>
);
