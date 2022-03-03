import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Row, Col } from "../../components/layout/index";
import FeaturedMedia from "../../components/featured-media";
import { darken, lighten } from "polished";
import { container, mq } from "../../components/layout/new/";

const CarreraCover = ({ carrera, facultad }) => {
  const { nombre, imagenPortada, copy, duracion, creditos, duracionPasantia } =
    carrera;

  const metadata = [
    {
      name: "Créditos",
      value: creditos,
    },
    {
      name: "Duración",
      value: duracion,
    },
    {
      name: "Pasantía",
      value: duracionPasantia,
    },
  ];

  const facultyColor = facultad.color;

  return (
    <Section bgColor={facultyColor} decoBgColor={darken(0.15, facultyColor)}>
      <ContainerLayout fluid>
        <Media decoBgColor={lighten(0.15, facultyColor)}>
          <FeaturedMedia
            media={imagenPortada}
            size="56.25%"
            // sizeLG="60%"
            heightLG="100%"
            bgColor
            loading="eager"
          />
        </Media>
        <ColStyles bgColor={facultyColor}>
          <OtherSection>
            <Container>
              <Content>
                <Faculty color="#FFFFFF">{facultad?.nombre}</Faculty>
                <Title>{nombre}</Title>
                <Copy dangerouslySetInnerHTML={{ __html: copy }} />
                <RowStyles>
                  {metadata
                    .filter((item) => item.value)
                    .map((item, index) => {
                      const { name, value } = item;

                      return (
                        <Gadgets key={index}>
                          <Gadget>
                            <GadgetName>{name}</GadgetName>
                            <GadgetValue>{value}</GadgetValue>
                          </Gadget>
                        </Gadgets>
                      );
                    })}
                </RowStyles>
              </Content>
            </Container>
          </OtherSection>
        </ColStyles>
      </ContainerLayout>
    </Section>
  );
};

export default CarreraCover;

const Section = styled.section`
  ${({ bgColor = "green", decoBgColor = "green" }) => css`
    background-color: ${bgColor};
    position: relative;

    &:before {
      content: "";
      background-color: ${decoBgColor};
      width: 20%;
      padding-bottom: 20%;
      position: absolute;
      right: 0;
      top: 0;
      transform: translate(50%, -50%);
      border-radius: 50%;
      box-shadow: 0.25rem 0.25rem 0.25rem rgba(0, 0, 0, 0.15);
      z-index: 1;
    }
  `}
`;

const ContainerLayout = styled.div`
  ${container}
  padding: 0;
  display: grid;
  grid-template-columns: 100%;
  ${mq.lg} {
    grid-template-columns: 50% 50%;
  }
`;
const Container = styled.div`
  ${container}
  padding: 0;
`;

const OtherSection = styled.div`
  margin-bottom: 5.5rem;
  margin-top: 5.5rem;
  ${mq.md} {
    margin-bottom: 9.6rem;
    margin-top: 9.6rem;
  }
`;

// const sectionStyles = ({ bgColor = "green", decoBgColor = "green" }) => css`
//   background-color: ${bgColor};
//   position: relative;
//   &:before {
//     content: "";
//     background-color: ${decoBgColor};
//     width: 20%;
//     padding-bottom: 20%;
//     position: absolute;
//     right: 0;
//     top: 0;
//     transform: translate(50%, -50%);
//     border-radius: 50%;
//     box-shadow: 0.25rem 0.25rem 0.25rem rgba(0, 0, 0, 0.15);
//     z-index: 1;
//   }
// `;

const Media = styled.div`
  ${({ decoBgColor = "green" }) => css`
    position: relative;
    height: 100%;
    &:before {
      content: "";
      background-color: ${decoBgColor};
      width: 10%;
      padding-bottom: 10%;
      position: absolute;
      bottom: 0;
      left: 0;
      transform: translate(-25%, 50%);
      border-radius: 50%;
      box-shadow: 0.25rem 0.25rem 0.25rem rgba(0, 0, 0, 0.15);
      z-index: 1;
      ${mq.lg} {
        width: 20%;
        padding-bottom: 20%;
      }
    }
  `}
`;

const ColStyles = styled.div`
  background-color: ${(props) => props.bgColor};
  max-width: 54rem;
  margin: 0 auto;
  padding: 0 1.5rem;
  ${mq.md} {
    max-width: 72rem;
  }
  ${mq.lg} {
    max-width: 48rem;
    margin: initial;
  }
  ${mq.xl} {
    max-width: 58rem;
  }
`;

const Content = styled.div`
  margin: 0 auto;
  padding-bottom: 25%;
  color: white;
  position: relative;
  z-index: 2;
  ${mq.lg} {
    padding-left: 12%;
  }
`;

const Faculty = styled.h3`
  ${({ color = "white" }) => css`
    text-transform: uppercase;
    margin: 0;
    color: ${color};
    font-weight: 300;
  `}
`;

const Title = styled.h1`
  text-transform: uppercase;
  margin-top: 0;
  margin-bottom: 3rem;
  color: white;
`;

const Copy = styled.div`
  margin-bottom: 3rem;
  white-space: break-spaces;
`;

const RowStyles = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 1rem;
  flex-wrap: wrap;


`;
const Gadgets = styled.ul`
  margin: 0;
  padding: 0;
`;

const Gadget = styled.li`
  width: 15rem;
  margin: 0 auto;
  margin-bottom: 2rem;
  padding: 0;
  list-style: none;

`;

const GadgetName = styled.span`
  display: block;
  text-align: center;
  text-transform: uppercase;
`;

const GadgetValue = styled.span`
  display: block;
  padding: 0.5rem 1rem;
  border: 0.2rem solid white;
  text-align: center;
  font-weight: 900;
  font-size: 2rem;
`;
