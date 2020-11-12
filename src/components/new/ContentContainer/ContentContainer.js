import React from "react";
import style from "./ContainetContainer.module.scss";

export const ContentContainer = ({ children }) => (
  <div className={style.container}>{children}</div>
);
