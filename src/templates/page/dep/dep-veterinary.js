import React from "react";
import styled from "@emotion/styled";
import FeaturedMedia from "../../../components/featured-media";
import colors from "../../../components/styles/colors";
import useFiles from "../../../hooks/useFiles";
import { container, mq } from "../../../components/layout/new";



const DEPVeterinary = ({ page }) => {
  const images = useFiles();

  const title = "Clínica Veterinaria",
    copy =
      "La Clínica Veterinaria está preparada para ofrecerle a nuestros clientes los mejores servicios en cuanto a la salud de sus animales, tanto en el ámbito preventivo como curativo y en el aspecto docente ofrece a los estudiantes la oportunidad de poder conocer, diagnosticar, tratar y sobre todo prevenir las principales patologías que afectan a nuestros animales de compañía.",
    list = [
      {
        title: "Servicios",
        items: [
          { content: "Consulta" },
          { content: "Cirugía" },
          { content: "Vacunaciones" },
        ],
      },
      {
        title: "Diagnósticos",
        items: [
          { content: "Parasitología" },
          { content: "Rayos X" },
          { content: "Ecografía" },
          { content: "Biopsia" },
          { content: "Necropsia" },
        ],
      },
    ],
    image = images["direccion-extension-y-proyectos"].clinica_veterinaria;

  return (
    <Section id="section_7">
      <Container>
        <SpecialCol>
          <Media media={image} size="125%" sizeMD="145%" sizeLG="125%" />
        </SpecialCol>

        <Content>
          <Title> {title} </Title>
          <Copy> {copy} </Copy>
          <WrapperCotainer>
            {list.map((item, index) => {
              return (
                //Cambio de color base
                <div key={index}>
                  <ItemTitle> {item.title} </ItemTitle>
                  {item.items.map((item, index) => {
                    return (
                      <ServiceCopy key={index}> {item.content} </ServiceCopy>
                    );
                  })}
                </div>
              );
            })}
          </WrapperCotainer>
        </Content>
      </Container>
    </Section>
  );
};

export default DEPVeterinary;

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
  box-shadow: silver 0 0 10px;
  border-radius: 20px;
  margin-top: 15rem;

  ${mq.md} {
    grid-template-columns: 50% 50%;
    div:first-of-type {
      order: 2;
    }
  }
  ${mq.lg} {
    grid-template-columns: 60% 40%;
  }
`;

const WrapperCotainer = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
`;

const Content = styled.div`
  color: ${colors.blue.dark};
  padding: 10%;
  padding-bottom: 10%;

  ${mq.lg} {
    padding: 4rem;
  }
`;

const Title = styled.h2`
  margin-top: 0;
  margin-bottom: 3rem;
`;

const Copy = styled.p``;

const ItemTitle = styled.h3`
  color: ${colors.blue.dark};
  margin-top: 0;
  ${mq.lg} {
    margin-top: 1rem;
  }
`;

const ServiceCopy = styled.div`
  color: ${colors.gray.base};
`;

const SpecialCol = styled.div`
  position: relative;
  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    right: 0;
    top: 0;
    background-color: ${colors.blue.light};
    ${mq.md} {
      width: 100%;
      border-radius: 0px 20px 20px 0px;
    }
  }
  &:after {
    content: "";
    position: absolute;
    padding: 9.5%;
    right: 5%;
    top: 0%;
    transform: translate(0, -50%);
    background: ${colors.blue.dark};
    clip-path: circle(50% at 50% 50%);
    z-index: 1;
  }
`;

const Media = styled(FeaturedMedia)`
  margin-top: -10%;

  ${mq.md} {
    margin-top: 0;
  }
  ${mq.lg} {
    margin-top: -10%;
  }
`;
