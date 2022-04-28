import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import FeaturedMedia from '../../components/featured-media'
import { container, mq } from '../../components/layout/new/'
import colors from '../../components/styles/colors'

const CarreraPerfil = ({ carrera, facultad }) => {
  const {
    imagenPerfilEgresado,
    contenidoPerfilEgresado,
    tituloPerfilEgresado = 'Perfil del egresado',
  } = carrera

  const facultyColor = facultad?.color || colors.primary.base

  return (
    <Section>
      <Container>
        <Media decoBgColor={facultyColor}>
          <FeaturedMedia
            media={imagenPerfilEgresado?.localFile}
            size="140%"
            bgColor
          />
        </Media>

        <Content>
          <Title color={facultyColor}>{tituloPerfilEgresado}</Title>
          <Description
            dangerouslySetInnerHTML={{ __html: contenidoPerfilEgresado }}
          />
        </Content>
      </Container>
    </Section>
  )
}

export default CarreraPerfil

const Section = styled.div`
  margin-bottom: 5.5rem;
  margin-top: 5.5rem;
  ${mq.md} {
    margin-bottom: 9.6rem;
    margin-top: 9.6rem;
  }
`

const Container = styled.div`
  ${container}
  padding: 0;

  display: grid;
  grid-template-columns: 100%;

  ${mq.lg} {
    grid-template-columns: 51% 49%;
  }
`
const Media = styled.div`
  ${({ decoBgColor = 'green' }) => css`
    width: 100%;
    position: relative;
    max-width: 40rem;
    height: fit-content;
    margin: 0 auto;
    padding: 0 1.5rem;
    margin-top: -25%;
    ${mq.lg} {
      max-width: 75%;
      order: 2;
    }
    &:before {
      content: '';
      background-color: ${decoBgColor};
      width: 15%;
      padding-bottom: 15%;
      position: absolute;
      bottom: 0;
      right: 0;
      transform: translate(50%, 50%);
      box-shadow: 0.25rem 0.25rem 0.25rem rgba(0, 0, 0, 0.15);
      z-index: 1;
    }
  `}
`

const Content = styled.div`
  margin: 0 auto;
  padding: 4rem 1.5rem;
  position: relative;
  z-index: 2;
`

const Title = styled.h2`
  ${({ color = 'green' }) => css`
    color: ${color};
    text-transform: uppercase;
    margin-top: 0;
    margin-bottom: 3rem;
  `}
`

const Description = styled.div``
