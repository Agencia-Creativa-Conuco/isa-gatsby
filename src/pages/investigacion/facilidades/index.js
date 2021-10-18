import React from "react";
import styled from "@emotion/styled";
import { Section, Container, Row, Col } from "../../../components/layout/index";
import Link from "../../../components/link";
import Layout from "../../../components/layout";
import colors from "../../../components/styles/colors";
import FeaturedMedia from "../../../components/featured-media";
import useFiles from "../../../hooks/useFiles";
import {h4} from "../../../components/styles/tipography"


const ProjectLines = (props) => {

    const images = useFiles();

    console.log(images)

  const title = "Facilidades y Recursos de Investigación";
  const facilities = [
    {
      title: "Laboratorio de Inocuidad De Alimentos y Análisis Industrial",
      url: "/liaai",
      target: "_blank",
    },
    {
      title: "Biblioteca Marco A. Cabral de la Universidad ISA",
      url: "http://bibliotecaunisa.com/",
      target: "_blank",
    },
  ];
  const resources = [
      {
          category: "Paquetes Estadísticos",
          list : [
              {
                title: "FDIVERSITY",
                url: "http://www.nucleodiversus.org/index.php?mod=page&id=62",
                target: "_blank",
                image: images["investigacion/facilidades"].fdiversity,
              },
              {
                title: "INFOSTAT",
                url: "https://www.infostat.com.ar/",
                target: "_blank",
                image: images["investigacion/facilidades"].infostat,
              },
              {
                title: "MINITAB",
                url: "https://www.minitab.com/es-mx/",
                target: "_blank",
                image: images["investigacion/facilidades"].minitab,
              },
              {
                title: "PAST",
                url: "https://www.portalprogramas.com/past/",
                target: "_blank",
                image: images["investigacion/facilidades"].past,
              },
              {
                title: "R",
                url: "https://www.r-project.org/",
                target: "_blank",
                image: images["investigacion/facilidades"].r,
              },
              {
                title: "R STUDIO",
                url: "https://rstudio.com/",
                target: "_blank",
                image: images["investigacion/facilidades"].rstudio,
              },
              {
                title: "SAS UNIVERSITY EDITION",
                url: "https://www.sas.com/es_mx/home.html",
                target: "_blank",
                image: images["investigacion/facilidades"].sas,
              },
              {
                title: "TURNITIN",
                url: "https://www.turnitin.com/",
                target: "_blank",
                image: images["investigacion/facilidades"].turnitin,
              },
          ]
      }
  ];

  return (
    <Layout {...props}>
      <Section as="article" spaceNone>
        <Cover bgColor={colors.primary.base} spaceNone>
          <Section as="div" spaceBottomNone>
            <Container>
              <Row>
                <Col>
                  <Title>{title}</Title>
                </Col>
              </Row>
            </Container>
          </Section>
        </Cover>
        <Facilidades>
          <List thin>
            <Container>
              <Row>
                <Col>
                  <STitle>Facilidades</STitle>
                </Col>
              </Row>
              <Row>
                {facilities.map((facility, index) => {
                  return (
                    <Col key={index} size={12} sizeMD={6}>
                      <SLink to={facility.url} target={facility.target} rel="noopener">
                        <Line>
                          <span>{facility.title}</span>
                        </Line>
                      </SLink>
                    </Col>
                  );
                })}
              </Row>
            </Container>
          </List>
        </Facilidades>
        <Recursos>
          <List thin>
            <Container>
              <Row>
                <Col>
                  <STitle>Recursos</STitle>
                </Col>
              </Row>
              <Row>
                {resources.map(( item, index) => {
                  return (
                    <Col key={index} size={12}>
                        <SubTitle>{item.category}</SubTitle>
                        <Row>
                        {
                            item.list.map( (resource, index) => {
                                
                                return (
                                    <Col key={index} size={12} sizeMD={6} sizeLG={4}>
                                        <SLink to={resource.url} target={resource.target} rel="noopener">
                                            <Line>
                                            <Row>
                                                <Col size="auto">
                                                    <InlineImage>
                                                        <FeaturedMedia media={resource.image} size="50%" alt="Facilidades" fit="initial"/>
                                                    </InlineImage>
                                                </Col>
                                                <Col noLGutters>
                                                    <span>{resource.title}</span>
                                                </Col>
                                            </Row>
                                            </Line>
                                        </SLink>
                                    </Col>
                                )
                            })   
                        }
                        </Row>
                    </Col>
                  );
                })}
              </Row>
            </Container>
          </List>
        </Recursos>
      </Section>
    </Layout>
  );
};

export default ProjectLines;

const Cover = styled(Section)`
  overflow: hidden;
`;

const List = styled(Section)``;

const Title = styled.h1`
  text-align: center;
  color: white;
  margin-bottom: 4rem;
  margin-top: 4rem;
  text-shadow: 0px 0px 6px #484848
`;

const Facilidades = styled.div``;

const Recursos = styled.div``;

const Line = styled.h2`
  ${h4}
  font-weight: normal;
  padding: 1.5rem;
  background-color: #fafafa;
  transition: all 0.25s ease-in-out;
  margin: 0.5rem 0;
  &:hover {
    background-color: #f5f5f5;
  }
`;

const SLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const STitle = styled.h2``;

const SubTitle = styled.h3`
    font-weight: 300;
    text-transform: uppercase;
`;

const InlineImage = styled.span`
    width: 8rem;
    height: 8rem;
    background-color: #F5F5F5;
    display: flex;
    align-items: center;
`;