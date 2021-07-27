import * as React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";

import Admisiones from "../components/page/admission/admisiones";
import About from "../components/page/about/about";
import Index from "../pages/index";

import usePages from "../hooks/usePages";

export const query = graphql`
  query ($id: String!) {
    allWpPage(filter: { id: { eq: $id } }) {
      nodes {
        id
      }
    }
  }
`;

// markup
const Post = ({ data }) => {
  const {
    allWpPage: { nodes: pages },
  } = data;

  const [page] = usePages().filter( page => pages.map( item => item.id).includes( page.id ) );

  const { title, slug } = page;

  return (
    <Layout>
      {
        slug === 'admisiones'? (
          <Admisiones {...{ page }}/>
        ) : slug === 'nosotros'? (
          <About {...{ page }}/>
        ) : slug === 'isa'? (
          <Index {...{ page }}/>
        ) : (
          <h1>ESTA ES LA PÁGINA:{title}</h1>
        )
      }
      
    </Layout>
  );
};
export default Post;
