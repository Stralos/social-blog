import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";

export const query = graphql`
  query PodcastPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
      }
    }
  }
`;

const PodcastPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <div>Hello world from podcast.</div>
    </Layout>
  );
};

export default PodcastPost;
