import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { PensumIcon } from '../../components/icons'
import useRecursos from '../../hooks/useRecursos'
import { container, mq } from '../../components/layout/new/'
import colors from '../../components/styles/colors'

const CarreraPensum = ({ carrera, facultad }) => {
  const { recursos = [] } = carrera

  const pensums = useRecursos().filter((recurso) => {
    const { id, tipoRecurso } = recurso

    //verifica que el recurso esta enlazado a la carrera
    const esRecurso = recursos.filter((item) => item.id === id).length

    return tipoRecurso === 'pensum' && esRecurso
  })

  const facultyColor = facultad?.color || colors.primary.base

  return pensums.length ? (
    <Section>
      <Container>
        {pensums.map((pensum, index) => {
          const { nombre, archivo } = pensum

          return (
            <Card key={index}>
              <CardLink href={archivo} download>
                <CardContainer>
                  <CardSpan color={facultyColor}>Descargar</CardSpan>
                  <CardTitle color={facultyColor}>{nombre}</CardTitle>
                </CardContainer>
                <CardIcon color={facultyColor}>
                  <PensumIcon />
                </CardIcon>
              </CardLink>
            </Card>
          )
        })}
      </Container>
    </Section>
  ) : null
}

export default CarreraPensum

const Section = styled.div`
  margin-top: -10rem;
  margin-bottom: 5.5rem;

  ${mq.md} {
    margin-top: -15rem;
    margin-bottom: 9.6rem;
  }
`

const Container = styled.div`
  ${container}
  padding: 0;

  display: flex;
  flex-wrap: wrap;
`

const Card = styled.div`
  box-shadow: 0.5rem 0.5rem 0.5rem rgba(0, 0, 0, 0.15);
  background-color: white;
  border-radius: 1.5rem;
  max-width: 32rem;
  margin: 0 auto;
  margin-bottom: 2rem;
  position: relative;
  z-index: 2;
`

const CardLink = styled.a`
  padding: 1.5rem;
  display: block;
  text-decoration: none;
  cursor: pointer;
  color: inherit;
  display: flex;
`

const CardContainer = styled.div`
  padding: 0 1.5rem;
`
const CardTitle = styled.h3`
  ${({ color = 'green' }) => css`
    color: ${color};
    text-transform: uppercase;
    font-weight: 900;
    margin: 0;
    font-size: 2rem;
  `}
`

const CardSpan = styled.span`
  ${({ color = 'green' }) => css`
    color: ${color};
    text-transform: uppercase;
    font-weight: 300;
  `}
`

const CardIcon = styled.div`
  ${({ color = 'green' }) => css`
    max-width: 8rem;
    color: ${color};
  `}
`
