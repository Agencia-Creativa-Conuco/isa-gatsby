import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import Link from "../../components/link";
import colors from "../../components/styles/colors";
import useCarreras from "../../hooks/useCarreras";
import useFacultades from "../../hooks/useFacultades";
import useDepartamentos from "../../hooks/useDepartamentos";
import { container, mq } from "../../components/layout/new";

const GradeOffer = ({ grado }) => {
  const carreras = useCarreras().filter((carrera) => {
    return grado.id === carrera.grado.id;
  });

  const facultades = useFacultades().filter((facultad) => {
    return facultad.carreras.filter((carrera) =>
      carreras.map((item) => item.id).includes(carrera.id)
    ).length;
  });

  const departamentos = useDepartamentos().filter((departamento) => {
    return departamento.carreras.filter((carrera) =>
      carreras.map((item) => item.id).includes(carrera.id)
    ).length;
  });

  return carreras.length ? (
    <Section>
      <SectionTitle>Oferta Académica</SectionTitle>

      {facultades.map((facultad) => {
        return (
          <div
            key={facultad.id}
            css={css`
              margin-bottom: 4rem;
            `}
          >
            <Link to={facultad.uri}>
              <Title
                color={colors.primary.dark}
                bgHover={colors.gray.light}
                isFaculty
              >
                {facultad.nombre}
              </Title>
            </Link>
            <Container>
              {carreras
                .filter((carrera) => {
                  return (
                    !carrera?.departamento?.id &&
                    facultad.id === carrera?.facultad?.id
                  );
                })
                .map((carrera) => {
                  return (
                    <Link to={carrera.uri}>
                      <Title
                        color={colors.text.base}
                        bgHover={colors.gray.light}
                        isCareer
                      >
                        {carrera.nombre}
                      </Title>
                    </Link>
                  );
                })}
            </Container>
            <Container>
              {departamentos
                .filter((departamento) => {
                  return facultad.id === departamento.facultad.id;
                })
                .map((departamento) => {
                  return (
                    <div key={departamento.id}>
                      <Link to={departamento.uri}>
                        <Title
                          color={colors.primary.dark}
                          bgHover={colors.gray.light}
                        >
                          {departamento.nombre}
                        </Title>
                      </Link>
                      <ContainerSpecial>
                        {carreras
                          .filter((carrera) => {
                            return (
                              departamento.id === carrera?.departamento?.id
                            );
                          })
                          .map((carrera) => {
                            return (
                              <Link to={carrera.uri}>
                                <Title
                                  color={colors.text.base}
                                  bgHover={colors.gray.light}
                                  isCareer
                                >
                                  {carrera.nombre}
                                </Title>
                              </Link>
                            );
                          })}
                      </ContainerSpecial>
                    </div>
                  );
                })}
            </Container>
          </div>
        );
      })}
    </Section>
  ) : null;
};

export default GradeOffer;

const Section = styled.section`
  ${container}
  overflow: hidden;
  padding: 0;
  background-color: #fefefe;
  padding-bottom: 10rem;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 100%;
  ${mq.md} {
    grid-template-columns: 50% 50%;
  }
`;

const ContainerSpecial = styled.div`
  display: grid;
  grid-template-columns: 100%;
`;
const SectionTitle = styled.h2`
  text-align: center;
  font-weight: 900;
  margin-bottom: 4rem;
  margin-top: 0.5rem;
  font-weight: 400;
  color: ${colors.primary.base};
`;

const Title = styled.span`
  ${({ isFaculty, isCareer, color = "blue", bgHover = "lightgray" }) => css`
    color: ${color};
    padding: 0.5rem 1.5rem;
    text-transform: uppercase;
    text-decoration: none;
    font-size: 2rem;
    display: inline-block;
    ${mq.md} {
      display: inline-block;
    }
    &:hover {
      background-color: ${bgHover};
    }
    ${isFaculty
      ? css`
          font-weight: 900;
        `
      : isCareer
      ? css`
          text-transform: capitalize;
          font-weight: 400;
        `
      : css`
          font-weight: 300;
        `}
  `}
`;
