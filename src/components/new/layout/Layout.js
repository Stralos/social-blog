import React from "react";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import style from "./Layout.module.scss";

export const Layout = ({ hideNavBar, children }) => {
  return (
    <div className={style.container}>
      <div>
        {!hideNavBar && (
          <div className={style.widthLimit}>
            <Navbar />
          </div>
        )}
        <div className={style.name}>Abipus</div>
        <div className={style.widthLimit}>{children}</div>
      </div>
      <Footer />
    </div>
  );
};
