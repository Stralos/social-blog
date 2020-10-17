import React from "react";
import "./styleInjector.scss";

export const styleInjector = (Component) => (props) => <Component {...props} />;
