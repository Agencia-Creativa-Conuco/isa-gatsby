import * as React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";

import Admisiones from "./page/admission/admisiones";
import Offer from "./page/offer/offer";
import About from "./page/about/about";
import FrontPage from "./home/front-page";
import Services from "./page/services/service";
import DIP from "./page/dip";
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

  const { title, slug, isFrontPage } = page;

  return (
    <Layout>
      {
        isFrontPage? (
          <FrontPage {...{ page }}/>
        ) : slug === 'admisiones'? (
          <Admisiones {...{ page }}/>
        ) : slug === 'oferta-academica'? (
          <Offer {...{ page }}/>
        ) : slug === 'nosotros'? (
          <About {...{ page }}/>
        ) : slug === 'servicios-estudiantiles'? (
          <Services {...{ page }}/>
        ) : slug === 'investigacion'? (
          <DIP  {...{ page }}/>
        ) : (
          <h1>ESTA ES LA PÁGINA:{title}</h1>
        )
      }
      
    </Layout>
  );
};
export default Post;
