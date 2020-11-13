import React from "react";
import { Link, graphql, StaticQuery, navigate } from "gatsby";
import { Layout } from "~src/components/new/layout";
import { ContentContainer } from "~src/components/new/ContentContainer";
import moment from "~src/helpers/moment";
import style from "./index.module.scss";

const PodcastSneakPeak = ({ image, title, date, description, link }) => (
  <Link className={style.sneakpeak} to={link}>
    <div className={style.image}>
      <img src={image} />
    </div>
    <div>
      <div className={style.title}> {title}</div>
      <div className={style.date}> {moment(date).formatDefault()}</div>
      <div className={style.description}>{description}</div>
    </div>
  </Link>
);

const PodcastIndexPage = ({ podcastPostList }) => {
  return (
    <Layout>
      <ContentContainer>
        {podcastPostList.map(({ frontmatter, fields }) => (
          <PodcastSneakPeak
            key={frontmatter.title}
            title={frontmatter.title}
            date={frontmatter.date}
            description={frontmatter.description}
            link={fields.slug}
            image="https://www.podcastinsights.com/wp-content/uploads/2020/06/Podcast-Insights-home.png"
          />
        ))}
      </ContentContainer>
    </Layout>
  );
};

const query = graphql`
  query PodcastPostList {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "podcast-post" } } }
    ) {
      nodes {
        id
        fields {
          slug
        }
        frontmatter {
          title
          date
          description
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
      <PodcastIndexPage podcastPostList={props.allMarkdownRemark.nodes} />
    )}
  />
);
