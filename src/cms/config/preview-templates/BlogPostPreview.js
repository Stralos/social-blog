import React from "react";
import { BlogPostTemplate } from "~src/templates/blog-post";

export const BlogPostPreview = ({ entry, widgetFor }) => {
  return (
    <BlogPostTemplate
      title={entry.getIn(["data", "title"])}
      body={widgetFor("body")}
      date={widgetFor("date")}
    />
  );
};
