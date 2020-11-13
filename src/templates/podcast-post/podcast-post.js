import React from "react";
import { graphql, Link } from "gatsby";
import { Layout } from "~src/components/new/layout";
import moment from "~src/helpers/moment";
import style from "./podcast-post.module.scss";

export const query = graphql`
  query PodcastPostByID($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        date
        title
        podcast
      }
    }
  }
`;

export const PodcastPostBody = ({ title, podcast, date }) => {
  const podcastSource = !!podcast
    ? podcast.replace("/watch?v=", "/embed/")
    : "";
  return (
    <div className={style.container}>
      <div className={style.title}>{title}</div>
      <div className={style.date}>{moment(date).formatDefault()}</div>
      <iframe className={style.link} src={podcastSource}></iframe>
    </div>
  );
};

export default ({ data }) => {
  const { title, date, podcast } = data.mdx.frontmatter;
  return (
    <Layout>
      <PodcastPostBody title={title} date={date} podcast={podcast} />
    </Layout>
  );
};
