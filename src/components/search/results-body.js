import React from 'react'
import styled from '@emotion/styled'
import { Container, Section, Row, Col } from '../layout/index'
import colors from '../styles/colors'
import { css } from '@emotion/react'
import useFilter from '../hooks/useFilter'
import CardBody from './card-body'
import urlSlug from 'url-slug'
import useRecursos from '../../hooks/useRecursos'
import Loading from '../loading'

const ResultsBody = ({ props }) => {
  const { resultsSearch } = props

  const recursos = useRecursos()

  const { SelectUI, selectedOption } = useFilter()

  const options = [
    { value: 'WpPage', label: 'Páginas' },
    { value: 'WpRecurso', label: 'Recursos' },
    { value: 'WpCarrera', label: 'Carreras' },
    { value: 'WpPost', label: 'Publicaciones' },
    { value: 'WpFacultad', label: 'Facultades' },
    { value: 'WpInvestigacion', label: 'Investigaciones' },
    { value: 'WpLineaDeInvestigacion', label: 'Líneas de investigación' },
    { value: 'WpGrado', label: 'Oferta académica' },
  ]

  // Filtrando valor del select
  let hash = {}

  resultsSearch?.filter((current) => (hash[current.type] = current.type))

  const optionsFilter = options.filter((item) =>
    hash[item.value] ? item : null,
  )

  // Filtrando el Contenido a mostrar
  const filtros = resultsSearch?.filter((item) =>
    item.type.includes(selectedOption?.value),
  )

  const results = filtros?.length !== 0 ? filtros : resultsSearch

  return resultsSearch?.length ? (
    <Section>
      <Container>
        <Row>
          <Col
            size={12}
            css={css`
              text-align: center;
            `}
          >
            <h1>Resultados</h1>
          </Col>
          <Col size={12}>
            <h3>
              Total:{' '}
              <span
                css={css`
                  color: ${colors.secondary.base};
                `}
              >
                {results.length} Resultados
              </span>
            </h3>
          </Col>
          <Col size={12} sizeMD={5}>
            <SelectUI options={optionsFilter} />
          </Col>
        </Row>
        <Row>
          {results?.map((item, index) => {
            const { title, nombre, type, uri, id, slug } = item

            const uriParsed = nombre ? uri.replace(slug, urlSlug(nombre)) : uri

            const objecTypes = {
              WpPage: 'Página',
              WpRecurso: 'Recurso',
              WpDepartamento: 'Departamento',
              WpCarrera: 'Carrera',
              WpPost: 'Publicación',
              WpFacultad: 'Facultad',
              WpInvestigacion: 'Investigación',
              WpLineaDeInvestigacion: 'Línea de investigación',
              WpGrado: 'Oferta académica',
            }

            const translateTypes = objecTypes[type] || title

            //Obtener los datos del  recurso
            const [recurso] = recursos.filter((item) => {
              return item.id === id
            })

            return (
              <CardBody
                key={index}
                title={nombre || title}
                type={type}
                uri={uriParsed}
                id={id}
                translateTypes={translateTypes}
                item={recurso}
              />
            )
          })}
        </Row>
      </Container>
    </Section>
  ) : resultsSearch?.length !== 0 ? (
    <Loading />
  ) : (
    <Title> Sin Resultados 😔 </Title>
  )
}

export default ResultsBody

const Title = styled.h1`
  margin: 5rem;
  text-align: center;
`
