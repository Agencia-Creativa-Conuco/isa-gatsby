import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import Carousel from "react-slick";
import FeaturedMedia from "../../../components/featured-media";
import colors from "../../../components/styles/colors";
import Link from "../../../components/link";
import { h4 } from "../../../components/styles/tipography";
import { container, mq } from "../../../components/layout/new/";

const DIPGeneral = ({
  investigaciones,
  departamentos = [],
  facultades,
  lineasInvestigacion,
}) => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [slider1, setSlider1] = useState([]);
  const [slider2, setSlider2] = useState([]);

  useEffect(() => {
    setNav1(slider1);
    setNav2(slider2);
  }, [slider1, slider2]);

  // const departamentos = investigaciones.filter((item)=> !(item.parent > 0));

  return (
    <Section fluid id="section_3">
      <Carousel
        arrows={false}
        dots
        appendDots={(dots) => (
          <Dots>
            {dots.map((item, index) => {
              return <Dot key={index}>{item}</Dot>;
            })}
          </Dots>
        )}
        asNavFor={nav2}
        ref={(slider) => setSlider1(slider)}
      >
        {departamentos.map((item, index) => {
          const { imagenPortada } = item;

          return (
            <FeaturedMedia
              key={index}
              media={imagenPortada}
              size="56.25%"
              bgColor
            />
          );
        })}
      </Carousel>
      <Carousel
        arrows={false}
        fade
        asNavFor={nav1}
        ref={(slider) => setSlider2(slider)}
      >
        {departamentos.map((departamento, index) => {
          const [facultad] = facultades.filter((facultad) => {
            return departamento.facultad.id === facultad.id;
          });

          const lines = lineasInvestigacion.filter((line) =>
            departamento.lineasInvestigacion
              .map((item) => item.id)
              .includes(line.id)
          );

          return (
            <Departament key={index}>
              <ContentContainer
                css={css`
                  width: 200%;
                `}
              >
                {facultad ? <FacultyName>{facultad.nombre}</FacultyName> : null}
                <DepartamentName>{departamento.nombre}</DepartamentName>
                <DepartamentProjects>
                  {lines.map((item, index) => {
                    const { nombre } = item;
                    return (
                      <Project
                        key={index}
                        color={colors.gray.base}
                        colorHover={colors.secondary.base}
                      >
                        <StyledLink to={item.uri}>
                          <ProjectName>{nombre}</ProjectName>
                        </StyledLink>
                      </Project>
                    );
                  })}
                </DepartamentProjects>
              </ContentContainer>
            </Departament>
          );
        })}
      </Carousel>
    </Section>
  );
};

export default DIPGeneral;

const Section = styled.section`
  ${container}
  padding: 0;

  display: grid;
  grid-template-columns: 100%;

  ${mq.lg} {
    grid-template-columns: 50% 50%;
  }
`;

const ContentContainer = styled.div`
  ${container}

  margin: 5rem auto;

  ${mq.lg} {
    margin: 7rem 0 5rem 2rem;

    width: 80%;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const Departament = styled.div``;

const FacultyName = styled.h3`
  margin-bottom: 0rem;
  font-weight: 300;
  text-transform: uppercase;
`;

const DepartamentName = styled.h2`
  margin-top: 0;
  margin-bottom: 4rem;
  font-weight: 900;
  text-transform: uppercase;
`;

const DepartamentProjects = styled.ul`
  /* padding: 0;
    margin: 0; */
`;

const Project = styled.li`
  ${({ color = "gray", colorHover = "darkblue" }) => css`
    list-style: none;
    padding: 0;
    margin: 0;
    color: ${color};
    transition: all 0.25s ease-in-out;
    position: relative;
    z-index: 1;
    &:hover {
      color: ${colorHover};
    }
  `}
`;

const ProjectName = styled.h3`
  ${h4}
  margin: 0rem;
  font-weight: initial;
  text-transform: uppercase;
  color: inherit;
  padding: 1rem 0;
`;

const Dots = styled.ul`
  margin: 0;
  padding: 0;
  position: absolute;
  bottom: 2rem;
`;

const Dot = styled.div`
  margin: 0;
  padding: 0;
  list-style: none;
  display: inline-block;
  button {
    margin: 0 !important;
    padding: 0 !important;
    width: 1.5rem !important;
    height: 1.5rem !important;
    border-radius: 50% !important;
    background-color: white !important;
    opacity: 0.5;
    &:before {
      content: none !important;
    }
    &:after {
      content: none;
    }
  }
  .slick-active {
    button {
      opacity: 1;
    }
  }
`;
