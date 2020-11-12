import React from "react";
import { graphql, Link } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";

import { DividerComponent } from "../../cms/config/editor/divider";
import { Layout } from "~src/components/new/layout";
import moment from "~src/helpers/moment";
import style from "./index.module.scss";

export const query = graphql`
  query BlogPostByID($id: String!) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        date
        title
      }
    }
  }
`;

export const BlogPostTemplate = ({ title, body, date }) => {
  return (
    <div className={style.container}>
      <div className={style.title}>{title}</div>
      <div className={style.date}>{moment(date).formatDefault()}</div>
      <div>{body}</div>
    </div>
  );
};

export default ({ data }) => {
  const { body } = data.mdx;
  const { title, date } = data.mdx.frontmatter;
  return (
    <Layout>
      <MDXProvider components={{ Divider: DividerComponent }}>
        <BlogPostTemplate
          title={title}
          body={<MDXRenderer>{body}</MDXRenderer>}
          date={date}
        />
      </MDXProvider>
    </Layout>
  );
};
