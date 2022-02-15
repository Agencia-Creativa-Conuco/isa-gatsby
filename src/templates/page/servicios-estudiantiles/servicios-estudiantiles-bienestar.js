import React from 'react'
import styled from '@emotion/styled'
import {
  Container,
  Section,
  Row,
  Col,
  mq,
} from '../../../components/layout/index'
import FeaturedMedia from '../../../components/featured-media'
import colors from '../../../components/styles/colors'
import Cta from '../../../components/cta'
import useFiles from '../../../hooks/useFiles'

const ServiciosEstudiantilesBienestar = ({ page }) => {
  const images = useFiles()

  const title = 'Bienestar Estudiantil',
    content = `
            <p>Implementa estrategias para garantizar el bienestar y facilitar el desarrollo integral de los/las estudiantes. Este departamento, a su vez, está estructurado por diferentes unidades: Orientación e Inclusión Estudiantil, Arte, Cultura y Valores, Articulación Estudiante entorno, conformado por comités estudiantiles. </p>
        `,
    image = images['servicios-estudiantiles'].bienestar_estudiantil,
    cta = null

  return (
    <Section spaceNone zIndex={20} id="section_2">
      <Container fluid>
        <Row>
          <Col size={12} sizeMD={6} noGutters>
            <FeaturedMedia
              media={image}
              size="56.25%"
              heightMD="100%"
              bgColor
            />
          </Col>
          <Col size={12} sizeMD={6}>
            <DivTitle decoBg={colors.blue.dark}>
              <SectionTitle> {title} </SectionTitle>
              <div dangerouslySetInnerHTML={{ __html: content }} />
              {cta ? (
                <Cta to={cta.url} target={cta.target}>
                  {cta.title}
                </Cta>
              ) : null}
            </DivTitle>
          </Col>
        </Row>
      </Container>
    </Section>
  )
}

export default ServiciosEstudiantilesBienestar

const DivTitle = styled.div`
  max-width: 57rem;
  margin: 0 auto;
  padding: 1.5rem 0;
  ${mq.sm} {
    padding: 4rem 0;
  }
  ${mq.md} {
    text-align: right;
    padding: 10% 0;
  }
  &::before {
    content: '';
    position: absolute;
    padding: 2.2%;
    top: 0;
    right: 0;
    background: ${(props) => props.decoBg};
    opacity: 0.8;
  }
`

const SectionTitle = styled.h2``
