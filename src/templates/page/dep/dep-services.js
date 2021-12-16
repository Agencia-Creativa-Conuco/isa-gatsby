import React from 'react'
import styled from '@emotion/styled'
import { Container, Section, Row, Col } from '../../../components/layout/index'
import BackgroundImage from 'gatsby-background-image'
import { useStaticQuery, graphql } from 'gatsby'

const DEPServices = () => {
  //Obtiene las imágenes localmente desde la ruta "images/home"
  const { allFile } = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          relativeDirectory: { in: ["direccion-extension-y-proyectos"] }
        }
      ) {
        nodes {
          id
          name
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  `)

  // Convierte arreglo de imágenes en objeto cuya llave es el nómbre del archivo
  // Esto para facilitar la búsqueda de la imagenes en los componentes hijos.
  const images = allFile.nodes.reduce((obj, item) => {
    return {
      ...obj,
      [item.name]: item,
    }
  }, {})

  const title = 'Servicios Profesionales ISA',
    copy =
      'ISA ofrece una amplia cartera de servicios de asistencias técnicas, asesorías especializadas y consultorías dirigidas a los sectores empresariales y agroproductivos, con miras a fortalecer la vinculación entre ambos. A continuación, se presentan los principales servicios que ofrece la institución agrupados por segmentos:'

  return (
    <BImage
      Tag="section"
      fluid={images.servicios_profesionales?.childImageSharp?.fluid}
      id="section_3"
    >
      <BGSection as="div" spaceNone>
        <Container>
          <Row>
            <Col size={12} sizeMD={8} sizeLG={6} mlAuto>
              <Content>
                <Title>{title} </Title>
                <Copy>{copy} </Copy>
              </Content>
            </Col>
          </Row>
        </Container>
      </BGSection>
    </BImage>
  )
}

export default DEPServices

const BImage = styled(BackgroundImage)`
  overflow: hidden;
`

const BGSection = styled(Section)`
  background: rgba(0, 0, 0, 0.55);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  min-height: 45rem;
  padding-top: 5rem;
  padding-bottom: 10rem;
`

const Content = styled.div`
  padding: 3rem 0;
  text-align: right;
  position: relative;

  * {
    color: white;
  }
`

const Title = styled.h2`
  margin-bottom: 4rem;
`

const Copy = styled.p`
  margin-bottom: 4rem;
`
