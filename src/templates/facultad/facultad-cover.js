import React from 'react'
import styled from '@emotion/styled'
// import FeaturedMedia from '../../components/featured-media'
import colors from '../../components/styles/colors'
import {container,mq} from '../../components/layout/new/'

const FacultyCover = ({ facultad }) => {
  // const { nombre, imagenPortada, color, mision, copy } = facultad
  const { nombre, color, mision, copy } = facultad

  return (
    <Section fluid>
        <Container fluid>
      <ColStyles color={color || colors.primary.dark}>
        <Container>
          <Wrapper as="div">
            <br />
            <Title color={colors.white}> {nombre}</Title>
            <Content dangerouslySetInnerHTML={{ __html: copy }} />
            {mision ? (
              <>
                <SubTitle>Misión</SubTitle>
                <Paragraph>{mision}</Paragraph>
              </>
            ) : null}
            <br />
          </Wrapper>
          </Container>
      </ColStyles>
        </Container>
    </Section>
  );
}

export default FacultyCover


const Section = styled.section`


`;




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
    max-width: 70rem;
    margin-left: auto;
    margin-right: auto;
  }
`

const Title = styled.h1`
  color: white;
  margin-bottom: 4rem;
`

const SubTitle = styled.h2`
  color: white;
  margin-bottom: 2rem;
  margin-top: 4rem;
  text-transform: uppercase;
`

const Paragraph = styled.p`
  color: white;
`

const Content = styled.div`
  position: relative;
  color: white;
`
