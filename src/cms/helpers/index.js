import CMS from "netlify-cms-app";
import React from "react";
import "./styleInjector.scss";

const styleInjector = (Component) => (props) => <Component {...props} />;

export const registerPreviewTemplate = (name, Component) =>
  CMS.registerPreviewTemplate(name, styleInjector(Component));


