import React from "react";
import { graphql, Link } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";

import { DividerComponent } from "../cms/config/editor/divider";
import Layout from "../components/Layout";

export const query = graphql`
  query PodcastPostByID($id: String!) {
    mdx(id: { eq: $id }) {
      body
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
  const { body } = data.mdx;
  const { title } = data.mdx.frontmatter;
  return (
    <Layout>
      <MDXProvider components={{ Divider: DividerComponent }}>
        <PodcastPostBody
          title={title}
          body={<MDXRenderer>{body}</MDXRenderer>}
        />
      </MDXProvider>
    </Layout>
  );
};
