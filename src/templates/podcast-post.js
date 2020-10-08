import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";

export const query = graphql`
  query PodcastPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;

export const PodcastPostBody = ({ title, body }) => {
  return (
    <div>
      <div>Hello world from podcast named: {`${title}`}.</div>
      <div>{body}</div>
    </div>
  );
};

export default ({ data }) => {
  const { html } = data.markdownRemark;
  const { title } = data.markdownRemark.frontmatter;
  return (
    <Layout>
      <PodcastPostBody
        title={title}
        body={<div dangerouslySetInnerHTML={{ __html: html }} />}
      />
    </Layout>
  );
}

