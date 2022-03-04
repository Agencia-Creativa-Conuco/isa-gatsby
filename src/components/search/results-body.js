import React from 'react'
import styled from '@emotion/styled'
// import { Container, Section, Row, Col } from '../layout/index'
import colors from '../styles/colors'
import { css } from '@emotion/react'
import useFilter from '../hooks/useFilter'
import CardBody from './card-body'
import urlSlug from 'url-slug'
import useRecursos from '../../hooks/useRecursos'
import Loading from '../loading'
import { useQueryParam, StringParam } from 'use-query-params'
import { useFlexSearch } from 'react-use-flexsearch'
import { useStaticQuery, graphql } from 'gatsby'
import { container, mq } from '../layout/new/'

const ResultsBody = (props) => {
  const searchData = useStaticQuery(graphql`
    {
      localSearchPages {
        store
        index
      }
    }
  `)

  const { index, store } = searchData.localSearchPages

  const [query] = useQueryParam('s', StringParam)

let dataQuery;
if (query !== undefined) {
  const removeAccents = (str) => {
    const regex = /([^n\u0300-\u036f]|n(?!\u0303(?![\u0300-\u036f])))[\u0300-\u036f]+/gi;
    return str.normalize("NFD").replace(regex, "$1");
  };
  dataQuery = removeAccents(query);
}

  const resultados = useFlexSearch(dataQuery, index, store)
  
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

  // resultados?.filter((current) => (hash[current.type] = current.type))

  const optionsFilter = options.filter((item) =>
    hash[item.value] ? item : null,
  )

  // Filtrando el Contenido a mostrar
  const filtros = resultados?.filter((item) =>
    item.type.includes(selectedOption?.value),
  )

  const results = filtros?.length !== 0 ? filtros : resultados

  return resultados.length ? (
    <Section>

            <h1>Resultados</h1>

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

      <Container>

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
      </Container>
    </Section>
  ) : resultados?.length !== 0 ? (
    <Loading />
  ) : (
    <Title> Sin Resultados 😔 </Title>
  )
}

export default ResultsBody



const Section = styled.section `
${container}
padding:0 ;
margin-bottom: 5.5rem;
margin-top: 5.5rem;


h1:first-of-type{
  text-align:center;
}

h3:first-of-type{
  padding:1.5rem;
}
${mq.md}{
  margin-bottom: 9.6rem;
  margin-top: 9.6rem;
}

}

`

const Container = styled.div`
/* ${container} */
display:grid;
grid-template-columns: 100%;

${mq.md}{
grid-template-columns: 50% 50%;

}


`;

const Title = styled.h1`
  margin: 5rem;
  text-align: center;
`
