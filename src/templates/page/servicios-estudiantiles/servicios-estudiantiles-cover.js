import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { Container, Section, Row, Col } from '../../../components/layout/index'
import FeaturedMedia from '../../../components/featured-media'
import colors from '../../../components/styles/colors'
import useFiles from '../../../hooks/useFiles'

const ServiciosEstudiantilesCover = () => {
  const images = useFiles()

  const title = 'Decanato de Estudiantes',
    copy = `<p>El Decanato de Estudiantes es la instancia responsable de concebir e implementar estrategias institucionales dirigidas a viabilizar el desarrollo integral del estudiante durante su vida universitaria, sirviendo de enlace entre los/las estudiantes, los egresados y los distintos estamentos de la institución para la interacción y sana convivencia.</p>
       <p>El Decanato de Estudiantes va dirigido a toda la comunidad actual de estudiantes, así como a todos aquellos interesados en ingresar y a los egresados de las diferentes facultades académicas que componen la institución.</p>
      `,
    featuredImage = images['servicios-estudiantiles'].cover

  return (
    <Section spaceNone>
      <Container fluid>
        <Row alignCenter>
          <Col size={12} sizeMD order={2} orderMD={1}>
            <Content as="div">
              <SectionTitle> {title} </SectionTitle>
              <div dangerouslySetInnerHTML={{ __html: copy }} />
            </Content>
          </Col>
          <Col size={12} sizeMD={6} noGutters zIndex={1} order={1}>
            <MediaWrapper decoBg={colors.blue.base}>
              <Media>
                <FeaturedMedia
                  decoBg={colors.primary.base}
                  media={featuredImage}
                  size="100%"
                  sizeXL="90%"
                  bgColor
                  loading="eager"
                />
              </Media>
              <DecoContent
                decoBg={colors.blue.base}
                decoBgB={colors.blue.dark}
                decoBgC={colors.cta.base}
              />
            </MediaWrapper>
          </Col>
        </Row>
      </Container>
    </Section>
  )
}

export default ServiciosEstudiantilesCover

const Content = styled(Section)`
  max-width: 57rem;
  margin-left: auto;
  margin-right: auto;
`

const SectionTitle = styled.h1``

const Media = styled.div`
  z-index: 4;
  clip-path: ellipse(100% 100% at 100% 0%);
`

const MediaWrapper = styled.div`
  ${({ decoBg = '#4B84E9' }) => css`
    position: relative;
    &:before {
      content: '';
      position: absolute;
      right: 0;
      bottom: 0;
      width: 40%;
      padding-bottom: 20%;
      background: ${decoBg};
    }
    &:after {
      content: '';
      position: absolute;
      right: 0;
      bottom: 0;
      width: 57.5%;
      padding-bottom: 20%;
      background: ${decoBg};
      opacity: 0.2;
      z-index: -1;
    }
  `}
`
const DecoContent = styled.div`
  ${({ decoBg = '#4B84E9', decoBgB = ' #0A214F', decoBgC = '#00A4E5' }) => css`
    position: absolute;
    right: 57%;
    bottom: 18%;
    width: 21%;
    padding-bottom: 20%;
    background: ${decoBgC};
    z-index: -1;
    &:before {
      content: '';
      position: absolute;
      right: 100%;
      bottom: -40%;
      padding: 45%;
      clip-path: circle(50% at 100% 50%);
      background: ${decoBgB};
    }
    &:after {
      content: '';
      position: absolute;
      left: -51%;
      top: -10%;
      padding: 16%;
      background: ${decoBg};
      opacity: 0.3;
    }
  `}
`
