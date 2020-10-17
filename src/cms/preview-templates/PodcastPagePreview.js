import React from "react";
import { PodcastPostBody } from "../../templates/podcast-post";

export const PodcastPostPreview = (props) => {
  const { entry, widgetFor } = props;
  return (
    <PodcastPostBody
      title={entry.getIn(["data", "title"])}
      body={widgetFor("body")}
    />
  );
};
