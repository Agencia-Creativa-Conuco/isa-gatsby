import React from 'react'
import styled from '@emotion/styled'
import { Section, Container, Row, Col } from '../../components/layout/index'
import FeaturedMedia from '../../components/featured-media'
import Link from '../../components/link'
import colors from '../../components/styles/colors'
import { css } from '@emotion/react'

const DepartamentoCarreras = ({ facultad, carreras, grados }) => {
  return grados.length ? (
    <BGSection thin bg={colors.green.base}>
      {grados.map((grado, index) => (
        <Container key={grado.id}>
          <Row>
            <Col>
              <Title color={facultad.color} main={index ? false : true}>
                Programa{carreras.length > 1 ? 's' : ''} de {grado.nombre}
              </Title>
            </Col>
          </Row>
          <Row>
            {carreras
              .filter((carrera) => carrera.grado.id === grado.id)
              .map((carrera, index) => {
                const { nombre, imagenPortada, uri } = carrera

                return (
                  <Col size={12} sizeMD={6} key={index}>
                    <StyledLink to={uri}>
                      <Card>
                        <Row>
                          <Col size="auto">
                            <CardMedia>
                              <FeaturedMedia
                                media={imagenPortada}
                                size="100%"
                                bgColor
                              />
                            </CardMedia>
                          </Col>
                          <Col>
                            <CardTitle color={colors.text.light}>
                              {nombre}
                            </CardTitle>
                          </Col>
                        </Row>
                      </Card>
                    </StyledLink>
                  </Col>
                )
              })}
          </Row>
        </Container>
      ))}
    </BGSection>
  ) : null
}

export default DepartamentoCarreras

const BGSection = styled(Section)`
  position: relative;
`

const Card = styled.div`
  padding: 1.5rem;
  background-color: #fafafa;
  transition: all 0.25s ease-in-out;
  margin: 0.5rem 0;
  border-radius: 2rem;
  &:hover {
    background-color: #f5f5f5;
  }
`

const CardMedia = styled.div`
  width: 8rem;
`

const CardTitle = styled.h3`
  color: ${(props) => props.color};
  // text-transform: uppercase;
  margin: 0;
`

const Title = styled.h2`
  ${({ color = 'inherit', main }) => css`
    text-align: center;
    margin-bottom: 4rem;
    color: ${color};
    ${main
      ? css``
      : css`
          margin-top: 10rem;
        `}
  `}
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`
