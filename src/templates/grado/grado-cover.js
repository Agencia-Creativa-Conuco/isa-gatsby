import React from 'react';
import styled from "@emotion/styled";
import colors from '../../components/styles/colors';
import { container,mq } from '../../components/layout/new';

const GradeCover = ({ grado }) =>{

    const {
        nombre,
    } = grado;

    return (
        <Section>
        <Cover spaceNone>
          <Container>
            <Title>{nombre}</Title>
          </Container>
        </Cover>
        </Section>
    )

}

export default GradeCover;



const Section = styled.article`

`;

const Cover = styled.section`
  overflow: hidden;
  background: ${colors.primary.base};

  padding-top: 6.4rem;
  ${mq.md} {
    padding-top: 12.8rem;
  }
`;

const Container = styled.div`
  ${container}
`;
const Title = styled.h1`
    text-align: center;
    color: white;
`;