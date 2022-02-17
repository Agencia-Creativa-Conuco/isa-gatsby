import React from 'react'
import { css } from '@emotion/react'
import { Section } from '../../../components/layout/index'
import { useStaticQuery, graphql } from 'gatsby'

import { getHierarchicalItems } from '../../../components/inc/auxiliar'
import StyledNavigation from '../../../components/styled-navigation'

const OfertaAcademicaList = () => {
  const { menu } = useStaticQuery(graphql`
    query {
      menu: allWpMenuItem(
        filter: { locations: { in: [OFFER] } }
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
  `)

  // Solo se muestran los elementos del menu que son seleccionados como visibles en el home page
  const menuItems =
    getHierarchicalItems(menu?.nodes).map((item, index) => {
      item.id = index

      return item
    }) || []

  return menuItems.length ? (
    <Section css={sectionStyles} spaceNone id="section_1" zIndex={5}>
      <StyledNavigation items={menuItems} />
    </Section>
  ) : null
}

export default OfertaAcademicaList

const sectionStyles = css``
