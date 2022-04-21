import React from "react";
import styled from "@emotion/styled";
import { useStaticQuery, graphql } from "gatsby";

import { getHierarchicalItems } from "../../components/inc/auxiliar";
import StyledNavigation from "../../components/styled-navigation";

const HomeOffer = () => {
  //Consultar y optener logo.svg
  const { menu } = useStaticQuery(graphql`
    query {
      menu: allWpMenuItem(
        filter: { locations: { in: [HOME, OFFER] } }
        sort: { order: [ASC, ASC], fields: [locations, order] }
      ) {
        nodes {
          id
          locations
          parentId
          label
          description
          url
          target
          path
          order
          datosMenu {
            icono {
              id
              alt: altText
              full_url: sourceUrl
              srcset: srcSet
              ...ImageFragment
            }
            visibleInicio
            etiqueta
          }
        }
      }
    }
  `);

  // Solo se muestran los elementos del menu que son seleccionados como visibles en el home page
  const menuItems =
    getHierarchicalItems(menu?.nodes).filter(
      (item) => item.datosMenu.visibleInicio
    ) || [];

  return menuItems.length ? (
    <Section spaceNone id="section_2" indexTitle="Oferta Académica">
      <StyledNavigation items={menuItems} />
    </Section>
  ) : null;
};

export default HomeOffer;

const Section = styled.section`
  background: white;
`;
