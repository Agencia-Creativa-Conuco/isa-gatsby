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
import { useState } from "react";
import Link from "../../components/link";
import { Spring, animated } from "@react-spring/web";
import colors from "../../components/styles/colors";
import useCareers from "../../hooks/useCareers";
import useFaculties from "../../hooks/useFaculties";
import useGrades from "../../hooks/useGrades";
import useDepartaments from "../../hooks/useDepartaments";

const GradeOffer = ({ grade }) => {

  const careers = useCareers().filter((career) => {
    return grade.id === career.grade.id;
  });

  const faculties = useFaculties().filter((faculty) => {
    return faculty.careers.filter((career) =>
      careers.map((item) => item.id).includes(career.id)
    ).length;
  });

  const departaments = useDepartaments().filter((departament) => {
    return departament.careers.filter((career) =>
      careers.map((item) => item.id).includes(career.id)
    ).length;
  });

  return careers.length? (
    <StyledSection spaceNone color={colors.gray.base}>
      <Container>
        <Row>
          <Col>
            <SectionTitle>Oferta Académica</SectionTitle>
          </Col>
        </Row>
        <Row>
          {faculties.map((faculty) => {
            return (
              <Col key={faculty.id} size={12} css={css`margin-bottom: 4rem;`}>
                <Link to={faculty.uri}>
                  <Title
                    color={colors.primary.dark}
                    bgHover={colors.gray.light}
                    isFaculty
                  >
                    {faculty.title}
                  </Title>
                </Link>
                <Row>
                  {careers
                    .filter((career) => {
                      return (
                        !career.departament && faculty.id === career.faculty.id
                      );
                    })
                    .map((career) => {
                      return (
                        <Col key={career.id} size={12} sizeMD={6}>
                          <Link to={career.uri}>
                            <Title
                              color={colors.text.base}
                              bgHover={colors.gray.light}
                              isCareer
                            >
                              {career.title}
                            </Title>
                          </Link>
                        </Col>
                      );
                    })}
                </Row>
                <Row>
                  {departaments
                    .filter((departament) => {
                      return faculty.id === departament.faculty.id;
                    })
                    .map((departament) => {
                      return (
                        <Col key={departament.id} size={12} sizeMD={6}>
                          <Link to={departament.uri}>
                            <Title
                              color={colors.primary.base}
                              bgHover={colors.gray.light}
                            >
                              {departament.title}
                            </Title>
                          </Link>
                          <Row>
                            {careers
                              .filter((career) => {
                                return (
                                  departament.id === career?.departament?.id
                                );
                              })
                              .map((career) => {
                                return (
                                  <Col key={career.id} size={12}>
                                    <Link to={career.uri}>
                                      <Title
                                        color={colors.text.base}
                                        bgHover={colors.gray.light}
                                        isCareer
                                      >
                                        {career.title}
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
    margin-top: 4rem;
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
          font-weight: 300;
        `
      : css`
          font-weight: 400;
        `}
  `}
`;
