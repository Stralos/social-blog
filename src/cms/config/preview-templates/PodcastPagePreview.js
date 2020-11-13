import React from "react";
import { PodcastPostBody } from "~src/templates/podcast-post/podcast-post";
import "~src/templates/podcast-post/podcast-post.module.scss";

export const PodcastPostPreview = (props) => {
  const { entry, widgetFor } = props;
  return (
    <PodcastPostBody
      title={entry.getIn(["data", "title"])}
      podcast={entry.getIn(["data", "podcast"])}
      date={widgetFor("date")}
    />
  );
};
