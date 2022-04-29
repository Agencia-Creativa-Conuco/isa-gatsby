import React from 'react'
import styled from "@emotion/styled";
import colors from "../../../components/styles/colors";
import { container, mq } from "../../../components/layout/new/";

const CentroMipymesPhilosophy = () => {


    const Data = [
    {
            title: "MISIÓN",
            copy:"Mejorar la competitividad, productividad, y la inserción en el mercado global de las MIPYMES, mediante la implementación de programas de asesoría, capacitación, asistencia técnica y vinculación."
        },
       {
            title: "VISIÓN",
            copy:"Ser líderes nacionales en la prestación de servicios para elevar la competitividad y productividad de las MIPYMES, promoviendo la vinculación con los demás actores de la sociedad y generando impacto económico."
        },
      {
            title: "VALORES",
            copy:`
            Compromiso<br>
            Integridad<br>
            Calidad<br>
            Transparencia`
        }
    ]
  return (
    <Section fluid>
        <Container>

        {Data.map((data, index)=>(
            <Content key={index}>
            <Title>{data.title}</Title>
            <Copy dangerouslySetInnerHTML={{ __html: data.copy }}/>
        </Content>
        ))}
        </Container>
        </Section>
  )
}

export default CentroMipymesPhilosophy


const Section = styled.section`
  ${container}
  background-color:${colors.blue.dark};
  margin-bottom: 5.5rem;
  margin-top: 5.5rem;

`;

const Container = styled.div`
  ${container}

  display: grid;
  grid-template-columns: 100%;
  padding: 3rem;
  color: white;
  gap: 2rem;
  ${mq.md} {
    grid-template-columns: 1fr 1fr;
  }
  ${mq.lg} {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
const Content = styled.div``;



const Title = styled.h3`
  color: white;
  font-weight: 900;
`;


const Copy = styled.p``;
