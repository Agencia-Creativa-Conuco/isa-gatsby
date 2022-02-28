import React from "react";
import styled from "@emotion/styled";
import Link from "../../components/link";
import Layout from "../../components/layout";
import colors from "../../components/styles/colors";
import FeaturedMedia from "../../components/featured-media";
import useFiles from "../../hooks/useFiles";
import { h4 } from "../../components/styles/tipography";
import { container, mq } from "../../components/layout/new";

const ProjectLines = (props) => {
  const images = useFiles();

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
      list: [
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
      ],
    },
  ];

  const metaData = {
    title: "Facilidades y recursos",
    description: "Facilidades y recursos de investigación.",
  };

  return (
    <Layout {...props} {...metaData}>
      <Section as="article" spaceNone>
        <Cover spaceNone>
          <Container>
            <Title color={colors.shadow.base}>{title}</Title>
          </Container>
        </Cover>
        <Facilidades>
          <List thin>
            <Container>
              <STitle>Facilidades</STitle>

              <ContainerFacilidades>
                {facilities.map((facility, index) => {
                  return (
                    <SLink
                      to={facility.url}
                      target={facility.target}
                      rel="noopener"
                      key={index}
                    >
                      <Line>
                        <span>{facility.title}</span>
                      </Line>
                    </SLink>
                  );
                })}
              </ContainerFacilidades>
            </Container>
          </List>
        </Facilidades>
        <Recursos>
          <List thin>
            <Container>
              <STitle>Recursos</STitle>

              {resources.map((item, index) => {
                return (
                  <div key={index}>
                    <SubTitle>{item.category}</SubTitle>
                    <ContainerRecursos>
                      {item.list.map((resource, index) => {
                        return (
                          <SLink
                            key={index}
                            to={resource.url}
                            target={resource.target}
                            rel="noopener"
                          >
                            <Line>
                              <ContainerSub>
                                <InlineImage>
                                  <FeaturedMedia
                                    media={resource.image}
                                    size="50%"
                                    alt="Facilidades"
                                    fit="initial"
                                  />
                                </InlineImage>
                                <span>{resource.title}</span>
                              </ContainerSub>
                            </Line>
                          </SLink>
                        );
                      })}
                    </ContainerRecursos>
                  </div>
                );
              })}
            </Container>
          </List>
        </Recursos>
      </Section>
    </Layout>
  );
};

export default ProjectLines;

const Section = styled.article`
  margin-bottom: 5.5rem;
  ${mq.md} {
    margin-bottom: 9.5rem;
  }
`;

const Cover = styled.section`
  overflow: hidden;
  background: ${colors.primary.base};

  padding-top: 5.6rem;
  margin-bottom: 5.6rem;
  ${mq.md} {
    padding-top: 9.6rem;
    margin-bottom: 9.5rem;
  }
`;

const Container = styled.div`
  ${container}
`;

const ContainerFacilidades = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-column-gap: 2.8rem;

  ${mq.md} {
    grid-template-columns: 50% 50%;
  }
`;

const ContainerRecursos = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-column-gap: 2.8rem;

  ${mq.md} {
    grid-template-columns: 50% 50%;
  }

  ${mq.lg} {
    grid-template-columns: 32% 32% 32%;
    margin: 0 auto;
  }
`;

const ContainerSub = styled.div`
  display: flex;
  column-gap: 20px;
`;

const List = styled(Section)``;

const Title = styled.h1`
  text-align: center;
  color: white;
  margin-bottom: 4rem;
  margin-top: 4rem;
  text-shadow: ${(props) => props.color};
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
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
`;
