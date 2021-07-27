import * as React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import ProjectComponent from "./project/project-single";

export const query = graphql`
  query ($id: String!) {
    allWpProject(filter: { id: { eq: $id } }) {
      nodes {
        id
        title
        content
        date
        link
        uri
        slug
        coverCopy
        images {
          alt
          caption
          description
          full_url
          height
          name
          path
          srcset
          title
          url
          width
        }
        featuredImage {
          node {
            localFile {
              childImageSharp {
                fluid(maxWidth: 1920) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`;

// markup
const Project = ({ data }) => {
  const {
    allWpProject: { nodes: projects },
  } = data;

  const [project] = projects;

  return (
    <Layout>
      <ProjectComponent {...{ project }}/>
    </Layout>
  );
};
export default Project;
