import React from "react";
import { Link, graphql, StaticQuery } from "gatsby";
import Img from "gatsby-image";
import style from "./index.module.scss";
import moment from "../../../helpers/moment";
// import moment from 'moment';
import { Layout } from "../../../components/new/layout";

const BlogPostSneakPeek = ({ title, date, image, description, tags, link }) => {
  return (
    <li className={style.blogPostPeek}>
      {image && (
        <Link to={link}>
          <Img
            className={style.blogPostPeekPicture}
            fluid={image.childImageSharp.fluid}
          />
        </Link>
      )}
      <div className={style.blogPostDescription}>
        <Link to={link}>
          <div className={style.blogHeader}>{title}</div>
          <div className={style.blogPostDate}>
            {moment(date).format("YYYY MMMM DD")}
          </div>
          <div className={style.blogIntro}>{description}</div>
        </Link>
        <ol className={style.blogTags}>
          {tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ol>
      </div>
    </li>
  );
};

const BlogIndexPage = ({ blogPostList }) => {
  const tagList = [
    ...new Set(
      blogPostList
        .map(({ frontmatter }) => frontmatter.tags)
        .reduce(
          (accumulator, currentValue) => [
            ...accumulator,
            ...(currentValue || []),
          ],
          []
        )
    ),
  ];

  return (
    <Layout>
      <div className={style.container}>
        <div> blog post list</div>
        <ul className={style.tagList}>
          {tagList.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        <ul>
          {blogPostList.map(({ frontmatter, id, excerpt, tags, fields }) => {
            return (
              <BlogPostSneakPeek
                key={id}
                description={excerpt}
                title={frontmatter.title}
                date={frontmatter.date}
                image={frontmatter.featuredimage}
                tags={frontmatter.tags}
                link={fields.slug}
              />
            );
          })}
        </ul>
      </div>
    </Layout>
  );
};

const query = graphql`
  query NewBogPostList {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "podcast-post" } } }
    ) {
      nodes {
        id
        excerpt(pruneLength: 150)
        fields {
          slug
        }
        frontmatter {
          title
          date
          tags
          featuredimage {
            childImageSharp {
              fluid(maxWidth: 470, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;

export default () => (
  <StaticQuery
    query={query}
    render={(props) => (
      <BlogIndexPage blogPostList={props.allMarkdownRemark.nodes} />
    )}
  />
);
