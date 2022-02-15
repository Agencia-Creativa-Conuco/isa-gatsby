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

const ServiciosEstudiantilesPsicologia = () => {
  const images = useFiles()

  const title = 'Orientación e Inclusión Estudiantil',
    content = `
            <p>Orientación e inclusión estudiantil es un servicio orientado a propiciar el bienestar estudiantil y potenciar, en todas sus dimensiones, el desarrollo integral del estudiante mediante los servicios de orientación académica, personal, social y profesional.</p>
            <p>Su objetivo principal es valorar y propugnar por el desarrollo integral de los estudiantes, aportándole la asesoría y respaldo en su proceso de formación académica, personal y social, contribuyendo a la formación de agentes autónomos que se integrarán a la sociedad.</p>
            <p>
            <b> Horario de Asistencia </b>
              <br/></br>
              <b> Lunes a Viernes.  </b> <br/>
              8:00 a.m.-12:00 m. / 1:00 a 5:00 p.m.
              <br/>
             <b> Contactos </b>
              <br/>
              Tel: 809.247.2000 <br/>
              Edificio Kellogg, 2do. Nivel. Universidad ISA.             
            </p>
        `,
    image = images['servicios-estudiantiles'].orientacion_estudiantil,
    cta = null

  return (
    <Section spaceNone zIndex={2} id="section_3">
      <Container fluid>
        <Row>
          <Col size={12} sizeMD={6} noGutters orderMD={2}>
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

export default ServiciosEstudiantilesPsicologia

const DivTitle = styled.div`
  max-width: 57rem;
  margin: 0 auto;
  padding: 1.5rem 0;
  ${mq.sm} {
    padding: 4rem 0;
  }
  ${mq.md} {
    padding: 10% 0;
  }
  &::before {
    content: '';
    position: absolute;
    padding: 2.2%;
    bottom: 0;
    left: 0;
    background: ${(props) => props.decoBg};
    opacity: 0.8;
  }
`

const SectionTitle = styled.h2``
