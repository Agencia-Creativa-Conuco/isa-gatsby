import React from 'react'
import styled from '@emotion/styled'
import colors from '../../components/styles/colors'
import {container,mq} from '../../components/layout/new/'


const DepartamentoCover = ({ departamento, facultad }) => {
  // const { imagenPortada, nombre, copy } = departamento
  const { nombre, copy } = departamento

  return (
    <Section fluid>
        <Container fluid>
      <ColStyles color={facultad.color || colors.primary.dark}>
        <Container>
          <Wrapper>
            <br />
            <Title color={colors.white}> {nombre}</Title>
            <Content dangerouslySetInnerHTML={{ __html: copy }} />
            <br />
          </Wrapper>
          </Container>
      </ColStyles>
        </Container>
    </Section>
  )
}

export default DepartamentoCover

const Section = styled.section``;


const ColStyles = styled.div`
  background-color: ${(props) => props.color};
`

const Container = styled.div`
${container}
padding: 0;
`;

const Wrapper = styled.div`

padding: 5.5rem 1.5rem;
${mq.lg}{
  padding-bottom: 9.6rem;
  padding-top: 12.6rem;
}

  ${mq.xl} {
    max-width: 72rem;
    margin-left: auto;
    margin-right: auto;
  }
`

const Title = styled.h1`
  color: white;
  margin-bottom: 4rem;
`

const Content = styled.div`
  position: relative;
  color: white;
`
