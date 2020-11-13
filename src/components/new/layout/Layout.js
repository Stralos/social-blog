import React, { Fragment } from "react";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import style from "./Layout.module.scss";

export const Layout = ({ hideNavBar, children, noMargin }) => {
  const widLimit = noMargin ? null : style.widthLimit;

  return (
    <div className={style.container}>
      <div>
        {!hideNavBar && (
          <Fragment>
            <div className={widLimit}>
              <Navbar />
            </div>
            <div className={style.name}>Abipus</div>
          </Fragment>
        )}
        <div className={[widLimit, style.content].join("")}>{children}</div>
      </div>
      <Footer />
    </div>
  );
};
