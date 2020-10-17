import React from "react";
import CMS from "netlify-cms-app";
import { MDXProvider } from "@mdx-js/react";
import { DividerComponent } from "../editor/divider";
import "./styleInjector.scss";

const styleInjector = (Component) => (props) => (
  <MDXProvider components={{ Divider: DividerComponent }}>
    <Component {...props} />
  </MDXProvider>
);

export const registerPreviewTemplate = (name, Component) =>
  CMS.registerPreviewTemplate(name, styleInjector(Component));
