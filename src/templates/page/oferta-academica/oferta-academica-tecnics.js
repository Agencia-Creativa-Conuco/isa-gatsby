import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { Container, Section, Row, Col } from '../../../components/layout/index'
import FeaturedMedia from '../../../components/featured-media'
import colors from '../../../components/styles/colors'
import Cta from '../../../components/cta'
import useFiles from '../../../hooks/useFiles'

const OfferTecnics = () => {
  const images = useFiles()['oferta-academica']

  const title = 'Centro de Educación Técnica Huáscar Rodríguez Herrera',
    content = `
            <p>El Centro Huáscar Rodríguez tiene la finalidad de potenciar el dinamismo y crecimiento socio-económico nacional, a través de las capacitaciones técnicas de recursos humanos en los sectores más productivos del país, como son: Sector Construcción, Sector Empresarial y Sector Agropecuario.</p>
            <p>Desde nuestro Centro de Educación Técnica, apoyamos al personal que se dedica a ofrecer estos servicios, para que obtenga la debida certificación que los acredite como entes capacitados en sus respectivas áreas.</p>
        `

  return (
    <StyledSection
      spaceNone
      css={css`
        background: ${colors.gray.light};
      `}
      id="section_2"
    >
      <Container fluid>
        <Row>
          <Col size={12} sizeLG={6} order={2} orderMD={1}>
            <DivTitle decoBg={colors.blue.base}>
              <SectionTitle decoBg={colors.blue.base}>{title}</SectionTitle>
              <div dangerouslySetInnerHTML={{ __html: content }} />
              <Cta to="/centro-de-educacion-tecnica-huascar-rodriguez-herrera">
                Conocer más
              </Cta>
            </DivTitle>
            <DecoCol decoBg={colors.blue.base} />
          </Col>
          <Col size={12} sizeLG={6} order={1} orderMD={2} noGutters>
            <FeaturedMedia
              media={images.centro_huascar}
              alt={title}
              size="56.26%"
              heightMD="100%"
              bgColor
            />
          </Col>
        </Row>
      </Container>
    </StyledSection>
  )
}

export default OfferTecnics

const StyledSection = styled(Section)`
  position: relative;
  z-index: 2;
`

const DivTitle = styled.div`
  max-width: 57rem;
  margin: 10% auto;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    background-color: ${(props) => props.decoBg};
    padding: 3%;
    left: 0;
    opacity: 0.8;
    transform: translate(2rem, 2rem);
  }
`

const SectionTitle = styled.h2`
  margin-bottom: 4rem;
`

const DecoCol = styled.div`
  position: absolute;
  background-color: ${(props) => props.decoBg};
  width: 15%;
  padding-bottom: 15%;
  right: 0;
  bottom: 0;
  opacity: 80%;
  transform: translate(25%, 0);
  z-index: 0;
  &:after {
    content: '';
    position: absolute;
    background-color: ${(props) => props.decoBg};
    width: 40%;
    padding-bottom: 40%;
    top: 0;
    left: 0;
    opacity: 40%;
    transform: translate(-50%, -50%);
    z-index: 1;
  }
`
