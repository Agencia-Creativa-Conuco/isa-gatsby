import React from "react";
import styled from "@emotion/styled";
import FeaturedMedia from "../../../components/featured-media";
import colors from "../../../components/styles/colors";
import Cta from "../../../components/cta";
import useFiles from "../../../hooks/useFiles";
import { container, mq } from "../../../components/layout/new";

const DEPCede = () => {
  const images = useFiles();

  const title =
      "Centro De Emprendimiento y Desarrollo Empresarial De La Universidad ISA (CEDE)",
    copy =
      "Es un centro dedicado a promover el desarrollo de una cultura de innovación tecnológica y la creación de una mentalidad empresarial entre los estudiantes, académicos y los grupos de interés vinculados a la Universidad, mediante un acompañamiento de un asesor de emprendimiento, para que los mismos puedan desarrollar su idea de negocios y plasmarlo en un plan, que posteriormente le permita poder acceder a fuentes de financiamiento y participar en competencias de emprendimiento e innovación.",
    image = images["direccion-extension-y-proyectos"].cede,
    cta = null;

  return (
    <Section id="section_6">
      <Container>
        <Media>
          <FeaturedMedia
            media={image}
            // size="56.25%"
            zIndex="2"
          />
        </Media>

        <Content>
          <Title color={colors.white}> {title} </Title>
          <Copy> {copy} </Copy>
          {cta ? (
            <Cta to={cta.url} target={cta.target}>
              {cta.title}
            </Cta>
          ) : null}
        </Content>
      </Container>
    </Section>
  );
};

export default DEPCede;

const Section = styled.section`
  margin-bottom: 5.5rem;
  ${mq.md} {
    margin-bottom: 9.6rem;
  }

`;

const Container = styled.div`
  ${container}
  padding: 0;
  display: grid;
  grid-template-columns: 100%;
  ${mq.lg} {
    grid-template-columns: 50% 50%;
  }
`;

const Title = styled.h2`
  color: inherit;
`;

const Content = styled.div`
  background-color: ${colors.blue.dark};
  color: white;
  padding: 0 1.5rem 2rem 1.5rem;
  ${mq.md} {
    padding-top: 3rem;
    padding-bottom: 4rem;
    padding-left: 3rem;
    padding-right: 3rem;
  }
`;

const Copy = styled.p``;

const Media = styled.div`
  padding: 10%;
`;
