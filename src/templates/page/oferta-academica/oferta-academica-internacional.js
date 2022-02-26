import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import FeaturedMedia from "../../../components/featured-media";
import colors from "../../../components/styles/colors";
import Cta from "../../../components/cta";
import { useStaticQuery, graphql } from "gatsby";
import { h5 } from "../../../components/styles/tipography";
import { container, mq } from "../../../components/layout/new/";

const OfferInternational = () => {
  //Obtiene las imágenes localmente desde la ruta "images/home"
  const { allFile } = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { in: ["oferta-academica"] } }) {
        nodes {
          id
          name
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  `);

  // Convierte arreglo de imágenes en objeto cuya llave es el nómbre del archivo
  // Esto para facilitar la búsqueda de la imagenes en los componentes hijos.
  const images = allFile.nodes.reduce((obj, item) => {
    return {
      ...obj,
      [item.name]: item,
    };
  }, {});

  const title = "Programas Internacionales",
    copy =
      "<p>La Universidad ISA, ha coordinado por más de veinte (20) años, programas académicos de corta duración como parte de las vinculaciones internacionales de la institución. Actualmente, desarrolla el programa internacional “Discovering the Food, Human and Environmental Systems of the Caribbean Islands” realizado durante las dos (2) primeras semanas del mes de enero, conjuntamente con la Universidad de Illinois at Urbana Champaign. Todos los años aproximadamente veinte (20) estudiantes estadounidenses y dominicanos (1 estudiante por carrera) participan de este programa.</p>",
    content = `Los programas internacionales se desarrollan con la participación de diferentes conferencistas de distintas instituciones, quienes comparten sus conocimientos y experiencias en los temas de desarrollo económico del sector agropecuario, así como, aspectos sociales y culturales importantes del país. Como un mecanismo de fortalecer los conocimientos adquiridos, se realizan visitas y excursiones a instituciones y lugares de interés para los participantes, entre éstas: el Centro León y el Instituto del Tabaco (INTABACO) en la provincia Santiago; el Batey Libertad y BANELINO en la provincia Valverde; el Grupo MACAPI y GOYA Dominicana en San Cristóbal; la Embajada de los Estados Unidos de América, el Cuerpo de Paz, en Santo Domingo, entre otros.`,
    columns = [
      {
        title: "Cede del programa",
        content: `El programa internacional se desarrolla en el campus de la Universidad ISA y en las diferentes instituciones vinculadas al programa.`,
      },
      {
        title: "Perfil del estudiante",
        content: `Estudiantes activos, extranjeros y de la Universidad ISA.`,
      },
      {
        title: "Principales enfoques y actividades",
        content: `
                    <ul>
                        <li>Agrícola</li>
                        <li>Pecuario</li>
                        <li>Ambiental</li>
                        <li>Cultural</li>
                    </ul>
                `,
      },
      {
        title: "Programas anteriores",
        content: `
                    <ul>
                        <li>Ohio State University</li>
                        <li>Purdue University</li>
                    </ul>
                `,
      },
    ],
    cta = {
      url: "/admisiones",
      title: "Estudia con nosotros",
    };

  return (
    <Section id="section_4" notFluidMD>
      <TopRow>
        <Block>
          <Title>{title}</Title>
          <div
            dangerouslySetInnerHTML={{ __html: copy }}
            css={css`
              margin-bottom: 2.5rem;
            `}
          />
          {cta ? (
            <StyledLink to={cta.url} target={cta.target}>
              {cta.title}
            </StyledLink>
          ) : null}
        </Block>
        <MediaWrapper>
          <Media
            media={images["programas-internacionales"]}
            size="100%"
            sizeMD="140%"
            sizeLG="115%"
            alt={title}
          />
        </MediaWrapper>
      </TopRow>
      <BottomRow>
        <Block sizeXL="90rem">
          <Copy
            color={colors.white}
            dangerouslySetInnerHTML={{ __html: content }}
          />
          <Container>
            {columns.map((item, index) => {
              return (
                <Columns key={index}>
                  <ContentTitle color={colors.white}>
                    {" "}
                    {item.title}{" "}
                  </ContentTitle>
                  <Content
                    color={colors.white}
                    dangerouslySetInnerHTML={{ __html: item.content }}
                  />
                </Columns>
              );
            })}
          </Container>
        </Block>
      </BottomRow>
    </Section>
  );
};

export default OfferInternational;

const Section = styled.section`
  ${container}
  padding: 0;
  display: grid;
  margin: 9.6rem auto;
  grid-template-columns: 100%;
`;
const TopRow = styled.div`
  background: ${colors.blue.light};
  border-radius: 40px 40px 0 0;
  display: grid;

  grid-template-columns: 100%;

  div {
    align-self: end;
  }
  ${mq.md} {
    div:first-of-type {
      order: 2;
    }

    grid-template-columns: 40% 60%;
  }
`;

const BottomRow = styled.div`
  background: ${colors.blue.dark};
`;

const Block = styled.div`
  margin: 2rem 1.5rem;
  ${mq.md} {
    margin: 2rem 4rem;
  }
  ${mq.lg} {
    margin: 5rem 3rem;
  }
  ${mq.xl} {
    margin: 7rem 4rem;
  }
`;
const Container = styled.div`
  ${container}
  padding-left:0 ;
  display: grid;
  grid-template-columns: 100%;
  ${mq.md} {
    grid-template-columns: 52% 48%;
  }
`;


const Columns = styled.div`

padding: 0 1.5rem 0 0;

`;
const StyledLink = styled(Cta)`
  margin-top: 2rem;
  margin-bottom: 3rem;
`;

const Title = styled.h2`
  margin-bottom: 2rem;
  ${mq.md} {
    margin-bottom: 4rem;
  }
`;

const MediaWrapper = styled.div`
  ${mq.md} {
    transform-origin: 50% 100%;
    transform: scale(1.2);
  }
  ${mq.lg} {
    transform: scale(1.35);
  }
  ${mq.xl} {
    transform: scale(1.2);
  }
`;

const Media = styled(FeaturedMedia)``;

const Copy = styled.p`
  color: ${(props) => props.color};
`;

const ContentTitle = styled.h2`
  ${h5}
  color: ${(props) => props.color};
`;

const Content = styled.div`
  color: ${(props) => props.color};
`;
