const _ = require("lodash");
const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");
const { fmImagesToRelative } = require("gatsby-remark-relative-images");

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return graphql(`
    fragment Post on Mdx {
      id
      slug
    }
    query {
      podcastPosts: allMdx(
        filter: { frontmatter: { templateKey: { eq: "podcast-post" } } }
      ) {
        nodes {
          ...Post
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      result.errors.forEach((e) => console.error(e.toString()));
      return Promise.reject(result.errors);
    }
    const { data } = result;
    data.podcastPosts.nodes.forEach((node) =>
      createPage({
        path: node.slug,
        component: path.resolve(`src/templates/podcast-post/podcast-post.js`),
        context: {
          id: node.id,
        },
      })
    );
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  fmImagesToRelative(node); // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "~src": path.resolve(__dirname, "src"),
      },
    },
  });
};
