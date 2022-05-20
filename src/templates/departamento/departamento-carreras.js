import React from 'react'
import styled from '@emotion/styled'
import FeaturedMedia from '../../components/featured-media'
import Link from '../../components/link'
import colors from '../../components/styles/colors'
import { css } from '@emotion/react'
import { container, mq } from '../../components/layout/new/'

const DepartamentoCarreras = ({ facultad, carreras, grados }) => {
  return grados.length ? (
    <Section thin bg={colors.green.base}>
      <Title color={facultad?.color}>Programas académicos</Title>

      {grados.map((grado) => (
        <ContainerRow key={grado.id}>
          <SubTitle color={facultad?.color}>{grado.nombre}</SubTitle>

          <Container>
            {carreras
              .filter((carrera) => carrera.grado.id === grado.id)
              .map((carrera, index) => {
                const { nombre, imagenPortada, uri } = carrera

                return (
                  <StyledLink to={uri} key={index}>
                    <Card>
                      <CardMedia>
                        <FeaturedMedia
                          media={imagenPortada}
                          size="100%"
                          bgColor
                        />
                      </CardMedia>
                      <CardTitle>{nombre}</CardTitle>
                    </Card>
                  </StyledLink>
                )
              })}
          </Container>
        </ContainerRow>
      ))}
    </Section>
  ) : null
}

export default DepartamentoCarreras

const Section = styled.section`
  position: relative;
  ${container}
`
const Container = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-column-gap: 3rem;
  justify-content: center;

  ${mq.md} {
    grid-template-columns: 50% 50%;
  }
`

const ContainerRow = styled.div`
  margin-bottom: 6rem;
`

const Card = styled.div`
  padding: 1.5rem;
  background-color: #fafafa;
  transition: all 0.25s ease-in-out;
  margin: 0.5rem 0;
  border-radius: 2rem;
  display: flex;
  gap: 1rem;
  &:hover {
    background-color: #f5f5f5;
  }
`

const CardMedia = styled.div`
  width: 8rem;
`

const CardTitle = styled.h3`
  color: ${colors.text.light};

  padding: auto 1.5rem;
  margin: 0;
  ${mq.md}{
  width: 50%;
    
  }
  ${mq.lg}{
  width: 100%;
    
`

const Title = styled.h2`
  ${({ color = 'inherit', main }) => css`
    text-align: center;
    margin-bottom: 4rem;
    color: ${color};
    font-weight: 900;
    margin-top: 10rem;
  `}
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`
const SubTitle = styled.h3`
  ${({ color = 'inherit' }) => css`
    /* text-align: center; */
    margin-bottom: 2rem;
    padding-left: 1.5rem;
    color: ${color};
    text-transform: uppercase;
  `}
`
