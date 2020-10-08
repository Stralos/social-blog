import React from "react";
import { PodcastPostBody } from "../../templates/podcast-post";

export const PodcastPostPreview = ({ entry, widgetFor }) => {
  return (
    <PodcastPostBody
      title={entry.getIn(["data", "title"])}
      body={widgetFor("body")}
    />
  );
};
