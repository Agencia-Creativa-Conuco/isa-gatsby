import * as React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import { css, Global } from "@emotion/react";

import Admisiones from "./page/admission/admisiones";
import Offer from "./page/offer/offer";
import About from "./page/about/about";
import FrontPage from "./home/front-page";
import Services from "./page/services/service";
import Dip from "./page/dip/dip";
import usePages from "../hooks/usePages";
import Library from "./page/library"
import PageSingle from "./page/page-single";
import colors from "../components/styles/colors";
import Contact from "../components/contact";
import RecentPosts from "../components/recent-posts";
import usePosts from "../hooks/usePosts";
import useEvents from "../hooks/useEvents";
import DEP from "./page/dep";

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

  const { slug, isFrontPage } = page;
  
  //Obtiene los datos de los Posts de las categorías seleccionadas
  const posts = usePosts().filter( post => post.categories.filter( category => page.posts.categories.map( item => item.id ).includes(category.id) ).length );

  //Obtiene los datos de los Eventos
  const events = useEvents().filter( event => event.categories.filter( category => page.events.categories.map( item => item.id ).includes( category.id ) ).length );

  return (
    <Layout>
      <Global styles={ css`${page.styles}` } />
      {
        isFrontPage? (
          <FrontPage {...{ page, posts, events }}/>
        ) : slug === 'admisiones'? (
          <Admisiones {...{ page }}/>
        ) : slug === 'oferta-academica'? (
          <Offer {...{ page }}/>
        ) : slug === 'nosotros'? (
          <About {...{ page }}/>
        ) : slug === 'servicios-estudiantiles'? (
          <Services {...{ page }}/>
        ) : slug === 'investigacion'? (
          <Dip  {...{ page }}/>
        ) : slug === 'biblioteca'?(
          <Library  {...{ page }}/>
        ):  slug === 'direccion-extension-y-proyectos'?(
          <DEP  {...{ page }}/>
        ): (
          <PageSingle {...{ page }}/>
        )
      }

      {
        !isFrontPage? (<RecentPosts {...{posts}} />) : null
      }

      <Contact data={page.contact} color={colors.primary.base} bgColor={colors.gray.light} />
      
    </Layout>
  );
};
export default Post;
