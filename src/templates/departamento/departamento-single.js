import React from 'react'
import styled from '@emotion/styled'
import useFacultades from '../../hooks/useFacultades'
import useCarreras from '../../hooks/useCarreras'
import useGrados from '../../hooks/useGrados'
import DepartamentoCover from './departamento-cover'
import DepartamentoCarreras from './departamento-carreras'

const DepartamentoSingle = ({ departamento }) => {
  const [facultad] = useFacultades().filter(
    (facultad) => facultad?.id === departamento.facultad?.id,
  )

  //Obtiene las carreras que pertenecen al departamento
  const carreras = useCarreras().filter((carrera) =>
    departamento.carreras.map((dcareer) => dcareer?.id).includes(carrera?.id),
  )

  //Obtiene los grados de las carreras que pertenecen al departamento.
  const grados = useGrados()
    .sort((a, b) => a.order - b.order)
    .filter((grado) =>
      carreras.map((carrera) => carrera.grado?.id).includes(grado?.id),
    )

  return (
    <Article>
      <DepartamentoCover {...{ departamento, facultad }} />
      <DepartamentoCarreras {...{ facultad, carreras, grados }} />
    </Article>
  )
}

export default DepartamentoSingle

const Article = styled.article`
  margin-bottom: 20rem;
`
