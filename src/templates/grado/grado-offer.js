import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import {
  Container,
  Section,
  Row,
  Col,
  mq,
} from "../../components/layout/index";
// import { useState } from "react";
import Link from "../../components/link";
// import { Spring, animated } from "@react-spring/web";
import colors from "../../components/styles/colors";
import useCarreras from "../../hooks/useCarreras";
import useFacultades from "../../hooks/useFacultades";
// import useGrados from "../../hooks/useGrados";
import useDepartamentos from "../../hooks/useDepartamentos";

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

  return carreras.length? (
    <StyledSection spaceNone color={colors.gray.base}>
      <Container>
        <Row>
          <Col>
            <SectionTitle>Oferta Académica</SectionTitle>
          </Col>
        </Row>
        <Row>
          {facultades.map((facultad) => {
            return (
              <Col key={facultad.id} size={12} css={css`margin-bottom: 4rem;`}>
                <Link to={facultad.uri}>
                  <Title
                    color={colors.primary.dark}
                    bgHover={colors.gray.light}
                    isFaculty
                  >
                    {facultad.nombre}
                  </Title>
                </Link>
                <Row>
                  {carreras
                    .filter((carrera) => {
                      return (
                        !carrera?.departamento?.id && facultad.id === carrera?.facultad?.id
                      );
                    })
                    .map((carrera) => {
                      return (
                        <Col key={carrera.id} size={12} sizeMD={6}>
                          <Link to={carrera.uri}>
                            <Title
                              color={colors.text.base}
                              bgHover={colors.gray.light}
                              isCareer
                            >
                              {carrera.nombre}
                            </Title>
                          </Link>
                        </Col>
                      );
                    })}
                </Row>
                <Row>
                  {departamentos
                    .filter((departamento) => {
                      return facultad.id === departamento.facultad.id;
                    })
                    .map((departamento) => {
                      return (
                        <Col key={departamento.id} size={12} sizeMD={6}>
                          <Link to={departamento.uri}>
                            <Title
                              color={colors.primary.dark}
                              bgHover={colors.gray.light}
                            >
                              {departamento.nombre}
                            </Title>
                          </Link>
                          <Row>
                            {carreras
                              .filter((carrera) => {
                                return (
                                  departamento.id === carrera?.departamento?.id
                                );
                              })
                              .map((carrera) => {
                                return (
                                  <Col key={carrera.id} size={12}>
                                    <Link to={carrera.uri}>
                                      <Title
                                        color={colors.text.base}
                                        bgHover={colors.gray.light}
                                        isCareer
                                      >
                                        {carrera.nombre}
                                      </Title>
                                    </Link>
                                  </Col>
                                );
                              })}
                          </Row>
                        </Col>
                      );
                    })}
                </Row>
              </Col>
            );
          })}
        </Row>
      </Container>
    </StyledSection>
  ):null;
};

export default GradeOffer;

const StyledSection = styled(Section)`
  overflow: hidden;
  background-color: #FEFEFE;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.15) inset;
  padding-bottom: 10rem;
  `;

const SectionTitle = styled.h2`
    text-align: center;
    font-weight: 900;
    margin-bottom: 4rem;
    margin-top: .5rem;
    font-weight: 400;
    color: ${colors.primary.base}
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
